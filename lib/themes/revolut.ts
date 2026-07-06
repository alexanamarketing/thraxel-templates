import type { BrandTheme } from "./types";

// Revolut — premium consumer fintech. True-black storytelling canvas, white-pill
// primary CTA, oversized Aeonik Pro 500 at 80–136px, scarce cobalt-violet stamp
// reserved for the featured plan card. Depth via product-mockup atmospheric glow
// rather than shadows. Source: fintech-and-crypto/revolut.md.
const revolut: BrandTheme = {
  schemaVersion: 1,
  slug: "revolut",
  name: "Revolut",
  description: "Black canvas, white-pill CTA, Aeonik Pro editorial, scarce cobalt-violet plan-card stamp.",
  polarity: "dark",

  colors: {
    canvas:    "oklch(0 0 0)",          // #000000 — true black (never near-black)
    surface:   "oklch(0.07 0 0)",       // #0a0a0a — surface-deep, inset card bands
    raised:    "oklch(0.14 0.003 256)", // #16181a — surface-elevated, plan cards
    ink:       "oklch(1 0 0)",          // #ffffff — on-dark primary text
    muted:     "oklch(0.75 0 0)",       // rgba(255,255,255,0.72) solid equiv over black
    hairline:  "oklch(0.20 0 0)",       // rgba(255,255,255,0.12) solid equiv — subtle divider
    primary:   "oklch(0.46 0.23 265)",  // #494fdf — cobalt violet (plan-card featured, brand stamp)
    onPrimary: "oklch(1 0 0)",          // #ffffff
    accent:    "oklch(0.72 0.18 265)",  // cobalt hue lightened to L 0.72 for dark-canvas legibility
  },

  fonts: {
    display: {
      stack: '"Aeonik Pro", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 700] },
      weight: 500,
      tracking: "-0.02em",
    },
    body: {
      stack: '"Inter", system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600] },
      weight: 400,
    },
  },

  type: {
    navUppercase:   false,
    buttonUppercase: false,
    tabularNumbers: true,
  },

  radius: {
    button: "9999px", // {rounded.full} — every button and pill
    card:   "20px",   // {rounded.lg}  — feature and plan cards
    input:  "12px",   // {rounded.md}  — text inputs and download tiles
    chip:   "9999px", // {rounded.full} — sub-nav pills, badge-tag
  },

  density: "cinematic", // 88–120px section padding, 136px display type at hero

  buttons: {
    primary:   { bg: "oklch(1 0 0)", color: "oklch(0 0 0)" },                             // white pill / black text — the hero CTA
    secondary: { bg: "transparent", color: "oklch(1 0 0)", border: "oklch(1 0 0)" },      // outline-dark on black canvas
  },

  elevation: "border", // no drop-shadow; depth via colour-blocking + surface-luminance shifts

  layout: {
    hero:    "cinema",    // full-bleed dark hero band, product mockup as the section
    cta:     "band",      // planning / pricing section is a full-width dark band
    preview: "media",     // phone / card / terminal mockup full-bleed, no surrounding chrome
  },

  signature: {
    kind:      "glow",
    accent:    "oklch(0.46 0.23 265)",
    intensity: "medium",
    note:      "Product mockup hero — phone or card asset against true black; device atmospheric glow is the only depth layer, no gradients added.",
  },
};

export default revolut;
