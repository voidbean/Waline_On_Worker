# Copperfield Pages frontend

The Copperfield discussion board serves its static homepage on Pages. The browser
uses that same origin for comments and accounts. Pages calls the existing Worker
through the `WALINE` service binding. The board serves a pinned, patched Waline client bundle locally; its version-matched
CSS still loads from unpkg. See vendor/README.md for the build and licenses.

- `/account` is the board's own sign-in and profile page (QQ first). QQ handles external
  authorization; the return is bound to the initiating browser’s cookie store, so QQ can
  return in a new tab on Pages. The host-only, Secure, SameSite=Lax cookie
  contains only a random attempt ID, expires after 10 minutes, and is removed
  on a matching return. Starting another login replaces the pending attempt.
  Separate browsers/private profiles do not share it. A first QQ sign-in creates an account using the existing backend flow.
  A collapsed secondary form supports email/password registration and sign-in,
  including existing two-factor accounts. No email verification or automatic
  merging by email: returning QQ users keep their linked account. Other OAuth
  providers and first-admin bootstrap are not exposed on the Pages entry. Anonymous
  comments and existing sessions are unaffected.
- On a QQ callback mismatch only, the account page and browser console show the
  same diagnostic: QQ-01 means the browser has no pending attempt; QQ-02 means it
  has a different one. The timestamp is UTC. The other labels describe the
  format of the returned ID and the presence of credentials/an error, not their
  values. Screenshot the message before retrying. No diagnostic is uploaded.
- Previously shared `/ui/*` links lead to the board account page; use the
  original Worker UI for administration. Nickname and optional homepage can
  be changed on Pages without giving the frontend a privileged credential.
- The comment-create response omits a null root ID on top-level comments so
  Waline v3 can insert them immediately. Replies keep their real root ID.

## Board emblem

The header uses the Gray Raven squad emblem from *Punishing: Gray Raven* (Kuro Games):
[BWiki: 势力 灰鸦小队.png](https://wiki.biligame.com/zspms/文件:势力_灰鸦小队.png).
The favicon uses the same artwork on a light background for dark browser tabs.
Both assets are served locally; the board is an unofficial fan site.

## Cloudflare Pages (Git integration)

- Project: `copperaqua`; production branch: `main`.
- Root directory: `frontend`; build command: leave blank; build output: `public`.
  The sibling `functions` directory is picked up by Pages.
- For email registration, deploy the Worker changes first with
  `ALLOW_REGISTRATION = "true"` under its production `[vars]` (not a Pages
  variable), then release Pages. Keep the login and registration rate limiters.
  No database migration is required. Set the flag back to `"false"` to stop new
  password registrations without disrupting existing sign-ins.
- Before releasing this change, open **Workers & Pages → copperaqua → Settings →
  Bindings → Add → Service binding** for **Production**. Name it `WALINE` and
  select the existing `waline-on-worker` service in the same account.
- Keep the backend Worker's `SECURE_DOMAINS` set to the exact Pages hostname
  (`copperaqua.pages.dev`), not the shared `pages.dev` suffix. Backend secrets,
  rate limiters, and D1 stay on the Worker.
- Preview: use a separate test Worker and database, or leave the binding unset.
  Do not point preview deployments at production by default. Without a binding
  Waline routes return 503; the static board remains available.

Deploy via the existing Pages Git integration only after release approval.
Binding changes require a new Pages deployment. Verify that the homepage loads,
`/api/comment?path=%2F` returns Waline JSON (not the homepage), and `/ui/login`
leads to the board account page. Confirm comment reading/posting on the Pages address;
the client keeps the existing discussion path `/`.

## Comment images and profile photos

Bind the private Standard R2 bucket `copperaqua-media` to Production Pages as
`MEDIA` alongside `WALINE`; redeploy Pages. No public R2 endpoint, API key,
backend deployment, or D1 migration is needed. Use a separate bucket for preview.
Anyone with the image URL can read it. Uploads require a valid board session.

The editor accepts JPEG, PNG and WebP (10 MiB input), re-encodes static pixels
at up to 2048 px / 2 MiB, and inserts a same-origin Markdown image path. Profile
photos use the same endpoint, cropped to a square up to 256 px, and are uploaded
when saving the profile. New object URLs are immutable. Changing an avatar,
discarding a comment draft or deleting a comment does not delete a stored image.
For moderation, remove the corresponding `images/<filename>` object in R2;
previously cached copies can persist. The private `quota/` prefix holds one
counter per uploader (5/minute and 30/UTC day across both uses). Existing
Base64 comments are not migrated; edit and reattach the file if necessary.

## Spoiler warnings — release order

1. Existing D1 databases: check `PRAGMA table_info(wl_Comment)`. Apply
   `migrations/2026-11-13-comment-spoiler.sql` only if `spoiler` is missing,
   then `migrations/2026-11-13-comment-spoiler-title.sql` only if `spoiler_title`
   is missing. Fresh databases initialized from schema.sql need neither.
2. Deploy the updated Waline Worker, then deploy Pages. Do not release the
   new composer first: the old Worker would ignore the spoiler checkbox.
3. Verify a marked top-level image and its thread remain collapsed after reload;
   a marked reply to an ordinary post conceals only that reply. The reply button
   opens its composer independently: replying never reveals a folded post.

Guests can mark a new post. Signed-in authors may later change only their
own warning, not the body. A short optional plain-text title (e.g. “主线第十二章”)
is visible before expanding; a blank title keeps the original warning. Disabling
the warning removes its title. Adding or replacing public title text on an
already approved post as its author returns it to the moderation queue; clearing
it or toggling the flag alone does not. Anonymous authors
cannot prove ownership later; a moderator can mark their posts. RSS/recent
feeds omit marked posts and children of marked roots. The full discussion
API still returns public comment data; this is a reading preference on the
Pages board, not access control.

### 评论表情

水楼保留基础表情，另有 AC 娘经典（54 张）、AC 娘新版（55 张）、匿名版（40 张）。
三组 PNG 来自站点维护者提供的 AcFun QQ EIF，按包内目录顺序编号；不包含 QQ 缩略图。
素材不因随代码提供而采用本项目的软件许可证，公开分发前请确认素材授权。
AC 图片由 Pages 自身提供，不依赖图床或 R2；基础包沿用 Waline 固定版本的微博图片地址。

点选会插入稳定短码（例如 `:ac-01:`、`:acnew-01:`、`:anon-01:`），不需要记编号。
评论原文保存短码，预览和 Worker 使用相同的渲染器与清单。不要重排编号或移动已有图片。
更新清单或渲染器后按 vendor/README.md 重建客户端，同时发布 Worker 和 Pages；不需要数据库迁移。
