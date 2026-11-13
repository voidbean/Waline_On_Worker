/**
 * Admin Panel - loads @waline/admin from CDN (matching original Waline implementation)
 * Includes Worker branding and menu injection based on worker_display setting
 * Menu injection uses client-side API check (server-side auth validation) so it
 * works on first login without page refresh
 */
import type { Env } from "../env.js";
import { getSettings } from "../router/settings.js";

export async function getAdminPage(
	env: Env,
	requestUrl: string,
): Promise<string> {
	const settings = await getSettings(env.DB, [
		"worker_display",
		"waline_admin_version",
	]).catch(() => ({}) as Record<string, string>);
	const workerDisplay = settings.worker_display || "admin";
	const adminVersion = (settings.waline_admin_version || "latest").trim();
	const url = new URL(requestUrl);
	const serverURL = `${url.origin}/api/`;
	const siteName = env.SITE_NAME || "";
	const siteUrl = env.SITE_URL || "";
	const recaptchaV3Key = env.RECAPTCHA_V3_KEY || "";
	const turnstileKey = env.TURNSTILE_KEY || "";
	const origin = url.origin;

	const showWorker = workerDisplay !== "disabled";
	const showAlways = workerDisplay === "always";

	// Build unpkg script src. Examples:
	//   latest        -> //unpkg.com/@waline/admin
	//   0.34.1        -> //unpkg.com/@waline/admin@0.34.1
	//   v0.34.1       -> //unpkg.com/@waline/admin@v0.34.1
	//   @0.34.1       -> //unpkg.com/@waline/admin@0.34.1 (strip leading @)
	//   npm:@waline/admin@latest  -> //unpkg.com/@waline/admin@latest
	const cleanVersion = adminVersion
		.replace(/^npm:@waline\/admin@?/, "")
		.replace(/^@/, "")
		.trim();
	const adminScript =
		cleanVersion && cleanVersion !== "latest"
			? `//unpkg.com/@waline/admin@${cleanVersion}`
			: "//unpkg.com/@waline/admin";

	return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Waline Management System</title>
  <style>.comment-body[data-spoiler-label]::before{content:attr(data-spoiler-label);display:block;font-weight:600;overflow-wrap:anywhere}</style>
  <meta name="viewport" content="width=device-width,initial-scale=1">
${showWorker ? `  <style>.wk-badge{display:inline-block;margin-right:8px;padding:1px 8px;background:#f97316;color:#fff;font-size:11px;border-radius:10px;vertical-align:middle;font-weight:normal;letter-spacing:.5px;line-height:18px}</style>` : ""}
</head>
<body>
  <script>
    window.serverURL = ${JSON.stringify(serverURL)};
    window.SITE_NAME = ${JSON.stringify(siteName || undefined)};
    window.SITE_URL = ${JSON.stringify(siteUrl || undefined)};
    window.recaptchaV3Key = ${JSON.stringify(recaptchaV3Key || undefined)};
    window.turnstileKey = ${JSON.stringify(turnstileKey || undefined)};
  </script>
  <!-- Block @waline/vercel upgrade notification: irrelevant for Workers deployment.
       The admin header fetches registry.npmjs.org to compare x-waline-version against
       the latest @waline/vercel release. Intercepting that request prevents the popup. -->
  <script>
  (function(){
    var _fetch = window.fetch;
    // The stock moderation table renders the body but ignores spoiler metadata.
    // Keep the label separate so editing the body never saves the label into it.
    var warnings = new Map();
    function labelRows() {
      document.querySelectorAll('tr[id^="comment-"] .comment-body').forEach(function(cell) {
        var label = warnings.get(cell.closest('tr').id.slice(8));
        if (label) cell.dataset.spoilerLabel = label;
        else delete cell.dataset.spoilerLabel;
      });
    }
    new MutationObserver(labelRows).observe(document.body, {childList:true, subtree:true});
    window.fetch = function(input, init) {
      var url = typeof input === 'string' ? input : (input instanceof Request ? input.url : '');
      if (url.indexOf('registry.npmjs.org/@waline/vercel') !== -1) {
        return Promise.resolve(new Response('{}', {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }));
      }
      var target = new URL(url || location.href, location.href);
      if (target.origin === location.origin && target.pathname === '/api/comment' &&
          target.searchParams.get('type') === 'list') {
        return _fetch.call(this, input, init).then(async function(response) {
          if (response.ok) {
            var page = await response.clone().json();
            warnings = new Map((page.data?.data || []).filter(row => row.spoiler).map(row =>
              [String(row.objectId), row.spoilerTitle ? '含剧透：' + row.spoilerTitle : '含剧透']));
            labelRows();
          }
          return response;
        });
      }
      return _fetch.call(this, input, init);
    };
  })();
  </script>
  <!-- The CDN profile form requires a homepage even for a nickname-only edit.
       Handle only that case; keep other forms and non-empty URLs on the upstream path. -->
  <script>
  document.addEventListener('submit', async function(event) {
    var form = event.target;
    if (location.pathname !== '/ui/profile' || !(form instanceof HTMLFormElement)) return;
    var fields = form.elements;
    var nick = fields.namedItem('screenName'), url = fields.namedItem('url');
    var label = fields.namedItem('label'), email = fields.namedItem('email');
    if (!nick || !url || !label || !email || url.value.trim()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!nick.value.trim()) return alert('请填写昵称');
    if (email.value !== email.defaultValue) return alert('此操作不支持更换登录邮箱');
    var button = form.querySelector('button[type="submit"]');
    if (button && button.disabled) return;
    if (button) button.disabled = true;
    try {
      var token = window.TOKEN || sessionStorage.getItem('TOKEN') || localStorage.getItem('TOKEN');
      if (!token) throw new Error('请重新登录后保存');
      var response = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        body: JSON.stringify({ display_name: nick.value.trim(), url: '', label: label.value })
      });
      var result = await response.json();
      if (!response.ok || result.errno !== 0) throw new Error(result.errmsg || ('HTTP ' + response.status));
      location.reload();
    } catch (error) {
      alert('保存失败：' + error.message);
    } finally {
      if (button) button.disabled = false;
    }
  }, true);
  </script>
  <script src="${adminScript}"></script>
