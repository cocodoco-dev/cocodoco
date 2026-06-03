# Quiz Guidelines

퀴즈 페이지 작업 시 참고하는 상세 지침입니다.

## Reference files

항상 아래 파일을 스타일 기준으로 사용할 것. `aura` 같은 구형 퀴즈는 참고하지 말 것.

- **Quiz page:** `app/quiz/comfort-character/page.tsx`
- **Result page:** `app/result/comfort-character/page.tsx`

## Quiz flow

1. `/quiz/[name]` → 문항 답변 → `/result/[name]?type=[result_key]` 로 이동
2. Quiz page: `"use client"`, `useState`로 `current`(문항 인덱스)와 `scores` 관리, `useMemo`로 진행 바 계산
3. 각 선택지의 `s` 객체가 result key에 가중치 점수 부여
4. `pickTop(scores)` — priority 배열 기준으로 최고 점수 key 반환
5. Result page: `"use client"` + `export const dynamic = "force-dynamic"`, `<Suspense>` 래핑, `useSearchParams()`로 `?type=` 읽기

## 새 퀴즈 추가 시 필요한 파일

두 파일은 항상 함께 생성.

### `app/quiz/[name]/page.tsx`

- 명시적 `Question` 타입 선언
- `useMemo`로 진행 바 계산: `((current + 1) / questions.length) * 100`
- 그라디언트 배경, 카테고리 라벨(대문자), h1, 소개 문단, 애니메이션 진행 바, `boxShadow` 카드, 그라디언트 버튼
- 하단 "About this quiz" 섹션 필수 (h3 소제목 여러 개, SEO 텍스트 600~800단어)

### `app/result/[name]/page.tsx`

- 안전한 key 처리: `rawKey && rawKey in results ? rawKey : "defaultKey"`
- 결과 항목당 필수 필드 16개:
  `title`, `summary`, `desc1`, `desc2`,
  `meaning1`, `meaning2`, `showUp1`, `showUp2`,
  `strengths`, `strengthDetails`, `watchOut`, `watchOutDetails`,
  `growth1`, `growth2`, `reminder`, `bestMatch`
- 결과 카드 내 h2 섹션 6개:
  "What this [X] means" / "How this [X] shows up in your life" /
  "Your strengths" / "What may feel difficult" / "Growth path" / "A small reminder for you"

### `app/page.tsx`

생성 후 퀴즈 배열 **맨 앞**에 추가.

## Styling rules

- **인라인 스타일만 사용** — Tailwind 클래스 금지
- **폰트:** `Arial, sans-serif`
- **배경:** `linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)`
- **카테고리 라벨:** `fontSize: 13px`, `fontWeight: 700`, `letterSpacing: 0.08em`, `color: #9d174d`, `textTransform: uppercase`
- **진행 바:** `linear-gradient(90deg, #fb7185 0%, #f59e0b 100%)`, `transition: width 0.25s ease`
- **문항 카드:** `boxShadow: 0 10px 30px rgba(0,0,0,0.04)`
- **버튼:** `linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)`, `fontWeight: 600`, `boxShadow: 0 8px 18px rgba(251,113,133,0.18)`, `width: min(560px, 100%)`
- **결과 카드:** `lineHeight: 1.8`, `boxShadow: 0 10px 30px rgba(0,0,0,0.03)`
- **최대 너비:** 퀴즈 페이지 `min(760px, 100%)`, 결과 페이지 `min(860px, 100%)`
- **Border radius:** 카드 `18px`, 버튼 `14px`

## AdSense

AdSense 스크립트(`ca-pub-8500564460470684`)는 `app/layout.tsx`에 전역 삽입됨.
광고 슬롯 위치:
- 퀴즈 페이지: 문항 카드 하단
- 결과 페이지: 결과 카드 상단 + 하단
