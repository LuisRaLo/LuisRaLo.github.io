// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://luisralo.github.io',
  // Repo will be LuisRaLo.github.io (user/org Pages site), so the app is served
  // from the domain root — no `base` path needed.
});
