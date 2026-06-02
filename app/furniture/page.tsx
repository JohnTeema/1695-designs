import { client } from "@/lib/sanity/client";
import { allProductsQuery } from "@/lib/sanity/queries";
import ProductGrid from "@/components/sections/ProductGrid";
import Container from "@/components/ui/Container";
import { pageOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Furniture",
  description:
    "Custom-manufactured and curated furniture for corporate, hospitality, and residential environments. Designed and built to fit your specific space.",
  openGraph: pageOpenGraph({
    path: "/furniture",
    title: "Furniture Collection | 1695 Designs",
    description:
      "Custom-made and curated furniture pieces — office, hospitality, living, dining, and bedroom. Designed to complement complete interior projects.",
  }),
};

export default async function FurniturePage() {
  const products = await client.fetch(allProductsQuery).catch(() => []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 pb-16 md:pb-20 pt-36 md:pt-44">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Collection
          </p>
          <h1 className="font-heading font-semibold text-warm-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-6">
            Furniture
          </h1>
          <p className="font-body text-stone text-lg max-w-xl">
            Custom-manufactured and curated pieces designed for complete interior environments.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 bg-warm-white">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>
    </>
  );
}
