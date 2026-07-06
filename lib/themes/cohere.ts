import type { BrandTheme } from "./types";

// Cohere — enterprise AI command center. Signature: white editorial canvas with
// deep green product bands, near-black pill CTAs, CohereText display at -0.02em,
// Unica77 body, coral taxonomy chips, thin-line geometric linework.
// Source: ai-and-llm-platforms/cohere.md.
const cohere: BrandTheme = {
  schemaVersion: 1,
  slug: "cohere",
  name: "Cohere",
  description: "Enterprise AI command center — white editorial canvas, near-black pill CTAs, deep green product bands.",
  polarity: "light",

  colors: {
    // Canvas white (#ffffff)
    canvas: "oklch(1 0 0)",
    // Soft Stone (#eeece7) — warm neutral surface for product cards, alt bands
    surface: "oklch(0.94 0.008 85)",
    // Cards sit on white canvas; elevation "border" distinguishes them
    raised: "oklch(1 0 0)",
    // Ink (#212121) — neutral near-black body text
    ink: "oklch(0.19 0 0)",
    // Muted Slate (#93939f) — footer links, dates, metadata
    muted: "oklch(0.63 0.012 280)",
    // Hairline (#d9d9dd) — standard list rules, section dividers
    hairline: "oklch(0.88 0.005 280)",
    // Near-Black Primary (#17171c) — pill CTAs, dark footer, UI cards
    primary: "oklch(0.15 0.01 280)",
    onPrimary: "oklch(1 0 0)",
    // Action Blue (#1863dc) — editorial links, pagination, secondary emphasis
    accent: "oklch(0.47 0.22 263)",
  },

  fonts: {
    display: {
      // CohereText (proprietary) → Space Grotesk (Google, named in DESIGN.md fallback chain)
      stack: '"CohereText", "Space Grotesk", "Inter", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Space Grotesk", weights: [400] },
      weight: 400,
      // -1.92px at 96px ≈ -0.02em; monumental tight-carved hero headlines
      tracking: "-0.02em",
    },
    body: {
      // Unica77 Cohere Web (proprietary) → Inter (Google, named in DESIGN.md fallback chain)
      stack: '"Unica77 Cohere Web", "Inter", "Arial", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      // CohereMono (proprietary) → JetBrains Mono for technical labels and product console
      stack: '"CohereMono", "JetBrains Mono", ui-monospace, monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400] },
      weight: 400,
      // +0.28px at 14px ≈ +0.02em; uppercase mono category markers
      tracking: "0.02em",
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },

  radius: {
    // 32px pill — primary CTA "Request a demo" / "Submit" buttons
    button: "32px",
    // 8px sm — blog cards, product cards, small media; major media cards use 22px
    card: "8px",
    // 4px xs — search fields, form inputs, utility elements
    input: "4px",
    // 30px xl — research filter pills, topic tags, taxonomy controls
    chip: "30px",
  },

  // Dramatic vertical breathing room; trust logos far below hero, wide band spacing
  density: "spacious",

  buttons: {
    // Near-black pill on light surfaces
    primary: { bg: "oklch(0.15 0.01 280)", color: "oklch(1 0 0)" },
    // Text-link style: no fill, no border — "Explore products", secondary hero actions
    secondary: { bg: "transparent", color: "oklch(0.19 0 0)" },
  },

  // Mostly flat; depth from surface alternation, rounded corners, and thin borders only
  elevation: "border",

  layout: {
    // Centered typographic declaration above two-card media composition
    hero: "centered",
    // Full-width dark-feature-band (deep green / navy) for product capabilities
    cta: "band",
    // Agent-console mockup: dark panel with status chips, integration badges, prompt fields
    preview: "dashboard",
  },

  signature: {
    // Thin-line geometric illustrations on capability cards; structured line aesthetic
    kind: "linework",
    // Coral (#ff7759) — blog taxonomy chips, warm editorial accent
    accent: "oklch(0.70 0.19 27)",
    // Deep Enterprise Green (#003c33) — Command / North product band anchor
    accent2: "oklch(0.23 0.07 163)",
    intensity: "subtle",
    note: "Thin-line geometric linework; coral editorial chips and deep enterprise green as structural accent fields on white canvas.",
  },
};

export default cohere;
