export async function onRequest({ request, env }) {
	const url = new URL(request.url);
	const path = url.pathname.replace(/\/$/, "");
	const refuse = () =>
		Response.json(
			{ errno: 1, errmsg: "Please use QQ sign-in on this board" },
			{ status: 403 },
		);

	if (
		request.method === "POST" &&
		(path === "/api/token" || path === "/api/user")
	)
		return refuse();
	if (path === "/api/oauth") {
		// The Pages entry signs in via QQ only; it never links accounts via a supplied JWT.
		if (
			url.searchParams.get("type") !== "qq" ||
			!/^\/ui\/qq-return\/[a-f0-9-]{36}$/.test(
				url.searchParams.get("redirect") || "",
			)
		)
			return refuse();
		const callback = url.searchParams.get("redirect");
		const code = url.searchParams.get("code");
		url.search = new URLSearchParams({
			type: "qq",
			redirect: callback,
		}).toString();
		if (code) url.searchParams.set("code", code);
		request = new Request(url, request);
	}

	if (!env.WALINE) {
		return Response.json(
			{ errno: 1, errmsg: "Waline service binding is not configured" },
			{ status: 503, headers: { "Cache-Control": "no-store" } },
		);
	}

	const response = await env.WALINE.fetch(request);
	if (path !== "/api/comment" || request.method !== "POST" || !response.ok)
		return response;

	// Waline v3 classifies any object with a rid property as a reply, even rid: null.
	const result = await response.json();
	if (result.errno === 0 && result.data && result.data.rid == null) {
		delete result.data.rid;
		result.data.children ??= [];
	}
	const headers = new Headers(response.headers);
	headers.delete("Content-Length");
	return Response.json(result, { status: response.status, headers });
}
