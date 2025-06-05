// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  experimental: {
    session: true,
    svg: true,
  },
  output: 'server',
  adapter: netlify(),
  integrations:[react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['backend/pocketbase/**']
      }
    }
  },
});