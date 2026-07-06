import { categories, site, THRAXEL_URL } from "@/lib/brands";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-lg font-semibold">
              thraxel<span className="text-accent-ink">·</span>templates
            </p>
            <p className="measure mt-2 text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Thraxel
            </p>
            <ul className="mt-3 space-y-0 text-sm">
              <li>
                <a
                  href={THRAXEL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[2.75rem] items-center text-ink transition-colors hover:text-accent-ink"
                >
                  thraxel.io ↗
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-flex min-h-[2.75rem] items-center text-muted transition-colors hover:text-ink"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Categories
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-0 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`#${c.slug}`}
                    className="inline-flex min-h-[2.75rem] items-center text-muted transition-colors hover:text-ink"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>
            © 2026 Thraxel. Brand names and designs belong to their respective
            owners.
          </span>
          <span>The sample page is a fixed demo; only the design changes.</span>
        </div>
      </div>
    </footer>
  );
}
