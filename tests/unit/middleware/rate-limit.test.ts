import { Hono } from "hono";
import { describe, expect, it, vi } from "vitest";
import type { Env } from "@/env.js";
import { rateLimit } from "@/middleware/rate-limit.js";

function testApp(limiter?: Env["LOGIN_RATE_LIMIT"]) {
	const app = new Hono();
	app.post("/login", rateLimit("LOGIN_RATE_LIMIT"), (c) => c.text("ok"));
	return { app, env: { LOGIN_RATE_LIMIT: limiter } as unknown as Env };
}

describe("rateLimit middleware", () => {
	it("uses the client IP and returns 429 when the binding rejects a request", async () => {
		const limit = vi.fn().mockResolvedValue({ success: false });
		const { app, env } = testApp({ limit });
		const response = await app.request(
			"/login",
			{ method: "POST", headers: { "CF-Connecting-IP": "203.0.113.8" } },
			env,
		);

		expect(response.status).toBe(429);
		expect(response.headers.get("Retry-After")).toBe("60");
		expect(limit).toHaveBeenCalledWith({ key: "203.0.113.8" });
	});

	it("fails closed when a binding is missing or errors", async () => {
		const missing = testApp();
		expect(
			(await missing.app.request("/login", { method: "POST" }, missing.env))
				.status,
		).toBe(503);

		const failed = testApp({
			limit: vi.fn().mockRejectedValue(new Error("offline")),
		});
		expect(
			(await failed.app.request("/login", { method: "POST" }, failed.env))
				.status,
		).toBe(503);
	});

	it("continues when the binding allows the request", async () => {
		const { app, env } = testApp({
			limit: vi.fn().mockResolvedValue({ success: true }),
		});
		const response = await app.request("/login", { method: "POST" }, env);
		expect(response.status).toBe(200);
		expect(await response.text()).toBe("ok");
	});
});
