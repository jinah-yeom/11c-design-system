# Tokens

Figma Token Studio에서 관리하는 디자인 토큰 원본 파일입니다.

## 구조

```
tokens/
├── primitive/     ← 기본 색상, 간격, 반경 등 원시 값
├── semantic/      ← 용도별 의미를 가진 토큰
└── ...
```

## 사용 방법

1. Figma Token Studio에서 토큰 수정
2. Token Studio에서 Git으로 push
3. Style Dictionary 빌드 실행

```bash
npm run tokens
```

4. `styles/tokens.css` 자동 업데이트 확인

## 주의사항

- 이 폴더의 JSON 파일은 Token Studio에서 자동 관리됩니다.
- 직접 수정 시 Token Studio와 충돌이 발생할 수 있습니다.

## 토큰 가이드

https://11c-design.vercel.app/docs/foundations
