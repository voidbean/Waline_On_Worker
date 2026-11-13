import {
	imageType,
	limitedBody,
	MAX_BYTES,
	takeSlot,
} from "../../lib/images.js";

const fail = (status, errmsg) =>
	Response.json(
		{ errno: 1, errmsg },
		{ status, headers: { "Cache-Control": "no-store" } },
	);

export async function onRequest({ request, env }) {
	if (request.method !== "POST")
		return new Response(null, { status: 405, headers: { Allow: "POST" } });
	const authorization = request.headers.get("Authorization");
	if (!authorization?.startsWith("Bearer "))
		return fail(401, "请先登录再上传图片。");
	if (!env.WALINE || !env.MEDIA) return fail(503, "图片服务尚未配置。");
	const type = request.headers.get("Content-Type");
	if (!["image/webp", "image/png"].includes(type))
		return fail(415, "不支持的图片格式。");
	if (Number(request.headers.get("Content-Length")) > MAX_BYTES)
		return fail(413, "压缩后单张图片不能超过 2 MiB。");
	try {
		const session = await env.WALINE.fetch(
			new URL("/api/token", request.url).href,
			{ headers: { Authorization: authorization } },
		);
		if (session.status === 401 || session.status === 403)
			return fail(401, "登录已失效，请重新登录。");
		if (!session.ok) return fail(503, "暂时无法验证账号。");
		const { errno, data } = await session.json();
		if (
			errno !== 0 ||
			!Number.isSafeInteger(data?.objectId) ||
			data.objectId <= 0
		)
			return fail(401, "请重新登录。");
		const bytes = await limitedBody(request.body);
		if (!bytes) return fail(413, "压缩后单张图片不能超过 2 MiB。");
		const ext = imageType(bytes);
		if (!ext || type !== "image/" + ext)
			return fail(415, "图片格式或尺寸不符合要求。");
		if (!(await takeSlot(env.MEDIA, data.objectId)))
			return fail(429, "上传过于频繁，请稍后重试（每分钟 5 张、每天 30 张）。");
		const name = crypto.randomUUID() + "." + ext;
		await env.MEDIA.put("images/" + name, bytes, {
			httpMetadata: { contentType: type },
			customMetadata: { owner: String(data.objectId) },
		});
		return Response.json(
			{ errno: 0, data: { path: "/media/" + name } },
			{ status: 201, headers: { "Cache-Control": "no-store" } },
		);
	} catch {
		return fail(503, "图片服务暂时不可用，请稍后重试。");
	}
}
