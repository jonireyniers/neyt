import { e as createAstro, f as createComponent, h as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate } from './astro/server_CDBpw_Ph.mjs';
import 'piccolore';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("https://www.neytfurniture.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Quality furniture for your home",
    locale = "en",
    canonical,
    ogImage = "/images/furniture/prodlogo.png",
    robots = "index, follow"
  } = Astro2.props;
  const canonicalURL = canonical || Astro2.url.href;
  const siteURL = "https://www.neytfurniture.com";
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="robots"${addAttribute(robots, "content")}><title>${title}</title><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="icon" type="image/png" href="/favicon.png"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(`${siteURL}${ogImage}`, "content")}><meta property="og:site_name" content="Neyt Furniture"><meta property="og:locale"${addAttribute(locale === "nl" ? "nl_BE" : locale === "fr" ? "fr_BE" : "en_GB", "content")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(`${siteURL}${ogImage}`, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jonireyniers/prod-neyt/neyt/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
