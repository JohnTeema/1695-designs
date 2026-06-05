import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { productBySlugQuery, allProductSlugsQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { resolveContact, whatsappHref } from "@/lib/contact";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await client.fetch(allProductSlugsQuery).catch(() => []);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await client.fetch(productBySlugQuery, { slug }).catch(() => null);
  if (!product) return { title: "Product Not Found" };
  const ogImage = product.gallery?.[0]?.asset
    ? { url: urlFor(product.gallery[0]).width(1200).height(630).url(), alt: product.title }
    : { url: "/opengraph-image" };
  const description = product.description ?? `Custom ${product.category} furniture by 1695 Designs.`;
  return {
    title: product.title,
    description,
    openGraph: { title: product.title, description, images: [ogImage] },
  };
}

const categoryLabel: Record<string, string> = {
  living: "Living Room",
  dining: "Dining",
  bedroom: "Bedroom",
  office: "Office",
  hospitality: "Hospitality",
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const [product, settings] = await Promise.all([
    client.fetch(productBySlugQuery, { slug }).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);
  if (!product) notFound();

  const { whatsappNumber } = resolveContact(settings);
  const waLink = whatsappHref(
    whatsappNumber,
    `Hello, I'm interested in the ${product.title} and would like more information.`
  );

  return (
    <>
      <div className="pt-20 bg-warm-white">
        <Container>
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Gallery */}
              <div className="space-y-3">
                {product.gallery?.[0]?.asset ? (
                  <>
                    <div className="img-breathe relative aspect-square bg-stone overflow-hidden">
                      <Image
                        src={urlFor(product.gallery[0]).width(800).url()}
                        alt={product.gallery[0].alt ?? product.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    {product.gallery.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {product.gallery.slice(1, 5).map(
                          (
                            img: { asset?: { _ref: string }; alt?: string },
                            i: number
                          ) =>
                            img?.asset && (
                              <div
                                key={i}
                                className="img-breathe relative aspect-square bg-stone overflow-hidden"
                              >
                                <Image
                                  src={urlFor(img).width(200).url()}
                                  alt={img.alt ?? `${product.title} ${i + 2}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="relative aspect-square bg-stone flex items-center justify-center">
                    <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                      Photography Coming Soon
                    </p>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <p className="text-[11px] tracking-[0.2em] uppercase font-body font-medium text-gold mb-4">
                  {categoryLabel[product.category] ?? product.category}
                </p>
                <h1 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3rem)] leading-[1.1] mb-6">
                  {product.title}
                </h1>
                {product.description && (
                  <p className="font-body text-charcoal/75 leading-relaxed mb-8">
                    {product.description}
                  </p>
                )}

                {/* Specs */}
                {product.specs?.length > 0 && (
                  <div className="mb-8 border-t border-stone pt-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey mb-4">
                      Specifications
                    </p>
                    <ul className="space-y-2">
                      {product.specs.map((spec: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-3 h-px bg-gold mt-[0.65em] shrink-0"
                            aria-hidden="true"
                          />
                          <span className="font-body text-charcoal/75 text-sm">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto border-t border-stone pt-8 space-y-3">
                  <Button href="/contact" variant="primary" className="w-full justify-center">
                    Request a Quote
                  </Button>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-[11px] tracking-[0.12em] uppercase font-body font-medium border border-stone text-charcoal px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="mt-16 pt-8 border-t border-stone">
              <Link
                href="/furniture"
                className="text-[11px] tracking-[0.15em] uppercase font-body font-medium text-grey hover:text-gold transition-colors"
              >
                ← All Furniture
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
