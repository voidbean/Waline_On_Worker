import { afterEach, describe, expect, it, vi } from "vitest";
import {
	clearQQAttempt,
	describeQQMismatch,
	readQQAttempt,
	startQQAttempt,
} from "../frontend/public/qq-attempt.js";

const attempt = "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee";
describe("QQ callback mismatch diagnostics", () => {
	it("does not diagnose a matching attempt, even if authorization failed", () => {
		expect(
			describeQQMismatch(
				attempt,
				new URLSearchParams({ attempt, error: "denied" }),
			),
		).toBeNull();
	});

	it("distinguishes missing browser state without printing callback credentials or IDs", () => {
		const result = new URLSearchParams({
			attempt,
			token: "private-token",
			error: "private-error",
		});
		expect(describeQQMismatch(null, result)).toBe(
			"QQ-01：当前浏览器没有有效的登录记录；回调编号：完整；含登录凭据：是；含错误标记：是",
		);
	});

	it("reports different local state and malformed return IDs without echoing either", () => {
		expect(
			describeQQMismatch(
				attempt,
				new URLSearchParams({ attempt: "untrusted-input" }),
			),
		).toBe(
			"QQ-02：当前浏览器的登录记录与回调不同；回调编号：格式异常；含登录凭据：否；含错误标记：否",
		);
	});
});

describe("pending QQ login cookie", () => {
	afterEach(() => vi.unstubAllGlobals());

	it("uses a short-lived host cookie for the latest attempt, then removes it", () => {
		let pending = "";
		const writes = [];
		vi.stubGlobal("document", {
			get cookie() {
				return "other=1; " + pending;
			},
			set cookie(value) {
				writes.push(value);
				pending = value.split(";")[0];
			},
		});
		const first = startQQAttempt();
		const latest = startQQAttempt();
		expect(first).toBeTruthy();
		expect(latest).toBeTruthy();
		expect(latest).not.toBe(first);
		expect(readQQAttempt()).toBe(latest);
		expect(writes[1]).toBe(
			`__Host-copperfield-qq-attempt=${latest}; Path=/; Secure; SameSite=Lax; Max-Age=600`,
		);
		clearQQAttempt();
		expect(writes[2]).toBe(
			"__Host-copperfield-qq-attempt=; Path=/; Secure; SameSite=Lax; Max-Age=0",
		);
		expect(readQQAttempt()).toBeNull();
	});

	it("does not start login if the browser ignores or denies the cookie", () => {
		vi.stubGlobal("document", {
			get cookie() {
				return "";
			},
			set cookie(_) {},
		});
		expect(startQQAttempt()).toBeNull();
		vi.stubGlobal("document", {
			get cookie() {
				throw new Error("blocked");
			},
			set cookie(_) {
				throw new Error("blocked");
			},
		});
		expect(startQQAttempt()).toBeNull();
		expect(readQQAttempt()).toBeNull();
	});
});
