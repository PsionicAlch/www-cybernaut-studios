// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
import glsl from "vite-plugin-glsl";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://cybernaut.studio",
  vite: {
    plugins: [tailwindcss(), glsl()],
  },
  integrations: [react(), sitemap()],
});