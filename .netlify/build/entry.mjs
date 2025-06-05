import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DVks1sen.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/login.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/tattoos/user/_userid_.astro.mjs');
const _page4 = () => import('./pages/api/text2img.astro.mjs');
const _page5 = () => import('./pages/exploration/_id_.astro.mjs');
const _page6 = () => import('./pages/exploration.astro.mjs');
const _page7 = () => import('./pages/ia.astro.mjs');
const _page8 = () => import('./pages/tatouages/_id_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/login.js", _page1],
    ["src/pages/api/auth/register.js", _page2],
    ["src/pages/api/tattoos/user/[userId].js", _page3],
    ["src/pages/api/text2img.js", _page4],
    ["src/pages/exploration/[id].astro", _page5],
    ["src/pages/exploration/index.astro", _page6],
    ["src/pages/ia/index.astro", _page7],
    ["src/pages/tatouages/[id].astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c9291f92-81df-43e4-9187-19d440c98b5e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
