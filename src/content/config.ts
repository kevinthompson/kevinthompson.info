import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      category: z.enum(['Stories', 'Tutorials']),
      description: z.string(),
      publishDate: z.date(),
      canonicalURL: z.string().optional(),
      showCoverImage: z.boolean().default(true),
    }),
})

export const collections = {
  blog: blogCollection,
}
