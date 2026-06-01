import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import type { Metadata } from "next";

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

export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000";
  const waMessage = encodeURIComponent(
    "Hello, I'd like to discuss a project with 1695 Designs."
  );

  return (
    <>
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <section className="bg-charcoal pt-32 md:pt-40 pb-16 md:pb-20">
        <Container>
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Get in Touch
          </p>
          <h1 className="font-heading font-semibold text-warm-white text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] max-w-2xl">
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

            {/* ── Contact details — 1 of 3 columns ──────────────────────── */}
            <div className="lg:col-span-1 space-y-10">

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                  Email
                </p>
                <a
                  href="mailto:hello@1695designs.com"
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  hello@1695designs.com
                </a>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-4">
                  WhatsApp
                </p>
                <a
                  href={`https://wa.me/${waNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-charcoal hover:text-gold transition-colors"
                >
                  Chat directly on WhatsApp →
                </a>
              </div>

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
