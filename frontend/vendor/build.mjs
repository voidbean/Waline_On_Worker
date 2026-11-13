// Run in an isolated install (see README); src/ is the patched upstream client.
import { readFileSync, existsSync } from "node:fs";
import { build } from "vite";
import vue from "@vitejs/plugin-vue";
await build({
	configFile: false, publicDir: false,
	define: { VERSION: JSON.stringify("3.16.2"), "process.env.NODE_ENV": '"production"', __VUE_OPTIONS_API__: false, __VUE_PROD_DEVTOOLS__: false, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false },
	plugins: [vue({ isProduction: true, script: { fs: { fileExists: existsSync, readFile: p => readFileSync(p,"utf8") } } })],
	build: { target: "es2022", lib: { entry: "src/init.ts", formats: ["es"], fileName: () => "waline-board.js" }, minify: true, license: { fileName: "third-party-licenses.txt" } },
});
