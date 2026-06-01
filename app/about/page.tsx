import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "1695 Designs is a premium interior design and furniture company focused on creating functional, refined, and purpose-driven environments for corporate and hospitality clients.",
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const services = [
  {
    title: "Interior Design",
    description:
      "We develop thoughtful interior concepts that combine functionality, aesthetics, and spatial intelligence. Every design is guided by purpose—not decoration.",
  },
  {
    title: "Furniture Manufacturing",
    description:
      "We design and produce custom furniture tailored to each project. This allows us to maintain control over quality, detail, and design consistency.",
  },
  {
    title: "Furniture Supply",
    description:
      "We source and deliver curated furniture solutions that complete interior environments with precision and style.",
  },
];

const clients = [
  "Corporate organizations",
  "Hospitality brands",
  "Developers and real estate firms",
  "Architects and project managers",
];

const whyPoints = [
  "One team from design to execution",
  "Full control over furniture production",
  "Consistency between concept and completion",
  "Strong understanding of corporate and hospitality needs",
  "A focus on long-term functionality, not just aesthetics",
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-20 md:pb-28 pt-40 md:pt-48">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-8">
              About 1695 Designs
            </p>
            <h1 className="font-heading font-semibold text-warm-white text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] mb-8">
              We don&apos;t just design spaces. We shape how they are experienced.
            </h1>
            <p className="font-body text-stone text-lg leading-relaxed max-w-2xl">
              1695 Designs is a premium interior design and furniture company focused on
              creating functional, refined, and purpose-driven environments for corporate
              and hospitality clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image placeholder */}
            <div className="relative aspect-[4/5] bg-stone">
              <div
                className="absolute inset-0 bg-gradient-to-br from-stone/60 to-charcoal/10"
                aria-hidden="true"
              />
              <div className="absolute top-0 left-0 w-px h-24 bg-gold" aria-hidden="true" />
              <div className="absolute top-0 left-0 w-24 h-px bg-gold" aria-hidden="true" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey">
                  Photography — Coming Soon
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
                Our Story
              </p>
              <h2 className="font-heading font-semibold text-charcoal text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] mb-8">
                Built from a simple belief: spaces should work as beautifully as they look
              </h2>
              <div className="space-y-5 font-body text-charcoal/80 leading-relaxed">
                <p>
                  1695 Designs was founded on a simple but powerful idea—that great spaces
                  are not just designed; they are carefully crafted, built, and experienced.
                </p>
                <p>
                  In many projects, design, furniture, and execution are treated as separate
                  worlds. The result is often inconsistency, delays, and spaces that fall
                  short of their original vision.
                </p>
                <p className="font-medium text-charcoal">
                  We built 1695 Designs to change that.
                </p>
                <p>
                  We bring interior design, furniture manufacturing, and furniture supply into
                  one unified process—ensuring that what is imagined is exactly what is
                  delivered.
                </p>
                <p>
                  From corporate offices to hospitality environments, we design spaces that
                  are not only visually refined but also functional, durable, and aligned with
                  how people actually use them.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal">
        <Container>
          <div className="max-w-xl mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              What We Do
            </p>
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
              A complete approach to interior spaces
            </h2>
            <p className="font-body text-grey leading-relaxed">
              1695 Designs operates across three integrated areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mb-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="p-8 md:p-10 border border-white/8 hover:border-gold/40 transition-all duration-500"
              >
                <span className="text-[11px] tracking-[0.2em] font-body font-medium text-gold/60 block mb-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-medium text-warm-white text-xl mb-4">
                  {s.title}
                </h3>
                <p className="font-body text-grey text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-grey/60 text-sm text-center">
            Together, these three areas allow us to deliver fully realized spaces from concept to completion.
          </p>
        </Container>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
                Our Approach
              </p>
              <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
                Design is only complete when it is built
              </h2>
            </div>

            <div>
              <p className="font-body text-charcoal/70 leading-relaxed mb-8">
                Our process is structured, intentional, and execution-focused:
              </p>
              <div className="space-y-6">
                {[
                  "We begin by understanding the space, the brand, and the people who will use it.",
                  "We translate this into design systems that are functional and visually refined.",
                  "We then bring those designs to life through manufacturing and careful execution.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-5 h-px bg-gold mt-3 shrink-0" aria-hidden="true" />
                    <p className="font-body text-charcoal/80 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-stone">
                <p className="font-body font-medium text-charcoal">
                  Nothing is left to interpretation.
                </p>
                <p className="font-body text-charcoal/70 mt-1">
                  What is designed is exactly what is delivered.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who We Work With ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-stone/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
                Who We Work With
              </p>
              <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-8">
                Designed for spaces that matter
              </h2>
              <p className="font-body text-charcoal/70 leading-relaxed">
                These are clients who understand that space is not just physical — it is
                strategic. It affects productivity, perception, and experience.
              </p>
            </div>

            <div>
              <p className="font-body text-charcoal/70 mb-6">We primarily work with:</p>
              <ul className="space-y-0 divide-y divide-stone">
                {clients.map((client) => (
                  <li key={client} className="flex items-center gap-5 py-4">
                    <div className="w-5 h-px bg-gold shrink-0" aria-hidden="true" />
                    <span className="font-body text-charcoal">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Our Philosophy ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal">
        <Container narrow>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-8">
              Our Philosophy
            </p>
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-12">
              Function first. Detail always.
              <br />
              Experience above everything.
            </h2>
            <div className="space-y-4 max-w-xl mx-auto">
              {[
                "We believe good design is not about excess—it is about clarity.",
                "Every material, every line, every piece of furniture has a reason for being there.",
                "We design with discipline, build with precision, and deliver with care.",
              ].map((line, i) => (
                <p key={i} className="font-body text-stone leading-relaxed text-lg">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why 1695 Designs ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-warm-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
                Why 1695 Designs
              </p>
              <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
                A unified process. A consistent result.
              </h2>
              <p className="font-body text-charcoal/70 leading-relaxed">
                What makes us different is not just what we design but how we deliver it.
              </p>
            </div>

            <div>
              <ul className="space-y-0 divide-y divide-stone mb-10">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-center gap-5 py-5">
                    <div className="w-5 h-px bg-gold shrink-0" aria-hidden="true" />
                    <span className="font-body text-charcoal/80">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-1">
                <p className="font-body font-medium text-charcoal">
                  We don&apos;t just create interiors.
                </p>
                <p className="font-body text-charcoal/70">
                  We deliver complete environments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Final statement + CTA ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-px bg-gold/20" aria-hidden="true" />
        <Container narrow>
          <div className="text-center">
            <p className="font-body text-stone leading-relaxed text-lg mb-12 max-w-2xl mx-auto">
              1695 Designs is a premium interior design and furniture company delivering
              functional, refined, and fully executed spaces for corporate and hospitality
              clients — from concept to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="outline"
                className="border-warm-white text-warm-white hover:border-gold hover:text-gold"
              >
                Request a Consultation
              </Button>
              <Button
                href="/portfolio"
                variant="ghost"
                className="text-stone hover:text-gold"
              >
                View Our Portfolio →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
