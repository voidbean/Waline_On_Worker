const config = window.COPPERFIELD_CONFIG || {};
const serverURL = typeof config.serverURL === "string" ? config.serverURL.trim() : "";
const root = document.querySelector("#waline");

if (!serverURL) {
	root.replaceChildren();
	document.querySelector("#setup-message").hidden = false;
} else {
	try {
		const endpoint = new URL(serverURL);
		if (endpoint.protocol !== "https:" && endpoint.hostname !== "localhost") {
			throw new Error("The comment service must use HTTPS.");
		}
		const { init } = await import("https://unpkg.com/@waline/client@v3/dist/waline.js");
		init({
			el: "#waline",
			serverURL: endpoint.origin,
			path: config.path || "/",
			lang: "zh-CN",
			pageview: false,
		});
	} catch {
		root.replaceChildren();
		document.querySelector("#setup-message").hidden = false;
	}
}
