/* empty css                                      */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DoY-9ISW.mjs';
import { a as $$Header, c as companyData, $ as $$Footer } from '../chunks/Footer_BpSRVMVJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Company = createComponent(($$result, $$props, $$slots) => {
  const locale = "nl";
  const company = companyData.company;
  const closingDates = companyData.closingDates ?? [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${company.names[locale]} \u2014 Bedrijf`, "locale": locale }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "locale": locale })} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="relative py-20 bg-gradient-to-br from-primary to-secondary text-white"> <div class="container flex justify-center items-center"> <img src="/images/furniture/prodlogo.png" alt="Neyt Meubelen" class="h-40 md:h-56 lg:h-64 w-auto animate-fade-in"> </div> </section> <!-- About Section --> <section class="section"> <div class="container"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-serif font-bold mb-6">Ons verhaal</h2> <div class="space-y-4 text-gray-700"> <p>
NEYT is een Belgisch familiebedrijf met productiefaciliteit in Beervelde, 
                gespecialiseerd in de productie van moderne meubelen sinds meer dan 50 jaar.
</p> <p>
Zeer moderne, high-tech machines samen met uitgebreide automatisering stellen ons in staat 
                moderne meubels tegen zeer concurrerende prijzen te produceren, die wereldwijd kunnen worden verkocht.
</p> <p>
Ons assortiment bestaat uit baby-, tiener- en volwassen slaapkamermeubels, 
                eet-/woonkamermeubels en kantoormeubels.
</p> </div> <div class="mt-8 grid grid-cols-3 gap-4 text-center"> <div class="bg-accent/10 rounded-lg p-4"> <div class="text-3xl font-bold text-accent mb-1">50+</div> <div class="text-sm text-gray-600">Jaar Ervaring</div> </div> <div class="bg-accent/10 rounded-lg p-4"> <div class="text-3xl font-bold text-accent mb-1">B2B</div> <div class="text-sm text-gray-600">Bedrijfsmodel</div> </div> <div class="bg-accent/10 rounded-lg p-4"> <div class="text-3xl font-bold text-accent mb-1">🇧🇪</div> <div class="text-sm text-gray-600">Made in Belgium</div> </div> </div> </div> <div class="relative"> <div class="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"> <div class="aspect-[4/3] bg-gray-100"> <img src="/images/furniture/Foto robots anthon.jpg" src="" alt="NEYT productiefaciliteit" class="w-full h-full object-cover" loading="lazy"> </div> </div> <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full -z-10"></div> <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full -z-10"></div> </div> </div> </div> </section> <!-- Contact & Info Section --> <section class="section bg-gray-50"> <div class="container"> <div class="grid md:grid-cols-1 gap-8"> <!-- Company Info Card --> <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> <h3 class="text-2xl font-semibold">Bedrijfsgegevens</h3> </div> <address class="not-italic space-y-3 text-gray-700"> <div class="flex items-start gap-3"> <svg class="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> <div> <div class="font-semibold">Neyt NV</div> <div>Heistraat 12</div> <div>9080 Beervelde</div> <div>België</div> <div class="mt-1 text-sm text-gray-500">BTW: BE0400.162.909</div> </div> </div> <div class="flex items-center gap-3"> <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div> <div>Tel: <a href="tel:+3293539200" class="text-accent hover:underline font-medium">+32 9 353 92 00</a></div> <div>Fax: +32 9 353 92 10</div> </div> </div> </address> </div> <!-- Closing Dates Card --> ${closingDates.length > 0 && renderTemplate`<div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"> <div class="flex items-center gap-3 mb-6"> <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"> <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <h3 class="text-2xl font-semibold">Sluitingsperiodes ${closingDates[0].year}</h3> </div> <ul class="space-y-3"> ${closingDates[0].periods.map((period) => renderTemplate`<li class="flex items-start gap-3 text-gray-700"> <span class="text-accent text-xl leading-none mt-0.5">•</span> <span>${period}</span> </li>`)} </ul> <div class="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded"> <p class="text-sm text-gray-700"> <strong class="text-amber-700">Let op:</strong> Er worden geen verzendingen verwerkt tijdens deze periodes.
</p> </div> </div>`} </div> </div> </section> <!-- CTA Section --> <section class="section bg-gradient-to-br from-primary to-secondary text-white"> <div class="container text-center"> <h2 class="text-3xl md:text-4xl font-serif font-bold mb-8">
Geïnteresseerd in onze producten?
</h2> <div class="flex gap-4 justify-center"> <a href="/contact" class="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Neem contact op
</a> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale })} ` })}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/pages/company.astro", void 0);

const $$file = "/Users/jonireyniers/prod-neyt/neyt/src/pages/company.astro";
const $$url = "/company";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Company,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
