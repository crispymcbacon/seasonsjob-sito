// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  // Canonical production origin — used for sitemap, canonical URLs and OG metadata.
  site: 'https://seasonsjob.it',

  // Fully static output: every page is prerendered to HTML files.
  output: 'static',

  integrations: [
    sitemap({
      // Temporary validation pages must not leak into production SEO.
      filter: (page) => !page.includes('/island-demo'),
    }),
    // Vue is available for interactive islands only; nothing is hydrated globally.
    vue(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
