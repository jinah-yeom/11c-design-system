---
name: check-token-consistency
description: Figma Token Studio JSON, styles/tokens.css, globals.css, 컴포넌트 코드 간 토큰 일관성을 감사. 토큰 변경 후, 컴포넌트 추가 후, 또는 스타일 불일치 발견 시 사용.
---

# Check Token Consistency

토큰 레이어 간 일관성을 검증합니다.

## Quick Start

1. 단일 컴포넌트 점검인지 전체 감사인지 범위를 먼저 결정합니다.
2. Token JSON / tokens.css / globals.css / 컴포넌트 코드 4개 레이어를 비교합니다.
3. 불일치 유형(하드코딩/누락/이름 불일치)을 분류해서 보고합니다.
4. 세부 규칙은 `details/validation-rules.md`, 실행 절차는 `details/workflow.md` 참고.

## 토큰 레이어

| Layer | 위치 | 역할 |
|-------|------|------|
| Token JSON | `tokens/*.json` | 원본 토큰 정의 (Token Studio 동기화) |
| Generated CSS | `styles/tokens.css` | 자동 생성 CSS 변수 (수정 금지) |
| Mapping CSS | `styles/globals.css` | shadcn ↔ 토큰 변수 연결 |
| Component | `components/ui/*.tsx` | 실제 토큰 사용 |

## 검증 항목

### 1. 하드코딩 검사
```text
components/ui/*.tsx 내
HEX (#xxxxxx), rgb(), rgba() 직접 사용 여부 확인
→ 모두 var(--token-name) 형태여야 함
```

### 2. 토큰 변수 존재 확인
```text
컴포넌트에서 사용된 var(--xxx)가
styles/tokens.css 또는 globals.css에 정의되어 있는가
→ 없으면 undefined 변수 오류
```

### 3. Token JSON ↔ tokens.css 동기화
```text
tokens/*.json의 토큰 수 === styles/tokens.css의 변수 수
→ npm run tokens 미실행 시 불일치 발생
```

### 4. Figma 토큰명 일치
```text
tokens/*.json의 토큰명과 Figma Token Studio 토큰명이 일치하는가
→ 이름 불일치 시 Token Studio sync 후 다른 값 적용될 수 있음
```

### 5. globals.css 매핑 누락
```text
tokens.css에 정의된 토큰 중
globals.css에 shadcn 변수로 매핑되지 않은 토큰 확인
→ 매핑 누락 시 컴포넌트에서 참조 불가
```

## 출력 형식

### 요약
```text
✅ button — 토큰 일관성 정상
⚠️  input — 경고: --input-border 변수 globals.css에 없음
❌ badge — 위반: HEX 하드코딩 발견 (#e5e7eb)
📋 card — 누락: component 토큰 정의 없음
```

## 사용 시나리오

| 요청 | 실행 |
|------|------|
| "토큰 일관성 전체 감사해줘" | 전체 컴포넌트 감사 |
| "button 컴포넌트 토큰 체크해줘" | 단일 컴포넌트 검증 |
| "하드코딩된 색상 찾아줘" | 하드코딩 검사만 |
| "tokens.css 최신 상태인지 확인해줘" | JSON ↔ CSS 동기화 확인 |