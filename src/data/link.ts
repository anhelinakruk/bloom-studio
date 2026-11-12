/**
 * Internal link with the site's base path in front.
 *
 * On GitHub Pages the site lives under /bloom-studio/, so "/zajecia" must
 * become "/bloom-studio/zajecia". The base is set once in astro.config.mjs;
 * on the final domain it goes back to "/" and nothing else changes.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const link = (path: string) => `${base}${path}`;

/** The current page's path without the base, e.g. "/zajecia" */
export const pagePath = (pathname: string) =>
  (pathname.startsWith(base) ? pathname.slice(base.length) : pathname).replace(/\/$/, "") || "/";
