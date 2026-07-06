import type { BrandTheme } from "./types";

// Meta — hardware commerce. Signature: stark white canvas, cobalt buy-CTA (#0064e0),
// Optimistic VF pill buttons at rounded.full, photography-as-depth on 32px-rounded
// cards, and a cobalt→Oculus-purple infinity gradient-mesh as the corporate brand layer.
// Source: e-commerce-and-retail/meta.md
const meta: BrandTheme = {
  schemaVersion: 1,
  slug: "meta",
  name: "Meta",
  description: "Hardware commerce — white canvas, cobalt buy-CTA, Optimistic VF pill buttons, photography-as-depth cards.",

  polarity: "light",

  colors: {
    canvas:    "oklch(1 0 0)",           // #ffffff
    surface:   "oklch(0.97 0.008 232)",  // #f1f4f7 surface-soft
    raised:    "oklch(1 0 0)",           // white card surface (no lift; border provides depth)
    ink:       "oklch(0.18 0.02 225)",   // #0a1317 ink-deep — primary headlines + body
    muted:     "oklch(0.48 0.025 228)",  // #5d6c7b steel — ~5.1:1 on canvas/surface ✓
    hairline:  "oklch(0.87 0.005 225)",  // #ced0d4 hairline
    primary:   "oklch(0.54 0.21 259)",   // #0064e0 cobalt — brand blue, commerce CTA
    onPrimary: "oklch(1 0 0)",           // white on cobalt — ~5.3:1 ✓
    accent:    "oklch(0.54 0.21 259)",   // cobalt — links, eyebrows, tags
  },

  fonts: {
    display: {
      stack: '"Optimistic VF", "Optimistic", "Montserrat", "Helvetica Neue", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Montserrat", weights: [300, 500, 700] },
      weight: 500,
      tracking: "-0.01em",
    },
    body: {
      stack: '"Optimistic VF", "Optimistic", "Montserrat", "Helvetica Neue", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Montserrat", weights: [400, 700] },
      weight: 400,
    },
  },

  type: {
    navUppercase:   false,
    buttonUppercase: false,
  },

  radius: {
    button: "9999px", // rounded.full — pill is a hard brand rule; never squared
    card:   "32px",   // rounded.xxxl — photographic feature and promo-strip cards
    input:  "8px",    // rounded.lg — form inputs and radio-option containers
    chip:   "9999px", // pill tabs, badges, search pill
  },

  density: "standard",

  buttons: {
    primary: {
      bg:    "oklch(0 0 0)",          // ink-button black — marketing-surface primary
      color: "oklch(1 0 0)",          // white — 21:1 ✓
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.18 0.02 225)", // ink-deep — ghost outline secondary
      border: "oklch(0.18 0.02 225)",
    },
  },

  elevation: "border", // predominantly flat; hairline-soft borders define cards; shadow only on sticky commerce rail

  layout: {
    hero:    "centered", // white canvas + gradient-mesh backdrop with centered copy + dual-CTA pair
    cta:     "band",     // full-width dark promo-strip (card-promo-strip pattern)
    preview: "card",     // card-based feature/configurator grid
  },

  signature: {
    kind:      "gradient-mesh",
    accent:    "oklch(0.54 0.21 259)", // cobalt #0064e0
    accent2:   "oklch(0.50 0.24 307)", // Oculus purple #a121ce
    intensity: "medium",
    note:      "Meta infinity gradient — cobalt blue flowing into Oculus purple across the hero canvas.",
  },
};

export default meta;
