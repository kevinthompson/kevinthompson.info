# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Architecture

Personal site built with **Astro**, **Tailwind CSS**, **TypeScript**, and **Alpine.js**. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

### Path Aliases

Defined in `tsconfig.json` with `baseUrl: "src"`:

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@utils/*` | `src/utils/*` |
| `@config` | `src/config.ts` |
| `@types` | `src/types.ts` |

### Key Files

- **`src/config.ts`** — Site metadata (`SITE`), social links (`SOCIALS`), and tech stack (`STACK`). Update here when changing site-wide content.
- **`src/content/config.ts`** — Astro content collection schema for blog posts. Blog posts live in `src/content/blog/` as `.mdx` files.
- **`src/types.ts`** — Shared TypeScript types (`Post`, `Site`, `SocialObjects`, `StackObjects`).

### Blog Posts

Blog posts are MDX files in `src/content/blog/`. Required frontmatter fields:

```yaml
title: string
category: "Stories" | "Tutorials"
description: string
publishDate: date
```

Optional: `image` (with `src` and `alt`), `canonicalURL`, `showCoverImage`.

Reading time is injected automatically via a remark plugin in `astro.config.mjs`.

### Formatting

Prettier with single quotes, no semicolons (`prettier.config.cjs`). Tailwind class sorting is applied automatically via `prettier-plugin-tailwindcss`.
