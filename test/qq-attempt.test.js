import { describe, expect, it } from "vitest";
import { describeQQMismatch } from "../frontend/public/qq-attempt.js";

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

	it("distinguishes missing tab state without printing callback credentials or IDs", () => {
		const result = new URLSearchParams({
			attempt,
			token: "private-token",
			error: "private-error",
		});
		expect(describeQQMismatch(null, result)).toBe(
			"QQ-01：本标签页没有登录记录；回调编号：完整；含登录凭据：是；含错误标记：是",
		);
	});

	it("reports different local state and malformed return IDs without echoing either", () => {
		expect(
			describeQQMismatch(
				attempt,
				new URLSearchParams({ attempt: "untrusted-input" }),
			),
		).toBe(
			"QQ-02：本标签页的登录记录与回调不同；回调编号：格式异常；含登录凭据：否；含错误标记：否",
		);
	});
});
