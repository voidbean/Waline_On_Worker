# Copperfield Pages frontend

The Copperfield discussion board serves its static homepage on Pages. The browser
uses that same origin for Waline: Pages Functions pass `/api/*` (comments and
account requests) and `/ui`, `/ui/*` (login and profile pages) to the existing
Worker through a service binding. There is no browser redirect to workers.dev,
public upstream fallback, extra database, or private domain to configure.
The Waline client assets still load from unpkg.

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
serves the login page. Confirm comment reading/posting on the Pages address;
the client keeps the existing discussion path `/`.
