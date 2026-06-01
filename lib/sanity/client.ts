import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = "2024-01-01";

export const sanityConfigured = Boolean(projectId);

export const client = createClient({
  projectId: projectId ?? "unconfigured",
  dataset,
  apiVersion,
  // Use CDN in production; skip in dev so edits appear immediately
  useCdn: process.env.NODE_ENV === "production",
});

// Token-authenticated client for ISR revalidation (server-only)
export const serverClient = createClient({
  projectId: projectId ?? "unconfigured",
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});
