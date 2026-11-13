import { currentUser } from "./session.js";

export function checkFile(file) {
	if (!["image/jpeg", "image/png", "image/webp"].includes(file.type))
		throw new Error("请选择 JPG、PNG 或 WebP 图片。");
	if (!file.size || file.size > 10 * 1024 * 1024)
		throw new Error("请选择不超过 10 MiB 的图片。");
}

// Re-encode pixels (not metadata) and use the same pipeline for paste, drop,
// file picker and profile photos. Avatars are cropped to a centered square.
export async function prepareImage(file, avatar = false) {
	checkFile(file);
	const source = URL.createObjectURL(file);
	try {
		const img = new Image();
		img.src = source;
		await img.decode().catch(() => {
			throw new Error("无法读取这张图片。");
		});
		const w = img.naturalWidth,
			h = img.naturalHeight;
		const sw = avatar ? Math.min(w, h) : w,
			sh = avatar ? sw : h;
		const scale = Math.min(1, (avatar ? 256 : 2048) / Math.max(sw, sh));
		const canvas = document.createElement("canvas");
		canvas.width = Math.max(1, Math.round(sw * scale));
		canvas.height = Math.max(1, Math.round(sh * scale));
		canvas
			.getContext("2d")
			.drawImage(
				img,
				(w - sw) / 2,
				(h - sh) / 2,
				sw,
				sh,
				0,
				0,
				canvas.width,
				canvas.height,
			);
		const blob = await new Promise((resolve) =>
			canvas.toBlob(resolve, "image/webp", 0.82),
		);
		if (!blob || blob.size > 2 * 1024 * 1024)
			throw new Error("处理后的图片超过 2 MiB，请裁剪或缩小后再试。");
		return blob;
	} finally {
		URL.revokeObjectURL(source);
	}
}

export async function uploadImage(blob, token) {
	const res = await fetch("/api/media", {
		method: "POST",
		headers: { Authorization: "Bearer " + token, "Content-Type": blob.type },
		body: blob,
	});
	const result = await res.json().catch(() => null);
	if (!res.ok || !result?.data?.path)
		throw new Error(result?.errmsg || "图片上传失败，请稍后重试。");
	return result.data.path;
}

export async function uploadCommentImage(file) {
	const token = currentUser()?.token;
	if (!token) throw new Error("发图片前请先登录，文字评论不受影响。");
	// Waline inserts the original filename verbatim into the Markdown alt text.
	if (/[\[\]\r\n]/.test(file.name))
		throw new Error("请移除图片文件名中的方括号或换行后再上传。");
	return uploadImage(await prepareImage(file), token);
}
