import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.neytfurniture.com',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/site': '/',
    '/site/[...slug]': '/',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});