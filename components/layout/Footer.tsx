import Link from "next/link";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Furniture", href: "/furniture" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <Container>
        {/* Top */}
        <div className="py-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-3xl font-semibold tracking-wide">1695</span>
              <span className="block text-[10px] tracking-[0.3em] text-grey uppercase font-body mt-0.5">
                Designs
              </span>
            </div>
            <p className="text-grey text-sm font-body leading-relaxed max-w-xs">
              Spaces that speak before anyone enters. Interior design and bespoke
              furniture for those who demand precision.
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
                href="mailto:hello@1695designs.com"
                className="hover:text-gold transition-colors"
              >
                hello@1695designs.com
              </a>
              <a
                href="https://wa.me/2348000000000"
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
