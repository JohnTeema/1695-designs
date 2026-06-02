import { groq } from "next-sanity";

/* ─── Projects ───────────────────────────────────────────────────────────── */

export const allProjectsQuery = groq`
  *[_type == "project"] | order(completionDate desc) {
    _id,
    title,
    slug,
    category,
    "coverImage": images[0],
    description,
    scope,
    location,
    completionDate,
    featured
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(completionDate desc)[0...6] {
    _id,
    title,
    slug,
    category,
    "coverImage": images[0],
    scope,
    location,
    completionDate
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    images,
    description,
    scope,
    location,
    completionDate,
    featured
  }
`;

export const allProjectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] { "slug": slug.current }
`;

/* ─── Products ───────────────────────────────────────────────────────────── */

export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    category,
    "coverImage": gallery[0],
    description,
    featured
  }
`;

export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    title,
    slug,
    category,
    "coverImage": gallery[0],
    description
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    gallery,
    description,
    specs,
    featured
  }
`;

export const allProductSlugsQuery = groq`
  *[_type == "product" && defined(slug.current)] { "slug": slug.current }
`;

/* ─── Posts ──────────────────────────────────────────────────────────────── */

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    coverImage,
    excerpt,
    publishedAt,
    author
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    coverImage,
    excerpt,
    body,
    publishedAt,
    author
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] { "slug": slug.current }
`;

/* ─── Testimonials ───────────────────────────────────────────────────────── */

export const testimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    quote,
    author,
    role,
    company
  }
`;

/* ─── Site Settings (singleton) ─────────────────────────────────────────── */

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    phone,
    email,
    address,
    whatsappNumber,
    instagramUrl,
    linkedinUrl,
    facebookUrl,
    heroImages[]{ ..., "alt": alt },
    aboutImage
  }
`;

/* ─── Page Images (singleton — About & Services imagery) ────────────────── */

export const pageImagesQuery = groq`
  *[_type == "pageImages"][0] {
    aboutStoryImage,
    aboutApproachImage,
    interiorDesignImage,
    furnitureManufacturingImage,
    furnitureSupplyImage,
    designBuildImage
  }
`;
