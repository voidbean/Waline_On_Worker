import {
	createExecutionContext,
	waitOnExecutionContext,
} from "cloudflare:test";
import { env } from "cloudflare:workers";
import { testRateLimits } from "@tests/helpers/rate-limits.js";
import type { Env } from "@/env.js";
import app from "@/index.js";

const BASE = "http://localhost";

type Method = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
	body?: unknown;
	token?: string;
	bootstrapToken?: string;
	params?: Record<string, string | string[]>;
	env?: Partial<Env>;
}

function buildUrl(
	path: string,
	params?: Record<string, string | string[]>,
): string {
	if (!params) return `${BASE}${path}`;
	const qs = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) {
		if (Array.isArray(value)) for (const v of value) qs.append(key, v);
		else qs.set(key, value);
	}
	return `${BASE}${path}?${qs.toString()}`;
}

async function request(
	method: Method,
	path: string,
	options: RequestOptions = {},
): Promise<Response> {
	const { body, token, bootstrapToken, params, env: envOverrides } = options;
	const headers: Record<string, string> = {};
	if (body !== undefined) headers["Content-Type"] = "application/json";
	if (token) headers.Authorization = `Bearer ${token}`;
	if (bootstrapToken) headers["X-Admin-Bootstrap-Token"] = bootstrapToken;
	const ctx = createExecutionContext();
	const response = await app.fetch(
		new Request(buildUrl(path, params), {
			method,
			headers,
			body: body !== undefined ? JSON.stringify(body) : undefined,
		}),
		{ ...(env as Env), ...testRateLimits, ...envOverrides } as Env,
		ctx,
	);
	await waitOnExecutionContext(ctx);
	return response;
}

export const api = {
	get: (path: string, options?: RequestOptions) =>
		request("GET", path, options),
	post: (path: string, options?: RequestOptions) =>
		request("POST", path, options),
	put: (path: string, options?: RequestOptions) =>
		request("PUT", path, options),
	delete: (path: string, options?: RequestOptions) =>
		request("DELETE", path, options),
};

export async function json<T = any>(res: Response): Promise<T> {
	return res.json() as Promise<T>;
}
