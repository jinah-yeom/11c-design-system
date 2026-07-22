# 디자인 시스템 원칙

## 스택
- Next.js 14 (App Router)
- shadcn/ui
- Tailwind CSS (CSS 변수 방식)
- TypeScript
- Token Studio → Style Dictionary → CSS Variables

## 토큰 사용 원칙

### 절대 규칙
- 색상/간격/반경 하드코딩 금지
- HEX, rgb(), rgba() 직접 사용 금지
- Tailwind 기본 팔레트 직접 사용 금지 (bg-indigo-500 등)
- 반드시 `var(--token-name)` 형태로만 참조

### 토큰 계층 구조
```
Foundation (global.json)
  → Semantic (semantic.json)
    → Component (component.json)
      → CSS Variables (tokens.css) ← 자동 생성, 수정 금지
        → shadcn 매핑 (globals.css) ← 여기서만 수정
```

## 컴포넌트 원칙

- 컴포넌트 위치: `components/ui/`
- shadcn 기존 컴포넌트 수정 방식 우선
- Props 타입은 항상 `interface`로 정의
- Variant/size/state 명칭은 Figma 컴포넌트와 동일하게 유지
- 기본값(defaultVariants) 반드시 설정

### 컴포넌트 스타일 적용 방식
- Tailwind 색상 유틸리티 클래스 대신 `bg-[var(--token)]` 형태로 토큰 변수 직접 참조
- **폰트 스타일**: Tailwind `text-sm`/`text-base`/`font-semibold` 대신 `style` prop으로 토큰 변수 주입
  ```tsx
  style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", ... }}
  ```
- **인터랙션 오버레이**: `hover:bg-*` 대신 `::before` pseudo-element로 구현
  ```
  before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none
  before:bg-[var(--color-*)] before:opacity-0 hover:before:opacity-[0.05] active:before:opacity-[0.12]
  ```
  - solid 계열: overlay `--color-label-normal`, hover opacity 0.075 / active 0.18
  - outline/ghost 계열: overlay `--color-base-black` 또는 brand color, hover opacity 0.05 / active 0.12
  - 버튼 base에 `relative overflow-hidden` 필수

## Figma 연동 원칙

- 새 컴포넌트 작업 전 반드시 Figma MCP로 스펙 확인
- 토큰명은 Figma Token Studio 네이밍 기준으로 통일
- Variant/size/state가 Figma와 코드 간 1:1 대응되어야 함

## Style Dictionary 주의사항

- **config 파일**: `style-dictionary.config.mjs` (ESM 방식)
- **font-size**: 토큰 값이 숫자(number)인 경우 `size/px-number` transform 필수 → 단위 없이 출력되면 CSS에서 사용 불가
- **font-weight**: 문자열(`semibold` 등)은 `font-weight/number` transform으로 숫자 변환 필수
- **typography composite 토큰** (`global.json`의 typography 그룹): Style Dictionary 빌드에서 제외하거나 별도 처리 — 포함 시 Unknown CSS Font Shorthand 경고 발생 (non-blocking이지만 노이즈)
- **토큰명 중복**: 토큰 계층이 깊으면 `--border-border-normal`처럼 단어가 반복됨 → Token Studio에서 `--border-normal`로 단순화 권장
- **토큰명 변경 후**: 참조가 깨진 토큰이 없는지 반드시 `npm run tokens -- --verbose`로 확인

## 폰트 로드

```bash
npm install pretendard
```
```bash
cp -r node_modules/pretendard/dist/web/static/woff2 public/fonts/pretendard
```
`app/layout.tsx`에서 `<link>` 태그로 로드 (Next.js font optimization 미사용 시):
```tsx
<link rel="stylesheet" href="/fonts/pretendard/pretendard-subset.css" />
```

## 파일 수정 금지

| 파일 | 이유 |
|------|------|
| `styles/tokens.css` | Style Dictionary 자동 생성 |
| `styles/tokens.js` | Style Dictionary 자동 생성 |

## Token Studio 주의사항

- 토큰명 변경 후 해당 토큰을 참조하는 모든 semantic/component 토큰의 참조 깨짐 여부 확인
- 중복 접두사 제거 예시: `border-border-normal` → `border-normal` (Token Studio 네이밍 정리 시)
