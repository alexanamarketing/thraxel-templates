import type { BrandTheme } from "./types";

// Cursor — AI code editor. Signature: warm cream editorial canvas (#f7f7f4), scarce
// Cursor Orange CTA, AI-timeline pastel palette (peach/mint/blue/lavender/gold),
// CursorGothic weight-400 display with negative tracking, JetBrains Mono on every
// code surface, hairline-only depth (no drop shadows). Source: developer-tools-and-ides/cursor.md.
const cursor: BrandTheme = {
  schemaVersion: 1,
  slug: "cursor",
  name: "Cursor",
  description: "AI code editor — warm cream editorial canvas, scarce Cursor Orange, weight-400 magazine type.",
  polarity: "light",
  colors: {
    canvas: "oklch(0.97 0.004 90)",     // #f7f7f4 warm cream page floor
    surface: "oklch(0.985 0.003 90)",   // #fafaf7 canvas-soft (IDE pane bg)
    raised: "oklch(1 0 0)",             // #ffffff surface-card (white cards on cream)
    ink: "oklch(0.21 0.013 90)",        // #26251e warm near-black display + body emphasis
    muted: "oklch(0.54 0.014 90)",      // #807d72 sub-titles / secondary text
    hairline: "oklch(0.91 0.006 90)",   // #e6e5e0 1px divider (no shadows)
    primary: "oklch(0.63 0.22 40)",     // #f54e00 Cursor Orange CTA + wordmark (used scarcely)
    onPrimary: "oklch(1 0 0)",          // #ffffff white text on Cursor Orange
    accent: "oklch(0.63 0.22 40)",      // #f54e00 links / eyebrows (same as primary)
  },
  fonts: {
    display: {
      stack: '"CursorGothic", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600] },
      weight: 400,
      tracking: "-0.03em", // -2.16px at 72px display-mega; magazine voice, never bold
    },
    body: {
      stack: '"CursorGothic", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      stack: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    displayUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "8px",    // rounded.md — developer-dialect compact radius
    card: "12px",     // rounded.lg
    input: "8px",
    chip: "9999px",   // pill — timeline badges
  },
  density: "standard", // 80px section rhythm, editorial pacing
  buttons: {
    primary: {
      bg: "oklch(0.63 0.22 40)",
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "oklch(1 0 0)",
      color: "oklch(0.21 0.013 90)",
      border: "oklch(0.83 0.007 90)", // #cfcdc4 hairline-strong
    },
  },
  elevation: "border", // hairline-only — no drop shadows anywhere in the system
  layout: {
    hero: "centered",   // full-width cream band + centered headline + IDE mockup below
    cta: "band",        // cta-band pre-footer, canvas background, single Cursor Orange CTA
    preview: "terminal", // multi-pane IDE mockup with JetBrains Mono code surfaces
  },
  signature: {
    kind: "color-tiles",
    accent: "oklch(0.76 0.07 45)",   // #dfa88f peach — timeline-thinking
    accent2: "oklch(0.78 0.06 155)", // #9fc9a2 mint — timeline-grep
    intensity: "subtle",
    note: "AI-action stage pastel palette (peach, mint, blue, lavender, gold) — Cursor's signature visual identity inside agent timeline visualizations.",
  },
};

export default cursor;
