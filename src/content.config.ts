import { defineCollection } from 'astro:content';

// Add collections here, e.g.:
//
//   import { glob } from 'astro/loaders';
//   import { z } from 'astro:content';
//
//   const posts = defineCollection({
//     loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
//     schema: z.object({
//       title: z.string(),
//       pubDate: z.coerce.date(),
//       description: z.string().optional(),
//     }),
//   });
//
//   export const collections = { posts };

export const collections = {} satisfies Record<string, ReturnType<typeof defineCollection>>;
