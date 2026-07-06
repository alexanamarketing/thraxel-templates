import { THRAXEL_URL } from "@/lib/brands";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <nav className="mx-auto flex min-h-[3.5rem] max-w-6xl items-stretch justify-between px-5">
        <a
          href="#top"
          className="inline-flex items-center font-serif text-lg font-semibold tracking-tight"
        >
          thraxel<span className="text-accent-ink">·</span>templates
        </a>
        <div className="flex items-stretch gap-5 text-sm">
          <a
            href="#index"
            className="inline-flex items-center px-1 text-muted transition-colors hover:text-ink"
          >
            Categories
          </a>
          <a
            href="#about"
            className="hidden items-center px-1 text-muted transition-colors hover:text-ink sm:inline-flex"
          >
            How it works
          </a>
          <a
            href={THRAXEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-1 font-medium text-accent-ink underline-offset-4 hover:underline"
          >
            thraxel.io ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
