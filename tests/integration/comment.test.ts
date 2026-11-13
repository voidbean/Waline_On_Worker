import { env } from "cloudflare:test";
import { loginAs } from "@tests/helpers/auth.js";
import { createComment, createUser } from "@tests/helpers/factories.js";
import { api, json } from "@tests/helpers/request.js";
import { resetDB } from "@tests/helpers/setup.js";
import { beforeEach, describe, expect, it } from "vitest";

type TestEnv = { DB: D1Database };

let db: D1Database;
let adminToken: string;
let guestToken: string;

beforeEach(async () => {
	db = (env as unknown as TestEnv).DB;
	await resetDB(db);
	await createUser(db, {
		email: "admin@test.com",
		password: "pass",
		type: "administrator",
	});
	await createUser(db, {
		email: "guest@test.com",
		password: "pass",
		type: "guest",
	});
	adminToken = await loginAs("admin@test.com", "pass");
	guestToken = await loginAs("guest@test.com", "pass");
});

// ─── GET /api/comment?path= ───────────────────────────────────────────────────

describe("GET /api/comment?path= — comment list", () => {
	it("returns the expected response shape with data array", async () => {
		await createComment(db, { url: "/page", status: "approved" });
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.errno).toBe(0);
		expect(body.data).toMatchObject({
			page: expect.any(Number),
			pageSize: expect.any(Number),
			count: expect.any(Number),
			totalPages: expect.any(Number),
			data: expect.any(Array),
		});
	});

	it("returns empty data array (not 404) for an unknown path", async () => {
		const body = await json(
			await api.get("/api/comment", { params: { path: "/no-such-page" } }),
		);
		expect(body.data.data).toEqual([]);
	});

	it("returns 400 when path is missing", async () => {
		expect((await api.get("/api/comment")).status).toBe(400);
	});

	it("hides waiting comments from anonymous requests", async () => {
		await createComment(db, { url: "/page", status: "waiting" });
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.data.count).toBe(0);
	});

	it("hides spam comments from all non-admin requests", async () => {
		await createComment(db, { url: "/page", status: "spam" });
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.data.count).toBe(0);
	});

	it("places sticky comments first regardless of insertion order", async () => {
		await createComment(db, { url: "/page", nick: "Regular" });
		await createComment(db, { url: "/page", nick: "Sticky", sticky: 1 });
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.data.data[0].nick).toBe("Sticky");
	});

	it("returns paginated results", async () => {
		for (let i = 0; i < 5; i++) await createComment(db, { url: "/page" });
		const body = await json(
			await api.get("/api/comment", {
				params: { path: "/page", pageSize: "2", page: "1" },
			}),
		);
		expect(body.data.data.length).toBe(2);
		expect(body.data.totalPages).toBeGreaterThan(1);
	});

	it("supports the official client page size of 20", async () => {
		for (let i = 0; i < 23; i++) await createComment(db, { url: "/page" });
		const body = await json(
			await api.get("/api/comment", {
				params: { path: "/page", pageSize: "20", page: "1" },
			}),
		);
		expect(body.data.pageSize).toBe(20);
		expect(body.data.data).toHaveLength(20);
		expect(body.data.totalPages).toBe(2);
	});

	it("treats SQL metacharacters in the path as data", async () => {
		await createComment(db, { url: "/page", nick: "Private path" });
		const body = await json(
			await api.get("/api/comment", {
				params: { path: "/missing' OR 1=1 --" },
			}),
		);
		expect(body.data.count).toBe(0);
		expect(body.data.data).toEqual([]);
	});

	it("nests replies under parent comments", async () => {
		const parent = await createComment(db, { url: "/page", nick: "Parent" });
		await createComment(db, {
			url: "/page",
			nick: "Child",
			pid: parent.id,
			rid: parent.id,
		});
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.data.data[0].children.length).toBe(1);
		expect(body.data.data[0].children[0].nick).toBe("Child");
	});
});

// ─── GET /api/comment?type=recent ────────────────────────────────────────────

describe("GET /api/comment?type=recent", () => {
	it("returns recent approved comments across all paths", async () => {
		await createComment(db, { url: "/a" });
		await createComment(db, { url: "/b" });
		const body = await json(
			await api.get("/api/comment", { params: { type: "recent" } }),
		);
		expect(body.errno).toBe(0);
		expect(Array.isArray(body.data)).toBe(true);
		expect(body.data.length).toBeGreaterThanOrEqual(2);
	});
});

// ─── GET /api/comment?type=count ─────────────────────────────────────────────

describe("GET /api/comment?type=count", () => {
	it("returns count for a known path", async () => {
		await createComment(db, { url: "/counted" });
		const body = await json(
			await api.get("/api/comment", {
				params: { type: "count", path: "/counted" },
			}),
		);
		expect(body.data).toEqual([1]);
	});

	it("returns 0 for unknown path", async () => {
		const body = await json(
			await api.get("/api/comment", {
				params: { type: "count", path: "/unknown" },
			}),
		);
		expect(body.data).toEqual([0]);
	});
});

