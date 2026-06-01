import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

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
  title: {
    default: "1695 Designs — Interior Design & Bespoke Furniture",
    template: "%s | 1695 Designs",
  },
  description:
    "1695 Designs is a full-service interior design and bespoke furniture studio creating premium spaces for corporate, hospitality, and residential clients.",
  openGraph: {
    siteName: "1695 Designs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-charcoal antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
