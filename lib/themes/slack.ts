import type { BrandTheme } from "./types";

// Slack — workplace messaging. Signature: deep aubergine primary (#4A154B), pastel-
// mesh cream-lavender hero, over-padded pill CTAs, Salesforce Avant Garde display +
// Salesforce Sans body (both proprietary → Inter substitute), 4-color logo tiles as
// decorative accent. Source: productivity-and-saas/slack.md.
const slack: BrandTheme = {
  schemaVersion: 1,
  slug: "slack",
  name: "Slack",
  description: "Workplace messaging — aubergine CTA, pastel-mesh hero, over-padded pill buttons.",
  polarity: "light",
  colors: {
    canvas:    "oklch(1 0 0)",               // white #ffffff
    surface:   "oklch(0.94 0.015 70)",       // canvas-cream #f4ede4 — feature bands
    raised:    "oklch(1 0 0)",               // white cards; depth via soft shadow
    ink:       "oklch(0.19 0 0)",            // near-black #1d1d1d
    muted:     "oklch(0.47 0 0)",            // mid-gray #696969
    hairline:  "oklch(0.91 0 0)",            // #e6e6e6
    primary:   "oklch(0.27 0.17 327)",       // aubergine #4A154B
    onPrimary: "oklch(1 0 0)",               // white on aubergine
    accent:    "oklch(0.44 0.13 248)",       // link-blue #1264a3 — only chromatic alt
    heroCanvas: "oklch(0.96 0.025 313)",     // canvas-lavender #f9f0ff — hero tint
    heroInk:    "oklch(0.19 0 0)",
    heroMuted:  "oklch(0.47 0 0)",
  },
  fonts: {
    display: {
      stack: '"Salesforce Avant Garde", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [600, 700] },
      weight: 700,
      tracking: "-0.02em",  // brand pulls tight on 32–64px display sizes
    },
    body: {
      stack: '"Salesforce Sans", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "9999px",  // pill (90px brand-spec) — non-negotiable shape
    card:   "16px",    // xl — pricing and feature cards
    input:  "4px",     // sm — form text inputs
    chip:   "9999px",  // pill — eyebrow chips
  },
  density: "standard",
  buttons: {
    primary: {
      bg:    "oklch(0.27 0.17 327)",  // aubergine fill
      color: "oklch(1 0 0)",          // white label
    },
    secondary: {
      bg:    "oklch(0.96 0.025 313)", // canvas-lavender fill — soft echo of primary
      color: "oklch(0.19 0 0)",       // ink label
    },
  },
  elevation: "soft",  // rgba(0,0,0,0.1) box-shadow lift per DESIGN.md
  layout: {
    hero:    "split",      // headline left, floating product UI mockup right
    cta:     "band",       // full-bleed aubergine closing band
    preview: "dashboard",  // product UI composites above pastel-mesh gradient
  },
  signature: {
    kind:     "color-tiles",
    accent:   "oklch(0.69 0.17 163)",  // Slack green  #2EB67D
    accent2:  "oklch(0.77 0.13 208)",  // Slack blue   #36C5F0
    intensity: "medium",
    note: "Four-color logo palette (green/blue/red #E01E5A/yellow #ECB22E) on aubergine and cream-lavender pastel-mesh backdrop.",
  },
};

export default slack;