${
	showWorker
		? `  <script>
  (function(){
    var ORIGIN = ${JSON.stringify(origin)};
    var ALWAYS = ${JSON.stringify(showAlways)};
    var menuDone = false, badgeDone = false;

    function addBadge() {
      if (badgeDone) return;
      var op = document.querySelector('.typecho-head-nav .operate');
      if (!op) return;
      badgeDone = true;
      var s = document.createElement('span');
      s.className = 'wk-badge';
      s.textContent = 'Worker v1.1.0';
      op.insertBefore(s, op.firstChild);
    }

    function addMenu() {
      if (menuDone) return;
      menuDone = true;
      var fab = document.createElement('a');
      fab.href = '/ui/worker-setting';
      fab.title = 'Worker 设置';
      fab.setAttribute('aria-label', 'Worker 设置');
      fab.onclick = function(e) {
        e.preventDefault();
        window.location.href = this.href;
      };
      fab.style.cssText = [
        'position:fixed',
        'bottom:24px',
        'right:24px',
        'width:44px',
        'height:44px',
        'border-radius:50%',
        'background:#f97316',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'text-decoration:none',
        'box-shadow:0 2px 8px rgba(0,0,0,.28)',
        'z-index:9999',
        'transition:transform .15s,box-shadow .15s',
        'user-select:none',
      ].join(';');
      var img = document.createElement('img');
      img.src = 'https://waline.js.org/logo.png';
      img.alt = '';
      img.style.cssText = 'width:28px;height:28px;filter:brightness(0) invert(1)';
      fab.appendChild(img);
      fab.addEventListener('mouseenter', function(){ fab.style.transform='scale(1.12)'; fab.style.boxShadow='0 4px 16px rgba(0,0,0,.35)'; });
      fab.addEventListener('mouseleave', function(){ fab.style.transform=''; fab.style.boxShadow='0 2px 8px rgba(0,0,0,.28)'; });
      document.body.appendChild(fab);
    }

    function tryInject() {
      if (ALWAYS && !badgeDone) addBadge();
      if (menuDone && badgeDone) return;
      var tk = window.TOKEN || localStorage.getItem('TOKEN') || sessionStorage.getItem('TOKEN');
      if (!tk && !ALWAYS) return;
      if (tk && !menuDone) {
        fetch(ORIGIN + '/api/token', {
          headers: { Authorization: 'Bearer ' + tk }
        }).then(function(r){ return r.json(); }).then(function(d){
          if (d.errno === 0 && d.data && d.data.type === 'administrator') {
            addMenu();
            addBadge();
          }
        }).catch(function(){});
      }
    }

    var ob = new MutationObserver(function(){ tryInject(); });
    ob.observe(document.body, { childList: true, subtree: true });
    var iv = setInterval(function(){ tryInject(); if (menuDone) clearInterval(iv); }, 2000);
    setTimeout(tryInject, 500);
  })();
  </script>`
		: ""
}
</body>
</html>`;
}
