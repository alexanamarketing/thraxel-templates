import type { BrandTheme } from "./types";

// Ollama — local-LLM/CLI platform. Signature: paper-white canvas, pure-black pill
// CTAs, hand-drawn llama mascot as sole ornament, SF Pro Rounded display + system
// sans body + system mono code. Source: ai-and-llm-platforms/ollama.md.
const ollama: BrandTheme = {
  schemaVersion: 1,
  slug: "ollama",
  name: "Ollama",
  description: "The design IS the documentation — pure-black pills on paper-white, system fonts, hand-drawn llama.",
  polarity: "light",

  colors: {
    canvas:    "oklch(1 0 0)",       // #ffffff — page itself, end-to-end
    surface:   "oklch(0.982 0 0)",   // #fafafa — install-snippet/search-pill background
    raised:    "oklch(1 0 0)",       // #ffffff — cards use hairline border, not lift
    ink:       "oklch(0 0 0)",       // #000000 — headlines, nav links, button text
    muted:     "oklch(0.53 0 0)",    // #737373 — paragraph copy, FAQ answers, footer
    hairline:  "oklch(0.91 0 0)",    // #e5e5e5 — 1px card borders, dividers
    primary:   "oklch(0 0 0)",       // #000000 — every CTA pill; the single brand color
    onPrimary: "oklch(1 0 0)",       // #ffffff
    accent:    "oklch(0 0 0)",       // #000000 — inline links (underlined, no hue)
  },

  fonts: {
    display: {
      stack: '"SF Pro Rounded", "Nunito", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Nunito", weights: [500, 600] },
      weight: 500,
      // letterSpacing 0 across all type tokens; omit tracking
    },
    body: {
      stack: 'ui-sans-serif, "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "system" },
      weight: 400,
    },
    mono: {
      stack: 'ui-monospace, "JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase:    false,
    navTracking:     "0",
    buttonUppercase: false,
    buttonTracking:  "0",
    tabularNumbers:  false,
  },

  radius: {
    button: "9999px",  // {rounded.full} — every interactive element is a pill
    card:   "12px",    // {rounded.lg}  — the only non-pill surface (pricing/terminal cards)
    input:  "9999px",  // text-input and search-pill are also full pills
    chip:   "9999px",  // command-tag pills
  },

  density: "spacious", // 88px section spacing; whitespace IS the layout

  buttons: {
    primary:   { bg: "oklch(0 0 0)",       color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(1 0 0)",       color: "oklch(0 0 0)",
                 border: "oklch(0.86 0 0)" }, // #d4d4d4 hairline-strong
  },

  elevation: "border", // 1px {colors.hairline} only — no shadows, no lifts

  layout: {
    hero:    "centered",   // single narrow reading column, center-aligned headline
    cta:     "band",       // dark {surface-dark} CTA strip at page close
    preview: "terminal",   // terminal-card with macOS traffic-light dots
  },

  signature: {
    kind:      "linework",
    accent:    "oklch(0 0 0)",
    intensity: "subtle",
    note:      "Hand-drawn llama mascot (line illustration) is the sole ornament; no gradients, shadows, or atmospheric backgrounds.",
  },
};

export default ollama;
