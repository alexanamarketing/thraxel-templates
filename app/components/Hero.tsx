import { THRAXEL_URL } from "@/lib/brands";

export default function Hero() {
  return (
    <section id="top" className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          The Thraxel template gallery
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          One page,
          <br />
          every design.
        </h1>
        <p className="measure mt-6 text-lg leading-relaxed text-muted">
          The same sample page, drawn in 71 design languages. The content stays
          the same, so the only thing that changes is the design. That makes
          them easy to compare when you are picking a direction for your
          project.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#index" className="btn btn-primary">
            Browse the templates
          </a>
          <a
            href={THRAXEL_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            thraxel.io ↗
          </a>
        </div>
      </div>
    </section>
  );
}
