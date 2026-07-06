import type { BrandTheme } from "./types";

// PostHog — dev-analytics. Signature: warm cream canvas end-to-end, single yellow-orange
// pill CTA, IBM Plex Sans Variable across every role, hand-drawn hedgehog mascots scattered
// as sketchbook marginalia — the entire decorative system is illustration, zero atmospheric
// backgrounds. Source: backend-database-and-devops/posthog.md.
const posthog: BrandTheme = {
  schemaVersion: 1,
  slug: "posthog",
  name: "PostHog",
  description: "Sketchbook analytics — cream canvas, yellow-orange pill CTA, hedgehog mascots as marginalia.",

  polarity: "light",

  colors: {
    canvas:    "oklch(0.95 0.007 110)",   // #eeefe9  warm cream — the brand's defining surface
    surface:   "oklch(0.92 0.008 110)",   // #e5e7e0  surface-soft (secondary button fill, sub-nav)
    raised:    "oklch(1 0 0)",            // #ffffff  white cards sitting on cream
    ink:       "oklch(0.18 0.013 120)",   // #23251d  deep olive-charcoal headlines + nav
    muted:     "oklch(0.48 0.011 112)",   // #6c6e63  mute — metadata, footer links
    hairline:  "oklch(0.78 0.007 112)",   // #bfc1b7  1px card borders, table rules
    primary:   "oklch(0.77 0.18 65)",     // #f7a501  yellow-orange — the system's only saturated color
    onPrimary: "oklch(0.18 0.013 120)",   // #23251d  deep olive text on yellow CTA
    accent:    "oklch(0.50 0.10 220)",    // #1078a3  link-teal — inline body anchor links
  },

  fonts: {
    display: {
      stack: '"IBM Plex Sans", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "IBM Plex Sans", weights: [400, 600, 700, 800] },
      weight: 700,
      tracking: "-0.01em",
    },
    body: {
      stack: '"IBM Plex Sans", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "IBM Plex Sans", weights: [400, 600] },
      weight: 400,
    },
    mono: {
      stack: '"Source Code Pro", ui-monospace, "Cascadia Code", "Fira Code", monospace',
      source: { kind: "google", family: "Source Code Pro", weights: [400, 500] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: true,  // analytics dashboard brand
  },

  radius: {
    button: "6px",      // rounded.md — standard CTA (sticky nav pill is a special variant)
    card: "6px",        // rounded.md — marketing cards, pricing cards, doc cards
    input: "6px",       // rounded.md — text-input, search-input
    chip: "9999px",     // pill-tab, badge-promo, nav sticky CTA
  },

  density: "standard",

  buttons: {
    primary:   { bg: "oklch(0.77 0.18 65)",  color: "oklch(0.18 0.013 120)" }, // yellow + olive
    secondary: { bg: "oklch(0.92 0.008 110)", color: "oklch(0.18 0.013 120)" }, // surface-soft + olive
  },

  elevation: "border",   // flat cards with 1px olive hairline; no drop shadows anywhere

  layout: {
    hero:    "split",      // headline + hedgehog illustration; product screenshots to the right
    cta:     "band",       // full-width cream-canvas CTA sections (footer signup, trial prompts)
    preview: "dashboard",  // product analytics — charts, funnels, retention tables
  },

  signature: {
    kind: "linework",
    accent: "oklch(0.77 0.18 65)",     // yellow-orange for mascot accents
    accent2: "oklch(0.18 0.013 120)",  // deep olive for line strokes
    intensity: "medium",
    note: "Hand-drawn hedgehog mascots in lab coats, at terminals, in lounge chairs — scattered as sketchbook marginalia across every page section.",
  },
};

export default posthog;
