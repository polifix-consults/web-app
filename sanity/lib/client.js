import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId,
  dataset: "production",
  apiVersion: "2025-07-01",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
