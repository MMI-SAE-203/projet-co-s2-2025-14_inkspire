// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['backend/pocketbase/**']
      }
    }
  },

  experimental: {
   svg: true,
 },

  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});