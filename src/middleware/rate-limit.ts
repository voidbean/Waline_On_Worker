import { createMiddleware } from "hono/factory";
import type { Env, RateLimitBinding, Variables } from "../env.js";

export type RateLimitBindingName =
	| "LOGIN_RATE_LIMIT"
	| "REGISTRATION_RATE_LIMIT"
	| "COMMENT_RATE_LIMIT";

export function rateLimit(bindingName: RateLimitBindingName) {
	return createMiddleware<{
		Bindings: Env;
		Variables: Variables;
	}>(async (c, next) => {
		const limiter = c.env[bindingName] as RateLimitBinding | undefined;
		if (!limiter) {
			return c.json({ errno: 1, errmsg: "Rate limit is unavailable" }, 503);
		}

		// Cloudflare supplies CF-Connecting-IP in production. Use a shared fallback
		// bucket if a request reaches this middleware without that header.
		const key = c.req.header("CF-Connecting-IP") || "unknown";
		try {
			const { success } = await limiter.limit({ key });
			if (!success) {
				c.header("Retry-After", "60");
				return c.json({ errno: 1, errmsg: "Too many requests" }, 429);
			}
		} catch {
			// Fail closed rather than silently dropping abuse protection.
			return c.json({ errno: 1, errmsg: "Rate limit is unavailable" }, 503);
		}

		await next();
	});
}
