# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cocodoco (`https://www.cocodoco.fun`) is a personality quiz website targeting English-speaking users aged 10–20. The goal is AdSense monetization. Plans include growing the quiz library and publishing personality/relationship articles.

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

| Route | Description |
|---|---|
| `/` | Home — quiz list with Quiz / Article nav tabs |
| `/quiz/[name]` | Individual quiz page |
| `/result/[name]` | Quiz result page |
| `/articles` | Article list page |
| `/articles/[slug]` | Individual article page |

## Work Guidelines

작업 유형별 상세 지침은 아래 파일을 참고할 것.

- **퀴즈 작업** → `quiz.md`
- **아티클 작업** → `article.md`

## SEO

Metadata is set globally in `app/layout.tsx`. Individual pages do not currently define per-page metadata. When adding metadata, use `export const metadata: Metadata = { title, description }` (server component) or `generateMetadata()`.

## AdSense

AdSense script (`ca-pub-8500564460470684`) is loaded globally in `app/layout.tsx`. Ad slot placeholders exist on quiz and result pages — replace with real `<ins class="adsbygoogle">` tags when activating.
