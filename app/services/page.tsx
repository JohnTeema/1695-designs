import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CmsImage from "@/components/ui/CmsImage";
import { client } from "@/lib/sanity/client";
import { pageImagesQuery } from "@/lib/sanity/queries";
import { pageOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete interior solutions — interior design, furniture manufacturing, furniture supply, and end-to-end design & build — for corporate, hospitality, and residential environments.",
  openGraph: pageOpenGraph({
    path: "/services",
    title: "Services | 1695 Designs",
    description:
      "Interior design, furniture manufacturing, furniture supply, and design & build solutions. We manage every stage from concept to handover.",
  }),
};

/* ─── Data (verbatim from services-copy.md) ─────────────────────────────── */

const interiorDesignServices = [
  "Space Planning",
  "Interior Concept Development",
  "3D Visualization & Renderings",
  "Workplace Design",
  "Hospitality Design",
  "Residential Interior Design",
  "Material & Finish Selection",
  "Furniture Specification",
  "Design Documentation",
  "Project Supervision",
];

const interiorDesignIdealFor = [
  "Corporate Offices",
  "Hotels",
  "Restaurants",
  "Lounges",
  "Short-let Apartments",
  "Commercial Developments",
  "Luxury Residences",
];

const furnitureManufacturedItems = [
  "Executive Desks",
  "Reception Desks",
  "Workstations",
  "Conference Tables",
  "Hospitality Furniture",
  "Restaurant Furniture",
  "Lounge Seating",
  "Dining Sets",
  "Beds & Wardrobes",
  "Custom Storage Solutions",
  "Built-in Joinery",
  "Feature Furniture Pieces",
];

const whyCustomFurniture = [
  "Tailored to your space",
  "Better use of available dimensions",
  "Consistent design language",
  "Higher quality finishes",
  "Long-term durability",
];

const furnitureSupplyProducts = [
  "Office Furniture",
  "Hospitality Furniture",
  "Living Room Furniture",
  "Dining Furniture",
  "Bedroom Furniture",
  "Decorative Lighting",
  "Rugs & Floor Coverings",
  "Wallpaper & Wall Finishes",
  "Window Treatments",
  "Decorative Accessories",
  "Art & Styling Pieces",
];

const supplyAdvantages = [
  "Access to trusted manufacturers",
  "Quality assurance",
  "Design-led product selection",
  "Local and international sourcing options",
  "Seamless integration with interior projects",
];

const designBuildSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We assess your space, objectives, budget, and requirements.",
  },
  {
    number: "02",
    title: "Design Development",
    description:
      "We create concepts, layouts, visualizations, and specifications.",
  },
  {
    number: "03",
    title: "Production & Procurement",
    description: "Furniture manufacturing and material sourcing begin.",
  },
  {
    number: "04",
    title: "Installation & Execution",
    description: "Our team oversees implementation and project delivery.",
  },
  {
    number: "05",
    title: "Project Handover",
    description: "A fully completed space ready for use.",
  },
];

const whyChoose = [
  {
    title: "Integrated Expertise",
    body: "Design, furniture manufacturing, and supply working together under one brand.",
  },
  {
    title: "Quality Craftsmanship",
    body: "Attention to detail from concept to completion.",
  },
  {
    title: "Tailored Solutions",
    body: "Every project is developed around your specific needs and objectives.",
  },
  {
    title: "Reliable Delivery",
    body: "Structured processes and execution-focused project management.",
  },
  {
    title: "Design That Performs",
    body: "Spaces that are not only beautiful but functional, efficient, and built to last.",
  },
];

/* ─── Shared sub-components ─────────────────────────────────────────────── */

