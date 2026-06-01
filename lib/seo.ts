/** Central SEO helpers — single source of truth for JSON-LD and base URL. */

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://1695designs.com");

/** Standard open-graph image object — used by every page that doesn't
 *  supply its own Sanity image. */
export const defaultOgImage = {
  url: `${baseUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "1695 Designs — Interior Design & Furniture",
};

/**
 * Organization + LocalBusiness JSON-LD.
 * Phone and address are intentionally OMITTED — add them once the client
 * confirms the final contact details before launch.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${baseUrl}/#organization`,
      name: "1695 Designs",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      image: `${baseUrl}/opengraph-image`,
      description:
        "1695 Designs is a premium interior design and furniture company delivering functional, refined, and fully executed spaces for corporate and hospitality clients — from concept to completion.",
      email: "hello@1695designs.com",
      // telephone: "TODO — confirm with client before launch",
      // address: { "@type": "PostalAddress", addressLocality: "TODO", addressCountry: "NG" },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: "1695 Designs",
      url: baseUrl,
      image: `${baseUrl}/opengraph-image`,
      description:
        "Premium interior design and furniture company. Interior design, furniture manufacturing, and furniture supply for corporate and hospitality clients.",
      email: "hello@1695designs.com",
      // telephone: "TODO — confirm with client before launch",
      // address: { "@type": "PostalAddress", addressLocality: "TODO", addressCountry: "NG" },
      priceRange: "$$$$",
      currenciesAccepted: "NGN",
      areaServed: { "@type": "Country", name: "Nigeria" },
    },
  ],
};
