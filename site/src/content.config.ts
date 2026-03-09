import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      status: z.enum(['draft', 'informal', 'technical', 'published']),
      date: z.date(),
      updated: z.date().optional(),
      tags: z.array(z.string()),
      authors: z.array(z.string()).default(['Neilson P. Eney']),
      abstract: z.string().optional(),
      coverImage: image().optional(),
      references: z.array(z.string()).optional(),
      audience: z.enum(['general', 'technical', 'both']).default('both'),
    }),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['planned', 'active', 'complete', 'archived']),
    hypothesis: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()),
    relatedResearch: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      status: z.enum(['concept', 'active', 'complete', 'archived']),
      date: z.date(),
      tags: z.array(z.string()),
      coverImage: image().optional(),
      subdomain: z.string().optional(),
      repo: z.string().optional(),
    }),
});

export const collections = { research, experiments, projects };
