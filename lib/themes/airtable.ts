import type { BrandTheme } from "./types";

// Airtable — editorial workflow software. Signature: full-bleed color-tile cards
// (coral, forest, dark-navy, cream) punctuating a white canvas every few screens;
// near-black primary CTA, Haas Grotesk type at modest weights, no uppercase anywhere.
// Source: design-and-creative-tools/airtable.md

const airtable: BrandTheme = {
  schemaVersion: 1,
  slug: "airtable",
  name: "Airtable",
  description: "Quiet editorial confidence — near-black CTA, white canvas, brand voltage from full-bleed signature color cards.",
  polarity: "light",
  colors: {
    canvas:    "oklch(1 0 0)",              // #ffffff  — default page floor
    surface:   "oklch(0.988 0.004 222)",    // #f8fafc  — surface-soft (tabbed cards, featured pricing)
    raised:    "oklch(1 0 0)",              // #ffffff  — cards sit on canvas, separated by hairline
    ink:       "oklch(0.17 0.022 258)",     // #181d26  — near-black navy (display type + primary CTA)
    muted:     "oklch(0.33 0.008 254)",     // #41454d  — secondary text, footer links, captions
    hairline:  "oklch(0.88 0 0)",           // #dddddd  — 1px borders, dividers, secondary-button outline
    primary:   "oklch(0.17 0.022 258)",     // #181d26  — same as ink; CTA is "confident and final"
    onPrimary: "oklch(1 0 0)",              // #ffffff
    accent:    "oklch(0.47 0.19 262)",      // #1b61c9  — link blue (NOT the primary button)
  },
  fonts: {
    display: {
      stack: '"Haas Groot Disp", "Haas", "Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,  // display-lg h1 is intentionally 400; size does the emphasis, not weight
    },
    body: {
      stack: '"Haas Grotesk", "Haas", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
  },
  type: {
    navUppercase:   false,
    buttonUppercase: false,
    displayUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "12px",   // rounded.lg — primary CTA and signature surface cards
    card:   "10px",   // rounded.md — content cards, article cards, cream callouts
    input:  "6px",    // rounded.sm — text inputs
    chip:   "9999px", // rounded.full — circular icon buttons; pricing uses pill (sub-system)
  },
  density: "spacious",  // 96px section padding is the universal vertical rhythm constant
  buttons: {
    primary:   { bg: "oklch(0.17 0.022 258)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)", color: "oklch(0.17 0.022 258)", border: "oklch(0.88 0 0)" },
  },
  elevation: "border",  // color-block depth; shadows minimal; depth = canvas vs. signature card contrast
  layout: {
    hero:    "editorial", // type-forward, white canvas, 96px whitespace framing — like a print magazine
    cta:     "band",      // cta-band-light (surface-strong) near footer; hero-card-dark mid-page
    preview: "dashboard", // product UI fragments in demo-grid cards
  },
  signature: {
    kind:      "color-tiles",
    accent:    "oklch(0.46 0.16 33)",    // signature-coral #aa2d00 — dark oxide red full-bleed card
    accent2:   "oklch(0.19 0.05 147)",   // signature-forest #0a2e0e — dark forest green card
    intensity: "medium",
    note:      "Full-bleed signature cards in coral, forest-green, dark-navy, and warm cream punctuate editorial white canvas every few screens.",
  },
};

export default airtable;
