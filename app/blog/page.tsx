import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { allPostsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Container from "@/components/ui/Container";
import { pageOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on interior design, furniture manufacturing, and creating spaces that perform — from the 1695 Designs team.",
  openGraph: pageOpenGraph({
    path: "/blog",
    title: "Blog | 1695 Designs",
    description:
      "Articles on interior design, bespoke furniture, and project delivery from the 1695 Designs studio.",
  }),
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: { asset: { _ref: string }; alt?: string };
  excerpt?: string;
  publishedAt?: string;
  author?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(allPostsQuery).catch(() => []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full mx-auto max-w-site px-6 md:px-10 lg:px-16 xl:px-20 pb-14 md:pb-18 pt-36 md:pt-44">
          <p className="text-[11px] tracking-[0.25em] uppercase font-body font-medium text-gold mb-6">
            Journal
          </p>
          <h1 className="font-heading font-extrabold text-warm-white uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(3rem,6vw,5.5rem)]">
            Blog
          </h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28 bg-warm-white">
        <Container>
          {posts.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-body text-grey">No posts published yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block"
                >
                  {/* Cover */}
                  <div className="relative aspect-[16/9] bg-stone overflow-hidden mb-5">
                    {post.coverImage?.asset ? (
                      <Image
                        src={urlFor(post.coverImage).width(700).height(394).url()}
                        alt={post.coverImage.alt ?? post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-[10px] tracking-[0.15em] uppercase font-body text-charcoal/30">
                          Image Coming Soon
                        </p>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Meta */}
                  {post.publishedAt && (
                    <p className="text-[10px] tracking-[0.15em] uppercase font-body text-grey mb-3">
                      {formatDate(post.publishedAt)}
                      {post.author && ` — ${post.author}`}
                    </p>
                  )}
                  <h2 className="font-heading font-medium text-charcoal text-xl leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="font-body text-charcoal/60 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
