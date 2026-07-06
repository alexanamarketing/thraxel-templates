import type { BrandTheme } from "./types";

// Lovable — AI app-builder. Signature: warm cream parchment canvas, Camera Plain Variable
// typeface with humanist warmth, charcoal CTA with inset-shadow tactility, barely-visible
// gradient-mesh wash (coral, peach, soft sky) as decorative hero layer.
// Source: developer-tools-and-ides/lovable.md.
const lovable: BrandTheme = {
  schemaVersion: 1,
  slug: "lovable",
  name: "Lovable",
  description: "Warm parchment canvas, humanist Camera Plain type, charcoal CTA, barely-visible coral gradient wash.",
  polarity: "light",
  colors: {
    canvas:    "oklch(0.97 0.012 87)",  // #f7f4ed — warm cream; the brand's identity
    surface:   "oklch(0.95 0.011 87)",  // slightly deeper cream for alt section bands
    raised:    "oklch(0.97 0.012 87)",  // cards share canvas cream; borders define edges
    ink:       "oklch(0.19 0 0)",        // #1c1c1c — warm near-black charcoal
    muted:     "oklch(0.44 0.004 85)",  // #5f5f5d — secondary text / captions
    hairline:  "oklch(0.93 0.009 87)",  // #eceae4 — warm passive border / divider
    primary:   "oklch(0.19 0 0)",        // #1c1c1c — charcoal CTA fill
    onPrimary: "oklch(0.99 0.004 87)",  // #fcfbf8 — near-white text on dark
    accent:    "oklch(0.19 0 0)",        // charcoal for links/emphasis; no saturated accent by design
  },
  fonts: {
    display: {
      stack: '"Camera Plain Variable", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Plus Jakarta Sans", weights: [400, 600] },
      weight: 600,
      tracking: "-0.025em",  // ≈ -1.5px at 60px; compress headlines into editorial statements
    },
    body: {
      stack: '"Camera Plain Variable", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Plus Jakarta Sans", weights: [400, 600] },
      weight: 400,
    },
  },
  type: {
    navUppercase:    false,
    buttonUppercase: false,
    tabularNumbers:  false,
  },
  radius: {
    button: "6px",     // rectangular buttons use 6px — not pill; pill is only for toggle/icon
    card:   "12px",
    input:  "6px",
    chip:   "9999px",  // action pills / icon toggles only
  },
  density: "spacious",
  buttons: {
    primary: {
      bg:    "oklch(0.19 0 0)",
      color: "oklch(0.99 0.004 87)",
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.19 0 0)",
      border: "oklch(0.19 0 0 / 0.4)",  // rgba(28,28,28,0.4) interactive outline
    },
  },
  elevation: "border",  // containment via #eceae4 borders, no drop-shadows on cards
  layout: {
    hero:    "centered",   // single-column, massive vertical padding
    cta:     "band",
    preview: "card",       // template-gallery card grid
  },
  signature: {
    kind:      "gradient-mesh",
    accent:    "oklch(0.82 0.10 15)",   // warm coral/salmon
    accent2:   "oklch(0.86 0.07 55)",   // warm peach/amber
    intensity: "subtle",
    note:      "Barely-visible warm gradient wash (coral, peach, soft sky) floats behind the hero on cream.",
  },
};

export default lovable;
