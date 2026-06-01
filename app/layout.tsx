import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";
import JsonLd from "@/components/seo/JsonLd";
import { baseUrl, organizationJsonLd, defaultOgImage } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "1695 Designs — Interior Design & Bespoke Furniture",
    template: "%s | 1695 Designs",
  },
  description:
    "1695 Designs is a premium interior design and furniture company creating functional, refined, and fully executed spaces for corporate and hospitality clients — from concept to completion.",

  openGraph: {
    siteName: "1695 Designs",
    type: "website",
    locale: "en_NG",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "1695 Designs — Interior Design & Bespoke Furniture",
    description:
      "Premium interior design and furniture company creating functional, refined spaces for corporate and hospitality clients.",
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-charcoal antialiased">
        <JsonLd data={organizationJsonLd} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
