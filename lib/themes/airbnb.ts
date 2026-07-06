import type { BrandTheme } from "./types";

// Airbnb — consumer marketplace. Signature: pure-white canvas, single Rausch coral (#ff385c)
// CTA, photography-first card grid, softly rounded everywhere, Airbnb Cereal VF
// (substitute Inter). Source: e-commerce-and-retail/airbnb.md.
const airbnb: BrandTheme = {
  schemaVersion: 1,
  slug: "airbnb",
  name: "Airbnb",
  description: "Warm consumer marketplace — pure-white canvas, Rausch coral CTA, photography-first card grid.",
  polarity: "light",
  colors: {
    canvas:    "oklch(1 0 0)",           // #ffffff — page floor
    surface:   "oklch(0.97 0 0)",        // #f7f7f7 surface-soft — alt bands, filter strip
    raised:    "oklch(1 0 0)",           // #ffffff — cards sit on white (elevation from shadow only)
    ink:       "oklch(0.18 0 0)",        // #222222 near-black headlines + body
    muted:     "oklch(0.48 0 0)",        // #6a6a6a secondary labels, inactive tabs, footer sub-labels
    hairline:  "oklch(0.88 0 0)",        // #dddddd search-bar dividers, card borders, footer separators
    primary:   "oklch(0.62 0.23 12)",    // #ff385c Rausch — the single brand voltage
    onPrimary: "oklch(1 0 0)",           // #ffffff white on Rausch CTA
    accent:    "oklch(0.62 0.23 12)",    // #ff385c Rausch — inline links and emphasis
  },
  fonts: {
    display: {
      stack: '"Airbnb Cereal VF", Circular, "Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500, 600, 700] },
      weight: 600,
      tracking: "-0.01em",             // slight negative tracking on large display tiers
    },
    body: {
      stack: '"Airbnb Cereal VF", Circular, "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
  },
  type: {
    navUppercase:    false,             // nav links ("Homes", "Experiences") are sentence case
    buttonUppercase: false,             // CTAs ("Reserve", "Continue") are sentence case
    tabularNumbers:  false,
  },
  radius: {
    button: "8px",                      // rounded.sm — primary and secondary CTAs
    card:   "14px",                     // rounded.md — property and experience cards
    input:  "8px",                      // rounded.sm — text inputs
    chip:   "9999px",                   // rounded.full — pill search bar, category strip, orbs
  },
  density: "standard",                  // 64px section bands, 16px card gutters — marketplace rhythm
  buttons: {
    primary:   { bg: "oklch(0.62 0.23 12)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)", color: "oklch(0.18 0 0)", border: "oklch(0.18 0 0)" },
  },
  elevation: "soft",                    // single shadow tier (on hover float + dropdowns); flat baseline
  layout: {
    hero:    "centered",                // centered search-bar hero with background photography
    cta:     "band",                    // simple white-canvas CTA bands
    preview: "media",                   // photography-forward card/media presentation
  },
  signature: {
    kind:      "cinema-photo",
    accent:    "oklch(0.62 0.23 12)",   // Rausch coral as the search orb / CTA voltage
    intensity: "medium",
    note:      "Photography-first surfaces — softly rounded cards, white canvas, Rausch coral search orb and CTAs.",
  },
};

export default airbnb;
