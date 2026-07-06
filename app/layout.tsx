import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/brands";
import ScrollToTop from "@/app/components/ScrollToTop";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const DESCRIPTION =
  "The same sample page rendered in 71 design languages, so you can compare directions side by side and pick a starting point for your Thraxel project.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "One page, every design | Thraxel Templates",
    template: "%s | Thraxel Templates",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Thraxel Templates",
    title: "One page, every design",
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "One page, every design",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f5f7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${inter.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <ScrollToTop />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
