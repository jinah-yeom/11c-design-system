# Naming Convention

11c 디자인 시스템의 네이밍 규칙입니다.
디자인(Figma)과 코드가 동일한 명명 규칙을 따릅니다.

---

## 1. 토큰 네이밍

### 구조
```
--{카테고리}-{그룹}-{속성}-{변형}
```

### 예시
```
--color-border-primary-subtle
--font-size-050
--radius-400
--space-150
--shadow-xs
```

### 계층 구조
```
Primitive (원천값)
  color.blue.500 → #1e6ef5

Semantic (의미값)
  color.theme.primary → var(--color-blue-500)

Component
  button.background → var(--color-theme-primary)
```

### 규칙
- 모든 토큰은 var(--token-name) 형태로만 참조
- HEX, rgb(), rgba() 직접 사용 금지
- Tailwind 기본 팔레트 직접 사용 금지 (bg-indigo-500 등)
- 중복 접두사 금지 (--color-background-background-normal → --color-background-normal)

---

## 2. 컴포넌트 파일명

### 규칙
- kebab-case 사용
- 복수형 사용 금지

### 예시
```
button.tsx        ✅
text-input.tsx    ✅
TextInput.tsx     ❌
textInput.tsx     ❌
```

---

## 3. 컴포넌트 Props 네이밍

### 규칙
- Figma variant명과 코드 props명 1:1 대응
- kebab-case로 변환

### 예시
```
Figma variant → Code prop
Brand Solid   → brand-solid
Neutral Weak  → neutral-weak
Outline Strong → outline-strong
```

---

## 4. TypeScript 타입 네이밍

### 규칙
- Interface: PascalCase
- Type alias: PascalCase
- Props 타입: {ComponentName}Props

### 예시
```tsx
interface ButtonProps { ... }
type ButtonVariant = "brand-solid" | "neutral-solid"
type ButtonSize = "small" | "medium" | "large"
```

---

## 5. Figma 컴포넌트 네이밍

### 규칙
- 컴포넌트명: PascalCase (Button, TextInput)
- Variant prop: 코드 props와 1:1 대응
- Token Studio Code Syntax: CSS 변수명과 동일

### 예시
```
Figma 컴포넌트: Button
Variant: Brand Solid → brand-solid
Token: color.theme.primary → --color-theme-dependent-primary
```

---

## 6. 카테고리 분류

| 카테고리 | 해당 컴포넌트 |
|---|---|
| Actions | Button, Chip, FAB |
| Controls | Radio, Checkbox, Switch, Select, Text Input, Textarea |
| Display | Avatar, Badge, Image, Scroll |
| Feedback | Toast, Callout, Spinner |
| Layout | Dialog, Bottom Sheet, Menu |
| Navigation | Tab, Breadcrumb, Pagination |
