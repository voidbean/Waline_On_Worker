import { describe, expect, it } from "vitest";
import { onRequest as api } from "../frontend/functions/api/[[path]].js";
import { onRequest as ui } from "../frontend/functions/ui/[[path]].js";

describe("Pages Waline binding", () => {
	it("passes a comment write intact and preserves the Worker's response", async () => {
		const request = new Request(
			"https://board.example/api/comment?lang=zh-CN",
			{
				method: "POST",
				headers: {
					Authorization: "Bearer test",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ url: "/", comment: "hello" }),
			},
		);
		const response = new Response("rate limited", {
			status: 429,
			headers: { "Retry-After": "60" },
		});
		const WALINE = {
			fetch: async (received) => {
				expect(received).toBe(request);
				expect(await received.json()).toEqual({ url: "/", comment: "hello" });
				return response;
			},
		};
		expect(await api({ request, env: { WALINE } })).toBe(response);
	});

	it("reports an unavailable binding instead of sending visitors to workers.dev", async () => {
		const response = await api({
			request: new Request("https://board.example/api/comment"),
			env: {},
		});
		expect(response.status).toBe(503);
		expect((await response.json()).errno).not.toBe(0);
	});
});

const origin = "https://board.example";
const callback = "/ui/qq-return/69395080-bd31-44c1-a702-713e2dfaac63";
const invoke = (path, method, service) =>
	api({
		request: new Request(origin + path, { method }),
		env: { WALINE: { fetch: service } },
	});

describe("Pages board accounts", () => {
	it.each([
		["/api/token", "POST"],
		["/api/user", "POST"],
		["/api/oauth?type=github", "GET"],
		["/api/oauth?type=qq&redirect=/ui", "GET"],
	])("rejects %s %s before the binding", async (path, method) => {
		expect(
			(
				await invoke(path, method, () => {
					throw Error("unexpected upstream request");
				})
			).status,
		).toBe(403);
	});

	it("keeps QQ code exchange on the Pages origin and does not forward account-link state", async () => {
		const res = await invoke(
			"/api/oauth?type=qq&redirect=" + callback + "&code=123&state=unused",
			"GET",
			(r) => {
				const url = new URL(r.url);
				expect(url.origin).toBe(origin);
				expect([...url.searchParams.entries()]).toEqual([
					["type", "qq"],
					["redirect", callback],
					["code", "123"],
				]);
				return Response.redirect(origin + callback + "?token=test");
			},
		);
		expect(res.headers.get("location")).toBe(origin + callback + "?token=test");
	});

	it("sends old profile/login links to the board, never copying query tokens or redirects", () => {
		for (const path of [
			"/ui/profile?token=test",
			"/ui/login?redirect=https://other.example",
		]) {
			expect(
				ui({ request: new Request(origin + path) }).headers.get("Location"),
			).toBe(origin + "/account");
		}
		const res = ui({ request: new Request(origin + callback + "?token=test") });
		const url = new URL(res.headers.get("Location"));
		expect(url.origin + url.pathname).toBe(origin + "/account");
		expect(url.search).toBe("");
		expect(new URLSearchParams(url.hash.slice(1)).get("token")).toBe("test");
		expect(res.headers.get("Referrer-Policy")).toBe("no-referrer");
	});
});

describe("Waline v3 instant insertion", () => {
	it.each([null, 7])("uses the correct list for root ID %s", async (rid) => {
		const res = await invoke("/api/comment?lang=zh-CN", "POST", () =>
			Response.json(
				{ errno: 0, data: { objectId: 10, rid, status: "waiting" } },
				{ status: 201 },
			),
		);
		const { data } = await res.json();
		expect(res.status).toBe(201);
		expect(data.status).toBe("waiting");
		if (rid === null) {
			expect("rid" in data).toBe(false);
			expect(data.children).toEqual([]);
		} else {
			expect(data.rid).toBe(rid);
		}
	});
});
