import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, furniture manufacturing, and furniture supply — end-to-end solutions for corporate and hospitality spaces.",
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "We design functional and visually refined spaces for corporate offices, hospitality brands, and modern environments. Our work blends aesthetics with purpose to improve how people experience spaces.",
    subServices: [
      "Space Planning",
      "Workplace Design",
      "Hospitality Design",
      "Interior Styling",
      "3D Visualization",
    ],
  },
  {
    number: "02",
    title: "Furniture Manufacturing",
    description:
      "We design and produce custom furniture tailored to each project. From office workspaces to hospitality interiors, we create pieces that combine durability, comfort, and design precision.",
    subServices: [
      "Custom Furniture",
      "Office Furniture",
      "Hospitality Furniture",
      "Residential Furniture",
    ],
  },
  {
    number: "03",
    title: "Furniture Supply",
    description:
      "We provide curated furniture solutions for complete interior projects, sourcing and supplying quality pieces that align with design intent and brand identity.",
    subServices: [
      "Imported Furniture",
      "Local Furniture Collections",
      "Turnkey Furnishing Solutions",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your space, goals, and functional requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We develop detailed concepts, layouts, and 3D visualizations.",
  },
  {
    number: "03",
    title: "Manufacture",
    description: "We produce custom furniture tailored to your project needs.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We execute and deliver fully completed interior spaces.",
  },
];

const whyPoints = [
  "One team from design to execution",
  "Full control over furniture production",
  "Consistency between concept and completion",
  "Strong understanding of corporate and hospitality needs",
  "A focus on long-term functionality, not just aesthetics",
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pb-20 md:pb-24 pt-40 md:pt-48">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-8">
              Our Services
            </p>
            <h1 className="font-heading font-semibold text-warm-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] mb-8">
              What We Do
            </h1>
            <p className="font-body text-stone text-lg leading-relaxed max-w-xl">
              1695 Designs operates across three integrated areas — interior design,
              furniture manufacturing, and furniture supply — delivering complete spaces
              from concept to completion.
            </p>
          </div>
        </div>
      </section>

      {/* ── Three Services ───────────────────────────────────────────────── */}
      {services.map((service, i) => (
        <section
          key={service.number}
          className={`py-24 md:py-32 ${i % 2 === 0 ? "bg-warm-white" : "bg-stone/20"}`}
        >
          <Container>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text */}
              <div className={i % 2 !== 0 ? "lg:col-start-1" : ""}>
                <span className="text-[11px] tracking-[0.2em] font-body font-medium text-gold/80 block mb-4">
                  {service.number}
                </span>
                <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
                  {service.title}
                </h2>
                <p className="font-body text-charcoal/70 leading-relaxed mb-10">
                  {service.description}
                </p>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey mb-4">
                    Includes
                  </p>
                  <ul className="space-y-0 divide-y divide-stone">
                    {service.subServices.map((sub) => (
                      <li key={sub} className="flex items-center gap-4 py-3">
                        <div className="w-4 h-px bg-gold shrink-0" aria-hidden="true" />
                        <span className="font-body text-charcoal/80 text-sm">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image placeholder */}
              <div
                className={`relative aspect-[4/3] bg-stone ${
                  i % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-stone/40 to-charcoal/10"
                  aria-hidden="true"
                />
                {i % 2 === 0 ? (
                  <>
                    <div className="absolute bottom-0 right-0 w-px h-16 bg-gold" aria-hidden="true" />
                    <div className="absolute bottom-0 right-0 w-16 h-px bg-gold" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <div className="absolute top-0 left-0 w-px h-16 bg-gold" aria-hidden="true" />
                    <div className="absolute top-0 left-0 w-16 h-px bg-gold" aria-hidden="true" />
                  </>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                    Photography — Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* ── How We Work ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal">
        <Container>
          <div className="max-w-xl mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              Our Process
            </p>
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`p-10 md:p-12 ${
                  i % 2 === 0 ? "md:border-r border-white/10" : ""
                } ${i < 2 ? "border-b border-white/10" : ""}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-heading text-5xl font-medium text-warm-white/10">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-gold/30" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-warm-white text-2xl mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Clients Choose Us ────────────────────────────────────────── */}
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-px bg-gold/20" aria-hidden="true" />
        <Container narrow>
          <div className="text-center">
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] mb-8">
              Let&apos;s discuss your project.
            </h2>
            <p className="font-body text-grey leading-relaxed text-lg mb-12 max-w-lg mx-auto">
              Share your requirements and our team will get in touch with you.
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
                href="/contact"
                variant="ghost"
                className="text-stone hover:text-gold"
              >
                Start Your Project →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
