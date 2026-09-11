// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexndala.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});