import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'drfekthb',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-01-01',
});