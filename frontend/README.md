# Copperfield Pages frontend

This is the static front end for the Copperfield lightweight *Punishing: Gray Raven* discussion board. It is separate from the repository's Cloudflare Worker + D1 backend.

## Cloudflare Pages (Git integration)

When the frontend and backend are ready for an explicitly approved public release:

- Connect this repository to a Cloudflare Pages project named `copperaqua`.
- Production branch: `main`.
- Root directory: `frontend`.
- Build command: leave blank (the site is static HTML/CSS/JS).
- Build output directory: `public`.
- The production hostname is `copperaqua.pages.dev`. Set the API Worker's `SECURE_DOMAINS` to this exact hostname.

Cloudflare Pages Git integration deploys commits pushed to the production branch. Do not select **Save and Deploy** until the backend URL has been filled in below and the deployment has been approved.

## Public API endpoint

Before publishing, edit `public/config.js` and set `serverURL` to the deployed Worker base URL, without a trailing slash, for example:

```js
serverURL: "https://waline-on-worker.<account-subdomain>.workers.dev",
```

This URL is public configuration, not a secret. Then set the backend Worker's `SECURE_DOMAINS` to the exact Pages hostname (`copperaqua.pages.dev`). Do not set it to the broad `pages.dev` suffix.

The site uses the Waline v3 client from unpkg and stores all discussion content in the configured Worker + D1 backend.
