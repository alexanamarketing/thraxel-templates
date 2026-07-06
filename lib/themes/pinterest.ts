import type { BrandTheme } from "./types";

// Pinterest — media discovery platform. Signature: warm-cream canvas, masonry
// pin-card grid in 16px-radius tiles, scarce Pinterest Red CTA, Pin Sans proprietary
// typography with -0.017em display tracking, no card shadows. Source: media-and-consumer-tech/pinterest.md.
const pinterest: BrandTheme = {
  schemaVersion: 1,
  slug: "pinterest",
  name: "Pinterest",
  description: "Discovery-first — warm cream canvas, masonry imagery tiles, scarce red CTA, 16px-radius everywhere.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",                  // #ffffff — true white base
    surface: "oklch(0.99 0.003 80)",         // #fbfbf9 — faint cream wash for alt sections
    raised: "oklch(0.97 0.006 80)",          // #f6f6f3 — warm cream pin-card and feature-card background
    ink: "oklch(0 0 0)",                     // #000000 — headlines, nav links, button labels
    muted: "oklch(0.49 0.01 110)",           // #62625b — metadata, footer links, secondary captions
    hairline: "oklch(0.88 0.006 100)",       // #dadad3 — 1px row dividers, footer column rules
    primary: "oklch(0.58 0.24 26)",          // #e60023 — Pinterest Red; only CTA, wordmark, active-tab
    onPrimary: "oklch(1 0 0)",              // #ffffff — text on Pinterest Red
    accent: "oklch(0.58 0.24 26)",          // #e60023 — links/emphasis; same as primary per system policy
  },
  fonts: {
    display: {
      stack: '"Pin Sans", "Manrope", "Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Manrope", weights: [400, 600, 700] },
      weight: 600,
      tracking: "-0.017em",   // -1.2px at 70px per display-xl spec
    },
    body: {
      stack: '"Pin Sans", "Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 600, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
  },
  radius: {
    button: "16px",    // rounded.md — standard for all primary/secondary buttons
    card: "16px",      // rounded.md — pin-card and feature-card; large pin cards use 32px (out of schema scope)
    input: "16px",     // rounded.md — text-input; search bar is pill but that's a distinct component
    chip: "9999px",    // rounded.full — filter chips, search bar, pin-overlay pills, icon circles
  },
  density: "standard",
  buttons: {
    primary: { bg: "oklch(0.58 0.24 26)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(0.92 0.007 100)", color: "oklch(0 0 0)" },   // #e5e5e0 secondary-bg, #000000 on-secondary
  },
  elevation: "none",   // dominant treatment is flat — no shadows on pin cards or feature cards
  layout: {
    hero: "centered",     // large centered headline ("Create the life you love on Pinterest")
    cta: "band",          // dark hero-cta-strip band on creator pages; sticky red CTA always visible
    preview: "media",     // masonry pin-card grid is the load-bearing visual element
  },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.58 0.24 26)",   // Pinterest Red — CTA anchors
    accent2: "oklch(0.97 0.006 80)", // warm cream tile surface
    intensity: "medium",
    note: "Masonry pin-card grid — 16px-radius warm-cream tiles carry photography; red reserved for Sign-up CTA and wordmark only.",
  },
};

export default pinterest;