// ─── GET /api/comment?type=list (admin) ──────────────────────────────────────

describe("GET /api/comment?type=list — admin list", () => {
	it("returns 403 without auth", async () => {
		expect(
			(await api.get("/api/comment", { params: { type: "list" } })).status,
		).toBe(403);
	});

	it("returns 403 for non-admin", async () => {
		expect(
			(
				await api.get("/api/comment", {
					token: guestToken,
					params: { type: "list" },
				})
			).status,
		).toBe(403);
	});

	it("admin gets all comments with pagination", async () => {
		await createComment(db, { url: "/page", status: "waiting" });
		const body = await json(
			await api.get("/api/comment", {
				token: adminToken,
				params: { type: "list" },
			}),
		);
		expect(body.errno).toBe(0);
		expect(body.data.data.length).toBeGreaterThan(0);
	});

	it("supports ?status= filter", async () => {
		await createComment(db, { url: "/page", status: "waiting" });
		const body = await json(
			await api.get("/api/comment", {
				token: adminToken,
				params: { type: "list", status: "waiting" },
			}),
		);
		expect(body.data.data.every((c: any) => c.status === "waiting")).toBe(true);
	});
});

// ─── GET /api/comment/rss ─────────────────────────────────────────────────────

describe("GET /api/comment/rss", () => {
	it("returns 200 with XML content-type", async () => {
		const res = await api.get("/api/comment/rss");
		expect(res.status).toBe(200);
		expect(res.headers.get("content-type")).toMatch(/xml/);
	});

	it("response body is valid XML with rss element", async () => {
		await createComment(db, { url: "/page" });
		const text = await (await api.get("/api/comment/rss")).text();
		expect(text).toMatch(/<rss/);
	});
});

// ─── POST /api/comment ────────────────────────────────────────────────────────

describe("POST /api/comment — create comment", () => {
	it("anonymous user can post a comment", async () => {
		const res = await api.post("/api/comment", {
			body: {
				nick: "Alice",
				mail: "alice@example.com",
				comment: "Hello!",
				url: "/page",
			},
		});
		expect(res.status).toBe(201);
		const body = await json(res);
		expect(body.errno).toBe(0);
		expect(body.data.nick).toBe("Alice");
		expect(body.data.status).toBe("approved");
	});

	it("AUDIT=true holds anonymous and logged-in comments for review by default", async () => {
		const anonymous = await api.post("/api/comment", {
			env: { AUDIT: "true" },
			body: { comment: "Review me", url: "/audit" },
		});
		const loggedIn = await api.post("/api/comment", {
			env: { AUDIT: "true" },
			token: guestToken,
			body: { comment: "Review me too", url: "/audit" },
		});
		expect((await json(anonymous)).data.status).toBe("waiting");
		expect((await json(loggedIn)).data.status).toBe("waiting");
	});

	it("returns malicious HTML as escaped comment markup", async () => {
		const body = await json(
			await api.post("/api/comment", {
				body: {
					nick: "Alice",
					comment: '<img src=x onerror="alert(1)">',
					url: "/page",
				},
			}),
		);
		expect(body.data.comment).not.toContain("<img");
		expect(body.data.comment).toContain("&lt;img");
	});

	it("response includes all required Waline comment fields", async () => {
		const data = (
			await json(
				await api.post("/api/comment", {
					body: {
						nick: "Bob",
						mail: "bob@example.com",
						comment: "Test",
						url: "/page",
					},
				}),
			)
		).data;
		expect(data).toMatchObject({
			objectId: expect.any(Number),
			nick: "Bob",
			comment: expect.any(String),
			orig: "Test",
			insertedAt: expect.any(String),
			createdAt: expect.any(String),
			avatar: expect.any(String),
			status: expect.any(String),
			like: expect.any(Number),
			url: "/page",
			sticky: expect.any(Boolean),
		});
	});

	it("authenticated user post uses their display_name", async () => {
		const res = await api.post("/api/comment", {
			token: guestToken,
			body: { comment: "Logged in comment", url: "/page" },
		});
		const body = await json(res);
		expect(res.status).toBe(201);
		expect(body.data.nick).not.toBe("");
	});

	it("returns 400 when comment body is missing", async () => {
		expect(
			(
				await api.post("/api/comment", {
					body: { nick: "A", url: "/page" },
				})
			).status,
		).toBe(400);
	});

	it("returns 400 when url is missing", async () => {
		expect(
			(
				await api.post("/api/comment", {
					body: { nick: "A", comment: "Hi" },
				})
			).status,
		).toBe(400);
	});

	it("XSS in comment body is HTML-escaped", async () => {
		const data = (
			await json(
				await api.post("/api/comment", {
					body: {
						nick: "X",
						comment: "<script>alert(1)</script>",
						url: "/page",
					},
				}),
			)
		).data;
		expect(data.comment).not.toContain("<script>");
	});
});

// ─── PUT /api/comment/:id ─────────────────────────────────────────────────────

