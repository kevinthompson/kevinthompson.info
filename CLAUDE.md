# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server at localhost:4321
npm run build     # Type-check and build for production
npm run preview   # Preview production build locally
```

## Architecture

Personal site built with **Astro**, **Tailwind CSS**, and **TypeScript** using the [astro-nano](https://github.com/markhorn-dev/astro-nano) template. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

### Path Aliases

Defined in `tsconfig.json` with `baseUrl: "."` and the pattern `@*` → `./src/*`:

| Import | Resolves to |
|---|---|
| `@components/Foo` | `src/components/Foo` |
| `@layouts/PageLayout.astro` | `src/layouts/PageLayout.astro` |
| `@lib/utils` | `src/lib/utils.ts` |
| `@consts` | `src/consts.ts` |
| `@types` | `src/types.ts` |

### Key Files

- **`src/consts.ts`** — Site metadata (`SITE`), page metadata (`HOME`, `BLOG`, `WORK`, `PROJECTS`), and social links (`SOCIALS`). Primary place to update site-wide content.
- **`src/types.ts`** — Shared TypeScript types (`Site`, `Metadata`, `Socials`).
- **`src/lib/utils.ts`** — Shared utilities: `cn` (class merging), `formatDate`, `readingTime`, `dateRange`.
- **`src/content/config.ts`** — Astro content collection schemas for `blog`, `work`, and `projects`.

### Content Collections

All content lives in `src/content/`. Each collection uses a single `.md` or `.mdx` file per entry.

**Blog** (`src/content/blog/<slug>/index.md`):
```yaml
title: string
description: string
date: date
draft: boolean  # optional, omit to publish
```

**Work** (`src/content/work/<slug>.md`):
```yaml
company: string
role: string
dateStart: date
dateEnd: date | "Present"
```

**Projects** (`src/content/projects/<slug>/index.md`):
```yaml
title: string
description: string
date: date
draft: boolean       # optional
demoURL: string      # optional
repoURL: string      # optional
```

### Components

Nine components from astro-nano — no custom components beyond these:

- `ArrowCard` — linked card for blog posts and projects
- `BackToPrev` / `BackToTop` — navigation utilities
- `Container` — max-width wrapper (`screen-sm`)
- `FormattedDate` — renders a `<time>` element
- `Head` — all `<head>` content including fonts, meta tags, theme script
- `Header` / `Footer` — site chrome with theme toggle
- `Link` — styled anchor with optional underline and external support

### Styling

Dark mode via Tailwind's `class` strategy. Theme (light/dark/system) is persisted to `localStorage` and toggled by buttons in `Footer`. Animation uses `.animate` / `.animate.show` classes driven by an inline script in `Head`.
