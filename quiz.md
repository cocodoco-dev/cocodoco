# Quiz Guidelines

퀴즈 페이지 작업 시 참고하는 상세 지침입니다.

## Reference files

항상 아래 파일을 스타일 기준으로 사용할 것. `aura` 같은 구형 퀴즈는 참고하지 말 것.

- **Quiz page:** `app/quiz/flirt-type/page.tsx`
- **Result page:** `app/result/heartbreak-style/page.tsx`

## Quiz flow

1. `/quiz/[name]` → 문항 답변 → `/result/[name]?type=[result_key]` 로 이동
2. Quiz page: `"use client"`, `useState`로 `current`(문항 인덱스)와 `scores` 관리, `useMemo`로 진행 바 계산
3. 각 선택지의 `s` 객체가 result key에 가중치 점수 부여
4. `pickTop(scores)` — priority 배열 기준으로 최고 점수 key 반환
5. Result page: `"use client"` + `export const dynamic = "force-dynamic"`, `<Suspense>` 래핑, `useSearchParams()`로 `?type=` 읽기

## 새 퀴즈 추가 시 필요한 파일

두 파일은 항상 함께 생성.

### `app/quiz/[name]/page.tsx`

#### Quiz page 레이아웃 순서 (반드시 준수)

```
① <main>
   - background: "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)"
   - fontFamily: "Arial, sans-serif"
   - padding: "36px 18px 60px"
   - display: "flex", justifyContent: "center"
   ※ <header> 태그 별도 사용 금지 — 단일 <div> 안에 전부 포함

② <div style={{ width: "min(760px, 100%)", textAlign: "center" }}>

   ③ 카테고리 라벨 (p 태그)
      - 단순한 "PERSONALITY" 금지
      - 퀴즈 성격을 설명하는 구체적 문구 사용
        예: "Flirt Type Personality Test", "Villain Energy Personality Test"
      - fontSize: 13px, fontWeight: 700, letterSpacing: "0.08em"
      - color: "#9d174d", textTransform: "uppercase"
      - margin: "0 0 10px"

   ④ 퀴즈 제목 (h1 태그)
      - fontSize: "34px", lineHeight: 1.2, marginBottom: "12px"
      - color: "#111827"
      - 이모지 포함 필수 (예: 💘, 🖤, 🌀)

   ⑤ 소개 문단 (p 태그)
      - 6개 결과 타입 이름을 모두 나열해 기대감 형성
        예: "This quiz explores whether your energy feels most like
            a subtle charmer, a playful teaser, a sincere connector,
            a confident pursuer, a soft romantic, or a mystery keeper."
      - fontSize: "16px", lineHeight: 1.8, color: "#4b5563"
      - margin: "0 auto 18px", maxWidth: "680px"

   ⑥ 진행 바 트랙 (div)
      - width: "100%", height: "12px"       ← 6px 금지, 반드시 12px
      - borderRadius: "999px"
      - background: "rgba(255,255,255,0.8)"  ← #f3f4f6 금지
      - border: "1px solid #fbcfe8"
      - overflow: "hidden", marginBottom: "12px"
      내부 fill div:
      - width: `${progress}%`, height: "100%"
      - background: "linear-gradient(90deg, #fb7185 0%, #f59e0b 100%)"
      - borderRadius: "999px", transition: "width 0.25s ease"

   ⑦ 문항 카운터 (p 태그)
      - 형식: "Question {current + 1} of {questions.length}"  ← "X / Y" 형식 금지
      - fontSize: "16px", fontWeight: 700, color: "#374151"
      - marginBottom: "20px"
      - textAlign: "center" (기본값 — 별도 지정 불필요)

   ⑧ 문항 카드 (div)
      - background: "rgba(255,255,255,0.78)"
      - border: "1px solid #f2a7b8"          ← 반드시 border 포함
      - borderRadius: "18px", padding: "24px"
      - boxShadow: "0 10px 30px rgba(0,0,0,0.04)"

      ⑧-a 질문 텍스트 (h2 태그)              ← p 태그 금지
         - fontSize: "24px", lineHeight: 1.45, fontWeight: 700
         - color: "#374151", marginBottom: "20px"

      ⑧-b 버튼 컨테이너 (div)
         - display: "flex", flexDirection: "column"
         - gap: "12px", alignItems: "center"

      ⑧-c 선택지 버튼 (button 태그)
         - width: "min(560px, 100%)"
         - padding: "14px 18px"
         - borderRadius: "14px", border: "none"
         - background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)"
         - color: "white", cursor: "pointer"
         - fontSize: "16px", lineHeight: 1.5, fontWeight: 600
         - boxShadow: "0 8px 18px rgba(251,113,133,0.18)"

   ⑨ 광고 슬롯 (div)
      - marginTop: "18px", width: "100%", height: "110px"
      - borderRadius: "14px", border: "1px dashed #f2a7b8"
      - background: "rgba(255,255,255,0.65)"

   ⑩ About this quiz 섹션 (section 태그)
      - marginTop: "34px", textAlign: "left"
      - background: "rgba(255,255,255,0.76)", border: "1px solid #f2d2db"
      - borderRadius: "18px", padding: "26px"
      - color: "#374151", boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
```

