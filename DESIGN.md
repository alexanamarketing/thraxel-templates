# DESIGN.md: thraxel-templates (the shell)

The design system for the gallery SHELL only. Each of the 71 template pages uses its own design language (lib/themes/); this file governs the gallery wrapper (navbar, hero, category sections, cards, footer). Kept in sync with app/globals.css and app/layout.tsx.

## Scene

A quiet museum print room: pale tinted paper, graphite labels, measured spacing, one restrained editorial accent, so the 71 brand treatments remain the artwork. Light theme, chosen deliberately (a neutral gallery wall reads brand designs more truthfully than a dark chrome would).

## Color (OKLCH, tinted toward hue 220-245, never pure black/white)

Color strategy: restrained. Tinted neutrals plus a single accent used only for the active category, focus rings, and primary links (well under 10% of surface).

- `--canvas: oklch(0.975 0.008 220)` page background
- `--surface: oklch(0.945 0.010 220)` sunken sections
- `--raised: oklch(0.990 0.006 220)` cards
- `--ink: oklch(0.220 0.018 245)` primary text
- `--muted: oklch(0.480 0.020 245)` secondary text
- `--hairline: oklch(0.850 0.012 225)` borders, 1px
- `--accent: oklch(0.560 0.080 165)` links, focus, active category
- `--accent-ink: oklch(0.330 0.070 165)` accent text on canvas (contrast-safe)

Contrast: ink on canvas and muted on canvas both meet WCAG AA; accent-ink is the accessible link/label variant.

## Typography

- Display: Source Serif 4 (next/font), fallback ui-serif, Georgia, serif. Used for hero H1, section headings, brand-name card titles.
- UI/body: Inter (next/font), fallback system-ui, sans-serif. Everything else.
- Body measure capped at 68ch.
- Scale: 1.25 ratio. Steps (rem): 0.8, 0.9, 1.0, 1.125, 1.406, 1.757, 2.197, 2.747. Headings gain weight (600-700) and tighter tracking; body stays 400-500.
- Numerals: tabular where figures align (none critical in the shell).

## Components

- Navbar: sticky, solid bg-canvas (no blur), hairline bottom border, wordmark left (serif), anchor nav right. Items-stretch layout with min-h-[3.5rem] (56px) so all interactive targets meet WCAG 2.5.5 (>= 44px). Mobile: wordmark + Categories jump link + thraxel.io link always visible at all widths; the How it works link is desktop-only (hidden sm:inline-flex). The CategoryNav chip index below the fold serves as the section-level navigation for mobile users.
- Buttons (.btn): three variants for spec completeness. Primary (accent fill, ink-on-accent text), Secondary (hairline border, ink text), Ghost (text + accent underline on hover). Radius 8px, no gradients. min-height 2.75rem (44px) to meet WCAG 2.5.5.
- Category jump chips (.chip): interactive pill jump-links in CategoryNav. Round pill shape, hairline border, raised background, hover accent state. min-height 2.75rem (44px). Format: "{Label} · {count}".
- Hero: eyebrow (muted, tracked-up, uppercase small), serif H1, body subhead at 68ch, a primary + secondary action row.
- Category section: sticky-ish section label + count, an anchor id, a responsive grid of brand cards.
- Brand card (specimen card): raised surface, hairline border, brand name in serif, category tag (muted uppercase small), one-line design blurb, a "Live" status chip, derived trait chips (muted small labels, not interactive, bg-surface no border, text-muted to distinguish from the interactive .chip pills), and an action row (View template primary button, Actual site outline button if available). Action anchors use min-h-[2.75rem] for tap target compliance. Cards share one grid but vary rhythm by blurb length and derived trait chips. Hover lifts contrast and elevation slightly (no heavy motion).
- Footer: wordmark, one-line description, link groups (Thraxel: thraxel.io, How it works; Categories). Footer link anchors use inline-flex min-h-[2.75rem] items-center for tap target compliance. Legal row at bottom.
- Skip link: visually hidden a[href="#main-content"] as first focusable element in body, appears top-left on focus (accent-ink bg, canvas text, exponential ease-out reveal).

## Accessibility

- Skip-to-content: `<a href="#main-content" class="skip-link">` is the first focusable element in the body; `id="main-content"` is on the main element in both the home page and preview pages.
- Interactive tap targets: all interactive elements meet WCAG 2.5.5 (>= 44px CSS px). Achieved via min-height: 2.75rem on .btn and .chip, inline-flex min-h-[2.75rem] items-center on navbar/footer/card link anchors, and a min-h-[3.5rem] stretch navbar.
- Focus rings: 2px solid accent, 2px offset, 4px radius, on all focusable elements via :where(a, button, [tabindex]):focus-visible.
- Reduced motion: all transitions and animations disabled when prefers-reduced-motion: reduce is set.

## Motion

- Ease-out only (ease-out-quart/expo); no bounce, no elastic. Durations 120-200ms.
- Animate opacity/transform/box-shadow/color, never layout properties.
- All motion respects `prefers-reduced-motion: reduce` (disable transitions, keep focus states).

## Do / Don't

Do: tinted neutrals, one accent, real type hierarchy, full borders, measured whitespace, honest placeholders, solid navbar.

Don't (absolute bans): no side-stripe (border-left) accents; no gradient text; no glassmorphism as default (backdrop-blur is banned on the navbar and all default surfaces); no hero-metric template; no identical-card grids by reflex (vary with metadata + chips); no modal-first; no em dashes or double hyphens in copy; no #000/#fff.
