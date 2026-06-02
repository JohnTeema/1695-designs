import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { client } from "@/lib/sanity/client";
import { siteSettingsQuery } from "@/lib/sanity/queries";
import { resolveContact, whatsappHref } from "@/lib/contact";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with 1695 Designs to discuss your interior design or furniture project. We respond to all inquiries within one business day.",
  openGraph: {
    title: "Contact 1695 Designs",
    description:
      "Let's discuss your project. Share your requirements and our team will get back to you within one business day.",
  },
};

export default async function ContactPage() {
  const settings = await client.fetch(siteSettingsQuery).catch(() => null);
  const { email, phone, address, whatsappNumber } = resolveContact(settings);
  // tel: link needs digits/plus only
  const phoneHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "";

  return (
    <>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <section className="bg-charcoal pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Get in Touch
          </p>
          <h1 className="font-heading font-semibold text-warm-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] max-w-2xl">
            Contact Us
          </h1>
        </Container>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

            {/* ── Form — takes 2 of 3 columns ───────────────────────────── */}
            <div className="lg:col-span-2">
              <p className="font-body text-charcoal/70 leading-relaxed mb-10 max-w-lg">
                Let&apos;s discuss your project. Share your requirements and our team will
                get in touch with you within one business day.
              </p>
              <ContactForm />
            </div>

            {/* ── Contact details — 1 of 3 columns (from siteSettings) ──── */}
            <div className="lg:col-span-1 space-y-10">

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  {email}
                </a>
              </div>

              {phone && (
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                    Phone
                  </p>
                  <a
                    href={phoneHref}
                    className="font-body text-charcoal hover:text-gold transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              )}

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                  WhatsApp
                </p>
                <a
                  href={whatsappHref(
                    whatsappNumber,
                    "Hello, I'd like to discuss a project with 1695 Designs."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  Chat directly on WhatsApp →
                </a>
              </div>

              {address && (
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                    Office Address
                  </p>
                  <p className="font-body text-charcoal/80 text-sm leading-relaxed whitespace-pre-line">
                    {address}
                  </p>
                </div>
              )}

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                  Response time
                </p>
                <p className="font-body text-charcoal/70 text-sm leading-relaxed">
                  We respond to all project inquiries within one business day.
                </p>
              </div>

              {/* Divider + note */}
              <div className="pt-6 border-t border-stone">
                <p className="font-body text-charcoal/50 text-xs leading-relaxed">
                  All conversations are confidential. We do not share your details
                  with third parties.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}
