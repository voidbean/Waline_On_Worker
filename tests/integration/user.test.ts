import { env } from "cloudflare:test";
import { loginAs } from "@tests/helpers/auth.js";
import { createUser } from "@tests/helpers/factories.js";
import { api, json } from "@tests/helpers/request.js";
import { resetDB } from "@tests/helpers/setup.js";
import { beforeEach, describe, expect, it } from "vitest";

type TestEnv = { DB: D1Database };

let db: D1Database;

beforeEach(async () => {
	db = (env as unknown as TestEnv).DB;
	await resetDB(db);
});

// ─── POST /api/user — registration ───────────────────────────────────────────

describe("POST /api/user — registration", () => {
	it("rejects first-user initialization without the bootstrap secret", async () => {
		const res = await api.post("/api/user", {
			body: {
				display_name: "Admin",
				email: "admin@example.com",
				password: "adminpass",
			},
		});
		expect(res.status).toBe(403);
	});

	it("first registered user is administrator only with the bootstrap secret", async () => {
		const res = await api.post("/api/user", {
			bootstrapToken: "test-bootstrap-token",
			body: {
				display_name: "Admin",
				email: "admin@example.com",
				password: "adminpass",
			},
		});
		expect(res.status).toBe(201);
		const data = await json(res);
		expect(data.errno).toBe(0);
		expect(data.data.type).toBe("administrator");
	});

	it("allows only one concurrent first-admin initialization", async () => {
		const responses = await Promise.all(
			["first-admin@example.com", "racing-admin@example.com"].map((email) =>
				api.post("/api/user", {
					bootstrapToken: "test-bootstrap-token",
					body: { email, password: "adminpass" },
				}),
			),
		);
		const statuses = responses.map((response) => response.status);
		expect(statuses.filter((status) => status === 201)).toHaveLength(1);
		expect(statuses.every((status) => [201, 403, 409].includes(status))).toBe(
			true,
		);
		const result = await db
			.prepare(
				"SELECT COUNT(*) AS count FROM wl_Users WHERE type = 'administrator'",
			)
			.first<{ count: number }>();
		expect(result?.count).toBe(1);
	});

	it("public registration stays closed by default after bootstrap", async () => {
		await createUser(db, { email: "first@example.com" });
		const res = await api.post("/api/user", {
			body: { email: "second@example.com", password: "password123" },
		});
		expect(res.status).toBe(403);
	});

	it("creates later users as guests when registration is explicitly enabled", async () => {
		await createUser(db, { email: "first@example.com" });
		const data = await json(
			await api.post("/api/user", {
				env: { ALLOW_REGISTRATION: "true" },
				body: { email: "second@example.com", password: "password123" },
			}),
		);
		expect(data.data.type).toBe("guest");
	});

	it("rejects duplicate email with 409", async () => {
		await createUser(db, { email: "taken@example.com" });
		const res = await api.post("/api/user", {
			env: { ALLOW_REGISTRATION: "true" },
			body: { email: "taken@example.com", password: "password123" },
		});
		expect(res.status).toBe(409);
		expect((await json(res)).errno).toBe(1);
	});

	it("does not reveal whether an account exists while registration is closed", async () => {
		await createUser(db, { email: "taken@example.com" });
		const duplicate = await api.post("/api/user", {
			body: { email: "taken@example.com", password: "password123" },
		});
		const unknown = await api.post("/api/user", {
			body: { email: "unknown@example.com", password: "password123" },
		});
		expect(duplicate.status).toBe(403);
		expect(unknown.status).toBe(403);
	});

	it("returns 400 when email or password is missing", async () => {
		expect(
			(
				await api.post("/api/user", {
					body: { display_name: "NoEmail" },
				})
			).status,
		).toBe(400);
	});

	it.each([
		["not-an-email", "password123"],
		["fake@OAUTH.LOCAL", "password123"],
		["new@example.com", "short"],
	])("rejects invalid public registration: %s", async (email, password) => {
		await createUser(db);
		const res = await api.post("/api/user", {
			env: { ALLOW_REGISTRATION: "true" },
			body: { email, password },
		});
		expect(res.status).toBe(400);
	});

	it("defaults display_name to email prefix when omitted", async () => {
		await createUser(db, { email: "existing@example.com" });
		const data = await json(
			await api.post("/api/user", {
				env: { ALLOW_REGISTRATION: "true" },
				body: { email: "bob@example.com", password: "password123" },
			}),
		);
		expect(data.data.display_name).toBe("bob");
	});
});

