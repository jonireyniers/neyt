import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DLTObfBW.mjs';
import { manifest } from './manifest_3eBcJ78q.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/login.astro.mjs');
const _page2 = () => import('./pages/admin/manage.astro.mjs');
const _page3 = () => import('./pages/admin/upload.astro.mjs');
const _page4 = () => import('./pages/api/contact.astro.mjs');
const _page5 = () => import('./pages/company.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/en/company.astro.mjs');
const _page8 = () => import('./pages/en/contact.astro.mjs');
const _page9 = () => import('./pages/en/furniture.astro.mjs');
const _page10 = () => import('./pages/en/privacy.astro.mjs');
const _page11 = () => import('./pages/en.astro.mjs');
const _page12 = () => import('./pages/fr/company.astro.mjs');
const _page13 = () => import('./pages/fr/contact.astro.mjs');
const _page14 = () => import('./pages/fr/furniture.astro.mjs');
const _page15 = () => import('./pages/fr/privacy.astro.mjs');
const _page16 = () => import('./pages/fr.astro.mjs');
const _page17 = () => import('./pages/furniture/_category_.astro.mjs');
const _page18 = () => import('./pages/furniture.astro.mjs');
const _page19 = () => import('./pages/nl/company.astro.mjs');
const _page20 = () => import('./pages/nl/contact.astro.mjs');
const _page21 = () => import('./pages/nl/furniture.astro.mjs');
const _page22 = () => import('./pages/nl/privacy.astro.mjs');
const _page23 = () => import('./pages/nl.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const _page25 = () => import('./pages/_---catchall_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/login.astro", _page1],
    ["src/pages/admin/manage.astro", _page2],
    ["src/pages/admin/upload.astro", _page3],
    ["src/pages/api/contact.ts", _page4],
    ["src/pages/company.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/en/company.astro", _page7],
    ["src/pages/en/contact.astro", _page8],
    ["src/pages/en/furniture.astro", _page9],
    ["src/pages/en/privacy.astro", _page10],
    ["src/pages/en/index.astro", _page11],
    ["src/pages/fr/company.astro", _page12],
    ["src/pages/fr/contact.astro", _page13],
    ["src/pages/fr/furniture.astro", _page14],
    ["src/pages/fr/privacy.astro", _page15],
    ["src/pages/fr/index.astro", _page16],
    ["src/pages/furniture/[category].astro", _page17],
    ["src/pages/furniture.astro", _page18],
    ["src/pages/nl/company.astro", _page19],
    ["src/pages/nl/contact.astro", _page20],
    ["src/pages/nl/furniture.astro", _page21],
    ["src/pages/nl/privacy.astro", _page22],
    ["src/pages/nl/index.astro", _page23],
    ["src/pages/index.astro", _page24],
    ["src/pages/[...catchall].astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "98db9aaa-5028-4eb9-b9a1-f88d38a1d8ab",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
