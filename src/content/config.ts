import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string())
  })
});
export const collections = {
  'blog': blogCollection,
};