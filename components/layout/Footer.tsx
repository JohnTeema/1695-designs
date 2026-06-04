import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { whatsappHref } from "@/lib/contact";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Furniture", href: "/furniture" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer({
  email,
  whatsappNumber,
}: {
  email: string;
  whatsappNumber: string;
}) {
  return (
    <footer className="bg-charcoal text-warm-white">
      <Container>
        {/* Top */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand — full logo (dark wordmark) on a warm-white panel so it
              stays legible on the charcoal footer */}
          <div>
            <div className="mb-6 inline-block bg-warm-white rounded-md p-5">
              <Image
                src="/1695-logo-full-transparent.png"
                alt="1695 Designs"
                width={170}
                height={190}
                className="h-auto w-[150px] md:w-[170px]"
              />
            </div>
            <p className="text-grey text-sm font-body leading-relaxed max-w-xs">
              1695 Designs is a premium interior design and furniture company delivering
              functional, refined, and fully executed spaces for corporate and hospitality
              clients — from concept to completion.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-5">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-stone hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-grey mb-5">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm font-body text-stone">
              <a
                href={`mailto:${email}`}
                className="underline underline-offset-4 decoration-white/30 hover:text-gold hover:decoration-gold transition-colors"
              >
                {email}
              </a>
              <a
                href={whatsappHref(
                  whatsappNumber,
                  "Hello, I'd like to discuss a project with 1695 Designs."
                )}
                className="hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-[0.1em] text-grey uppercase font-body">
            © {new Date().getFullYear()} 1695 Designs. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.1em] text-grey uppercase font-body">
            Design. Craft. Transform.
          </p>
        </div>
      </Container>
    </footer>
  );
}
