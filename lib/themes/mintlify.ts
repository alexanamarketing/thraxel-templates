import type { BrandTheme } from "./types";

// Mintlify — docs infrastructure. Signature: atmospheric sky-blue to cream gradient
// hero band, signature mint (#00d4a4) reserved for accent CTAs and active states,
// black-pill primary buttons, Inter + Geist Mono pairing, flat-border card system.
// Source: productivity-and-saas/mintlify.md.
const mintlify: BrandTheme = {
  schemaVersion: 1,
  slug: "mintlify",
  name: "Mintlify",
  description: "Documentation infrastructure — atmospheric sky gradient, signature mint accent, developer-grade Inter + Geist Mono.",
  polarity: "light",
  colors: {
    canvas: "oklch(1 0 0)",              // #ffffff — primary page background
    surface: "oklch(0.97 0 0)",          // #f7f7f7 — subtle section bands
    raised: "oklch(1 0 0)",              // #ffffff — cards use canvas + hairline border
    ink: "oklch(0.09 0 0)",              // #0a0a0a — primary text and CTA fill
    muted: "oklch(0.72 0.002 270)",      // #a8a8aa — de-emphasized labels, sidebar inactive
    hairline: "oklch(0.91 0 0)",         // #e5e5e5 — 1px borders and dividers
    primary: "oklch(0.09 0 0)",          // #0a0a0a — dominant black-pill CTA
    onPrimary: "oklch(1 0 0)",           // #ffffff — white text on black button
    accent: "oklch(0.77 0.15 168)",      // #00d4a4 — signature Mintlify mint green
    heroCanvas: "oklch(0.68 0.05 228)",  // #87a8c8 — sky-blue top of hero gradient
    heroInk: "oklch(1 0 0)",             // white on sky hero band
    heroMuted: "oklch(0.88 0.02 228)",   // soft off-white for hero subtext
  },
  fonts: {
    display: {
      stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600] },
      weight: 600,
      tracking: "-0.03em", // mirrors hero-display -2px at 72px; progresses to 0 at smaller sizes
    },
    body: {
      stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"Geist Mono", "SF Mono", Menlo, Consolas, "Courier New", monospace',
      source: { kind: "google", family: "Geist Mono", weights: [400, 500] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "9999px", // pill-full — used universally on all CTAs
    card: "12px",     // rounded.lg — consistent across all cards
    input: "8px",     // rounded.md — inputs, search pill, code blocks
    chip: "9999px",   // pill badges and tabs
  },
  density: "standard",
  buttons: {
    primary: {
      bg: "oklch(0.09 0 0)",
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "transparent",
      color: "oklch(0.09 0 0)",
      border: "oklch(0.91 0 0)", // hairline border outlined pill
    },
  },
  elevation: "border", // predominantly flat; hairline borders on cards, deep diffuse shadow only on hero product mockup
  layout: {
    hero: "centered",    // centered headline + subtitle + CTA row, docs mockup below
    cta: "band",         // full-width gradient or dark teal band for secondary CTAs
    preview: "dashboard", // docs dashboard: sidebar / prose / TOC column layout
  },
  signature: {
    kind: "gradient-mesh",
    accent: "oklch(0.68 0.05 228)",  // sky-blue (#87a8c8)
    accent2: "oklch(0.77 0.15 168)", // Mintlify mint (#00d4a4)
    intensity: "medium",
    note: "Atmospheric sky-blue to soft cream gradient hero band with cloud illustration; mint used scarcely for accent CTA and active states.",
  },
};

export default mintlify;
