import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    category: z.enum(['Carrocerías', 'Industrial']),
    keywords: z.array(z.string()),
    seoSlug: z.string(),
  }),
});

export const collections = {
  products: productsCollection,
};
