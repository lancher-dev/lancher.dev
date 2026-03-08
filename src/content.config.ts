import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docsPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./docs" }),
  // All fields are optional: pure markdown files without frontmatter work fine.
  schema: z.object({
    title: z.string().optional(),
  }),
});

const tokenSchema = z.object({
  type: z.enum([
    "prompt",
    "command",
    "arg",
    "output",
    "success",
    "warning",
    "comment",
    "key",
    "value",
  ]),
  text: z.string(),
});

const howItWorks = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number().int().min(1),
    label: z.string(),
    title: z.string(),
    desc: z.string(),
    lines: z.array(z.array(tokenSchema)),
  }),
});

// ── platforms ─────────────────────────────────────────────────────────────────

const platforms = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number().int().min(1),
    label: z.string(),
    sub: z.string(),
    href: z.string().url(),
    external: z.boolean().optional().default(false),
    note: z.string().optional(),
  }),
});

export const collections = {
  docsPages,
  "how-it-works": howItWorks,
  platforms,
};
