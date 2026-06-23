/* empty css                                      */
import { f as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, n as renderScript, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DoY-9ISW.mjs';
import { $ as $$Footer, a as $$Header } from '../chunks/Footer_BpSRVMVJ.mjs';
import { g as getFurniture } from '../chunks/supabase_BbAlhgAx.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Furniture = createComponent(async ($$result, $$props, $$slots) => {
  const locale = "nl";
  const items = await getFurniture();
  const categoryLabels = {
    "adult-bedrooms": { en: "Adult Bedrooms", fr: "Chambres Adultes", nl: "Volwassen Slaapkamers" },
    "youth-bedrooms": { en: "Youth Bedrooms", fr: "Chambres Jeunes", nl: "Jeugd Slaapkamers" },
    "baby-bedrooms": { en: "Baby Bedrooms", fr: "Chambres Bébé", nl: "Baby Slaapkamers" },
    "office": { en: "Offices", fr: "Bureaux", nl: "Kantoren" },
    "dining": { en: "Dining Rooms", fr: "Salles à Manger", nl: "Eetkamers" }
  };
  function getCategoryName(category, locale2) {
    return categoryLabels[category]?.[locale2] || category;
  }
  const grouped = items.reduce((acc, item) => {
    const itemCategories = item.categories || [item.category];
    itemCategories.forEach((cat) => {
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
    });
    return acc;
  }, {});
  Object.keys(grouped).forEach((cat) => {
    grouped[cat].sort((a, b) => a.name_nl.localeCompare(b.name_nl));
  });
  const categoryOrder = ["adult-bedrooms", "youth-bedrooms", "baby-bedrooms", "office", "dining"];
  const sortedCategories = categoryOrder.filter((cat) => grouped[cat] && grouped[cat].length > 0);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Collectie — Neyt Meubelen", "description": "Ontdek de volledige collectie van Neyt NV: slaapkamers, eetkamers en kantoormeubelen van hoge kwaliteit.", "locale": locale }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main class="section"> <div class="container"> <h1 class="text-3xl font-serif font-bold mb-8">Collection</h1> <!-- Filter knoppen --> <div class="flex gap-2 mb-12 flex-wrap"> <button data-category="all" class="filter-btn active px-4 py-2 rounded-md bg-accent text-white">\nAlles\n</button> ', " </div> ", ' </div> </main>  <div id="lightbox" class="hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"> <button id="closeLightbox" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10">\n&times;\n</button> <button id="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center">\n‹\n</button> <img id="lightboxImage" class="max-w-full max-h-full object-contain"> <button id="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center">\n›\n</button> <div id="lightboxDots" class="absolute bottom-8 left-0 right-0 flex justify-center gap-2"></div> </div> ', " ", ' <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> <script>(function(){', "\n    const { createClient } = supabase;\n    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);\n\n    // Delete functionality\n    document.querySelectorAll('.delete-btn').forEach(btn => {\n      btn.addEventListener('click', async (e) => {\n        e.preventDefault();\n        \n        if (!confirm('Weet je zeker dat je dit item wilt verwijderen?')) return;\n\n        const id = btn.getAttribute('data-id');\n        const imageUrl = btn.getAttribute('data-image-url');\n        \n        try {\n          // Extract filename from URL\n          const fileName = imageUrl.split('/').pop();\n          \n          // Delete from storage\n          await supabaseClient.storage\n            .from('furniture')\n            .remove([fileName]);\n          \n          // Delete from database\n          const { error } = await supabaseClient\n            .from('furniture')\n            .delete()\n            .eq('id', id);\n          \n          if (error) throw error;\n          \n          // Remove from page\n          btn.closest('article').remove();\n          alert('Item verwijderd!');\n        } catch (err) {\n          alert('Error: ' + err.message);\n        }\n      });\n    });\n  })();</script> "])), renderComponent($$result2, "Header", $$Header, { "locale": locale }), maybeRenderHead(), sortedCategories.map((categoryId) => renderTemplate`<button${addAttribute(categoryId, "data-category")} class="filter-btn px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"> ${getCategoryName(categoryId, locale)} </button>`), sortedCategories.map((categoryId) => renderTemplate`<section class="category-section mb-16"${addAttribute(categoryId, "data-category")}> <h2 class="text-2xl font-serif font-bold mb-8"> ${getCategoryName(categoryId, locale)} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${grouped[categoryId].map((item) => {
    const images = item.images || [item.image_url];
    const pdfUrls = item.pdf_urls || (item.pdf_url ? [item.pdf_url] : []);
    const pdfLabels = item.pdf_labels_nl || [];
    const featuredIndex = item.category_featured_images?.[categoryId] ?? 0;
    const reorderedImages = [
      images[featuredIndex],
      ...images.filter((_, idx) => idx !== featuredIndex)
    ];
    return renderTemplate`<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"> <div class="aspect-[4/3] bg-gray-200 relative overflow-hidden"> ${reorderedImages.length > 1 ? renderTemplate`<div class="image-gallery relative w-full h-full"> ${reorderedImages.map((url, idx) => renderTemplate`<img${addAttribute(url, "src")}${addAttribute(`${item.name_nl} ${idx + 1}`, "alt")}${addAttribute(`absolute w-full h-full object-cover transition-opacity duration-300 ${idx === 0 ? "opacity-100" : "opacity-0"}`, "class")}${addAttribute(idx, "data-index")}>`)} <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-2"> ${reorderedImages.map((_, idx) => renderTemplate`<button class="gallery-dot w-2 h-2 rounded-full bg-white/50 hover:bg-white"${addAttribute(idx, "data-gallery-index")}></button>`)} </div> </div>` : renderTemplate`<img${addAttribute(reorderedImages[0], "src")}${addAttribute(item.name_nl, "alt")} class="w-full h-full object-cover" loading="lazy">`} </div> <div class="p-4"> <h3 class="text-lg font-semibold mb-2"> ${item.name_nl } </h3> <div class="flex items-center justify-between"> ${reorderedImages.length > 1 && renderTemplate`<p class="text-xs text-gray-500">${reorderedImages.length} foto's</p>`} </div> ${pdfUrls.length > 0 && pdfUrls.map((url, i) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" onclick="event.stopPropagation()" class="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition text-sm font-medium w-full justify-center"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> ${pdfLabels[i] || `Download technische tekening${pdfUrls.length > 1 ? ` (${i + 1})` : ""}`} </a>`)} </div> </article>`;
  })} </div> </section>`), renderComponent($$result2, "Footer", $$Footer, { "locale": locale }), renderScript($$result2, "/Users/jonireyniers/prod-neyt/neyt/src/pages/furniture.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ SUPABASE_URL: "https://dnshptxwwrungkyuiwhh.supabase.co", SUPABASE_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2hwdHh3d3J1bmdreXVpd2hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODUzNjQsImV4cCI6MjA4MDY2MTM2NH0.-5UUMbHB0nUCH1_fan0X6FGqGnlzft101nfFrNoWI-g" })) })}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/pages/furniture.astro", void 0);
const $$file = "/Users/jonireyniers/prod-neyt/neyt/src/pages/furniture.astro";
const $$url = "/furniture";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Furniture,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
