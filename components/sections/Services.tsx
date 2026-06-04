import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal">
      <Container>
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <h2 className="font-heading font-bold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em]">
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

        {/* Asymmetric grid — Interior Design large (60%), two supporting cards stacked (40%) */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0.5 md:min-h-[480px]">

          {/* Featured: Interior Design */}
          <div className="reveal reveal-delay-1 group flex flex-col justify-between p-10 md:p-14 border border-white/8 hover:border-gold/40 transition-all duration-500 md:row-span-2">
            <div>
              <span className="text-[11px] tracking-[0.2em] font-body font-medium text-gold/60 block mb-8">
                01
              </span>
              <h3 className="font-heading font-medium text-warm-white text-2xl md:text-[1.75rem] mb-5 group-hover:text-gold transition-colors duration-300">
                Interior Design
              </h3>
              <p className="font-body text-grey text-sm leading-relaxed max-w-sm">
                We design functional and visually refined spaces for corporate offices,
                hospitality brands, and modern environments. Our work blends aesthetics
                with purpose to improve how people experience spaces.
              </p>
            </div>
            <div className="mt-10">
              <Button
                href="/services"
                variant="ghost"
                className="text-stone hover:text-gold text-xs"
              >
                Explore Service →
              </Button>
            </div>
          </div>

          {/* Supporting: Furniture Manufacturing */}
          <div className="reveal reveal-delay-2 group flex flex-col p-8 md:p-10 border border-white/8 hover:border-gold/40 transition-all duration-500">
            <span className="text-[11px] tracking-[0.2em] font-body font-medium text-gold/60 block mb-6">
              02
            </span>
            <h3 className="font-heading font-medium text-warm-white text-xl mb-4 group-hover:text-gold transition-colors duration-300">
              Furniture Manufacturing
            </h3>
            <p className="font-body text-grey text-sm leading-relaxed">
              We design and produce custom furniture tailored to each project. From office
              workspaces to hospitality interiors, we create pieces that combine
              durability, comfort, and design precision.
            </p>
          </div>

          {/* Supporting: Furniture Supply */}
          <div className="reveal reveal-delay-3 group flex flex-col p-8 md:p-10 border border-white/8 hover:border-gold/40 transition-all duration-500">
            <span className="text-[11px] tracking-[0.2em] font-body font-medium text-gold/60 block mb-6">
              03
            </span>
            <h3 className="font-heading font-medium text-warm-white text-xl mb-4 group-hover:text-gold transition-colors duration-300">
              Furniture Supply
            </h3>
            <p className="font-body text-grey text-sm leading-relaxed">
              We provide curated furniture solutions for complete interior projects,
              sourcing and supplying quality pieces that align with design intent and
              brand identity.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <p className="font-body text-grey/60 text-sm mt-8 text-center">
          Together, these three areas allow us to deliver fully realized spaces from concept to completion.
        </p>
      </Container>
    </section>
  );
}
