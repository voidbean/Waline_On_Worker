# Copperfield Pages frontend

The Copperfield discussion board serves its static homepage on Pages. The browser
uses that same origin for comments and accounts. Pages calls the existing Worker
through the `WALINE` service binding. The Worker, D1, and the original Worker
admin UI are unchanged. The Waline client assets still load from unpkg.

- `/account` is the board's own QQ sign-in and profile page. QQ handles external
  authorization; the return is bound to the initiating tab and lands back on
  Pages. A first QQ sign-in creates an account using the existing backend flow.
  Password sign-in, registration, and other OAuth providers aren't exposed on
  the Pages entry. This doesn't disable anonymous comments or revoke sessions.
- Previously shared `/ui/*` links lead to the board account page; use the
  original Worker UI for administration. Nickname and optional homepage can
  be changed on Pages without giving the frontend a privileged credential.
- The comment-create response omits a null root ID on top-level comments so
  Waline v3 can insert them immediately. Replies keep their real root ID.

## Cloudflare Pages (Git integration)

- Project: `copperaqua`; production branch: `main`.
- Root directory: `frontend`; build command: leave blank; build output: `public`.
  The sibling `functions` directory is picked up by Pages.
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
