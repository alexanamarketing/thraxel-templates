import { site, THRAXEL_URL } from "@/lib/brands";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Pick a starting point, not a blank page
            </h2>
            <div className="measure mt-5 space-y-4 text-base leading-relaxed text-muted">
              {site.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:border-l lg:border-hairline lg:pl-12">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              How it works
            </h3>
            <ol className="mt-5 space-y-5">
              {site.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold text-accent-ink">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-base leading-relaxed text-ink">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <a
              href={THRAXEL_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary mt-8"
            >
              Start a project at thraxel.io ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
