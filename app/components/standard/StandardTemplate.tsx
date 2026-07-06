import Link from "next/link";
import type { CSSProperties } from "react";
import { SIGNALKIT, signalkitCopyHash } from "@/lib/signalkit";
import type { BrandTheme, FontRole } from "@/lib/themes/types";
import "./template.css";

const DENSITY: Record<
  BrandTheme["density"],
  { sectionY: string; cardPad: string; container: string }
> = {
  compact: { sectionY: "3.5rem", cardPad: "1.25rem", container: "1080px" },
  standard: { sectionY: "5rem", cardPad: "1.5rem", container: "1120px" },
  spacious: { sectionY: "7rem", cardPad: "1.85rem", container: "1160px" },
  cinematic: { sectionY: "8.5rem", cardPad: "2.25rem", container: "1240px" },
};

const SHADOW: Record<BrandTheme["elevation"], string> = {
  none: "none",
  border: "none",
  soft: "0 10px 30px -18px rgba(0,0,0,0.30)",
  heavy: "0 26px 60px -24px rgba(0,0,0,0.45)",
};

// Collect the brand's real Google families (incl. proprietary substitutes) into a
// single fonts.googleapis.com stylesheet href. Returns null when everything is
// system. Rendering the <link> in the component lets React hoist it to <head>,
// which is emitted into the static HTML under output: export.
// Google Fonts css2 wants standard axis stops; a stray 460/320 can 404 the whole
// stylesheet and silently drop the brand to system fonts. Snap to the nearest.
const STD_WEIGHTS = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const snapWeight = (w: number) =>
  STD_WEIGHTS.reduce((a, b) => (Math.abs(b - w) < Math.abs(a - w) ? b : a));

function googleFontsHref(theme: BrandTheme): string | null {
  const fams = new Map<string, Set<number>>();
  const add = (role?: FontRole) => {
    if (!role) return;
    const s = role.source;
    let family: string | null = null;
    let weights: number[] = [role.weight];
    if (s.kind === "google") {
      family = s.family;
      weights = s.weights;
    } else if (s.kind === "proprietary" && s.substituteGoogle) {
      family = s.substituteGoogle;
      weights = s.weights ?? [400, 600, 700];
    }
    if (!family) return;
    const set = fams.get(family) ?? new Set<number>();
    weights.forEach((w) => set.add(snapWeight(w)));
    fams.set(family, set);
  };
  add(theme.fonts.display);
  add(theme.fonts.body);
  add(theme.fonts.mono);
  if (fams.size === 0) return null;
  const params = [...fams.entries()]
    .map(([family, weights]) => {
      const w = [...weights].sort((a, b) => a - b).join(";");
      return `family=${encodeURIComponent(family).replace(/%20/g, "+")}:wght@${w}`;
    })
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}

function themeVars(theme: BrandTheme): CSSProperties {
  const c = theme.colors;
  const d = DENSITY[theme.density];
  const navTransform = theme.type.navUppercase ? "uppercase" : "none";
  const btnTransform = theme.type.buttonUppercase ? "uppercase" : "none";
  const vars: Record<string, string> = {
    "--sk-canvas": c.canvas,
    "--sk-surface": c.surface,
    "--sk-raised": c.raised,
    "--sk-ink": c.ink,
    "--sk-muted": c.muted,
    "--sk-hairline": c.hairline,
    "--sk-primary": c.primary,
    "--sk-on-primary": c.onPrimary,
    "--sk-accent": c.accent,
    "--sk-hero-canvas": c.heroCanvas ?? c.canvas,
    "--sk-hero-ink": c.heroInk ?? c.ink,
    "--sk-hero-muted": c.heroMuted ?? c.muted,
    "--sk-font-display": theme.fonts.display.stack,
    "--sk-font-body": theme.fonts.body.stack,
    "--sk-font-mono": theme.fonts.mono?.stack ?? "ui-monospace, SFMono-Regular, monospace",
    "--sk-display-weight": String(theme.fonts.display.weight),
    "--sk-body-weight": String(theme.fonts.body.weight),
    "--sk-display-tracking": theme.fonts.display.tracking ?? "0",
    "--sk-display-transform": theme.type.displayUppercase ? "uppercase" : "none",
    "--sk-radius-button": theme.radius.button,
    "--sk-radius-card": theme.radius.card,
    "--sk-radius-input": theme.radius.input ?? theme.radius.button,
    "--sk-radius-chip": theme.radius.chip ?? "9999px",
    "--sk-btn-primary-bg": theme.buttons.primary.bg,
    "--sk-btn-primary-color": theme.buttons.primary.color,
    "--sk-btn-primary-border": theme.buttons.primary.border ?? "transparent",
    "--sk-btn-secondary-bg": theme.buttons.secondary.bg,
    "--sk-btn-secondary-color": theme.buttons.secondary.color,
    "--sk-btn-secondary-border": theme.buttons.secondary.border ?? "transparent",
    "--sk-section-y": d.sectionY,
    "--sk-card-pad": d.cardPad,
    "--sk-container": d.container,
    "--sk-shadow-card": SHADOW[theme.elevation],
    "--sk-nav-transform": navTransform,
    "--sk-nav-tracking": theme.type.navTracking ?? (theme.type.navUppercase ? "0.06em" : "0"),
    "--sk-btn-transform": btnTransform,
    "--sk-btn-tracking": theme.type.buttonTracking ?? (theme.type.buttonUppercase ? "0.06em" : "0"),
    "--sk-sig-accent": theme.signature.accent ?? c.accent,
    "--sk-sig-accent2": theme.signature.accent2 ?? c.primary,
  };
  return vars as CSSProperties;
}

