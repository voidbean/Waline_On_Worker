import type { Env } from "@/env.js";

const allow = { limit: async () => ({ success: true }) };

export const testRateLimits: Pick<
	Env,
	"LOGIN_RATE_LIMIT" | "REGISTRATION_RATE_LIMIT" | "COMMENT_RATE_LIMIT"
> = {
	LOGIN_RATE_LIMIT: allow,
	REGISTRATION_RATE_LIMIT: allow,
	COMMENT_RATE_LIMIT: allow,
};
