import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});