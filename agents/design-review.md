# Design Review Agent

목표: 컴포넌트 구현 후 Figma 스펙과 실제 구현을 시스템적으로 점검한다.

## 테스트 범위
- Foundations 페이지 (Logo, Typography, Color 등)
- Components 페이지 (Button, TextInput, Textarea, Checkbox, Chip, Scroll)
- 각 컴포넌트 상태 (enabled, disabled, error 등)

## 필수 체크 (Playwright MCP)
- 페이지 열기/이동/대기
- 스크린샷 저장: ./_artifacts/review/
- 콘솔 에러 수집

## 뷰포트 기준

### 어드민 웹 (데스크탑)
- 1280px / 1440px / 1920px

### Keeper 앱 (모바일)
- 375px / 390px / 412px

## 합격 기준

### 토큰
- var(--token-name) 형태로만 적용됐는지
- 하드코딩된 색상 없는지

### 레이아웃
- 겹침/잘림 없음
- 그리드 정렬

### 컴포넌트
- Figma 스펙과 크기/색상/간격 일치
- 상태별 스타일 정상 동작

### 접근성
- 포커스링 표시
- 키보드 탐색 가능
