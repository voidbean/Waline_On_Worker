import { describe, expect, it } from "vitest";

import { renderMarkdown } from "@/utils/markdown.js";

describe("renderMarkdown — inline formatting", () => {
	it("renders **bold**", () => {
		expect(renderMarkdown("**bold text**")).toContain(
			"<strong>bold text</strong>",
		);
	});

	it("renders *italic*", () => {
		expect(renderMarkdown("*italic text*")).toContain("<em>italic text</em>");
	});

	it("renders [link](url)", () => {
		const out = renderMarkdown("[click here](https://example.com)");
		expect(out).toContain('<a href="https://example.com"');
		expect(out).toContain("click here");
		expect(out).toContain('rel="ugc nofollow noreferrer noopener"');
	});

	it("renders `inline code`", () => {
		expect(renderMarkdown("use `console.log` here")).toContain(
			"<code>console.log</code>",
		);
	});

	it("renders fenced code blocks", () => {
		const out = renderMarkdown('```js\nconsole.log("hi")\n```');
		expect(out).toContain("<pre><code");
		expect(out).toContain("console.log");
	});
});

describe("renderMarkdown — block elements", () => {
	it("renders blockquotes", () => {
		expect(renderMarkdown("> quoted text")).toContain(
			"<blockquote>quoted text</blockquote>",
		);
	});

	it("renders unordered lists", () => {
		const out = renderMarkdown("- item one\n- item two");
		expect(out).toContain("<ul>");
		expect(out).toContain("<li>item one</li>");
	});
});

describe("renderMarkdown — XSS sanitization", () => {
	it("escapes <script> tags", () => {
		const out = renderMarkdown("<script>alert(1)</script>");
		expect(out).not.toContain("<script>");
		expect(out).toContain("&lt;script&gt;");
	});

	it("escapes <img onerror> attributes", () => {
		const out = renderMarkdown('<img onerror="evil()">');
		expect(out).not.toContain("<img");
		expect(out).toContain("&lt;img");
	});

	it("strips javascript: href links", () => {
		const out = renderMarkdown("[click](javascript:alert(1))");
		expect(out).not.toContain("javascript:");
		expect(out).not.toContain("<a ");
	});

	it("returns empty string for empty input", () => {
		expect(renderMarkdown("")).toBe("");
	});

	it("safely wraps plain text in a paragraph", () => {
		const out = renderMarkdown("Hello, world!");
		expect(out).toContain("Hello, world!");
		expect(out).not.toContain("<script");
	});
});

describe("board emoji", () => {
	it("renders all three packs, adjacent codes and the original basic pack", () => {
		const html = renderMarkdown("🙂:ac-54::acnew-55::anon-40: :weibo_no_idea: :weibo_doge:");
		for (const src of ["/emoji/ac/ac-54.png", "/emoji/acnew/acnew-55.png",
			"/emoji/anon/anon-40.png", "/weibo/weibo_no_idea.png", "/weibo/weibo_doge.png"]) {
			expect(html).toContain(src);
		}
		expect(html.match(/class="wl-emoji"/g)).toHaveLength(5);
		expect(html).toContain("🙂");
	});

	it("does not expand unknown codes, code examples or link/image attributes", () => {
		const input = ":ac-00: :anon-41: :constructor: `:ac-01:`\n\n```\n:acnew-01:\n```\n\n[link](/p/:ac-01:) ![:anon-01:](/img.png)";
		const html = renderMarkdown(input);
		expect(html).not.toContain('class="wl-emoji"');
		expect(html).toContain(":anon-41:");
		expect(html).toContain('href="/p/:ac-01:"');
		expect(html).toContain('alt=":anon-01:"');
		expect(html).toContain("<code>:ac-01:</code>");
	});
});
