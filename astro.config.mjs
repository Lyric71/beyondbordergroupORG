// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bearingbridge.com',
  output: 'static',
  adapter: vercel(),
  server: {
    host: '127.0.0.1',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          zh: 'zh-CN',
          es: 'es',
          de: 'de',
        },
      },
      // Keep post-conversion and utility pages out of Google's index.
      filter: (page) =>
        !/\/thank-you\/?$/.test(page) &&
        !/\/(cookies|privacy|terms)\/?$/.test(page),
    }),
  ],
  vite: {
    // Cast to satisfy the structural Plugin type mismatch between Astro's
    // bundled Vite and the Vite version @tailwindcss/vite ships against.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
