# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cocodoco (`https://www.cocodoco.fun`) is a personality quiz website targeting English-speaking users aged 10–20. The goal is AdSense monetization. Future plans include more quizzes and blog-style articles on personality and relationships.

## Commands

```bash
npm install   # Install dependencies (required before first run)
npm run dev   # Start dev server
npm run build # Production build
npm run lint  # ESLint
```

No test suite exists.

## Architecture

**Next.js App Router** — all routes live under `app/`. No `pages/` directory.

### Reference files

Always use these as the style reference — not the older simpler quizzes like `aura`:

- **Quiz page:** `app/quiz/comfort-character/page.tsx`
- **Result page:** `app/result/comfort-character/page.tsx`

### Quiz flow

1. User visits `/quiz/[name]` → answers questions → redirected to `/result/[name]?type=[result_key]`
2. Quiz page: `"use client"`, `useState` for `current` (question index) and `scores`, `useMemo` for progress bar
3. Each answer option has a `s` object mapping result keys to weighted score increments
4. `pickTop(scores)` uses a priority array and returns the key with the highest score
5. Result page: `"use client"` + `export const dynamic = "force-dynamic"`, wrapped in `<Suspense>`, reads `?type=` via `useSearchParams()`

### Adding a new quiz — required files

Both files are always required together:

**`app/quiz/[name]/page.tsx`:**
- Explicit `Question` type declaration
- `useMemo` for progress bar calculation (`((current + 1) / questions.length) * 100`)
- Gradient background, category label (uppercase), h1, intro paragraph, animated progress bar, question card with `boxShadow`, gradient buttons
- "About this quiz" section at the bottom with multiple `<h3>` subsections (SEO content, ~600–800 words)

**`app/result/[name]/page.tsx`:**
- Safer key fallback: `rawKey && rawKey in results ? rawKey : "defaultKey"`
- Each result entry must have: `title`, `summary`, `desc1`, `desc2`, `meaning1`, `meaning2`, `showUp1`, `showUp2`, `strengths`, `strengthDetails`, `watchOut`, `watchOutDetails`, `growth1`, `growth2`, `reminder`, `bestMatch`
- Six `<h2>` sections in the result card: "What this [X] means", "How this [X] shows up in your life", "Your strengths", "What may feel difficult", "Growth path", "A small reminder for you"

After creating both files, add the quiz to the **top** of the array in `app/page.tsx`.

### Styling rules

- **Inline styles only** — do not use Tailwind utility classes in JSX
- **Font:** `Arial, sans-serif` (not just `sans-serif`)
- **Background:** `linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)` (not flat color)
- **Category label:** `fontSize: 13px`, `fontWeight: 700`, `letterSpacing: 0.08em`, `color: #9d174d`, `textTransform: uppercase`
- **Progress bar:** gradient `linear-gradient(90deg, #fb7185 0%, #f59e0b 100%)`, animated with `transition: width 0.25s ease`
- **Question card:** `boxShadow: 0 10px 30px rgba(0,0,0,0.04)`
- **Buttons:** `linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)`, `fontWeight: 600`, `boxShadow: 0 8px 18px rgba(251,113,133,0.18)`, width `min(560px, 100%)`
- **Result card:** `lineHeight: 1.8`, `boxShadow: 0 10px 30px rgba(0,0,0,0.03)`
- Max content width: `min(760px, 100%)` for quiz pages, `min(860px, 100%)` for result pages
- Border radius: `18px` for cards, `14px` for buttons

### AdSense

The AdSense script (`ca-pub-8500564460470684`) is loaded globally in `app/layout.tsx`. Each quiz and result page has placeholder `div` blocks for ad slots — replace these with real `<ins class="adsbygoogle">` tags when activating ads. Ads appear below the question card on quiz pages, and above + below the result card on result pages.

### SEO

Metadata is set globally in `app/layout.tsx`. Individual quiz/result pages do not currently define per-page metadata. When adding metadata to a page, use Next.js `export const metadata: Metadata = { title, description }` (server component) or `generateMetadata()`.
