import { describe, expect, it } from "vitest";
import { onRequest as api } from "../frontend/functions/api/[[path]].js";
import { onRequest as ui } from "../frontend/functions/ui/[[path]].js";

describe("Pages Waline binding", () => {
	it("passes a comment write intact and preserves the Worker's response", async () => {
		const request = new Request("https://board.example/api/comment?lang=zh-CN", {
			method: "POST",
			headers: { Authorization: "Bearer test", "Content-Type": "application/json" },
			body: JSON.stringify({ url: "/", comment: "hello" }),
		});
		const response = new Response("rate limited", {
			status: 429, headers: { "Retry-After": "60" },
		});
		const WALINE = { fetch: async (received) => {
			expect(received).toBe(request);
			expect(await received.json()).toEqual({ url: "/", comment: "hello" });
			return response;
		} };
		expect(await api({ request, env: { WALINE } })).toBe(response);
	});

	it("reports an unavailable binding instead of sending visitors to workers.dev", async () => {
		for (const route of [api, ui]) {
			const response = await route({ request: new Request("https://board.example/"), env: {} });
			expect(response.status).toBe(503);
			expect((await response.json()).errno).not.toBe(0);
		}
	});
});
