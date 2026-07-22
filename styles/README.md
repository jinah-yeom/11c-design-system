# Styles

디자인 토큰이 CSS 변수로 변환된 파일을 포함합니다.

## 파일 목록

| 파일 | 설명 |
|---|---|
| `tokens.css` | Style Dictionary 자동 생성 토큰 (수정 금지) |
| `globals.css` | shadcn 브리지 매핑 및 전역 스타일 |

## 주의사항

- `tokens.css`는 Style Dictionary 자동 생성 파일입니다. 직접 수정하지 마세요.
- 토큰 수정이 필요한 경우 `tokens/` 폴더의 JSON 파일을 수정 후 빌드하세요.

## 토큰 빌드

```bash
npm run tokens
```

## 토큰 정의

https://11c-design.vercel.app/docs/foundations