function ListBlock({
  heading,
  items,
  light = false,
}: {
  heading: string;
  items: string[];
  light?: boolean;
}) {
  return (
    <div>
      <p
        className={`text-[10px] tracking-[0.2em] uppercase font-body font-medium mb-4 ${
          light ? "text-gold/80" : "text-grey"
        }`}
      >
        {heading}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div
              className="w-3 h-px bg-gold mt-[0.6em] shrink-0"
              aria-hidden="true"
            />
            <span
              className={`font-body text-sm leading-relaxed ${
                light ? "text-stone" : "text-charcoal/75"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default async function ServicesPage() {
  const images = await client.fetch(pageImagesQuery).catch(() => null);

  return (
    <>
      {/* ── Hero / Page intro ────────────────────────────────────────────── */}
      <section className="section-gold-rule relative min-h-[60vh] flex items-end bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 pb-20 md:pb-24 pt-40 md:pt-48">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
              Our Services
            </p>
            <h1 className="font-heading font-extrabold text-warm-white uppercase tracking-[-0.03em] leading-[0.95] mb-8 text-[clamp(3rem,6vw,5.5rem)]">
              Design. Craft. Deliver.
            </h1>
            <div className="space-y-4 font-body text-stone leading-relaxed max-w-2xl">
              <p>
                At 1695 Designs, we provide complete interior solutions for corporate,
                hospitality, and residential environments. By combining interior design,
                furniture manufacturing, and furniture supply under one roof, we ensure
                every project is delivered with consistency, quality, and attention to
                detail.
              </p>
              <p>
                Whether you are developing a new space, renovating an existing one, or
                furnishing a completed project, our team works closely with you from
                concept to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service 1 — Interior Design ──────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-warm-white">
        <Container>
          {/* Section header */}
          <div className="flex items-start gap-6 mb-14">
            <span className="font-heading text-5xl font-medium text-charcoal/10 leading-none mt-1 select-none">
              01
            </span>
            <div>
              <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
                Interior Design
              </h2>
              <p className="font-body text-gold mt-2 tracking-wide">
                Creating Spaces with Purpose
              </p>
            </div>
          </div>

          {/* Body — Interior Design flagship: image dominates at 60% */}
          <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-16 items-start mb-14">
            <div className="space-y-4 font-body text-charcoal/75 leading-relaxed">
              <p>
                Every successful space begins with thoughtful design. Our interior design
                service goes beyond aesthetics to create environments that are functional,
                efficient, and aligned with the needs of the people who use them. We take
                time to understand your goals, operational requirements, brand identity, and
                user experience before translating them into a well-executed design
                solution.
              </p>
              <p>
                From workplace environments that support productivity to hospitality spaces
                that enhance guest experience, our approach combines creativity with
                practical execution.
              </p>
            </div>

            {/* Interior Design image — from CMS, placeholder fallback */}
            <div className="relative aspect-[4/3] bg-stone overflow-hidden">
              <CmsImage
                image={images?.interiorDesignImage}
                fallbackAlt="Interior design by 1695 Designs"
                width={800}
                height={600}
              />
              <div className="absolute top-0 right-0 w-px h-16 bg-gold z-10" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-16 h-px bg-gold z-10" aria-hidden="true" />
            </div>
          </div>

          {/* Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-stone pt-12">
            <ListBlock
              heading="Our Interior Design Services Include"
              items={interiorDesignServices}
            />
            <ListBlock heading="Ideal For" items={interiorDesignIdealFor} />
          </div>
        </Container>
      </section>

      {/* ── Service 2 — Furniture Manufacturing ──────────────────────────── */}
      <section className="py-28 md:py-40 bg-charcoal">
        <Container>
          <div className="flex items-start gap-6 mb-14">
            <span className="font-heading text-5xl font-medium text-warm-white/10 leading-none mt-1 select-none">
              02
            </span>
            <div>
              <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
                Furniture Manufacturing
              </h2>
              <p className="font-body text-gold mt-2 tracking-wide">
                Custom Furniture Built for Your Space
              </p>
            </div>
          </div>

          {/* Furniture Manufacturing — equal weight, image leads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-14">
            {/* Furniture Manufacturing image — from CMS, placeholder fallback */}
            <div className="relative aspect-[4/3] bg-charcoal/50 border border-white/10 overflow-hidden order-2 lg:order-1">
              <CmsImage
                image={images?.furnitureManufacturingImage}
                fallbackAlt="Custom furniture manufacturing by 1695 Designs"
                width={800}
                height={600}
                dark
              />
              <div className="absolute bottom-0 left-0 w-px h-16 bg-gold z-10" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-16 h-px bg-gold z-10" aria-hidden="true" />
            </div>

            <div className="space-y-4 font-body text-stone leading-relaxed order-1 lg:order-2">
              <p>
                Great spaces deserve furniture that fits perfectly. Our furniture
                manufacturing division produces custom-made pieces designed to complement
                each project&apos;s unique requirements. By controlling the production
                process, we are able to ensure superior quality, better design consistency,
                and greater flexibility than off-the-shelf alternatives.
              </p>
              <p>Every piece is designed with durability, comfort, and craftsmanship in mind.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-12">
            <ListBlock heading="What We Manufacture" items={furnitureManufacturedItems} light />
            <ListBlock heading="Why Custom Furniture?" items={whyCustomFurniture} light />
          </div>
        </Container>
      </section>

      {/* ── Service 3 — Furniture Supply ─────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-warm-white">
        <Container>
          <div className="flex items-start gap-6 mb-14">
            <span className="font-heading text-5xl font-medium text-charcoal/10 leading-none mt-1 select-none">
              03
            </span>
            <div>
              <h2 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
                Furniture Supply
              </h2>
              <p className="font-body text-gold mt-2 tracking-wide">
                Curated Furniture & Interior Solutions
              </p>
            </div>
          </div>

          {/* Furniture Supply — text-dominant at 58% */}
          <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-16 items-start mb-14">
            <div className="space-y-4 font-body text-charcoal/75 leading-relaxed">
              <p>
                We source and supply carefully selected furniture, décor, and interior
                accessories that complete and elevate your space. Our extensive supplier
                network allows us to provide clients with furniture solutions that align
                with their project goals, budget, and aesthetic preferences.
              </p>
              <p>
                Whether furnishing an executive office, hotel suite, restaurant, or private
                residence, we ensure every piece contributes to a cohesive and functional
                environment.
              </p>
            </div>

            {/* Furniture Supply image — from CMS, placeholder fallback */}
            <div className="relative aspect-[4/3] bg-stone overflow-hidden">
              <CmsImage
                image={images?.furnitureSupplyImage}
                fallbackAlt="Curated furniture supply by 1695 Designs"
                width={800}
                height={600}
              />
              <div className="absolute top-0 right-0 w-px h-16 bg-gold z-10" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-16 h-px bg-gold z-10" aria-hidden="true" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-stone pt-12">
            <ListBlock heading="Products We Supply" items={furnitureSupplyProducts} />
            <ListBlock heading="Our Supply Advantage" items={supplyAdvantages} />
          </div>
        </Container>
      </section>

      {/* ── Service 4 — Design & Build ───────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-charcoal">
        <Container>
          <div className="flex items-start gap-6 mb-14">
            <span className="font-heading text-5xl font-medium text-warm-white/10 leading-none mt-1 select-none">
              04
            </span>
            <div>
              <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
                Design & Build Solutions
              </h2>
              <p className="font-body text-gold mt-2 tracking-wide">
                End-to-End Project Delivery
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Design & Build image — from CMS, placeholder fallback (dark) */}
            <div className="relative aspect-[4/3] bg-charcoal/50 border border-white/10 overflow-hidden">
              <CmsImage
                image={images?.designBuildImage}
                fallbackAlt="Design and build project delivery by 1695 Designs"
                width={800}
                height={600}
                dark
              />
              <div className="absolute bottom-0 right-0 w-px h-16 bg-gold z-10" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-gold z-10" aria-hidden="true" />
            </div>

            <div className="space-y-4 font-body text-stone leading-relaxed">
              <p>
                For clients seeking a seamless experience, we offer complete design and
                build services. From initial design concepts to furniture production,
                procurement, installation, and project handover, we manage every stage of
                the process.
              </p>
              <p>
                This integrated approach reduces coordination challenges, improves quality
                control, and ensures the final outcome remains true to the original vision.
              </p>
            </div>
          </div>

          {/* 5-step process */}
          <div className="border-t border-white/10 pt-12">
            <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gold/80 mb-8">
              Our Design & Build Process
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-white/10">
              {designBuildSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`p-6 md:p-8 ${i < 4 ? "md:border-r border-white/10" : ""} border-b md:border-b-0 border-white/10 last:border-b-0`}
                >
                  <span className="font-heading text-3xl font-medium text-warm-white/15 block mb-4 select-none">
                    {step.number}
                  </span>
                  <h3 className="font-heading font-medium text-warm-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-grey text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why Clients Choose 1695 Designs ──────────────────────────────── */}
      <section className="py-28 md:py-40 bg-charcoal">
        <Container>
          <div className="max-w-xl mb-16">
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3rem)] leading-[1.1]">
              Why Clients Choose 1695 Designs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {whyChoose.map((point) => (
              <div
                key={point.title}
                className="p-8 md:p-10 border border-white/10 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-6 h-px bg-gold mb-6" aria-hidden="true" />
                <h3 className="font-heading font-medium text-warm-white text-xl mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-grey text-sm leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-charcoal relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-px bg-gold/20" aria-hidden="true" />
        <Container narrow>
          <div className="text-center">
            <h2 className="font-heading font-semibold text-warm-white text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] mb-8">
              Ready to Transform Your Space?
            </h2>
            <p className="font-body text-grey leading-relaxed text-lg mb-12 max-w-2xl mx-auto">
              Whether you are designing a corporate headquarters, furnishing a hospitality
              project, or creating a unique interior environment, 1695 Designs is ready to
              bring your vision to life. Let&apos;s create a space that reflects your ambition,
              enhances experience, and stands the test of time.
            </p>
            <Button href="/contact" variant="primary">
              Request a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
