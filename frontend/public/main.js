import { uploadCommentImage } from "./media.js";
import { currentUser, USER_KEY } from "./session.js";

function showAccount() {
	const user = currentUser();
	document.querySelector("#board-account span").textContent = user ? (user.display_name || "个人资料") + " · 个人资料" : "QQ 登录 / 注册";
	const avatar = document.querySelector("#board-avatar");
	if (user?.avatar && /^https?:\/\//i.test(user.avatar)) {
		avatar.src = user.avatar;
		avatar.hidden = false;
	} else {
		avatar.hidden = true;
		avatar.removeAttribute("src");
	}
	document.querySelector("#board-logout").hidden = !user;
}
showAccount();
window.addEventListener("pageshow", showAccount);
window.addEventListener("storage", showAccount);
document.querySelector("#board-logout").addEventListener("click", () => {
	localStorage.removeItem(USER_KEY);
	location.reload();
});

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
		const { init } = await import("./vendor/waline-board.js");
		init({
			el: "#waline",
			serverURL: endpoint.origin,
			path: config.path || "/",
			lang: "zh-CN",
			login: "disable",
			imageUploader: uploadCommentImage,
			pageview: false,
		});
	} catch {
		root.replaceChildren();
		document.querySelector("#setup-message").hidden = false;
	}
}
