# Components

11c Design System의 UI 컴포넌트 모음입니다.

## 사용 방법

```tsx
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/ui/text-input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Chip } from "@/components/ui/chip"
import { ScrollArea } from "@/components/ui/scroll"
```

## 컴포넌트 목록

| 컴포넌트 | 파일 | 카테고리 |
|---|---|---|
| Button | `button.tsx` | Actions |
| Chip | `chip.tsx` | Actions |
| Checkbox | `checkbox.tsx` | Controls |
| TextInput | `text-input.tsx` | Controls |
| Textarea | `textarea.tsx` | Controls |
| ScrollArea | `scroll.tsx` | Display |

## 스타일 원칙

- 모든 색상/간격/반경은 `var(--token-name)` 형태로만 사용
- 하드코딩 금지
- 토큰 정의: `styles/tokens.css` 참고

## 컴포넌트 가이드

https://11c-design.vercel.app
