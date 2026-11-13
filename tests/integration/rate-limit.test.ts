import {
	createExecutionContext,
	waitOnExecutionContext,
} from "cloudflare:test";
import { env } from "cloudflare:workers";
import { testRateLimits } from "@tests/helpers/rate-limits.js";
import { describe, expect, it, vi } from "vitest";
import type { Env, RateLimitBinding } from "@/env.js";
import app from "@/index.js";

const routes = [
	{
		path: "/api/token",
		binding: "LOGIN_RATE_LIMIT",
		body: { email: "nobody@example.com", password: "bad" },
	},
	{
		path: "/api/user",
		binding: "REGISTRATION_RATE_LIMIT",
		body: { email: "new@example.com", password: "password" },
	},
	{
		path: "/api/comment",
		binding: "COMMENT_RATE_LIMIT",
		body: { comment: "hello", url: "/page" },
	},
] as const;

describe("write endpoint rate limits", () => {
	it.each(routes)("applies the $binding binding to $path", async (route) => {
		const denied: RateLimitBinding = {
			limit: vi.fn().mockResolvedValue({ success: false }),
		};
		const context = createExecutionContext();
		const response = await app.fetch(
			new Request(`https://worker.example${route.path}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"CF-Connecting-IP": "203.0.113.17",
				},
				body: JSON.stringify(route.body),
			}),
			{
				...(env as Env),
				...testRateLimits,
				[route.binding]: denied,
			} as Env,
			context,
		);
		await waitOnExecutionContext(context);

		expect(response.status).toBe(429);
		expect(denied.limit).toHaveBeenCalledWith({ key: "203.0.113.17" });
	});
});
