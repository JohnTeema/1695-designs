import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

const highlights = [
  "Interior Design",
  "Furniture Manufacturing",
  "Furniture Supply",
  "End-to-end project delivery",
];

type SanityImage = { asset?: { _ref: string }; alt?: string };

export default function About({ aboutImage }: { aboutImage?: SanityImage | null }) {
  const hasImage = Boolean(aboutImage?.asset);

  return (
    <section id="about" className="py-28 md:py-44 bg-warm-white overflow-hidden">
      <Container>
        {/* Asymmetric magazine-spread — image dominates at 55%, text floats offset */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-0 lg:gap-16 xl:gap-24 items-start">

          {/* Image — 55% width, tall 4:5 ratio, comes in on a separate 300ms track */}
          <div className="reveal reveal-seq-image relative aspect-[4/5] bg-stone order-2 lg:order-1 overflow-hidden">
            {hasImage ? (
              <Image
                src={urlFor(aboutImage!).width(1000).height(1250).quality(80).url()}
                alt={aboutImage!.alt ?? "1695 Designs interior project"}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            ) : (
              <>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-stone/60 to-charcoal/10"
                  aria-hidden="true"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey">
                    Photography — Coming Soon
                  </p>
                </div>
              </>
            )}
            <div className="absolute top-0 left-0 w-px h-24 bg-gold" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-24 h-px bg-gold" aria-hidden="true" />
          </div>

          {/* Text — offset down to create editorial tension against the tall image */}
          <div className="order-1 lg:order-2 lg:pt-28">
            <h2 className="reveal-heading reveal-seq-heading font-heading font-bold text-charcoal text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] mb-8">
              We design spaces that work as beautifully as they look
            </h2>
            <div className="reveal-body reveal-seq-body space-y-5 font-body text-charcoal/80 leading-relaxed">
              <p>
                1695 Designs is an interior design and furniture company specializing in
                corporate and hospitality environments. We combine strategic design thinking
                with furniture manufacturing and supply to deliver complete interior solutions.
              </p>
              <p>
                From initial concept to final installation, we manage the entire process,
                ensuring every space is functional, intentional, and built to elevate experience.
              </p>
            </div>

            <div className="reveal-body reveal-seq-body mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="text-[11px] tracking-[0.1em] uppercase font-body font-medium border border-stone text-charcoal px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/about" variant="outline">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
