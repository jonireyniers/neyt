/* empty css                                      */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DoY-9ISW.mjs';
import { c as companyData, a as $$Header, $ as $$Footer } from '../chunks/Footer_BpSRVMVJ.mjs';
import { g as getFurniture } from '../chunks/supabase_BbAlhgAx.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locale = "nl";
  const allFurniture = await getFurniture();
  const featuredFurniture = allFurniture.filter((item) => item.featured_order && item.featured_order >= 1 && item.featured_order <= 6).sort((a, b) => (a.featured_order || 0) - (b.featured_order || 0));
  const recentFurniture = featuredFurniture.length > 0 ? featuredFurniture : allFurniture.slice(0, 6);
  (/* @__PURE__ */ new Date()).getFullYear();
  const categoryLabels = {
    "adult-bedrooms": { en: "Adult Bedrooms", fr: "Chambres Adultes", nl: "Volwassen Slaapkamers" },
    "youth-bedrooms": { en: "Youth Bedrooms", fr: "Chambres Jeunes", nl: "Jeugd Slaapkamers" },
    "baby-bedrooms": { en: "Baby Bedrooms", fr: "Chambres B\xE9b\xE9", nl: "Baby Slaapkamers" },
    "office": { en: "Offices", fr: "Bureaux", nl: "Kantoren" },
    "dining": { en: "Dining Rooms", fr: "Salles \xE0 Manger", nl: "Eetkamers" }
  };
  function getCategoryName(category, locale2) {
    return categoryLabels[category]?.[locale2] || category;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Neyt Meubelen - Kwaliteitsmeubelen voor uw interieur", "description": "Neyt NV levert kwaliteitsmeubelen voor slaapkamers, eetkamers en kantoren. B2B meubelproducent uit Beervelde, Belgi\xEB.", "locale": locale }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale })} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="relative h-[350px] md:h-[450px] bg-gradient-to-br from-primary to-secondary overflow-hidden"> <div class="absolute inset-0 bg-black/20"></div> <div class="relative container h-full flex flex-col justify-center items-center text-center text-white"> <img src="/images/furniture/prodlogo.png" alt="Neyt Meubelen" class="h-40 md:h-56 lg:h-64 w-auto mb-4 animate-fade-in"> <p class="text-base md:text-lg lg:text-xl mb-5 max-w-3xl font-light"> ${companyData.company.taglines[locale]} </p> <div class="flex gap-4"> <a href="/furniture" class="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
Bekijk collectie
</a> <a href="/company" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
Over Ons
</a> </div> </div> </section> <!-- Recent Additions --> <section class="section bg-gray-50"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4">Nieuwste toevoegingen</h2> <p class="text-gray-600 text-lg">Ontdek onze nieuwste meubelen</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${recentFurniture.map((item) => {
    const images = item.images || [item.image_url];
    const pdfUrls = item.pdf_urls || (item.pdf_url ? [item.pdf_url] : []);
    const pdfLabels = item.pdf_labels_nl || [];
    const itemName = item.name_nl;
    return renderTemplate`<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"> <div class="aspect-[4/3] bg-gray-200 overflow-hidden"> <img${addAttribute(images[0], "src")}${addAttribute(itemName, "alt")} class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy"> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${itemName}</h3> <p class="text-gray-600 text-sm mb-3"> ${getCategoryName(item.categories?.[0] || item.category, locale)} </p> ${pdfUrls.length > 0 && pdfUrls.map((url, i) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" class="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium mt-1"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> ${pdfLabels[i] || `Download technische tekening${pdfUrls.length > 1 ? ` (${i + 1})` : ""}`} </a>`)} </div> </article>`;
  })} </div> <div class="text-center mt-12"> <a href="/furniture" class="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
Bekijk alle meubelen
</a> </div> </div> </section> <!-- CTA Section --> <section class="section bg-gradient-to-br from-primary to-secondary text-white"> <div class="container text-center"> <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">
Geïnteresseerd in onze producten?
</h2> <a href="/contact" class="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
Neem contact op
</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/pages/index.astro", void 0);

const $$file = "/Users/jonireyniers/prod-neyt/neyt/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
