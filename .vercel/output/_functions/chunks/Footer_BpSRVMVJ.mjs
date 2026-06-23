import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, n as renderScript } from './astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$2 = createAstro("https://www.neytfurniture.com");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { locale, currentPath } = Astro2.props;
  const languages = [
    { code: "nl", label: "NL" },
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" }
  ];
  function getLocalizedPath(newLocale) {
    if (currentPath === "/" || currentPath === "") {
      return newLocale === "nl" ? "/" : `/${newLocale}`;
    }
    const pathWithoutLocale = currentPath.replace(/^\/(en|fr|nl)/, "");
    return newLocale === "nl" ? pathWithoutLocale || "/" : `/${newLocale}${pathWithoutLocale}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-1 bg-gray-100 p-1 rounded-lg"> ${languages.map((lang) => renderTemplate`<a${addAttribute(getLocalizedPath(lang.code), "href")}${addAttribute(`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${locale === lang.code ? "bg-primary text-white shadow-sm" : "text-gray-600 hover:text-gray-900 hover:bg-white"}`, "class")}> ${lang.label} </a>`)} </div>`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/components/LanguageSwitcher.astro", void 0);

const company = {"names":{"en":"Neyt Furniture","fr":"Neyt Meubles","nl":"Neyt Meubelen"},"taglines":{"en":"Fine furniture for fine people","fr":"Fine furniture for fine people","nl":"Fine furniture for fine people"}};
const closingDates = [];
const companyData = {
  company,
  closingDates,
};

const $$Astro$1 = createAstro("https://www.neytfurniture.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { locale } = Astro2.props;
  const nav = {
    en: { home: "Home", furniture: "Furniture", company: "Company", contact: "Contact" },
    fr: { home: "Accueil", furniture: "Meubles", company: "Entreprise", contact: "Contact" },
    nl: { home: "Home", furniture: "Meubelen", company: "Bedrijf", contact: "Contact" }
  };
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"> <div class="container"> <div class="flex items-center justify-center py-4 relative"> <!-- Mobile menu button - absolute left --> <button id="mobile-menu-button" class="md:hidden absolute left-0 p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path class="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <path class="close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Desktop navigation - centered --> <nav class="hidden md:flex items-center gap-1"> <a${addAttribute(`/${locale === "nl" ? "" : locale}`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].home} </a> <a${addAttribute(`/${locale === "nl" ? "" : `${locale}/`}furniture`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].furniture} </a> <a${addAttribute(`/${locale === "nl" ? "" : `${locale}/`}company`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].company} </a> <a${addAttribute(`/${locale === "nl" ? "" : `${locale}/`}contact`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].contact} </a> </nav> <!-- Language switcher - absolute right --> <div class="absolute right-0"> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "locale": locale, "currentPath": Astro2.url.pathname })} </div> </div> <!-- Mobile navigation --> <nav id="mobile-menu" class="hidden md:hidden mt-4 pt-4 border-t border-gray-200"> <div class="flex flex-col gap-4"> <a${addAttribute(`/${locale === "nl" ? "" : locale}`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].home} </a> <a${addAttribute(`/${locale === "nl" ? "" : `${locale}/`}furniture`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].furniture} </a> <a${addAttribute(`/${locale === "nl" ? "" : `${locale}/`}company`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].company} </a> <a${addAttribute(`/${locale === "nl" ? "" : `${locale}/`}contact`, "href")} class="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200"> ${nav[locale].contact} </a> </div> </nav> </div> </header> ${renderScript($$result, "/Users/jonireyniers/prod-neyt/neyt/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://www.neytfurniture.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale } = Astro2.props;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const text = {
    en: { rights: "All rights reserved", madewith: "Made with", by: "by", privacy: "Privacy Policy" },
    fr: { rights: "Tous droits r\xE9serv\xE9s", madewith: "Fait avec", by: "par", privacy: "Politique de confidentialit\xE9" },
    nl: { rights: "Alle rechten voorbehouden", madewith: "Gemaakt met", by: "door", privacy: "Privacybeleid" }
  };
  const privacyLinks = {
    en: "/en/privacy",
    fr: "/fr/privacy",
    nl: "/nl/privacy"
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary text-white mt-20"> <div class="container py-8"> <div class="text-center text-sm"> <p>© ${currentYear} ${companyData.company.names[locale]}. ${text[locale].rights}.</p> <p class="mt-2"> <a${addAttribute(privacyLinks[locale], "href")} class="text-gray-300 hover:text-white underline underline-offset-2 transition-colors"> ${text[locale].privacy} </a> </p> <p class="mt-2 text-gray-300"> ${text[locale].madewith} ${text[locale].by} Reyniers IT Solutions
</p> </div> </div> </footer>`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Header as a, companyData as c };
