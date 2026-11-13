import { env } from "cloudflare:test";
import { describe, expect, it } from "vitest";
import { onRequest as post } from "../frontend/functions/api/media.js";
import { onRequest as read } from "../frontend/functions/media/[name].js";
import { takeSlot } from "../frontend/lib/images.js";
import { renderMarkdown } from "../src/utils/markdown";

const png = Uint8Array.from(
	atob(
		"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jWZkAAAAASUVORK5CYII=",
	),
	(c) => c.charCodeAt(0),
);
const origin = "https://board.example";
const waline = {
	async fetch(url, init) {
		expect(url).toBe(origin + "/api/token");
		return init.headers.Authorization === "Bearer local"
			? Response.json({ errno: 0, data: { objectId: 7 } })
			: new Response(null, { status: 401 });
	},
};
const send = (
	body = png,
	headers = {},
	bindings = { MEDIA: env.MEDIA, WALINE: waline },
) =>
	post({
		request: new Request(origin + "/api/media?token=ignored", {
			method: "POST",
			headers: {
				"Content-Type": "image/png",
				Authorization: "Bearer local",
				...headers,
			},
			body,
		}),
		env: bindings,
	});
const get = (name, method = "GET") =>
	read({
		request: new Request(origin + "/media/" + name, { method }),
		params: { name },
		env,
	});

describe("private board media bucket", () => {
	it("stores an authenticated upload and serves only its public image key without authentication", async () => {
		const res = await send();
		expect(res.status).toBe(201);
		const {
			data: { path },
		} = await res.json();
		expect(renderMarkdown("![test](" + path + ")")).toContain(
			'<img src="' + path + '"',
		);
		const name = path.split("/").pop();
		const image = await get(name);
		expect(image.headers.get("Content-Type")).toBe("image/png");
		expect(image.headers.get("X-Content-Type-Options")).toBe("nosniff");
		expect(new Uint8Array(await image.arrayBuffer())).toEqual(png);
		const head = await get(name, "HEAD");
		expect(head.headers.get("Content-Length")).toBe(String(png.length));
		expect(await head.text()).toBe("");
		expect((await get("quota/7")).status).toBe(404);
		expect((await get(name, "DELETE")).status).toBe(405);
		expect((await get(crypto.randomUUID() + ".png")).status).toBe(404);
	});
	it("doesn't store anonymous, expired, invalid or oversized uploads", async () => {
		const snapshot = async () =>
			(await env.MEDIA.list()).objects.map(({ key, etag }) => [key, etag]);
		const before = await snapshot();
		expect((await send(png, { Authorization: "" })).status).toBe(401);
		expect((await send(png, { Authorization: "Bearer expired" })).status).toBe(
			401,
		);
		expect((await send(png, {}, { WALINE: waline })).status).toBe(503);
		expect((await send(png, { "Content-Type": "image/webp" })).status).toBe(
			415,
		);
		expect((await send(new TextEncoder().encode("not an image"))).status).toBe(
			415,
		);
		expect((await send(new Uint8Array(2 * 1024 * 1024 + 1))).status).toBe(413);
		expect(await snapshot()).toEqual(before);
	});
	it("shares a minute/day budget per verified user and resets at the window boundary", async () => {
		for (let m = 0; m < 6; m++) {
			for (let i = 0; i < 5; i++)
				expect(await takeSlot(env.MEDIA, 12, 60000 * m)).toBe(true);
			expect(await takeSlot(env.MEDIA, 12, 60000 * m)).toBe(false);
		}
		expect(await takeSlot(env.MEDIA, 12, 60000 * 6)).toBe(false);
		expect(await takeSlot(env.MEDIA, 13, 60000 * 6)).toBe(true);
		expect(await takeSlot(env.MEDIA, 12, 86400000)).toBe(true);
	});
	it("doesn't let concurrent writes exceed the allowance", async () => {
		const granted = await Promise.all(
			Array.from({ length: 9 }, () => takeSlot(env.MEDIA, 101, 0)),
		);
		expect(granted.filter(Boolean).length).toBeGreaterThan(0);
		expect(granted.filter(Boolean).length).toBeLessThanOrEqual(5);
	});
});
