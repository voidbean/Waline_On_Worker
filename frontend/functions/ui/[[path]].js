// Keep old Waline bookmarks on the board instead of serving the Worker admin UI.
export function onRequest({ request }) {
	const url = new URL(request.url);
	const target = new URL("/account", url);
	const callback = /^\/ui\/qq-return\/([a-f0-9-]{36})$/.exec(url.pathname);
	if (callback) {
		const result = new URLSearchParams({ attempt: callback[1] });
		for (const key of ["token", "error"]) {
			if (url.searchParams.has(key)) result.set(key, url.searchParams.get(key));
		}
		target.hash = result.toString();
	}
	return new Response(null, {
		status: 303,
		headers: {
			Location: target.href,
			"Cache-Control": "no-store",
			"Referrer-Policy": "no-referrer",
		},
	});
}
