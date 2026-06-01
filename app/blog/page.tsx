import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-24 md:py-32">
        <Container narrow>
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Journal
          </p>
          <h1 className="font-heading font-semibold text-charcoal text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] mb-8">
            Blog
          </h1>
          <p className="font-body text-charcoal/70 leading-relaxed text-lg">
            CMS-driven blog coming in Phase 2 (Sanity integration).
          </p>
        </Container>
      </section>
    </div>
  );
}
