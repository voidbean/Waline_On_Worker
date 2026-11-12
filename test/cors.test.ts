import { env } from "cloudflare:test";
import { describe, expect, it } from "vitest";
import type { Env } from "@/env.js";
import app from "@/index.js";

const db = (env as Env).DB;

async function requestFrom(origin: string, secureDomains?: string) {
	return app.fetch(
		new Request("https://worker.example/", { headers: { Origin: origin } }),
		{ DB: db, SECURE_DOMAINS: secureDomains },
	);
}

describe("CORS origin allowlist", () => {
	it("does not reflect arbitrary origins when no allowlist is configured", async () => {
		const origin = "https://attacker.example";
		const response = await requestFrom(origin);

		expect(response.headers.get("access-control-allow-origin")).not.toBe(origin);
	});

	it("allows the configured apex host and its subdomains", async () => {
		for (const origin of [
			"https://forum.example",
			"https://preview.forum.example",
		]) {
			const response = await requestFrom(origin, "forum.example,localhost:3000");
			expect(response.headers.get("access-control-allow-origin")).toBe(origin);
		}
	});

	it("does not allow a hostname that merely shares the configured suffix", async () => {
		const origin = "https://forum.example.attacker.test";
		const response = await requestFrom(origin, "forum.example");

		expect(response.headers.get("access-control-allow-origin")).not.toBe(origin);
	});
});
