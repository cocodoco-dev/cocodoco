# Article Guidelines

아티클 페이지 작업 시 참고하는 상세 지침입니다.

## 구조

아티클은 개별 페이지 방식으로 관리합니다.

```
app/articles/[slug]/page.tsx   ← 아티클 개별 페이지
app/articles/page.tsx          ← 아티클 목록 페이지
```

## 새 아티클 추가 시 필요한 작업

1. `app/articles/[slug]/page.tsx` 생성
2. `app/articles/page.tsx` 목록 배열 **맨 앞**에 추가

## 아티클 목록 항목 구조

`app/articles/page.tsx` 배열에 추가할 항목:

```ts
{
  title: string;        // 아티클 제목
  desc: string;         // 한 줄 요약 (카드에 표시)
  href: string;         // "/articles/[slug]"
  category: "Personality" | "Love & Relationships";
  badge: "New" | "Hot" | "Popular";
}
```

## 아티클 개별 페이지 구조

### 필수 섹션 (순서 유지)

1. **카테고리 라벨** — 대문자, `#9d174d` 색상 (예: "PERSONALITY" / "LOVE & RELATIONSHIPS")
2. **h1 제목**
3. **요약 문단** — 2~3문장, 독자가 읽을 이유를 제시
4. **광고 슬롯** — 요약 문단 하단
5. **본문** — h2 소제목으로 구분된 섹션 4~6개
6. **Related quiz 링크** — 관련 퀴즈가 있으면 하단에 연결
7. **광고 슬롯** — 본문 하단

### 본문 콘텐츠 기준

- **최소 800단어** (애드센스 기준 충족)
- h2 소제목 4~6개로 구분
- 각 섹션은 2~3개 문단
- 리스트(`<ul>`)는 섹션당 최대 1개
- 말투: 따뜻하고 공감적인 2인칭 ("you") — 퀴즈 결과 텍스트와 동일한 톤

### 주제 카테고리

- **Personality** — 성향, 자아, 심리, 강점
- **Love & Relationships** — 연애 패턴, 애착, 소통, 관계 심리

## Styling rules

퀴즈 페이지와 동일한 스타일 기준 적용 (`quiz.md` 참고).

추가 규칙:
- **최대 너비:** `min(860px, 100%)`
- **본문 줄간격:** `lineHeight: 1.9`
- **본문 폰트 크기:** `16px`
- **h2 섹션 제목:** `fontSize: 22px`, `fontWeight: 700`, `color: #111827`
- **네비게이션:** 홈과 동일한 Quiz / Article 탭 포함 (Article 탭 활성 상태)

## 네비게이션 (아티클 페이지용)

모든 아티클 개별 페이지에 상단 네비게이션 포함:
- Quiz 탭 → `/` (비활성)
- Article 탭 → `/articles` (활성)

활성 탭: `color: #111827`, `borderBottom: 3px solid #ff4d7d`
비활성 탭: `color: #9ca3af`, `borderBottom: 3px solid transparent`

## AdSense

광고 슬롯 위치:
- 요약 문단 하단 (본문 시작 전)
- 본문 마지막 섹션 하단
