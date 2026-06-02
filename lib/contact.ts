// Resolves contact details from Sanity siteSettings with sensible fallbacks.
// Pure functions — safe to import in both server and client components.

const FALLBACK_EMAIL = "hello@1695designs.com";
const FALLBACK_WHATSAPP = "2348000000000";

export type SiteSettings = {
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  whatsappNumber?: string | null;
} | null;

export type Contact = {
  email: string;
  phone: string; // "" when not set (no fabricated fallback)
  address: string; // "" when not set (no fabricated fallback)
  whatsappNumber: string; // digits only, ready for wa.me
};

export function resolveContact(settings: SiteSettings): Contact {
  const email = settings?.email?.trim() || FALLBACK_EMAIL;
  const phone = settings?.phone?.trim() || "";
  const address = settings?.address?.trim() || "";

  // Accept any format the client typed (+234…, spaces, dashes) → strip to digits
  const rawWhatsapp = settings?.whatsappNumber?.trim() || FALLBACK_WHATSAPP;
  const whatsappNumber = rawWhatsapp.replace(/\D/g, "") || FALLBACK_WHATSAPP;

  return { email, phone, address, whatsappNumber };
}

export function whatsappHref(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
