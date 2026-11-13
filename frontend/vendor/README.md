## Board client build (maintenance only)

Pages serves the checked-in ES module; no deployment build step or dependency
installation is required. The board patches Waline client 3.16.2 at the Vue
component boundary, so hidden bodies and reply components never mount before
disclosure. No DOM observer, HTML interpolation of new user input, or CSS-only
mask is involved. Stock Worker admin and other Waline clients are not modified.

To regenerate on Node 22.23+ with pnpm 10.34.6, run from the repository root:

```sh
root="$PWD"
work="$(mktemp -d)"
git clone https://github.com/walinejs/waline.git "$work/upstream"
git -C "$work/upstream" checkout --detach eb28bc40bf91d5a488d680fc842fc0dd78c0a677
git -C "$work/upstream" apply "$root/frontend/vendor/waline-spoilers.patch"
mkdir "$work/build"
cp -R "$work/upstream/packages/client/src" "$work/build/src"
cp frontend/vendor/{build.mjs,package.json,pnpm-lock.yaml} "$work/build/"
(cd "$work/build" && pnpm install --frozen-lockfile --ignore-scripts && node build.mjs)
cp "$work/build/dist/"* frontend/public/vendor/
cp "$work/upstream/packages/client/LICENSE" frontend/public/vendor/Waline-LICENSE.txt
```

When upgrading the client also update its pinned CSS URL and check the editor,
image request timing, nested reply disclosure, owner edits and moderation.

For a folded-reply smoke test, create a marked root with an image and a child.
On a fresh page, click Reply (not the disclosure) and submit a reply. Check that
the root stays folded, its image is not requested and no child body appears.
Expand it explicitly and confirm the reply is under the correct author. Repeat
on a marked reply under an ordinary root; the rest of that thread stays visible.
