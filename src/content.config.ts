import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    image: z.string().optional(),
    author: z.string().default('Ummul Khairi Team'),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.number().default(0),
  }),
});

const missions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/missions' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    icon: z.string().default('home'),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings/general.yml'),
  schema: z.object({
    siteTitle: z.string(),
    tagline: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    youtube: z.string().optional(),
    instagram: z.string().optional(),
    donateUrl: z.string().default('/donate'),
  }),
});

export const collections = { blog, team, missions, settings };
