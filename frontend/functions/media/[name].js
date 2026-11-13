export async function onRequest({ request, params, env }) {
	if (!["GET", "HEAD"].includes(request.method))
		return new Response(null, { status: 405, headers: { Allow: "GET, HEAD" } });
	const match =
		/^([a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12})\.(webp|png)$/.exec(
			params.name,
		);
	if (!match) return new Response(null, { status: 404 });
	if (!env.MEDIA) return new Response(null, { status: 503 });
	const key = "images/" + params.name;
	const obj =
		request.method === "HEAD"
			? await env.MEDIA.head(key)
			: await env.MEDIA.get(key);
	if (!obj) return new Response(null, { status: 404 });
	return new Response(obj.body || null, {
		headers: {
			"Content-Type": "image/" + match[2],
			"Content-Length": String(obj.size),
			"X-Content-Type-Options": "nosniff",
			"Content-Security-Policy": "default-src 'none'; sandbox",
			"Cache-Control": "public, max-age=31536000, immutable",
			ETag: obj.httpEtag,
		},
	});
}
