import type { BrandTheme } from "./types";

// Cal.com — open scheduling platform. Signature: white canvas, near-black CTA,
// Cal Sans display type with negative tracking, product UI fragments shown in-card,
// dark near-black footer as the only dark surface on every page.
// Source: productivity-and-saas/cal.md.
const cal: BrandTheme = {
  schemaVersion: 1,
  slug: "cal",
  name: "Cal.com",
  description: "Open scheduling — near-black CTA, Cal Sans geometric display, product UI in-card.",

  polarity: "light",

  colors: {
    canvas:    "oklch(1 0 0)",             // #ffffff — page floor
    surface:   "oklch(0.98 0.003 240)",    // #f8f9fa surface-soft — nav-pill bg, soft dividers
    raised:    "oklch(0.97 0 0)",          // #f5f5f5 surface-card — feature/testimonial cards
    ink:       "oklch(0.15 0 0)",          // #111111 — headlines + primary text
    muted:     "oklch(0.56 0.02 250)",     // #6b7280 — secondary text, sub-heads, captions
    hairline:  "oklch(0.93 0.007 247)",    // #e5e7eb — 1px borders on inputs, dividers
    primary:   "oklch(0.15 0 0)",          // #111111 — near-black CTA (not blue)
    onPrimary: "oklch(1 0 0)",             // #ffffff
    accent:    "oklch(0.60 0.20 264)",     // #3b82f6 — blue, used sparely for inline links
  },

  fonts: {
    display: {
      stack: '"Cal Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      source: { kind: "google", family: "Cal Sans", weights: [600] },
      weight: 600,
      tracking: "-0.03em", // brand voice: geometric, slightly condensed, never without negative tracking
    },
    body: {
      stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      stack: '"JetBrains Mono", ui-monospace, "Cascadia Code", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },

  radius: {
    button: "8px",    // rounded.md — standard CTA and inputs
    card:   "12px",   // rounded.lg — feature/testimonial/pricing cards
    input:  "8px",    // rounded.md — text inputs
    chip:   "9999px", // rounded.pill — nav-pill-group, badge pills
  },

  density: "standard", // 96px section rhythm — modern-SaaS standard

  buttons: {
    primary:   { bg: "oklch(0.15 0 0)",         color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)",             color: "oklch(0.15 0 0)", border: "oklch(0.93 0.007 247)" },
  },

  elevation: "soft", // faint drop shadows on raised cards; surface-card color does most of the elevation work

  layout: {
    hero:    "split",     // 7/5 grid: h1 + sub-head + buttons left, app-mockup card right
    cta:     "card",      // cta-band-light: rounded light-gray card (not full-bleed band)
    preview: "dashboard", // product UI fragments — calendar widget, scheduling form, integration grid
  },

  signature: {
    kind:      "grid",
    accent:    "oklch(0.93 0.007 247)", // hairline tone — barely-there calendar grid
    intensity: "subtle",
    note:      "Faint calendar-grid lines behind the hero; scheduling motif at very low opacity, near-invisible.",
  },
};

export default cal;
