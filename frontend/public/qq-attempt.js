// Emit only fixed labels: callback parameters can contain credentials.
export function describeQQMismatch(expected, result) {
	const received = result.get("attempt");
	if (expected && received === expected) return null;

	const reason = expected
		? "QQ-02：本标签页的登录记录与回调不同"
		: "QQ-01：本标签页没有登录记录";
	const uuid =
		/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	const format = uuid.test(received) ? "完整" : "格式异常";
	return `${reason}；回调编号：${format}；含登录凭据：${result.get("token") ? "是" : "否"}；含错误标记：${result.has("error") ? "是" : "否"}`;
}
