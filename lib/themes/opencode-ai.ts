import type { BrandTheme } from "./types";

// OpenCode — terminal-native AI coding agent. Signature: warm cream canvas, 100%
// Berkeley Mono (zero sans-serif), near-black as the only "color," ASCII bracket
// markers as bullets, flat-on-cream elevation with a single full-bleed dark TUI
// mockup as the hero centerpiece. Source: ai-and-llm-platforms/opencode.ai.md.
const opencodeAi: BrandTheme = {
  schemaVersion: 1,
  slug: "opencode-ai",
  name: "OpenCode",
  description: "The open-source AI coding agent — Berkeley Mono on cream, no gradients, no sans-serif.",
  polarity: "light",

  colors: {
    canvas:   "oklch(0.992 0.002 60)",           // #fdfcfc warm cream — only body background
    surface:  "oklch(0.974 0.003 30)",            // #f8f7f7 soft surface (inputs, testimonials)
    raised:   "oklch(0.952 0.006 20)",            // #f1eeee surface-card (install snippet, disabled)
    ink:      "oklch(0.175 0.012 22)",            // #201d1d near-black; brand's only "color"
    muted:    "oklch(0.46 0.006 22)",             // #646262 tab labels, metadata, footer links
    hairline: "oklch(0.175 0.012 22 / 0.12)",    // rgba(15,0,0,0.12) warm translucent 1px rule
    primary:  "oklch(0.175 0.012 22)",            // #201d1d ink is the CTA fill
    onPrimary:"oklch(0.992 0.002 60)",            // #fdfcfc cream on dark button
    accent:   "oklch(0.175 0.012 22)",            // ink — marketing chrome is monochrome; Apple Blue reserved for in-TUI
    // Hero band uses the dark TUI mockup surface
    heroCanvas:"oklch(0.175 0.012 22)",           // #201d1d surface-dark (hero TUI frame)
    heroInk:   "oklch(0.992 0.002 60)",           // #fdfcfc on-dark text
    heroMuted: "oklch(0.64 0.005 22)",            // #9a9898 ash — keybinding hints on dark
  },

  fonts: {
    display: {
      stack: '"Berkeley Mono", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400, 500, 700] },
      weight: 700,
      tracking: "0",
    },
    body: {
      stack: '"Berkeley Mono", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      // Same face — mono role drives the terminal preview block
      stack: '"Berkeley Mono", "JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400, 500] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    buttonTracking: "0",
    tabularNumbers: false,
  },

  radius: {
    button: "4px",    // rounded.sm — every interactive element
    card:   "0px",    // rounded.none — all containers; the system draws sharp rectangles
    input:  "4px",
    chip:   "9999px", // rounded.full — testimonial avatar circles only
  },

  density: "spacious", // 96px section rhythm; content is left-flush with no internal indentation

  buttons: {
    primary: {
      bg:    "oklch(0.175 0.012 22)",
      color: "oklch(0.992 0.002 60)",
    },
    secondary: {
      bg:     "oklch(0.992 0.002 60)",
      color:  "oklch(0.175 0.012 22)",
      border: "oklch(0.46 0.006 22)", // hairline-strong (#646262)
    },
  },

  elevation: "border", // 1px hairline rules only; no shadows, no raised surfaces

  layout: {
    hero:    "centered",   // single-column reading with dark TUI mockup as centerpiece
    cta:     "card",       // dark surface-dark pill/card treatment for CTAs
    preview: "terminal",   // the hero-tui-mockup is the brand's signature preview format
  },

  signature: {
    kind:      "scanlines",
    accent:    "oklch(0.175 0.012 22)",  // surface-dark near-black
    intensity: "subtle",
    note:      "Full-bleed dark TUI mockup with block-pixel ASCII wordmark; cream canvas stays flat everywhere else.",
  },
};

export default opencodeAi;
