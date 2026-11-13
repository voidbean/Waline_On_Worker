// A tab opened by the QQ app has its own sessionStorage, but shares host cookies.
const cookieName = "__Host-copperfield-qq-attempt";
const attributes = "Path=/; Secure; SameSite=Lax";
export function readQQAttempt() {
	try {
		const entry = document.cookie
			.split(";")
			.find((item) => item.trim().startsWith(cookieName + "="));
		return entry?.trim().slice(cookieName.length + 1) || null;
	} catch {
		// Some privacy modes deny access rather than returning an empty cookie.
		return null;
	}
}

export function startQQAttempt() {
	const attempt = crypto.randomUUID();
	try {
		document.cookie = `${cookieName}=${attempt}; ${attributes}; Max-Age=600`;
	} catch {
		return null;
	}
	// Do not send the user to QQ if the browser won't retain the return check.
	return readQQAttempt() === attempt ? attempt : null;
}

export function clearQQAttempt() {
	document.cookie = `${cookieName}=; ${attributes}; Max-Age=0`;
}

// Emit only fixed labels: callback parameters can contain credentials.
export function describeQQMismatch(expected, result) {
	const received = result.get("attempt");
	if (expected && received === expected) return null;

	const reason = expected
		? "QQ-02：当前浏览器的登录记录与回调不同"
		: "QQ-01：当前浏览器没有有效的登录记录";
	const uuid =
		/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	const format = uuid.test(received) ? "完整" : "格式异常";
	return `${reason}；回调编号：${format}；含登录凭据：${result.get("token") ? "是" : "否"}；含错误标记：${result.has("error") ? "是" : "否"}`;
}
