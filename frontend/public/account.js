import { prepareImage, uploadImage } from "./media.js";
import {
	startQQAttempt,
	readQQAttempt,
	clearQQAttempt,
	describeQQMismatch,
} from "./qq-attempt.js";
import { currentUser, USER_KEY } from "./session.js";

const title = document.querySelector("#title");
const status = document.querySelector("#status");
const qq = document.querySelector("#qq");
const alternative = document.querySelector("#email-alternative");
const profile = document.querySelector("#profile");
const result = new URLSearchParams(location.hash.slice(1));
if (location.hash) history.replaceState(null, "", location.pathname);

qq.onclick = () => {
	const attempt = startQQAttempt();
	if (!attempt)
		return showLogin(
			"无法保存登录请求，请允许本站使用 Cookie，或改用邮箱登录。",
		);
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
		throw new Error("登录已失效，请重新登录。");
	}
	const json = await res.json();
	if (!res.ok || json.errno !== 0 || !json.data?.objectId)
		throw new Error("请求失败，请稍后重试。");
	return json.data;
}

function showLogin(message) {
	title.textContent = "QQ 登录 / 注册";
	status.textContent = message || "首次使用 QQ 登录会自动创建水楼账号。";
	qq.hidden = alternative.hidden = false;
	profile.hidden = true;
}

const emailForm = document.querySelector("#email-form");
const emailStatus = document.querySelector("#email-status");
const switchMode = document.querySelector("#email-switch");
const emailFields = emailForm.querySelector("fieldset");
const submitEmail = emailForm.querySelector('[type="submit"]');
const { email, password, code } = emailForm.elements;
let registering = true;

function setEmailMode(register) {
	registering = register;
	password.autocomplete = register ? "new-password" : "current-password";
	password.minLength = register ? 8 : 1;
	password.placeholder = register ? "至少 8 个字符" : "";
	code.parentElement.hidden = code.disabled = true;
	code.required = false;
	code.value = "";
	submitEmail.textContent = register ? "注册邮箱账号" : "邮箱登录";
	switchMode.textContent = register ? "已有账号？去登录" : "没有账号？去注册";
	emailStatus.textContent = "";
}

switchMode.onclick = () => {
	setEmailMode(!registering);
	password.value = "";
};

async function postCredentials(path, body) {
	const res = await fetch(path, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
		cache: "no-store",
	});
	const json = await res.json().catch(() => null);
	if (res.status === 429) throw new Error("尝试过于频繁，请稍后再试。");
	if (path === "/api/user" && res.status === 409)
		throw new Error("该邮箱不能重复注册，请使用原来的方式登录。");
	if (path === "/api/user" && res.status === 403)
		throw new Error("邮箱注册暂未开放，请使用 QQ 登录。");
	if (res.status === 401 && json?.data?.["2fa"]) {
		code.parentElement.hidden = code.disabled = false;
		code.required = true;
		throw new Error("请输入两步验证码后再次登录。");
	}
	if (res.status === 401)
		throw new Error(
			code.required ? "登录失败，请检查密码和验证码。" : "邮箱或密码不正确。",
		);
	if (!res.ok || json?.errno !== 0 || !json.data?.objectId)
		throw new Error(
			res.status === 400
				? "请检查邮箱格式和密码。"
				: "请求未成功，请稍后重试。",
		);
	return json.data;
}

emailForm.onsubmit = async (event) => {
	event.preventDefault();
	if (emailFields.disabled) return;
	emailFields.disabled = true;
	const credentials = { email: email.value.trim(), password: password.value };
	let created = false;
	try {
		if (registering) {
			emailStatus.textContent = "正在注册…";
			await postCredentials("/api/user", credentials);
			created = true;
			setEmailMode(false);
		}
		emailStatus.textContent = "正在登录…";
		const user = await postCredentials(
			"/api/token",
			code.required ? { ...credentials, code: code.value } : credentials,
		);
		if (!user.token) throw new Error("未收到登录凭据，请重新登录。");
		localStorage.setItem(USER_KEY, JSON.stringify(user));
		emailForm.reset();
		location.replace("/");
	} catch (err) {
		const message =
			err instanceof TypeError
				? "网络请求失败，请检查连接后重试。"
				: err.message;
		emailStatus.textContent = (created ? "账号已注册。" : "") + message;
	} finally {
		emailFields.disabled = false;
	}
};

async function init() {
	const callback = result.has("attempt");
	const stored = currentUser();
	if (callback) {
		const expected = readQQAttempt();
		const mismatch = describeQQMismatch(expected, result);
		if (mismatch) {
			const diagnostic = `${mismatch}（${new Date().toISOString()}）`;
			console.warn("[QQ 登录请求不匹配]", diagnostic);
			return showLogin(`登录请求不匹配，请从本页重新登录。诊断：${diagnostic}`);
		}
		clearQQAttempt();
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
