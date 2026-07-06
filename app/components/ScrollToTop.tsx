"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The Next.js App Router does not reliably reset scroll to the top on client-side
// navigation in this static export, so opening a /preview page kept the scroll
// offset from wherever you clicked on the index. Snap to the top on every real
// path change, unless the URL carries a hash (e.g. /#index from the return bar,
// which should scroll to that anchor instead).
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    // Run after the new route has painted.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
