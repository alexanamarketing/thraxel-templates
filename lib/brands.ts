import data from "./brands.json";
import siteContent from "./site-content.json";
import icons from "./icons.json";

export type Brand = {
  slug: string;
  file: string;
  name: string;
  category: string;
  categoryLabel: string;
  blurb: string;
  site: string | null;
};

export type Category = { slug: string; label: string };

export type SiteContent = {
  tagline: string;
  about: string[];
  howItWorks: string[];
  categories: { slug: string; label: string; description: string }[];
  brandBlurbs: Record<string, string>;
  counts: { brands: number; categories: number };
};

export const site = siteContent as SiteContent;

export const categories: Category[] = data.categories as Category[];

// Merge the README-sourced richer blurbs over the INDEX-derived ones where present.
export const brands: Brand[] = (data.brands as Brand[]).map((b) =>
  site.brandBlurbs[b.slug]
    ? { ...b, blurb: site.brandBlurbs[b.slug].replace(/\.\s*$/, "") }
    : b,
);

export function categoryDescription(slug: string): string | undefined {
  return site.categories.find((c) => c.slug === slug)?.description;
}

// Self-hosted brand favicons (public/icons/<file>), keyed by slug. See scripts/fetch-icons.mjs.
export const brandIcons = icons as Record<string, string>;

export function iconFile(slug: string): string | undefined {
  return brandIcons[slug];
}

export const THRAXEL_URL = "https://thraxel.io";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thraxel-templates.vercel.app";

export function brandsByCategory(catSlug: string): Brand[] {
  return brands.filter((b) => b.category === catSlug);
}

export function brandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

// Derive up to two trait chips from the one-line blurb. Keyword-derived, not
// invented; gives specimen cards rhythm without faking per-brand palettes.
const TRAIT_RULES: [RegExp, string][] = [
  [/void-black|true black|cinema-black|black canvas|dark(-| )|\bdark\b/i, "Dark"],
  [/serif/i, "Serif"],
  [/mono|terminal|blueprint|code-forward|code-centric/i, "Monospace"],
  [/gradient/i, "Gradient"],
  [/neon/i, "Neon"],
  [/minimal|austerity|subtraction|precision|stark/i, "Minimal"],
  [/editorial|broadsheet|magazine|paper|chiaroscuro/i, "Editorial"],
  [/photo|photography|full-bleed|cinematic|imagery/i, "Photographic"],
  [/uppercase|monumental|massive/i, "Uppercase"],
  [/warm|cream|earth|coral|terracotta/i, "Warm"],
  [/playful|friendly|colorful|vibrant/i, "Vibrant"],
];

export function traits(blurb: string): string[] {
  const out: string[] = [];
  for (const [re, label] of TRAIT_RULES) {
    if (re.test(blurb) && !out.includes(label)) out.push(label);
    if (out.length >= 2) break;
  }
  return out;
}
