import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BpaqwcXT.mjs';
import { manifest } from './manifest_4sIeULTC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agencies/beyondbordergroup.astro.mjs');
const _page2 = () => import('./pages/agencies/beyondbridge.astro.mjs');
const _page3 = () => import('./pages/agencies/beyondcompass.astro.mjs');
const _page4 = () => import('./pages/agencies/chinawebfoundry.astro.mjs');
const _page5 = () => import('./pages/agencies/hubstudio.astro.mjs');
const _page6 = () => import('./pages/agencies/nuvora-studio.astro.mjs');
const _page7 = () => import('./pages/agencies/theredscroll.astro.mjs');
const _page8 = () => import('./pages/agencies.astro.mjs');
const _page9 = () => import('./pages/api/contact.astro.mjs');
const _page10 = () => import('./pages/api/generate-image.astro.mjs');
const _page11 = () => import('./pages/contact.astro.mjs');
const _page12 = () => import('./pages/de/agencies/beyondbordergroup.astro.mjs');
const _page13 = () => import('./pages/de/agencies/beyondbridge.astro.mjs');
const _page14 = () => import('./pages/de/agencies/beyondcompass.astro.mjs');
const _page15 = () => import('./pages/de/agencies/chinawebfoundry.astro.mjs');
const _page16 = () => import('./pages/de/agencies/hubstudio.astro.mjs');
const _page17 = () => import('./pages/de/agencies/nuvora-studio.astro.mjs');
const _page18 = () => import('./pages/de/agencies/theredscroll.astro.mjs');
const _page19 = () => import('./pages/de/agencies.astro.mjs');
const _page20 = () => import('./pages/de/contact.astro.mjs');
const _page21 = () => import('./pages/de/entering-china.astro.mjs');
const _page22 = () => import('./pages/de/founder.astro.mjs');
const _page23 = () => import('./pages/de/going-overseas.astro.mjs');
const _page24 = () => import('./pages/de/how-we-work-together.astro.mjs');
const _page25 = () => import('./pages/de/the-bridge.astro.mjs');
const _page26 = () => import('./pages/de.astro.mjs');
const _page27 = () => import('./pages/entering-china.astro.mjs');
const _page28 = () => import('./pages/es/agencies/beyondbordergroup.astro.mjs');
const _page29 = () => import('./pages/es/agencies/beyondbridge.astro.mjs');
const _page30 = () => import('./pages/es/agencies/beyondcompass.astro.mjs');
const _page31 = () => import('./pages/es/agencies/chinawebfoundry.astro.mjs');
const _page32 = () => import('./pages/es/agencies/hubstudio.astro.mjs');
const _page33 = () => import('./pages/es/agencies/nuvora-studio.astro.mjs');
const _page34 = () => import('./pages/es/agencies/theredscroll.astro.mjs');
const _page35 = () => import('./pages/es/agencies.astro.mjs');
const _page36 = () => import('./pages/es/contact.astro.mjs');
const _page37 = () => import('./pages/es/entering-china.astro.mjs');
const _page38 = () => import('./pages/es/founder.astro.mjs');
const _page39 = () => import('./pages/es/going-overseas.astro.mjs');
const _page40 = () => import('./pages/es/how-we-work-together.astro.mjs');
const _page41 = () => import('./pages/es/the-bridge.astro.mjs');
const _page42 = () => import('./pages/es.astro.mjs');
const _page43 = () => import('./pages/founder.astro.mjs');
const _page44 = () => import('./pages/fr/agencies/beyondbordergroup.astro.mjs');
const _page45 = () => import('./pages/fr/agencies/beyondbridge.astro.mjs');
const _page46 = () => import('./pages/fr/agencies/beyondcompass.astro.mjs');
const _page47 = () => import('./pages/fr/agencies/chinawebfoundry.astro.mjs');
const _page48 = () => import('./pages/fr/agencies/hubstudio.astro.mjs');
const _page49 = () => import('./pages/fr/agencies/nuvora-studio.astro.mjs');
const _page50 = () => import('./pages/fr/agencies/theredscroll.astro.mjs');
const _page51 = () => import('./pages/fr/agencies.astro.mjs');
const _page52 = () => import('./pages/fr/contact.astro.mjs');
const _page53 = () => import('./pages/fr/entering-china.astro.mjs');
const _page54 = () => import('./pages/fr/founder.astro.mjs');
const _page55 = () => import('./pages/fr/going-overseas.astro.mjs');
const _page56 = () => import('./pages/fr/how-we-work-together.astro.mjs');
const _page57 = () => import('./pages/fr/the-bridge.astro.mjs');
const _page58 = () => import('./pages/fr.astro.mjs');
const _page59 = () => import('./pages/going-overseas.astro.mjs');
const _page60 = () => import('./pages/how-we-work-together.astro.mjs');
const _page61 = () => import('./pages/the-bridge.astro.mjs');
const _page62 = () => import('./pages/zh/agencies/beyondbordergroup.astro.mjs');
const _page63 = () => import('./pages/zh/agencies/beyondbridge.astro.mjs');
const _page64 = () => import('./pages/zh/agencies/beyondcompass.astro.mjs');
const _page65 = () => import('./pages/zh/agencies/chinawebfoundry.astro.mjs');
const _page66 = () => import('./pages/zh/agencies/hubstudio.astro.mjs');
const _page67 = () => import('./pages/zh/agencies/nuvora-studio.astro.mjs');
const _page68 = () => import('./pages/zh/agencies/theredscroll.astro.mjs');
const _page69 = () => import('./pages/zh/agencies.astro.mjs');
const _page70 = () => import('./pages/zh/contact.astro.mjs');
const _page71 = () => import('./pages/zh/entering-china.astro.mjs');
const _page72 = () => import('./pages/zh/founder.astro.mjs');
const _page73 = () => import('./pages/zh/going-overseas.astro.mjs');
const _page74 = () => import('./pages/zh/how-we-work-together.astro.mjs');
const _page75 = () => import('./pages/zh/the-bridge.astro.mjs');
const _page76 = () => import('./pages/zh.astro.mjs');
const _page77 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agencies/beyondbordergroup.astro", _page1],
    ["src/pages/agencies/beyondbridge.astro", _page2],
    ["src/pages/agencies/beyondcompass.astro", _page3],
    ["src/pages/agencies/chinawebfoundry.astro", _page4],
    ["src/pages/agencies/hubstudio.astro", _page5],
    ["src/pages/agencies/nuvora-studio.astro", _page6],
    ["src/pages/agencies/theredscroll.astro", _page7],
    ["src/pages/agencies/index.astro", _page8],
    ["src/pages/api/contact.ts", _page9],
    ["src/pages/api/generate-image.ts", _page10],
    ["src/pages/contact.astro", _page11],
    ["src/pages/de/agencies/beyondbordergroup.astro", _page12],
    ["src/pages/de/agencies/beyondbridge.astro", _page13],
    ["src/pages/de/agencies/beyondcompass.astro", _page14],
    ["src/pages/de/agencies/chinawebfoundry.astro", _page15],
    ["src/pages/de/agencies/hubstudio.astro", _page16],
    ["src/pages/de/agencies/nuvora-studio.astro", _page17],
    ["src/pages/de/agencies/theredscroll.astro", _page18],
    ["src/pages/de/agencies/index.astro", _page19],
    ["src/pages/de/contact.astro", _page20],
    ["src/pages/de/entering-china.astro", _page21],
    ["src/pages/de/founder.astro", _page22],
    ["src/pages/de/going-overseas.astro", _page23],
    ["src/pages/de/how-we-work-together.astro", _page24],
    ["src/pages/de/the-bridge.astro", _page25],
    ["src/pages/de/index.astro", _page26],
    ["src/pages/entering-china.astro", _page27],
    ["src/pages/es/agencies/beyondbordergroup.astro", _page28],
    ["src/pages/es/agencies/beyondbridge.astro", _page29],
    ["src/pages/es/agencies/beyondcompass.astro", _page30],
    ["src/pages/es/agencies/chinawebfoundry.astro", _page31],
    ["src/pages/es/agencies/hubstudio.astro", _page32],
    ["src/pages/es/agencies/nuvora-studio.astro", _page33],
    ["src/pages/es/agencies/theredscroll.astro", _page34],
    ["src/pages/es/agencies/index.astro", _page35],
    ["src/pages/es/contact.astro", _page36],
    ["src/pages/es/entering-china.astro", _page37],
    ["src/pages/es/founder.astro", _page38],
    ["src/pages/es/going-overseas.astro", _page39],
    ["src/pages/es/how-we-work-together.astro", _page40],
    ["src/pages/es/the-bridge.astro", _page41],
    ["src/pages/es/index.astro", _page42],
    ["src/pages/founder.astro", _page43],
    ["src/pages/fr/agencies/beyondbordergroup.astro", _page44],
    ["src/pages/fr/agencies/beyondbridge.astro", _page45],
    ["src/pages/fr/agencies/beyondcompass.astro", _page46],
    ["src/pages/fr/agencies/chinawebfoundry.astro", _page47],
    ["src/pages/fr/agencies/hubstudio.astro", _page48],
    ["src/pages/fr/agencies/nuvora-studio.astro", _page49],
    ["src/pages/fr/agencies/theredscroll.astro", _page50],
    ["src/pages/fr/agencies/index.astro", _page51],
    ["src/pages/fr/contact.astro", _page52],
    ["src/pages/fr/entering-china.astro", _page53],
    ["src/pages/fr/founder.astro", _page54],
    ["src/pages/fr/going-overseas.astro", _page55],
    ["src/pages/fr/how-we-work-together.astro", _page56],
    ["src/pages/fr/the-bridge.astro", _page57],
    ["src/pages/fr/index.astro", _page58],
    ["src/pages/going-overseas.astro", _page59],
    ["src/pages/how-we-work-together.astro", _page60],
    ["src/pages/the-bridge.astro", _page61],
    ["src/pages/zh/agencies/beyondbordergroup.astro", _page62],
    ["src/pages/zh/agencies/beyondbridge.astro", _page63],
    ["src/pages/zh/agencies/beyondcompass.astro", _page64],
    ["src/pages/zh/agencies/chinawebfoundry.astro", _page65],
    ["src/pages/zh/agencies/hubstudio.astro", _page66],
    ["src/pages/zh/agencies/nuvora-studio.astro", _page67],
    ["src/pages/zh/agencies/theredscroll.astro", _page68],
    ["src/pages/zh/agencies/index.astro", _page69],
    ["src/pages/zh/contact.astro", _page70],
    ["src/pages/zh/entering-china.astro", _page71],
    ["src/pages/zh/founder.astro", _page72],
    ["src/pages/zh/going-overseas.astro", _page73],
    ["src/pages/zh/how-we-work-together.astro", _page74],
    ["src/pages/zh/the-bridge.astro", _page75],
    ["src/pages/zh/index.astro", _page76],
    ["src/pages/index.astro", _page77]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5b72d933-0ead-4f53-b60f-cd6eb629318b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
