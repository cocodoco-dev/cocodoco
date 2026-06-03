# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cocodoco (`https://www.cocodoco.fun`) is a personality quiz website targeting English-speaking users aged 10–20. The goal is AdSense monetization. Future plans include more quizzes and blog-style articles on personality and relationships.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

No test suite exists.

## Architecture

**Next.js App Router** — all routes live under `app/`. No `pages/` directory.

### Quiz flow

1. User visits `/quiz/[name]` → answers questions → redirected to `/result/[name]?type=[result_key]`
2. Quiz page: `"use client"`, `useState` for `current` (question index) and `scores` (object keyed by result type)
3. Each answer option has a `s` object mapping result keys to weighted score increments
4. `pickTop(scores)` returns the key with the highest score → `router.push(`/result/[name]?type=${top}`)`
5. Result page: `"use client"` + `export const dynamic = "force-dynamic"`, wrapped in `<Suspense>`, reads `?type=` via `useSearchParams()`

### Adding a new quiz

Both files are always required together:

**`app/quiz/[name]/page.tsx`** — define `ResultKey` union type, `questions` array, `pickTop()`, component with `useState`.

**`app/result/[name]/page.tsx`** — define `results` object (one entry per `ResultKey` with `title`, `summary`, `desc1`, `desc2`, `strengths`, `watchOut`, `bestMatch`), `ResultContent` component, default export wrapped in `<Suspense>`.

After creating both files, add the quiz to the array in **`app/page.tsx`** (top of array = shown first on home).

### Styling rules

- **Inline styles only** — do not use Tailwind utility classes in JSX (Tailwind is installed but not used for component styles)
- Background: `#fdf2f8` (pink-white)
- Card border: `1px solid #f2a7b8`
- Primary button color: `#ff8fab`
- Text primary: `#111827`, secondary: `#374151`, muted: `#9ca3af`
- Max content width: `min(720px, 100%)` for quiz pages, `min(860px, 100%)` for result pages
- Border radius: `16px` for cards, `12px` for buttons

### AdSense

The AdSense script (`ca-pub-8500564460470684`) is loaded globally in `app/layout.tsx`. Each quiz and result page has placeholder `div` blocks for ad slots — replace these with real `<ins class="adsbygoogle">` tags when activating ads. Ads appear below the question card on quiz pages, and above + below the result card on result pages.

### SEO

Metadata is set globally in `app/layout.tsx`. Individual quiz/result pages do not currently define per-page metadata. When adding metadata to a page, use Next.js `export const metadata: Metadata = { title, description }` (server component) or `generateMetadata()`.
