---
name: create-component
description: shadcn/ui 기반 컴포넌트를 Figma MCP 스펙에서 Token Studio 토큰을 적용해 구현하는 end-to-end 가이드. 새 컴포넌트 추가 또는 기존 컴포넌트 수정 시 사용.
---

# Create Component

Figma 스펙 → 토큰 매핑 → shadcn 컴포넌트 구현 → 로컬 확인까지 전체 흐름을 안내합니다.

## Quick Start

1. Figma MCP로 컴포넌트 스펙(variant, size, state, 토큰)을 읽어옵니다.
2. `tokens/` JSON에서 적용할 토큰 변수를 확인합니다.
3. shadcn 컴포넌트를 수정하거나 신규 생성합니다.
4. `npm run dev`로 로컬에서 시각 확인합니다.
5. 상세 구현은 `details/implementation-steps.md`, 완료 체크는 `details/verification-checklist.md` 참고.

## 핵심 흐름

```text
Figma MCP 스펙 읽기
  → tokens/ JSON 토큰 확인
  → Style Dictionary 변환 (npm run tokens)
  → globals.css 토큰 매핑
  → shadcn 컴포넌트 수정/생성
  → app/page.tsx 프리뷰 추가
  → 로컬 확인 (localhost:3000)
```

## 수정 진입점

| 수정 대상 | 파일 위치 | 명령어 |
|----------|----------|--------|
| Foundation 토큰 | `tokens/global.json` | `npm run tokens` |
| Semantic 토큰 | `tokens/semantic.json` | `npm run tokens` |
| 컴포넌트 토큰 | `tokens/component.json` | `npm run tokens` |
| CSS 변수 매핑 | `styles/globals.css` | 직접 수정 |
| 컴포넌트 UI | `components/ui/[name].tsx` | `npm run dev` |
| 프리뷰 페이지 | `app/page.tsx` | 자동 반영 |

## 자동 생성 파일 (수정 금지)

- `styles/tokens.css` ← Style Dictionary가 tokens/에서 생성
- `styles/tokens.js` ← Style Dictionary가 tokens/에서 생성

## 전체 파이프라인

```text
┌─────────────────────────────────────────────────┐
│  1. SPEC — Figma MCP로 컴포넌트 스펙 읽기       │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│  2. TOKEN — tokens/*.json 확인 및 매핑          │
└─────────────────────────────────────────────────┘
                       │ npm run tokens
                       ▼
┌─────────────────────────────────────────────────┐
│  3. CSS — styles/globals.css 변수 연결          │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│  4. COMPONENT — components/ui/ 구현             │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│  5. PREVIEW — app/page.tsx 프리뷰 추가          │
└─────────────────────────────────────────────────┘
                       │ npm run dev
                       ▼
┌─────────────────────────────────────────────────┐
│  6. VERIFY — localhost:3000 시각 확인           │
└─────────────────────────────────────────────────┘
```

## Quick Reference

### 새 컴포넌트 추가 시

1. Figma MCP로 스펙 읽기: variant, size, state, 토큰값 파악
2. `tokens/component.json`에 컴포넌트 토큰 정의 확인
3. `npm run tokens` 실행 → `styles/tokens.css` 재생성
4. `styles/globals.css`에 shadcn ↔ 토큰 변수 매핑 추가
5. `npx shadcn@latest add [name]` 또는 직접 `components/ui/[name].tsx` 생성
6. Tailwind 클래스 대신 CSS 변수 활용해 토큰 적용 (아래 패턴 참고)
7. `app/page.tsx`에 모든 variant/size/state 프리뷰 추가
8. `npm run dev`로 확인

### 기존 컴포넌트 토큰 수정 시

1. `tokens/*.json`에서 해당 토큰값 수정 (Figma Token Studio sync)
2. `npm run tokens` 실행
3. `npm run dev`로 변경 반영 확인

## 스타일 적용 패턴

### 색상 토큰 — Tailwind arbitrary 방식
```tsx
// 배경
"bg-[var(--color-theme-dependent-primary)]"
// 텍스트
"text-[var(--color-label-inverse)]"
// 보더
"border-[var(--color-border-border-primary)]"
```

### 폰트 토큰 — style prop 방식
Tailwind `text-sm`/`font-semibold` 대신 `style` prop으로 주입. size별 분기가 필요하면 맵 사용:
```tsx
const fontStyles = {
  small:  { fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", lineHeight: "var(--font-line-height-050)", letterSpacing: "var(--font-letter-spacing-none)" },
  medium: { fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", lineHeight: "var(--font-line-height-075)", letterSpacing: "var(--font-letter-spacing-none)" },
  large:  { fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", lineHeight: "var(--font-line-height-075)", letterSpacing: "var(--font-letter-spacing-none)" },
} as const

// 컴포넌트에서
<button style={{ ...fontStyles[size], ...style }} />
```

### 인터랙션 오버레이 — ::before pseudo-element 방식
`hover:bg-*` 직접 배경색 변경 대신 반투명 overlay로 구현:
```
// base에 반드시 추가
"relative overflow-hidden"

// variant에 추가
"before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none"
"before:bg-[var(--color-*)] before:opacity-0"
"hover:before:opacity-[0.05] active:before:opacity-[0.12]"
"disabled:before:hidden"
```
| 계열 | overlay 색상 | hover | active |
|------|-------------|-------|--------|
| solid (brand/neutral/critical) | `--color-label-normal` | 0.075 | 0.18 |
| brand-outline | `--color-theme-dependent-primary` | 0.05 | 0.12 |
| neutral-outline, ghost | `--color-base-black` | 0.05 | 0.12 |
| neutral-weak | `--color-label-neutral` | 0.05 | 0.12 |

## Style Dictionary 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| font-size 토큰이 단위 없는 숫자로 출력 | transform 미설정 | config에 `size/px-number` transform 추가 |
| font-weight가 `"semibold"` 문자열로 출력 | transform 미설정 | config에 `font-weight/number` transform 추가 |
| Unknown CSS Font Shorthand 경고 | typography composite 토큰 포함 | `global.json` typography 그룹을 빌드 소스에서 제외 |
| 토큰명 중복 (`--border-border-normal`) | Token Studio 네이밍 | Token Studio에서 중간 그룹명 단순화 |
| 변경 후 참조 깨짐 | 토큰명 변경 시 참조 미갱신 | `npm run tokens -- --verbose`로 확인 |

- config 파일: `style-dictionary.config.mjs` (ESM)

## 상세 가이드

- `details/implementation-steps.md` — 각 단계 구현 상세
- `details/verification-checklist.md` — 완료 전 체크리스트

## 필수 체크리스트

작업 완료 전:
- [ ] Figma MCP 스펙과 구현 variant가 일치하는가?
- [ ] 하드코딩된 색상값이 없는가? (HEX, rgb 직접 사용 금지)
- [ ] 모든 토큰이 CSS 변수로만 참조되는가?
- [ ] 폰트 스타일이 style prop으로 토큰 변수를 통해 적용되는가?
- [ ] 인터랙션이 ::before overlay 방식으로 구현되었는가?
- [ ] `npm run tokens` 후 `styles/tokens.css`가 최신 상태인가?
- [ ] `npm run tokens -- --verbose`로 참조 깨짐이 없는가?
- [ ] TypeScript 타입 에러가 없는가?
- [ ] 모든 variant/size/state가 로컬에서 렌더링되는가?