#### 텍스트 크기 기준표

| 요소 | 태그 | fontSize | fontWeight | color |
|---|---|---|---|---|
| 카테고리 라벨 | p | 13px | 700 | #9d174d |
| 퀴즈 제목 | **h1** | **34px** | 700 | #111827 |
| 소개 문단 | p | 16px | 400 | #4b5563 |
| 문항 카운터 | p | **16px** | **700** | #374151 |
| 질문 텍스트 | **h2** | **24px** | 700 | #374151 |
| 버튼 텍스트 | button | 16px | 600 | white |
| About 제목 "About this quiz" | h2 | **25px** | 700 | #111827 |
| About h3 소제목 | h3 | **21px** | 700 | #111827 |
| About 본문 | p | **16px** | 400 | #374151 |

---

- 명시적 `Question` 타입 선언
- `useMemo`로 진행 바 계산: `((current + 1) / questions.length) * 100`
- **문항당 선택지 수는 4개로 통일**
- **결과 타입(ResultKey) 수는 6개로 통일**
- **선택지 위치(A/B/C/D)는 문항마다 결과 타입을 다르게 배치할 것** — 같은 타입이 매 문항에서 동일한 버튼 위치에 고정되면 2~3문항만 봐도 패턴이 노출됨. 12문항에 걸쳐 각 결과 타입이 A/B/C/D 위치를 골고루 차지하도록 설계할 것

#### About this quiz 고정 구조 (순서·제목 변경 금지)

```
[도입 문단 3개 — h3 없음]
퀴즈가 무엇을 탐구하는지, 왜 사람마다 다른지, 결과를 어떻게 봐야 하는지

h3: "Why your [X] matters"
이 퀴즈 결과가 실생활에서 왜 의미 있는지 — 2문단

h3: "How to use your result"
결과를 어떻게 읽고 활용해야 하는지, 성장 방향 포함 — 2문단

h3: "What this test explores"
퀴즈가 측정하는 구체적 차원 설명 — 2문단

h3: "Possible results"
6개 결과 타입 불릿 리스트 + 한 줄 마무리 문단
```

**기준 파일:** `app/quiz/flirt-type/page.tsx` — About 섹션 품질 기준으로 삼을 것

- **About 섹션 톤:** 독자에게 직접 말 걸기 ("you" 기반 2인칭 서술). 학술적 설명 나열 금지
- **About 섹션 도입:** h3 없이 시작하는 도입 문단 최소 3문단 — 이 퀴즈가 무엇을 측정하는지, 왜 사람마다 다른지, 결과가 어떤 의미를 갖는지

---

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

#### 결과 페이지 레이아웃 순서 (반드시 준수)

```
① 헤더 (cocodoco 링크)
② 카테고리 라벨 (대문자, 중앙 정렬)
③ 히어로 섹션 — 카드 밖, 광고 위에 배치
   - title (크게, bold)
   - summary (bold, 중앙 또는 좌측 정렬)
④ 광고 슬롯
⑤ 상세 카드 (desc1, desc2 + h2 섹션 6개)
⑥ Retake 버튼
⑦ 광고 슬롯 (하단)
⑧ ← Back to all quizzes 링크
```

**핵심 원칙:** `title`과 `summary`는 반드시 카드 **밖** 히어로 섹션에 위치해야 함. 카드 안에 넣으면 광고 아래에 묻혀 결과 공개의 임팩트가 사라짐.

---

### `app/page.tsx`

생성 후 퀴즈 배열 **맨 앞**에 추가.

## AdSense

AdSense 스크립트(`ca-pub-8500564460470684`)는 `app/layout.tsx`에 전역 삽입됨.
광고 슬롯 위치:
- 퀴즈 페이지: 문항 카드 하단
- 결과 페이지: 히어로 섹션(title+summary) 아래, 상세 카드 위 + 상세 카드 하단
