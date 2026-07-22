# 토큰 검증 규칙

## 1. 하드코딩 금지 규칙

**검증**: 컴포넌트 코드에 색상/간격/반경값이 직접 입력되지 않아야 함

```typescript
// ❌ 위반 — HEX 하드코딩
className="bg-[#6366f1] text-[#ffffff]"
style={{ backgroundColor: '#6366f1' }}

// ❌ 위반 — Tailwind 하드코딩 (토큰과 무관한 임의값)
className="bg-indigo-500"  // 토큰 변수 아닌 Tailwind 기본 팔레트

// ✅ 통과 — CSS 변수 참조
className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]"
```

## 2. 변수 정의 존재 규칙

**검증**: 컴포넌트에서 사용하는 모든 `var(--xxx)`가 정의되어 있어야 함

```css
/* 컴포넌트에서 사용 */
bg-[var(--btn-primary-bg)]

/* styles/tokens.css 또는 styles/globals.css에 반드시 존재해야 함 */
:root {
  --btn-primary-bg: var(--color-primary-500); /* globals.css */
  --color-primary-500: #6366f1;               /* tokens.css */
}
```

## 3. Token JSON ↔ tokens.css 동기화 규칙

**검증**: tokens/*.json 수정 후 반드시 `npm run tokens` 실행

```text
tokens/global.json에 새 토큰 추가
  ↓ npm run tokens 미실행 시
styles/tokens.css에 반영 안 됨
  ↓ 결과
컴포넌트에서 undefined 변수 참조
  ↓ 증상
CSS 변수가 적용 안 되고 기본값(투명/검정)으로 표시
```

동기화 확인 방법:
```bash
# tokens.css 마지막 수정 시간 확인
ls -la styles/tokens.css

# tokens/*.json 마지막 수정 시간과 비교
ls -la tokens/

# 최신화
npm run tokens
```

## 4. Figma 토큰명 일치 규칙

**검증**: Token Studio JSON의 토큰 경로가 Style Dictionary 변환 후 CSS 변수명과 일치

```json
// tokens/global.json (Token Studio 원본)
{
  "color": {
    "primary": {
      "500": { "value": "#6366f1" }
    }
  }
}
```

```css
/* 변환 후 CSS 변수명 — Style Dictionary config에 따라 결정 */
--color-primary-500: #6366f1;
```

이름 규칙: `{category}-{group}-{scale}` 형태로 통일

## 5. globals.css 매핑 완전성 규칙

**검증**: shadcn 컴포넌트가 사용하는 모든 변수가 globals.css에 매핑되어야 함

shadcn 표준 변수 필수 매핑 목록:
```css
:root {
  --background        /* 페이지 배경 */
  --foreground        /* 기본 텍스트 */
  --primary           /* 주 색상 */
  --primary-foreground /* 주 색상 위 텍스트 */
  --secondary         /* 보조 색상 */
  --secondary-foreground
  --muted             /* 비활성 배경 */
  --muted-foreground  /* 비활성 텍스트 */
  --accent            /* 강조 색상 */
  --accent-foreground
  --destructive       /* 위험/삭제 색상 */
  --destructive-foreground
  --border            /* 테두리 */
  --input             /* 입력 필드 테두리 */
  --ring              /* focus ring */
  --radius            /* 기본 border-radius */
}
```

## 경로 패턴

| Layer | 경로 |
|-------|------|
| Token 원본 | `tokens/*.json` |
| 생성 CSS | `styles/tokens.css` |
| 매핑 CSS | `styles/globals.css` |
| 컴포넌트 | `components/ui/*.tsx` |