# 토큰 일관성 검증 워크플로우

## Step 1: 범위 결정

```text
단일 컴포넌트 점검?
  → "button 토큰 체크해줘" 형태
  → components/ui/button.tsx 하나만 검증

전체 감사?
  → "전체 토큰 일관성 감사해줘" 형태
  → components/ui/*.tsx 전체 검증
```

## Step 2: 하드코딩 스캔

컴포넌트 코드에서 직접 색상값 탐색:

```bash
# 검색 대상
components/ui/*.tsx

# 찾아야 할 패턴
- #[0-9a-fA-F]{3,6}        → HEX 색상
- rgb\(                      → rgb() 직접 사용
- rgba\(                     → rgba() 직접 사용
- bg-[a-z]+-[0-9]+          → Tailwind 기본 팔레트 (bg-indigo-500 등)
- text-[a-z]+-[0-9]+        → Tailwind 기본 팔레트

# 허용 패턴
- var(--token-name)          → CSS 변수 참조 ✅
- bg-[var(--xxx)]            → Tailwind arbitrary + CSS 변수 ✅
```

## Step 3: 변수 존재 확인

컴포넌트에서 사용 중인 CSS 변수가 정의되어 있는지 확인:

```bash
# 1. 컴포넌트에서 사용 중인 var() 목록 추출
grep -oP 'var\(--[^)]+\)' components/ui/[name].tsx

# 2. styles/tokens.css에서 해당 변수 존재 확인
grep '--variable-name' styles/tokens.css

# 3. styles/globals.css에서도 확인
grep '--variable-name' styles/globals.css
```

## Step 4: 동기화 상태 확인

Token JSON과 tokens.css가 최신 상태인지 검증:

```bash
# tokens/*.json의 토큰 수 카운트
grep -c '"value"' tokens/global.json
grep -c '"value"' tokens/semantic.json
grep -c '"value"' tokens/component.json

# styles/tokens.css의 변수 수 카운트
grep -c '^  --' styles/tokens.css

# 불일치 시
npm run tokens  # 재생성
```

## Step 5: 보고서 생성

```markdown
# 토큰 일관성 감사 보고서

## 요약
- 검사 컴포넌트: 5개
- 정상: 3개
- 이슈 발견: 2개

## 이슈

### Critical (즉시 수정 필요)
1. **badge**: HEX 하드코딩 발견
   - 위치: `components/ui/badge.tsx:23`
   - 내용: `bg-[#e5e7eb]`
   - 수정: `bg-[var(--color-neutral-200)]`

2. **input**: 미정의 변수 사용
   - 위치: `components/ui/input.tsx:15`
   - 내용: `var(--input-focus-ring)` 정의 없음
   - 수정: `globals.css`에 매핑 추가 필요

### Warning (검토 필요)
1. **button**: tokens.css 미최신화 의심
   - tokens/component.json 수정 후 npm run tokens 실행 필요

## 정상 컴포넌트
- ✅ button — 모든 토큰 정상
- ✅ card — 모든 토큰 정상
- ✅ avatar — 모든 토큰 정상
```

## 사용 시나리오

### 전체 감사
```text
"전체 토큰 일관성 감사해줘"
→ components/ui/ 전체 검사 후 보고서 생성
```

### 단일 컴포넌트
```text
"input 컴포넌트 토큰 체크해줘"
→ components/ui/input.tsx만 상세 검증
```

### 하드코딩만 검사
```text
"하드코딩된 색상 전부 찾아줘"
→ Step 2만 실행, 목록 출력
```

### 동기화 확인
```text
"tokens.css 최신 상태인지 확인해줘"
→ Step 4만 실행