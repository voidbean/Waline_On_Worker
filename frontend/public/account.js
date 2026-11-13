import { prepareImage, uploadImage } from "./media.js";
import { currentUser, USER_KEY } from "./session.js";

const attemptKey = "copperfield.qq.attempt";
const title = document.querySelector("#title");
const status = document.querySelector("#status");
const qq = document.querySelector("#qq");
const profile = document.querySelector("#profile");
const result = new URLSearchParams(location.hash.slice(1));
if (location.hash) history.replaceState(null, "", location.pathname);

qq.onclick = () => {
	const attempt = crypto.randomUUID();
	sessionStorage.setItem(attemptKey, attempt);
	const query = new URLSearchParams({
		type: "qq",
		redirect: "/ui/qq-return/" + attempt,
	});
	location.assign("/api/oauth?" + query);
};

async function accountRequest(path, token, options) {
	const res = await fetch(path, {
		...options,
		cache: "no-store",
		headers: {
			Authorization: "Bearer " + token,
			...(options?.headers || {}),
		},
	});
	if (res.status === 401) {
		if (currentUser()?.token === token) localStorage.removeItem(USER_KEY);
		throw new Error("登录已失效，请重新使用 QQ 登录。");
	}
	const json = await res.json();
	if (!res.ok || json.errno !== 0 || !json.data?.objectId)
		throw new Error("请求失败，请稍后重试。");
	return json.data;
}

function showLogin(message) {
	title.textContent = "QQ 登录 / 注册";
	status.textContent = message || "首次使用 QQ 登录会自动创建水楼账号。";
	qq.hidden = false;
	profile.hidden = true;
}

async function init() {
	const callback = result.has("attempt");
	const stored = currentUser();
	if (callback) {
		const expected = sessionStorage.getItem(attemptKey);
		if (!expected || result.get("attempt") !== expected)
			return showLogin("登录请求不匹配，请从本页重新登录。");
		sessionStorage.removeItem(attemptKey);
		if (result.has("error") || !result.get("token"))
			return showLogin("QQ 授权未完成，请重试。");
	}
	const token = callback ? result.get("token") : stored?.token;
	if (!token) return showLogin();
	const user = await accountRequest("/api/token", token);
	localStorage.setItem(USER_KEY, JSON.stringify({ ...user, token }));
	if (callback) return location.replace("/");

	title.textContent = "个人资料";
	status.textContent = "昵称会显示在你的评论旁。";
	profile.elements.nick.value = user.display_name || "";
	profile.elements.homepage.value = user.url || "";
	const preview = document.querySelector("#avatar-preview");
	const photo = profile.elements.photo;
	const submit = profile.querySelector("button");
	let currentAvatar = user.avatar;
	let prepared = null;
	let uploaded = "";
	let previewURL = "";
	const showPreview = (url) => {
		preview.hidden = !url;
		if (url) preview.src = url;
		else preview.removeAttribute("src");
	};
	showPreview(currentAvatar);
	photo.onchange = async () => {
		const file = photo.files[0];
		prepared = null;
		uploaded = "";
		if (previewURL) URL.revokeObjectURL(previewURL);
		showPreview(currentAvatar);
		if (!file) return;
		photo.disabled = submit.disabled = true;
		try {
			prepared = await prepareImage(file, true);
			previewURL = URL.createObjectURL(prepared);
			showPreview(previewURL);
			status.textContent = "新头像已预览，点保存后生效。";
		} catch (err) {
			photo.value = "";
			status.textContent = err.message;
		} finally {
			photo.disabled = submit.disabled = false;
		}
	};
	profile.hidden = false;
	profile.onsubmit = async (event) => {
		event.preventDefault();
		const nick = profile.elements.nick.value.trim();
		const url = profile.elements.homepage.value.trim();
		if (!nick || (url && !/^https?:\/\//i.test(url))) {
			status.textContent =
				"请填写昵称；主页可留空，填写时需以 https:// 或 http:// 开头。";
			return;
		}
		if (submit.disabled) return;
		photo.disabled = submit.disabled = true;
		try {
			const changes = { display_name: nick, url };
			if (prepared) {
				if (!uploaded)
					uploaded = new URL(
						await uploadImage(prepared, token),
						location.origin,
					).href;
				changes.avatar = uploaded;
			}
			const saved = await accountRequest("/api/user", token, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(changes),
			});
			localStorage.setItem(
				USER_KEY,
				JSON.stringify({ ...user, ...saved, token }),
			);
			currentAvatar = saved.avatar;
			showPreview(currentAvatar);
			prepared = null;
			uploaded = photo.value = "";
			if (previewURL) URL.revokeObjectURL(previewURL);
			previewURL = "";
			status.textContent = "资料已保存。";
		} catch (err) {
			if (!currentUser()) showLogin(err.message);
			else status.textContent = err.message;
		} finally {
			photo.disabled = submit.disabled = false;
		}
	};
}

init().catch((err) => showLogin(err.message));
