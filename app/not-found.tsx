import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start px-5 py-28"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Error 404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          This page isn&apos;t here
        </h1>
        <p className="measure mt-6 text-lg leading-relaxed text-muted">
          The page you are looking for does not exist. Head back to the full
          index of templates.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to the templates
          </Link>
          <Link href="/#index" className="btn btn-secondary">
            Browse categories
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
