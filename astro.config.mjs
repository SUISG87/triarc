// @ts-check
import { defineConfig } from 'astro/config';
// Maintenance mode: the sitemap is off so it stops advertising the hidden pages.
// Restore with the rest of the site.
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://triarc.ch',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false, // de at "/", en at "/en/"
    },
  },
  integrations: [],
  build: {
    inlineStylesheets: 'auto',
  },
});