// ─── GET /api/user ────────────────────────────────────────────────────────────

describe("GET /api/user", () => {
	beforeEach(async () => {
		await createUser(db, { email: "public@example.com", type: "guest" });
	});

	it("returns public top-commenters list for anonymous requests", async () => {
		const res = await api.get("/api/user");
		expect(res.status).toBe(200);
		const data = await json(res);
		expect(data.errno).toBe(0);
		expect(Array.isArray(data.data)).toBe(true);
	});
});

// ─── PUT /api/user/:id ────────────────────────────────────────────────────────

describe("PUT /api/user/:id — profile update", () => {
	let adminToken: string;
	let guestToken: string;
	let adminId: number;
	let guestId: number;

	beforeEach(async () => {
		const admin = await createUser(db, {
			email: "admin@example.com",
			password: "pass",
			type: "administrator",
		});
		const guest = await createUser(db, {
			email: "guest@example.com",
			password: "pass",
			type: "guest",
		});
		adminId = admin.id;
		guestId = guest.id;
		adminToken = await loginAs("admin@example.com", "pass");
		guestToken = await loginAs("guest@example.com", "pass");
	});

	it("accepts the admin panel's self-profile PUT with an empty homepage", async () => {
		const res = await api.put("/api/user?lang=zh-CN", {
			token: adminToken,
			body: {
				display_name: "新昵称",
				url: "",
				email: "admin@example.com",
				label: "成员",
			},
		});
		expect(res.status).toBe(200);
		expect((await json(res)).data).toMatchObject({
			objectId: adminId,
			display_name: "新昵称",
			url: "",
		});
		const me = await json(await api.get("/api/token", { token: adminToken }));
		expect(me.data).toMatchObject({
			display_name: "新昵称",
			url: "",
			label: "成员",
		});
	});

	it("binds the self route to the session, never to a supplied ID or role", async () => {
		const res = await api.put("/api/user", {
			token: guestToken,
			body: {
				id: adminId,
				objectId: adminId,
				type: "administrator",
				display_name: "Guest",
			},
		});
		expect(res.status).toBe(200);
		expect((await json(res)).data).toMatchObject({
			objectId: guestId,
			type: "guest",
		});
		const other = await json(
			await api.get("/api/token", { token: adminToken }),
		);
		expect(other.data.display_name).not.toBe("Guest");
	});

	it("requires authentication on the self route", async () => {
		expect(
			(await api.put("/api/user", { body: { display_name: "name" } })).status,
		).toBe(401);
	});

	it("user can update their own display_name", async () => {
		const res = await api.put(`/api/user/${guestId}`, {
			token: guestToken,
			body: { display_name: "New Name" },
		});
		expect(res.status).toBe(200);
		expect((await json(res)).data.display_name).toBe("New Name");
	});

	it("user cannot update another user profile (403)", async () => {
		expect(
			(
				await api.put(`/api/user/${adminId}`, {
					token: guestToken,
					body: { display_name: "Hacked" },
				})
			).status,
		).toBe(403);
	});

	it("admin can update any user profile", async () => {
		const res = await api.put(`/api/user/${guestId}`, {
			token: adminToken,
			body: { display_name: "Admin-set Name" },
		});
		expect(res.status).toBe(200);
		expect((await json(res)).data.display_name).toBe("Admin-set Name");
	});
});

// ─── DELETE /api/user/:id ─────────────────────────────────────────────────────

describe("DELETE /api/user/:id", () => {
	let adminToken: string;
	let guestToken: string;
	let guestId: number;

	beforeEach(async () => {
		await createUser(db, {
			email: "admin@example.com",
			password: "pass",
			type: "administrator",
		});
		const guest = await createUser(db, {
			email: "guest@example.com",
			password: "pass",
			type: "guest",
		});
		guestId = guest.id;
		adminToken = await loginAs("admin@example.com", "pass");
		guestToken = await loginAs("guest@example.com", "pass");
	});

	it("non-admin delete attempt returns 403", async () => {
		expect(
			(await api.delete(`/api/user/${guestId}`, { token: guestToken })).status,
		).toBe(403);
	});

	it("admin can delete a guest user", async () => {
		const res = await api.delete(`/api/user/${guestId}`, { token: adminToken });
		expect(res.status).toBe(200);
		expect((await json(res)).errno).toBe(0);
	});

	it("deleting non-existent user returns 404", async () => {
		expect(
			(await api.delete("/api/user/99999", { token: adminToken })).status,
		).toBe(404);
	});
});
