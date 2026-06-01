# 1695 Designs — System Design

A premium interior design + furniture website. Marketing site with a light,
inquiry-only catalog (no e-commerce/checkout) and a CMS the client edits themselves.

This document is the build blueprint. Build to this; don't improvise around it.

---

## 1. Goals that drive the architecture

- Establish credibility; generate B2B leads (corporate, hospitality, developers).
- Premium, calm, minimal feel (references: Poliform, Herman Miller, B&B Italia).
- Fast loading + strong SEO (lead gen depends on being found).
- Image-heavy — photography is the product.
- Client updates content (projects, products, blog) without a developer.
- Host on Vercel first (`*.vercel.app`), move to custom domain later with no migration.

---

## 2. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | Native to Vercel; SSG/ISR for speed + SEO; built-in image optimization |
| Styling | Tailwind CSS | Brand tokens defined once, reused everywhere |
| CMS | Sanity | Friendly editor for non-technical client; hosted Studio; image CDN; free tier |
| Forms | Next.js Server Action + Resend | Email leads straight to client inbox; no separate server |
| Spam | Honeypot field + Cloudflare Turnstile | Keep junk leads out |
| WhatsApp | `wa.me` deep link | No backend; floating button + prefilled inquiry messages |
| Analytics | Vercel Analytics + Google Search Console | Traffic + search visibility |
| Hosting / CI | GitHub -> Vercel | Auto-deploy on push; preview deploys on PRs |

Alternative considered: Payload CMS (all-in-one in the Next repo). Rejected for now —
needs a database + file storage to manage. Sanity keeps ops near-zero for a small client.

---

## 3. Content model — what is CMS-driven vs hardcoded

Rule: only content that changes regularly goes in the CMS. Static copy stays in code.

### Hardcoded in code (rarely changes)
- Home, About, Services page copy (final copy already provided).
- Navigation, footer, brand statement.

### CMS-driven (Sanity schemas)
- **project** — title, slug, category (corporate | hospitality | residential | concept),
  images[], description, scope, location, completionDate, featured (bool)
- **product** — title, slug, category (living | dining | bedroom | office | hospitality),
  gallery[], description, specs[], featured (bool)
- **post** (blog) — title, slug, coverImage, excerpt, body (portable text), publishedAt, author
- **testimonial** — quote, author, role, company
- **siteSettings** (singleton) — phone, email, address, whatsappNumber, social links

---

## 4. Routes (App Router)

```
/                       Home        (static)
/about                  About       (static)
/services               Services    (static)
/portfolio              Project list (CMS, ISR)
/portfolio/[slug]       Project detail (CMS, ISR)
/furniture              Product list (CMS, ISR)
/furniture/[slug]       Product detail (CMS, ISR)
/blog                   Post list   (CMS, ISR)
/blog/[slug]            Post detail (CMS, ISR)
/contact                Contact + inquiry form
```

Rendering strategy:
- Static pages -> SSG (built once, served instantly).
- CMS pages -> ISR with on-demand revalidation via a Sanity webhook, so the client's
  edits appear live without a redeploy.

---

## 5. Project structure

```
1695-designs/
├── app/
│   ├── layout.tsx              root layout: fonts, header, footer, WhatsApp button
│   ├── page.tsx                Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── portfolio/[slug]/page.tsx
│   ├── furniture/page.tsx
│   ├── furniture/[slug]/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contact/page.tsx
│   ├── api/revalidate/route.ts  Sanity webhook -> on-demand ISR
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── actions/
│   └── submit-inquiry.ts       server action: validate -> Resend -> confirm
├── components/
│   ├── ui/                     Button, Input, Container (design system)
│   ├── sections/               Hero, About, Services, Process, WhyUs, Testimonials, CTA
│   └── layout/                 Header, Footer, WhatsAppButton
├── lib/
│   ├── sanity/                 client, queries (GROQ), image URL builder
│   └── seo.ts                  metadata + JSON-LD helpers
├── sanity/                     schema definitions
├── public/                     favicon, og-image, static assets
├── tailwind.config.ts          BRAND TOKENS live here
├── .env.local                  secrets (git-ignored)
└── next.config.js
```

---

## 6. Brand tokens (single source of truth -> tailwind.config.ts)

```
Colors
  charcoal   #1C1C1C   text, headers, dark sections
  gold       #B08D57   accent only (sparingly): hover, thin borders, small cues
  warmWhite  #F5F3EF   page background
  stone      #D8D2C8   section separation
  grey       #A6A6A6   secondary text
  black      #000000

Type
  heading: Cormorant Garamond  (next/font, weights 500/600)
  body:    Inter               (next/font, weights 400/500)

Principle: gold is a whisper, not a shout. Charcoal does the work; gold accents.
```

---

## 7. SEO checklist

- Per-page metadata via Next metadata API (title, description, Open Graph).
- `sitemap.ts` + `robots.ts`.
- JSON-LD structured data: Organization + LocalBusiness (helps Google + maps).
- Semantic headings (one h1 per page), descriptive alt text on every image.
- next/image for responsive, lazy-loaded, optimized images.

---

## 8. Forms / inquiries

- Fields: name, email, phone, projectType, message.
- Flow: client-side validate -> server action -> Resend email to client -> success state.
- Spam: hidden honeypot + Turnstile token verified server-side.
- Product/contact pages also expose a "Chat on WhatsApp" button with a prefilled message.
- Phase 2 (optional): also store leads in Sanity or a DB for a simple CRM view.

---

## 9. Environment variables (set in Vercel + .env.local — NEVER commit)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
RESEND_API_KEY=
INQUIRY_TO_EMAIL=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

---

## 10. Git + deploy workflow

- `main` = production. Every push to `main` -> Vercel auto-builds + deploys.
- Feature work on branches -> open PR -> Vercel posts a preview URL to review.
- Conventional-ish commits (`feat:`, `fix:`, `chore:`) for a clean history.
- `.gitignore` excludes `.env*`, `node_modules`, `.next`.

### Going from Vercel URL to custom domain (later, zero migration)
1. Site is already live at `1695-designs.vercel.app`.
2. In Vercel -> Project -> Settings -> Domains, add the real domain.
3. Update the DNS record at the registrar as Vercel instructs.
4. Vercel issues the SSL certificate automatically. No code change, no redeploy.

---

## 11. Build order (suggested)

1. Scaffold Next.js + TypeScript + Tailwind; wire brand tokens + fonts.
2. Layout shell: Header, Footer, WhatsApp button.
3. Home page with real copy (static).
4. About + Services (static).
5. Sanity schemas + Studio; seed a few sample projects/products.
6. Portfolio + Furniture list/detail pages (CMS).
7. Blog (CMS).
8. Contact form + Resend + spam protection.
9. SEO pass (metadata, sitemap, JSON-LD, alt text).
10. Connect GitHub -> Vercel; ship to the `*.vercel.app` URL for client review.
```
