import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "1695 Designs — Studio",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Studio has its own full-page layout — exclude site Header/Footer/WhatsApp
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
