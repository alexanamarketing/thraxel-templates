import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: export to out/ (works on Vercel, Cloudflare Pages, or any static host).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
