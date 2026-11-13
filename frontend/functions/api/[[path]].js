export function onRequest({ request, env }) {
	if (!env.WALINE) {
		return Response.json(
			{ errno: 1, errmsg: "Waline service binding is not configured" },
			{ status: 503, headers: { "Cache-Control": "no-store" } },
		);
	}

	return env.WALINE.fetch(request);
}
