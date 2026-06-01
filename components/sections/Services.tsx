import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Full-scope design for commercial, hospitality, and residential spaces. Space planning, concept development, material specification, and FF&E procurement — all under one roof.",
  },
  {
    number: "02",
    title: "Space Planning & Concept",
    description:
      "Transforming raw spaces into purposeful environments. Layouts designed around how people actually live and work, not how architects imagine they might.",
  },
  {
    number: "03",
    title: "Bespoke Furniture",
    description:
      "Custom pieces designed and fabricated in-house for your specific space. No compromise on scale, material, or finish. Furniture that belongs exactly where it is.",
  },
  {
    number: "04",
    title: "Project Management",
    description:
      "End-to-end coordination from contractor briefings to final styling. One point of contact. We absorb the complexity so your team can focus on what matters.",
  },
  {
    number: "05",
    title: "Hospitality & Commercial Fit-Out",
    description:
      "Hotel lobbies, corporate offices, restaurants, and retail environments designed to perform as well as they look. Durable, beautiful, and on-brand.",
  },
  {
    number: "06",
    title: "Furniture Collection",
    description:
      "A curated selection of signature pieces available for direct purchase. Designed by our studio and produced to the same standards as our bespoke commissions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              What We Do
            </p>
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1] max-w-md">
              Design services built for ambition.
            </h2>
          </div>
          <Button href="/services" variant="outline" className="border-stone text-stone hover:border-gold hover:text-gold self-start md:self-auto">
            All Services
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 md:p-10 border border-white/8 hover:border-gold/40 transition-all duration-500 hover:bg-white/3"
            >
              <span className="text-[11px] tracking-[0.2em] font-body font-medium text-gold/60 block mb-6">
                {service.number}
              </span>
              <h3 className="font-heading font-medium text-warm-white text-xl mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-grey text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
