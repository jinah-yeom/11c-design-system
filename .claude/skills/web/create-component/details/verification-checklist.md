# 컴포넌트 작업 완료 체크리스트

## 필수 확인 사항

### 토큰 & 스타일
- [ ] `npm run tokens` 실행했는가?
- [ ] `styles/tokens.css`가 최신 상태인가?
- [ ] HEX/rgb 하드코딩이 없는가? (CSS 변수만 사용)
- [ ] `globals.css`에 shadcn ↔ 토큰 매핑이 완료됐는가?

### Figma 일치
- [ ] Figma MCP 스펙의 variant가 모두 구현됐는가?
- [ ] Figma MCP 스펙의 size가 모두 구현됐는가?
- [ ] Figma MCP 스펙의 state(hover/focus/disabled)가 모두 구현됐는가?
- [ ] 토큰명이 Figma Token Studio와 일치하는가?

### 코드 품질
- [ ] TypeScript 타입 에러가 없는가?
- [ ] Props interface가 정의됐는가?
- [ ] variant/size의 기본값(defaultVariants)이 설정됐는가?
- [ ] 컴포넌트 파일 위치가 `components/ui/`인가?

### 로컬 확인
- [ ] 모든 variant가 localhost:3000에서 렌더링되는가?
- [ ] 모든 size가 정상 표시되는가?
- [ ] hover/focus 상태가 브라우저에서 동작하는가?
- [ ] disabled 상태가 정상 표시되는가?
- [ ] 브라우저 DevTools에서 CSS 변수로 표시되는가?

## 흔한 실수

### 토큰 하드코딩

```typescript
// ❌ 절대 금지
className="bg-[#6366f1] text-white"

// ✅ 항상 CSS 변수로
className="bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]"
```

### tokens.css 수정

```text
❌ styles/tokens.css 직접 수정
   → npm run tokens 실행 시 덮어씌워짐

✅ tokens/*.json 수정 → npm run tokens 실행
```

### Figma 토큰명 불일치

```text
❌ Figma: "color/primary/default"
   코드: "--color-primary-500"  (다른 이름)

✅ Style Dictionary config에서 변환 규칙 통일
   Figma Token Studio 네이밍 → CSS 변수명 매핑 일관성 유지
```

### variant 누락

```text
❌ Figma에 "destructive" variant 있는데 코드에 없음
   → 디자인-코드 불일치

✅ Figma MCP로 스펙 먼저 확인 후 모든 variant 구현
```

## 수정 금지 파일

| 파일 | 생성 소스 | 수정 방법 |
|------|----------|----------|
| `styles/tokens.css` | Style Dictionary | `tokens/*.json` 수정 후 `npm run tokens` |
| `styles/tokens.js` | Style Dictionary | 동일 |

## 완료 후 다음 단계

컴포넌트 구현 완료 시:
1. 다음 컴포넌트 작업 시 이 체크리스트 재사용
2. 컴포넌트 수가 늘어나면 `check-token-consistency` 스킬로 일관성 감사
