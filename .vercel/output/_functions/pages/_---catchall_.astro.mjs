/* empty css                                      */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DoY-9ISW.mjs';
import { a as $$Header, $ as $$Footer } from '../chunks/Footer_BpSRVMVJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.neytfurniture.com");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const locale = "nl";
  Astro2.response.status = 404;
  Astro2.response.statusText = "Not Found";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pagina niet gevonden \u2014 Neyt Meubelen", "description": "Deze pagina bestaat niet. Ga terug naar de homepage van Neyt Meubelen.", "locale": locale }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale })} ${maybeRenderHead()}<main class="min-h-[70vh] flex items-center justify-center"> <div class="container max-w-2xl text-center py-20"> <img src="/images/furniture/prodlogo.png" alt="Neyt Meubelen" class="h-24 w-auto mx-auto mb-8 opacity-80"> <div class="text-8xl font-serif font-bold text-primary mb-4">404</div> <h1 class="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
Pagina niet gevonden
</h1> <p class="text-gray-600 mb-8 text-lg">
De pagina die u zoekt bestaat niet of werd verplaatst.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg>
Terug naar home
</a> <a href="/furniture" class="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg>
Bekijk collectie
</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/pages/[...catchall].astro", void 0);

const $$file = "/Users/jonireyniers/prod-neyt/neyt/src/pages/[...catchall].astro";
const $$url = "/[...catchall]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
