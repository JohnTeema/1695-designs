import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity/client";
import { postBySlugQuery, allPostSlugsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { portableTextComponents } from "@/components/portabletext/PortableTextComponents";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await client.fetch(allPostSlugsQuery).catch(() => []);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: post.coverImage?.asset
      ? { images: [{ url: urlFor(post.coverImage).width(1200).url() }] }
      : undefined,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
  if (!post) notFound();

  return (
    <>
      {/* Cover image */}
      {post.coverImage?.asset && (
        <div className="relative h-[50vh] md:h-[60vh] bg-charcoal mt-20">
          <Image
            src={urlFor(post.coverImage).width(1600).url()}
            alt={post.coverImage.alt ?? post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        </div>
      )}

      {/* Article */}
      <article className={post.coverImage?.asset ? "" : "pt-20"}>
        <Container narrow>
          <div className="py-14 md:py-20">
            {/* Header */}
            <header className="mb-12 pb-10 border-b border-stone">
              {post.publishedAt && (
                <p className="text-[10px] tracking-[0.2em] uppercase font-body text-grey mb-5">
                  {formatDate(post.publishedAt)}
                  {post.author && ` — ${post.author}`}
                </p>
              )}
              <h1 className="font-heading font-semibold text-charcoal text-[clamp(2rem,4vw,3.5rem)] leading-[1.1]">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="font-body text-charcoal/60 text-lg leading-relaxed mt-6">
                  {post.excerpt}
                </p>
              )}
            </header>

            {/* Body */}
            {post.body && (
              <div>
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            )}

            {/* Back */}
            <div className="mt-16 pt-8 border-t border-stone">
              <Link
                href="/blog"
                className="text-[11px] tracking-[0.15em] uppercase font-body font-medium text-grey hover:text-gold transition-colors"
              >
                ← All Posts
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
