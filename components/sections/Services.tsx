import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "We design functional and visually refined spaces for corporate offices, hospitality brands, and modern environments. Our work blends aesthetics with purpose to improve how people experience spaces.",
  },
  {
    number: "02",
    title: "Furniture Manufacturing",
    description:
      "We design and produce custom furniture tailored to each project. From office workspaces to hospitality interiors, we create pieces that combine durability, comfort, and design precision.",
  },
  {
    number: "03",
    title: "Furniture Supply",
    description:
      "We provide curated furniture solutions for complete interior projects, sourcing and supplying quality pieces that align with design intent and brand identity.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <Container>
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
              What We Do
            </h2>
            <p className="font-body text-grey mt-4 max-w-md">
              1695 Designs operates across three integrated areas.
            </p>
          </div>
          <Button
            href="/services"
            variant="outline"
            className="border-stone text-stone hover:border-gold hover:text-gold self-start md:self-auto"
          >
            All Services
          </Button>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`reveal reveal-delay-${i + 1} group p-8 md:p-10 border border-white/8 hover:border-gold/40 transition-all duration-500`}
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

        {/* Closing line */}
        <p className="font-body text-grey/60 text-sm mt-8 text-center">
          Together, these three areas allow us to deliver fully realized spaces from concept to completion.
        </p>
      </Container>
    </section>
  );
}
