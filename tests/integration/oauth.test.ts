import { env } from "cloudflare:test";
import { resetDB } from "@tests/helpers/setup.js";
import { createUser } from "@tests/helpers/factories.js";
import { api, json } from "@tests/helpers/request.js";
import { expect, it, vi } from "vitest";

it("keeps QQ and password sessions separate even when the provider returns the same email", async () => {
	const db = (env as unknown as { DB: D1Database }).DB;
	await resetDB(db);
	const email = "member@example.com";
	const password = "test-password";
	await createUser(db, { email: "admin@example.com", type: "administrator" });
	const register = await api.post("/api/user", {
		env: { ALLOW_REGISTRATION: "true" },
		body: { email, password },
	});
	expect(register.status).toBe(201);
	const member = (await json(register)).data;
	const provider = vi
		.spyOn(globalThis, "fetch")
		.mockImplementation(async () => Response.json({ id: "test-id", email }));
	try {
		let qqId;
		for (let i = 0; i < 2; i++) {
			const result = await api.get("/api/oauth", {
				params: { type: "qq", code: "test" },
			});
			const token = new URL(
				result.headers.get("Location")!,
				"https://board.example",
			).searchParams.get("token");
			expect(token).toBeTruthy();
			const profile = (
				await json(await api.get("/api/token", { token: token! }))
			).data;
			expect(profile.qq).toBe("test-id");
			expect(profile.objectId).not.toBe(member.objectId);
			if (i) expect(profile.objectId).toBe(qqId);
			qqId = profile.objectId;
		}
		const login = (
			await json(await api.post("/api/token", { body: { email, password } }))
		).data;
		const memberProfile = (
			await json(await api.get("/api/token", { token: login.token }))
		).data;
		expect(memberProfile.objectId).toBe(member.objectId);
		expect(memberProfile.qq).toBeFalsy();
	} finally {
		provider.mockRestore();
	}
});
