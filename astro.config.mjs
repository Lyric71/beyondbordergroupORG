// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
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
  vite: {
    // Cast to satisfy the structural Plugin type mismatch between Astro's
    // bundled Vite and the Vite version @tailwindcss/vite ships against.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
