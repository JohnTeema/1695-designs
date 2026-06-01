import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/seo";
import { client } from "@/lib/sanity/client";
import {
  allProjectSlugsQuery,
  allProductSlugsQuery,
  allPostSlugsQuery,
} from "@/lib/sanity/queries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  /* ── Static routes ─────────────────────────────────────────────────────── */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl,                    lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${baseUrl}/about`,         lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${baseUrl}/services`,      lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${baseUrl}/portfolio`,     lastModified: now, changeFrequency: "weekly",   priority: 0.9 },
    { url: `${baseUrl}/furniture`,     lastModified: now, changeFrequency: "weekly",   priority: 0.8 },
    { url: `${baseUrl}/blog`,          lastModified: now, changeFrequency: "weekly",   priority: 0.7 },
    { url: `${baseUrl}/contact`,       lastModified: now, changeFrequency: "yearly",   priority: 0.6 },
  ];

  /* ── CMS routes ─────────────────────────────────────────────────────────── */
  const [projectSlugs, productSlugs, postSlugs] = await Promise.all([
    client.fetch(allProjectSlugsQuery).catch(() => []),
    client.fetch(allProductSlugsQuery).catch(() => []),
    client.fetch(allPostSlugsQuery).catch(() => []),
  ]);

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map(
    (s: { slug: string }) => ({
      url: `${baseUrl}/portfolio/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map(
    (s: { slug: string }) => ({
      url: `${baseUrl}/furniture/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map(
    (s: { slug: string }) => ({
      url: `${baseUrl}/blog/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    })
  );

  return [...staticRoutes, ...projectRoutes, ...productRoutes, ...postRoutes];
}
