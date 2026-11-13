// Only static WebP or PNG from the board's canvas encoder. Never serve a user
// supplied filename, content type, or arbitrary key from the private bucket.
export const MAX_BYTES = 2 * 1024 * 1024;

export function imageType(bytes) {
	if (bytes.length < 32) return null;
	const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
	const tag = (offset) =>
		String.fromCharCode(...bytes.subarray(offset, offset + 4));
	const dimensionsOK = (w, h) => w > 0 && h > 0 && w <= 2048 && h <= 2048;

	if (
		view.getUint32(0) === 0x89504e47 &&
		view.getUint32(4) === 0x0d0a1a0a &&
		view.getUint32(8) === 13 &&
		tag(12) === "IHDR" &&
		dimensionsOK(view.getUint32(16), view.getUint32(20)) &&
		tag(bytes.length - 8) === "IEND"
	)
		return "png";
	if (
		tag(0) !== "RIFF" ||
		tag(8) !== "WEBP" ||
		view.getUint32(4, true) !== bytes.length - 8
	)
		return null;
	const kind = tag(12);
	if (
		kind === "VP8 " &&
		bytes[23] === 0x9d &&
		bytes[24] === 1 &&
		bytes[25] === 0x2a &&
		dimensionsOK(
			view.getUint16(26, true) & 0x3fff,
			view.getUint16(28, true) & 0x3fff,
		)
	)
		return "webp";
	if (kind === "VP8L" && bytes[20] === 0x2f) {
		const size = view.getUint32(21, true);
		if (dimensionsOK((size & 0x3fff) + 1, ((size >>> 14) & 0x3fff) + 1))
			return "webp";
	}
	if (kind === "VP8X" && !(bytes[20] & 2)) {
		const u24 = (i) => bytes[i] + 256 * bytes[i + 1] + 65536 * bytes[i + 2];
		if (dimensionsOK(u24(24) + 1, u24(27) + 1)) return "webp";
	}
	return null;
}

export async function limitedBody(body) {
	if (!body) return new Uint8Array();
	const reader = body.getReader();
	const chunks = [];
	let length = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			length += value.length;
			if (length > MAX_BYTES) {
				await reader.cancel();
				return null;
			}
			chunks.push(value);
		}
	} finally {
		reader.releaseLock();
	}
	const data = new Uint8Array(length);
	let offset = 0;
	for (const chunk of chunks) {
		data.set(chunk, offset);
		offset += chunk.length;
	}
	return data;
}

// One private counter per verified account. Conditional writes prevent parallel
// requests on different Pages instances from spending the same allowance.
export async function takeSlot(bucket, userId, now = Date.now()) {
	const key = "quota/" + userId;
	const old = await bucket.head(key);
	const minute = String(Math.floor(now / 60000));
	const day = String(Math.floor(now / 86400000));
	const meta = old?.customMetadata || {};
	const recent = meta.minute === minute ? Number(meta.recent) : 0;
	const today = meta.day === day ? Number(meta.today) : 0;
	if (recent >= 5 || today >= 30) return false;
	return Boolean(
		await bucket.put(key, crypto.randomUUID(), {
			onlyIf: old
				? { etagMatches: old.etag }
				: new Headers({ "If-None-Match": "*" }),
			customMetadata: {
				minute,
				day,
				recent: String(recent + 1),
				today: String(today + 1),
			},
		}),
	);
}