describe("PUT /api/comment/:id", () => {
	it("increments like count", async () => {
		const c = await createComment(db, { url: "/page" });
		const body = await json(
			await api.put(`/api/comment/${c.id}`, { body: { like: true } }),
		);
		expect(body.data.like).toBe(1);
	});

	it("admin can update comment status", async () => {
		const c = await createComment(db, { url: "/page", status: "waiting" });
		const body = await json(
			await api.put(`/api/comment/${c.id}`, {
				token: adminToken,
				body: { status: "approved" },
			}),
		);
		expect(body.data.status).toBe("approved");
	});

	it("admin can sticky a comment", async () => {
		const c = await createComment(db, { url: "/page" });
		await api.put(`/api/comment/${c.id}`, {
			token: adminToken,
			body: { sticky: 1 },
		});
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.data.data[0].sticky).toBe(true);
	});

	it("non-admin cannot update status (403)", async () => {
		const c = await createComment(db, { url: "/page" });
		expect(
			(
				await api.put(`/api/comment/${c.id}`, {
					token: guestToken,
					body: { status: "spam" },
				})
			).status,
		).toBe(403);
	});
});

// ─── DELETE /api/comment/:id ──────────────────────────────────────────────────

describe("DELETE /api/comment/:id", () => {
	it("admin can delete a comment", async () => {
		const c = await createComment(db, { url: "/page" });
		expect(
			(await api.delete(`/api/comment/${c.id}`, { token: adminToken })).status,
		).toBe(200);
		const body = await json(
			await api.get("/api/comment", { params: { path: "/page" } }),
		);
		expect(body.data.count).toBe(0);
	});

	it("deleting a parent cascades to child replies", async () => {
		const parent = await createComment(db, { url: "/page" });
		await createComment(db, { url: "/page", pid: parent.id, rid: parent.id });
		await api.delete(`/api/comment/${parent.id}`, { token: adminToken });
		const remaining = (await db
			.prepare("SELECT COUNT(*) as count FROM wl_Comment WHERE rid = ?")
			.bind(parent.id)
			.first()) as any;
		expect(remaining.count).toBe(0);
	});

	it("non-admin delete returns 403", async () => {
		const c = await createComment(db, { url: "/page" });
		expect(
			(await api.delete(`/api/comment/${c.id}`, { token: guestToken })).status,
		).toBe(403);
	});
});

describe("board spoiler warnings", () => {
	it("persists a root warning and keeps reply warnings independent", async () => {
		const root = (
			await json(
				await api.post("/api/comment", {
					body: { comment: "ending", url: "/story", spoiler: true },
				}),
			)
		).data;
		expect(root.spoiler).toBe(true);
		const reply = (
			await json(
				await api.post("/api/comment", {
					body: {
						comment: "reaction",
						url: "/story",
						pid: root.objectId,
						rid: root.objectId,
					},
				}),
			)
		).data;
		expect(reply.spoiler).toBe(false);
		const list = (
			await json(await api.get("/api/comment", { params: { path: "/story" } }))
		).data.data;
		expect(list[0]).toMatchObject({
			spoiler: true,
			children: [{ spoiler: false }],
		});
		const rss = await (
			await api.get("/api/comment/rss", { params: { path: "/story" } })
		).text();
		expect(rss).not.toContain("<item>");
		expect(
			(
				await json(
					await api.get("/api/comment", { params: { type: "recent" } }),
				)
			).data,
		).toEqual([]);
		expect(
			(
				await api.post("/api/comment", {
					body: { comment: "bad", url: "/", spoiler: "false" },
				})
			).status,
		).toBe(400);
	});
	it("allows only the verified author or moderator to change a warning without changing review state", async () => {
		const user = await db
			.prepare("SELECT id FROM wl_Users WHERE email = ?")
			.bind("guest@test.com")
			.first();
		const own = await createComment(db, {
			user_id: user!.id,
			status: "waiting",
		});
		const other = await createComment(db);
		for (const id of [own.id, other.id]) {
			expect(
				(await api.put(`/api/comment/${id}`, { body: { spoiler: true } }))
					.status,
			).toBe(403);
		}
		expect(
			(
				await api.put(`/api/comment/${other.id}`, {
					token: guestToken,
					body: { spoiler: true },
				})
			).status,
		).toBe(403);
		expect(
			(
				await api.put(`/api/comment/${own.id}`, {
					token: guestToken,
					body: { spoiler: true, status: "approved" },
				})
			).status,
		).toBe(403);
		for (const flag of [true, false]) {
			expect(
				(
					await json(
						await api.put(`/api/comment/${own.id}`, {
							token: guestToken,
							body: { spoiler: flag },
						}),
					)
				).data,
			).toMatchObject({
				spoiler: flag,
				status: "waiting",
				orig: "Test comment",
			});
		}
		expect(
			(
				await json(
					await api.put(`/api/comment/${other.id}`, {
						token: adminToken,
						body: { spoiler: true },
					}),
				)
			).data.spoiler,
		).toBe(true);
	});
});
