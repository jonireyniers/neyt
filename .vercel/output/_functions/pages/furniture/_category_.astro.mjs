/* empty css                                         */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DoY-9ISW.mjs';
import { a as $$Header, $ as $$Footer } from '../../chunks/Footer_BpSRVMVJ.mjs';
import { a as getFurnitureByCategory } from '../../chunks/supabase_BbAlhgAx.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.neytfurniture.com");
const prerender = false;
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const locale = "nl";
  const furniture = await getFurnitureByCategory(category);
  const categoryLabels = {
    "adult-bedrooms": "Volwassen Slaapkamers",
    "youth-bedrooms": "Jeugd Slaapkamers",
    "baby-bedrooms": "Baby Slaapkamers",
    "office": "Kantoren",
    "dining": "Eetkamers"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${categoryLabels[category]} \u2014 Neyt Meubelen`, "description": `Ontdek het volledige aanbod ${categoryLabels[category].toLowerCase()} van Neyt NV. Kwaliteitsmeubelen voor B2B klanten.`, "locale": locale }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale })} ${maybeRenderHead()}<main class="section"> <div class="container"> <h1 class="text-3xl font-serif font-bold mb-8">${categoryLabels[category]}</h1> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${furniture.map((item) => {
    item.images || [item.image_url];
    const pdfUrls = item.pdf_urls || (item.pdf_url ? [item.pdf_url] : []);
    const pdfLabels = item.pdf_labels_nl || [];
    return renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"> <img${addAttribute(item.image_url, "src")}${addAttribute(item.name_nl, "alt")} class="w-full h-64 object-cover"> <div class="p-4"> <h3 class="font-semibold text-lg mb-2">${item.name_nl}</h3> ${item.name_fr && renderTemplate`<p class="text-sm text-gray-500">${item.name_fr}</p>`} ${item.name_en && renderTemplate`<p class="text-sm text-gray-500">${item.name_en}</p>`} ${pdfUrls.length > 0 && pdfUrls.map((url, i) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" class="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition text-sm font-medium w-full justify-center"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> ${pdfLabels[i] || `Download technische tekening${pdfUrls.length > 1 ? ` (${i + 1})` : ""}`} </a>`)} </div> </div>`;
  })} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/pages/furniture/[category].astro", void 0);

const $$file = "/Users/jonireyniers/prod-neyt/neyt/src/pages/furniture/[category].astro";
const $$url = "/furniture/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