function ProductPreview({ theme }: { theme: BrandTheme }) {
  const p = SIGNALKIT.hero.preview;
  const variant = theme.layout.preview;
  const body = (
    <div className={variant === "dashboard" ? "sk-preview__body" : undefined}>
      <div className="sk-preview__head">
        <span className="sk-preview__title">{p.title}</span>
        <span className="sk-preview__chip">{p.statusChip}</span>
      </div>
      {p.rows.map((r) => (
        <div className="sk-preview__row" key={r.label}>
          <span className="sk-muted">{r.label}</span>
          <span>{r.value}</span>
        </div>
      ))}
      <p className="sk-preview__note">{p.note}</p>
    </div>
  );
  return (
    <div className={`sk-preview sk-preview--${variant} sk-hero__preview`}>
      {variant === "dashboard" && (
        <div className="sk-preview__bar" aria-hidden>
          <span className="sk-preview__dot" />
          <span className="sk-preview__dot" />
          <span className="sk-preview__dot" />
        </div>
      )}
      {body}
    </div>
  );
}

export default function StandardTemplate({
  theme,
  brandName,
}: {
  theme: BrandTheme;
  brandName: string;
}) {
  const k = SIGNALKIT;
  const fontsHref = googleFontsHref(theme);
  const rootClass = `sk${theme.type.tabularNumbers ? " sk--tnum" : ""}`;

  return (
    <>
      {fontsHref && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href={fontsHref} />
        </>
      )}

      {/* Neutral bar to return to the gallery — outside the brand render. */}
      <div className="sk-return">
        <div className="sk-container sk-return__inner">
          <Link href="/#index">← All templates</Link>
          <span className="sk-return__meta">
            The sample page rendered in the {brandName} design language
          </span>
        </div>
      </div>

      <div className={rootClass} style={themeVars(theme)} data-signalkit-copy-hash={signalkitCopyHash}>
        {/* 1. Navbar */}
        <nav className="sk-nav">
          <div className="sk-container sk-nav__inner">
            <a className="sk-wordmark" href="#">
              {k.navbar.wordmark}
            </a>
            <div className="sk-nav__links">
              {k.navbar.links.map((l) => (
                <a className="sk-nav__link" href="#" key={l}>
                  {l}
                </a>
              ))}
            </div>
            <div className="sk-nav__actions">
              <a className="sk-btn sk-btn--ghost" href="#">
                {k.navbar.ghost}
              </a>
              <a className="sk-btn sk-btn--primary" href="#">
                {k.navbar.primary}
              </a>
            </div>
          </div>
        </nav>

        <main id="main-content">
          {/* 2. Hero */}
          <section className={`sk-hero sk-hero--${theme.layout.hero}`}>
            {theme.signature.kind !== "none" && (
              <div className={`sk-sig sk-sig--${theme.signature.kind}`} aria-hidden />
            )}
            <div className="sk-container sk-hero__inner">
              <div className="sk-hero__copy">
                <p className="sk-eyebrow">{k.hero.eyebrow}</p>
                <h1 className="sk-display sk-hero__h1">{k.hero.h1}</h1>
                <p className="sk-hero__sub sk-muted">{k.hero.subhead}</p>
                <div className="sk-hero__actions">
                  <a className="sk-btn sk-btn--primary" href="#">
                    {k.hero.primary}
                  </a>
                  <a className="sk-btn sk-btn--secondary" href="#">
                    {k.hero.secondary}
                  </a>
                  <a className="sk-btn sk-btn--ghost" href="#">
                    {k.hero.ghostLink}
                  </a>
                </div>
              </div>
              <ProductPreview theme={theme} />
            </div>
          </section>

          {/* 3. Feature trio */}
          <section className="sk-section">
            <div className="sk-container">
              <div className="sk-section__head">
                <p className="sk-eyebrow">{k.features.eyebrow}</p>
                <h2 className="sk-display sk-section__heading">{k.features.heading}</h2>
                <p className="sk-muted">{k.features.subhead}</p>
              </div>
              <div className="sk-grid-3">
                {k.features.items.map((f) => (
                  <article className="sk-feature" key={f.tag}>
                    <span className="sk-feature__tag">{f.tag}</span>
                    <h3 className="sk-feature__title">{f.title}</h3>
                    <p className="sk-feature__body">{f.body}</p>
                    <a className="sk-link" href="#">
                      {f.link} →
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Feature detail rows — asymmetric splits with product-UI vignettes */}
          <section className="sk-section sk-detail">
            <div className="sk-container sk-detail__rows">
              {k.detailRows.rows.map((row, i) => (
                <div
                  className={`sk-detail__row${i % 2 ? " sk-detail__row--flip" : ""}`}
                  key={row.title}
                >
                  <div className="sk-detail__copy">
                    <h3 className="sk-display sk-detail__title">{row.title}</h3>
                    <p className="sk-muted sk-detail__body">{row.body}</p>
                    <a className="sk-link" href="#">
                      {row.link} →
                    </a>
                  </div>
                  <div className="sk-vignette">
                    <div className="sk-vignette__head">{row.vignette.title}</div>
                    {row.vignette.rows.map((x) => (
                      <div className="sk-vignette__row" key={x.label}>
                        <span className={row.vignette.kind === "report" ? "sk-vignette__metric" : undefined}>
                          {x.label}
                        </span>
                        {row.vignette.kind === "queue" ? (
                          <span className="sk-vignette__chip">{x.value}</span>
                        ) : (
                          <span className="sk-vignette__value">{x.value}</span>
                        )}
                      </div>
                    ))}
                    {row.vignette.kind === "report" && (
                      <div className="sk-vignette__bars" aria-hidden>
                        <span style={{ width: "82%" }} />
                        <span style={{ width: "56%" }} />
                        <span style={{ width: "31%" }} />
                      </div>
                    )}
                    {"caption" in row.vignette && row.vignette.caption ? (
                      <p className="sk-vignette__caption">{row.vignette.caption}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Developer / API — exercises the brand's mono stack */}
          <section className="sk-section sk-section--alt sk-dev">
            <div className="sk-container sk-dev__inner">
              <div className="sk-dev__copy">
                <h2 className="sk-display sk-section__heading">{k.developer.heading}</h2>
                <p className="sk-muted sk-dev__sub">{k.developer.subhead}</p>
                <p className="sk-dev__caption sk-muted">{k.developer.caption}</p>
              </div>
              <div className="sk-dev__panel">
                <div className="sk-dev__bar">
                  <span className="sk-dev__dots" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="sk-dev__file">{k.developer.filename}</span>
                </div>
                <pre className="sk-dev__code">
                  <span className="sk-dev__prompt" aria-hidden>
                    ${" "}
                  </span>
                  <code>{k.developer.request.join("\n")}</code>
                </pre>
                <div className="sk-dev__status">
                  <span className="sk-dev__status-chip">{k.developer.responseStatus}</span>
                </div>
                <pre className="sk-dev__code sk-dev__code--response">
                  <code>{k.developer.response.join("\n")}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* 6. Brand specimen — the theme's own tokens rendered in-fiction */}
          <section className="sk-section sk-specimen">
            <div className="sk-container">
              <div className="sk-section__head">
                <h2 className="sk-display sk-section__heading">{k.specimen.heading}</h2>
                <p className="sk-muted">{k.specimen.subhead}</p>
              </div>
              <div className="sk-specimen__board">
                <div className="sk-specimen__swatches">
                  {k.specimen.swatches.map((s) => (
                    <div className="sk-swatch" key={s}>
                      <span
                        className="sk-swatch__chip"
                        style={{ background: `var(--sk-${s.toLowerCase()})` }}
                        aria-hidden
                      />
                      <span className="sk-swatch__label">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="sk-specimen__type">
                  {k.specimen.typeLabels.map((label) => (
                    <div className="sk-specimen__type-tile" key={label}>
                      <span className={`sk-specimen__aa sk-specimen__aa--${label.toLowerCase()}`}>
                        {k.specimen.typeSample}
                      </span>
                      <span className="sk-swatch__label">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="sk-specimen__controls">
                  <div className="sk-field sk-specimen__field">
                    <label className="sk-label" htmlFor="sk-spec-name">
                      {k.specimen.controls.inputLabel}
                    </label>
                    <input
                      className="sk-input"
                      id="sk-spec-name"
                      type="text"
                      readOnly
                      defaultValue={k.specimen.controls.inputValue}
                    />
                  </div>
                  <span className="sk-vignette__chip">{k.specimen.controls.chip}</span>
                  <div className="sk-specimen__buttons">
                    <button type="button" className="sk-btn sk-btn--primary">
                      {k.specimen.controls.primary}
                    </button>
                    <button type="button" className="sk-btn sk-btn--secondary">
                      {k.specimen.controls.secondary}
                    </button>
                  </div>
                </div>
              </div>
              <p className="sk-specimen__note sk-muted">{k.specimen.note}</p>
            </div>
          </section>

          {/* 7. Stats row */}
          <section className="sk-section sk-section--alt">
            <div className="sk-container">
              <h2 className="sk-lead-label" style={{ marginBottom: "2rem" }}>
                {k.stats.label}
              </h2>
              <div className="sk-stats">
                {k.stats.items.map((s) => (
                  <div key={s.label}>
                    <div className="sk-stat__value">{s.value}</div>
                    <div className="sk-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="sk-muted" style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
                {k.stats.note}
              </p>
            </div>
          </section>

          {/* 8. Social proof: trusted-by strip + quote + case rail */}
          <section className="sk-section sk-social">
            <div className="sk-container">
              <div className="sk-trusted">
                <h2 className="sk-trusted__lead">{k.testimonial.trustedBy.lead}</h2>
                <div className="sk-trusted__names">
                  {k.testimonial.trustedBy.names.map((n) => (
                    <span className="sk-trusted__name" key={n}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sk-social__grid">
                <div>
                  <blockquote className="sk-quote">“{k.testimonial.quote}”</blockquote>
                  <div className="sk-attrib">
                    <span className="sk-monogram">{k.testimonial.monogram}</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{k.testimonial.name}</div>
                      <div className="sk-muted" style={{ fontSize: "0.9rem" }}>
                        {k.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="sk-social__rail">
                  <div className="sk-case">
                    <span className="sk-case__label">{k.testimonial.caseCard.label}</span>
                    <p className="sk-case__text">{k.testimonial.caseCard.text}</p>
                    <a className="sk-link" href="#">
                      {k.testimonial.caseCard.link} →
                    </a>
                  </div>
                  <div className="sk-miniquote">
                    <p className="sk-miniquote__q">“{k.testimonial.quote2.quote}”</p>
                    <p className="sk-miniquote__attrib sk-muted">
                      {k.testimonial.quote2.name}, {k.testimonial.quote2.role}
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* 9. Pricing */}
          <section className="sk-section sk-section--alt sk-pricing">
            <div className="sk-container">
              <div className="sk-section__head">
                <h2 className="sk-display sk-section__heading">{k.pricing.heading}</h2>
                <p className="sk-muted">{k.pricing.subhead}</p>
              </div>
              <div className="sk-pricing__grid">
                {k.pricing.tiers.map((t) => (
                  <article className={`sk-tier${t.featured ? " sk-tier--featured" : ""}`} key={t.name}>
                    <div className="sk-tier__top">
                      <h3 className="sk-tier__name">{t.name}</h3>
                      {"chip" in t && t.chip ? <span className="sk-tier__chip">{t.chip}</span> : null}
                    </div>
                    <div className="sk-tier__price">{t.price}</div>
                    <div className="sk-tier__term sk-muted">{t.term}</div>
                    <ul className="sk-tier__list">
                      {t.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <a
                      className={`sk-btn ${t.featured ? "sk-btn--primary" : "sk-btn--secondary"}`}
                      href="#"
                    >
                      {t.cta}
                    </a>
                  </article>
                ))}
              </div>
              <p className="sk-pricing__note sk-muted">{k.pricing.note}</p>
            </div>
          </section>

          {/* 10. FAQ */}
          <section className="sk-section sk-faq">
            <div className="sk-container">
              <div className="sk-section__head">
                <h2 className="sk-display sk-section__heading">{k.faq.heading}</h2>
              </div>
              <div className="sk-faq__list">
                {k.faq.items.map((item) => (
                  <details className="sk-faq__item" key={item.q}>
                    <summary className="sk-faq__q">{item.q}</summary>
                    <p className="sk-faq__a sk-muted">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* 11. CTA */}
          <section className={`sk-section sk-cta sk-cta--${theme.layout.cta}`}>
            <div className="sk-container sk-cta__inner">
              <div>
                <h2 className="sk-cta__title">{k.cta.heading}</h2>
                <p className="sk-cta__sub">{k.cta.subhead}</p>
              </div>
              <div className="sk-cta__actions">
                <a className="sk-btn sk-btn--primary" href="#">
                  {k.cta.primary}
                </a>
                <a className="sk-btn sk-btn--secondary" href="#">
                  {k.cta.secondary}
                </a>
              </div>
            </div>
          </section>

          {/* 7. Contact form — a design showcase; the submit is inert (type=button). */}
          <section className="sk-section sk-form-section">
            <div className="sk-container">
              <div className="sk-section__head">
                <p className="sk-lead-label">{k.form.eyebrow}</p>
                <h2 className="sk-display sk-section__heading">{k.form.heading}</h2>
                <p className="sk-muted">{k.form.subhead}</p>
              </div>
              <form className="sk-form" aria-label={`${k.form.heading} (demo form)`}>
                <div className="sk-form__grid">
                  <div className="sk-field">
                    <label className="sk-label" htmlFor="sk-name">
                      {k.form.fields.name.label}
                    </label>
                    <input
                      className="sk-input"
                      id="sk-name"
                      name="name"
                      type="text"
                      placeholder={k.form.fields.name.placeholder}
                    />
                  </div>
                  <div className="sk-field">
                    <label className="sk-label" htmlFor="sk-email">
                      {k.form.fields.email.label}
                    </label>
                    <input
                      className="sk-input"
                      id="sk-email"
                      name="email"
                      type="email"
                      placeholder={k.form.fields.email.placeholder}
                    />
                  </div>
                </div>
                <div className="sk-field">
                  <label className="sk-label" htmlFor="sk-company">
                    {k.form.fields.company.label}
                  </label>
                  <input
                    className="sk-input"
                    id="sk-company"
                    name="company"
                    type="text"
                    placeholder={k.form.fields.company.placeholder}
                  />
                </div>
                <div className="sk-field">
                  <label className="sk-label" htmlFor="sk-message">
                    {k.form.fields.message.label}
                  </label>
                  <textarea
                    className="sk-textarea"
                    id="sk-message"
                    name="message"
                    rows={4}
                    placeholder={k.form.fields.message.placeholder}
                  />
                </div>
                <div className="sk-form__foot">
                  <button type="button" className="sk-btn sk-btn--primary">
                    {k.form.submit}
                  </button>
                  <span className="sk-form__note">{k.form.note}</span>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* 7. Footer */}
        <footer className="sk-footer">
          <div className="sk-container">
            <div className="sk-footer__inner" style={{ paddingBlock: "var(--sk-section-y)" }}>
              <div>
                <a className="sk-wordmark" href="#">
                  {k.footer.wordmark}
                </a>
                <p className="sk-footer__desc">{k.footer.description}</p>
              </div>
              {k.footer.groups.map((g) => (
                <div key={g.heading}>
                  <div className="sk-footer__group-h">{g.heading}</div>
                  {g.links.map((l) => (
                    <a className="sk-footer__link" href="#" key={l}>
                      {l}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="sk-footer__legal" style={{ paddingBottom: "var(--sk-section-y)" }}>
              {k.footer.legal.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
