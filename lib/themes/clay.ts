import type { BrandTheme } from "./types";

// Clay — GTM data-orchestration platform. Signature: cream-tinted canvas,
// near-black CTA, saturated single-color feature card tiles (pink / teal /
// lavender / peach / ochre), Plain Black display type at weight 500 with
// tight negative tracking, and 3D claymation illustrations as hero artifacts.
// Source: design-and-creative-tools/clay.md.
const clay: BrandTheme = {
  schemaVersion: 1,
  slug: "clay",
  name: "Clay",
  description: "Playful GTM data platform — cream canvas, near-black CTA, saturated color-tile cards, claymation illustrations.",
  polarity: "light",

  colors: {
    // #fffaf0 — cream-tinted white; the warm differentiator from cool-gray competitors
    canvas: "oklch(0.984 0.012 95)",
    // #faf5e8 — surface-soft; used for footer band and illustrated CTA band
    surface: "oklch(0.972 0.018 93)",
    // #f5f0e0 — surface-card; testimonial cards, secondary feature cards
    raised: "oklch(0.956 0.024 91)",
    // #0a0a0a — near-black; primary headlines and running text
    ink: "oklch(0.065 0 0)",
    // #6a6a6a — medium gray; sub-headings, breadcrumbs, footer body
    muted: "oklch(0.484 0 0)",
    // #e5e5e5 — light gray; 1px card borders and input borders
    hairline: "oklch(0.910 0 0)",
    // #0a0a0a — near-black CTA fill; Clay's primary buttons are dark-navy-black
    primary: "oklch(0.065 0 0)",
    // #ffffff — white on near-black buttons
    onPrimary: "oklch(1 0 0)",
    // #ff4d8b — hot pink; the brand's most recognizable saturated accent,
    // used for eyebrows, tags, and emphasis — sequencer / outbound feature color
    accent: "oklch(0.63 0.22 354)",
  },

  fonts: {
    display: {
      // Plain Black is a custom licensed rounded display face. Inter at weight
      // 500 with tight negative tracking is the closest open-source substitute
      // (documented in the DESIGN.md Known Gaps section).
      stack: '"Plain Black", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500] },
      weight: 500,
      // -2.5px at 72px ≈ -0.035em; matches the DESIGN.md display-xl token
      tracking: "-0.035em",
    },
    body: {
      stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
  },

  type: {
    // Clay nav uses sentence-case Inter, no uppercase treatment
    navUppercase: false,
    navTracking: "0",
    // Buttons use Inter 600, no uppercase, no tracking
    buttonUppercase: false,
    buttonTracking: "0",
    // Data platform — tabular figures suit the CRM / enrichment product context
    tabularNumbers: true,
  },

  radius: {
    // rounded.md (12px) — standard CTA buttons and text inputs
    button: "12px",
    // rounded.lg (16px) — content cards, testimonial, pricing tiers
    card: "16px",
    // rounded.md (12px) — inputs
    input: "12px",
    // rounded.pill — category tabs, badge pills
    chip: "9999px",
  },

  density: "spacious", // 96px section rhythm (spacing.section)

  buttons: {
    // Near-black fill, white label — the unmistakable Clay CTA
    primary: {
      bg: "oklch(0.065 0 0)",
      color: "oklch(1 0 0)",
    },
    // Cream fill, ink label, hairline border — button-secondary / button-on-color
    secondary: {
      bg: "oklch(0.984 0.012 95)",
      color: "oklch(0.065 0 0)",
      border: "oklch(0.910 0 0)",
    },
  },

  // Clay uses hairline borders for depth; no heavy shadows. Saturated card
  // color contrast provides visual lift without drop shadows.
  elevation: "border",

  layout: {
    // Hero: 7-5 split — h1 + sub-headline + CTA left, claymation illustration right
    hero: "split",
    // CTA band: illustrated pre-footer band on surface-soft (surface-soft background)
    cta: "band",
    // Preview: dashboard — shows data tables, agent run logs, CRM enrichment UI
    preview: "dashboard",
  },

  signature: {
    // The defining Clay move: saturated single-color feature cards cycling through
    // the 6-color brand palette. Each card carries an embedded product UI fragment.
    kind: "color-tiles",
    // Hot pink — sequencer / outbound; the most eye-catching tile
    accent: "oklch(0.63 0.22 354)",
    // Deep teal (#1a3a3a) — enterprise / featured pricing tile
    accent2: "oklch(0.27 0.04 180)",
    intensity: "strong",
    note: "Saturated single-color feature cards — pink, teal, lavender, peach, ochre — cycling in order with embedded product UI fragments on each.",
  },
};

export default clay;
