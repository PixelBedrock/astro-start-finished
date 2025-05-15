// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelbedrock.github.io",
  base: "astro-start-finished",
  integrations: [preact()]
});
