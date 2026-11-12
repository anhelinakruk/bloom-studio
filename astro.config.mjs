// @ts-check
import { defineConfig } from "astro/config";

// The site is served from the domain root on Cloudflare Pages, so no `base`.
// `site` (for canonical URLs and the sitemap) is added in step 10, once the
// final address is known.
export default defineConfig({});
