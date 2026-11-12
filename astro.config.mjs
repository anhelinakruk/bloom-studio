// @ts-check
import { defineConfig } from "astro/config";

// Draft hosting on GitHub Pages: the site lives at
// https://anhelinakruk.github.io/bloom-studio/, hence the `base`. Internal
// links go through link() in src/data/link.ts, so on the final domain only
// these two lines change (site → the domain, base → "/").
export default defineConfig({
  site: "https://anhelinakruk.github.io",
  base: "/bloom-studio",
});
