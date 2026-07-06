import type { BrandTheme } from "./types";

// MongoDB — developer data platform. Signature: deep navy-teal hero band
// (#001E2B) with unmistakable bright MongoDB green (#00ED64) pill CTA, Euclid
// Circular A across every surface, 12px-rounded cards, terminal code-mockup
// embedded in the hero. Light body, dark hero override. onPrimary is deep
// navy (not white) — green primary demands a dark counterpart.
// Source: backend-database-and-devops/mongodb.md
const mongodb: BrandTheme = {
  schemaVersion: 1,
  slug: "mongodb",
  name: "MongoDB",
  description: "Atlas data platform — deep teal hero, MongoDB green pill CTA, terminal code-mockup, Euclid Circular A.",
  polarity: "light",

  colors: {
    // Light body surfaces
    canvas:   "oklch(1 0 0)",              // #FFFFFF — page background & primary card surface
    surface:  "oklch(0.99 0.003 150)",     // #F9FBFA — subtle section backgrounds
    raised:   "oklch(1 0 0)",              // #FFFFFF — cards (visual lift comes from border)
    ink:      "oklch(0.13 0.025 220)",     // #001E2B — primary headlines & body
    muted:    "oklch(0.38 0.025 220)",     // #3D4F5B — slate / secondary text
    hairline: "oklch(0.91 0.008 225)",     // #E1E5E8 — 1px borders & dividers
    // Brand
    primary:   "oklch(0.86 0.26 148)",     // #00ED64 — MongoDB green pill CTA
    onPrimary: "oklch(0.13 0.025 220)",    // #001E2B — deep navy on green (NOT white)
    accent:    "oklch(0.41 0.12 158)",     // #00684A — inline links & active tabs
    // Dark hero override — teal band with white text
    heroCanvas: "oklch(0.13 0.025 220)",   // #001E2B — canvas-dark hero band
    heroInk:    "oklch(1 0 0)",            // #FFFFFF — on-dark
    heroMuted:  "oklch(0.74 0.015 225)",   // #A8B3BC — on-dark-muted
  },

  fonts: {
    display: {
      // Euclid Circular A — MongoDB's proprietary geometric sans
      stack: '"Euclid Circular A", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Plus Jakarta Sans", weights: [400, 500, 600] },
      weight: 500,
      tracking: "-0.02em",
    },
    body: {
      stack: '"Euclid Circular A", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Plus Jakarta Sans", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      // Source Code Pro — used for code-mockup cards and terminal blocks
      stack: '"Source Code Pro", "SF Mono", Menlo, Consolas, monospace',
      source: { kind: "google", family: "Source Code Pro", weights: [400, 500] },
      weight: 400,
    },
  },

  type: {
    navUppercase:   false,
    buttonUppercase: false,
    tabularNumbers: true, // database product — stats, pricing, query output
  },

  radius: {
    button: "9999px", // full pill — MongoDB's non-negotiable button signature
    card:   "12px",   // rounded.lg — cards, pricing tiers, course tiles
    input:  "8px",    // rounded.md — text inputs, search pills
    chip:   "9999px", // status badges always pill
  },

  density: "standard",

  buttons: {
    primary: {
      bg:    "oklch(0.86 0.26 148)",  // #00ED64 bright green
      color: "oklch(0.13 0.025 220)", // #001E2B deep navy — high contrast (~11:1)
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.13 0.025 220)",  // ink
      border: "oklch(0.82 0.012 225)",  // #C1CCD6 hairline-strong
    },
  },

  // Default cards are flat with 1px hairline border; shadows reserved for
  // feature cards and code-mockup elevation above the hero band.
  elevation: "border",

  layout: {
    hero:    "centered",   // full-width dark teal band, centered headline + CTA + code mockup below
    cta:     "band",       // dark teal cta-banner-dark strips at section bottoms
    preview: "terminal",   // code-mockup-card with terminal aesthetic is the product showcase signature
  },

  signature: {
    kind:     "glow",
    accent:   "oklch(0.86 0.26 148)",  // MongoDB green radial glow over dark teal
    accent2:  "oklch(0.24 0.05 215)",  // brand-teal depth layer
    intensity: "medium",
    note: "Atmospheric green glow over deep navy-teal hero; terminal code-mockup card floats below the CTA pill.",
  },
};

export default mongodb;
