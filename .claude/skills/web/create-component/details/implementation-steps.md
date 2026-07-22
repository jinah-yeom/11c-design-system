# 컴포넌트 구현 상세 가이드

## Step 1: Figma MCP 스펙 읽기

Figma MCP를 통해 해당 컴포넌트의 스펙을 읽습니다.

파악해야 할 항목:
- **Variant**: 컴포넌트의 종류 (예: primary, secondary, outline, ghost)
- **Size**: 크기 옵션 (예: sm, md, lg)
- **State**: 상태 (default, hover, focus, disabled, loading)
- **토큰**: 각 variant/state에 적용된 색상, 간격, 반경 토큰명

```text
Figma MCP 요청 예시:
"Button 컴포넌트 스펙 읽어줘.
variant, size, state 목록과
각각에 적용된 토큰명 알려줘."
```

## Step 2: 토큰 확인 및 매핑

### tokens/ 구조 확인

```json
// tokens/global.json (Foundation)
{
  "color": {
    "primary": {
      "500": { "value": "#6366f1", "type": "color" },
      "600": { "value": "#4f46e5", "type": "color" }
    },
    "neutral": {
      "100": { "value": "#f5f5f5", "type": "color" }
    }
  },
  "spacing": {
    "sm": { "value": "8px", "type": "spacing" },
    "md": { "value": "16px", "type": "spacing" }
  },
  "radius": {
    "md": { "value": "8px", "type": "borderRadius" }
  }
}
```

```json
// tokens/component.json (Component-specific)
{
  "button": {
    "primary": {
      "background": { "value": "{color.primary.500}", "type": "color" },
      "backgroundHover": { "value": "{color.primary.600}", "type": "color" },
      "text": { "value": "#ffffff", "type": "color" }
    }
  }
}
```

### Style Dictionary 변환 실행

```bash
npm run tokens
# → styles/tokens.css 자동 생성
```

생성 결과 예시:
```css
/* styles/tokens.css (자동 생성 — 수정 금지) */
:root {
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-neutral-100: #f5f5f5;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --radius-md: 8px;
  --button-primary-background: #6366f1;
  --button-primary-background-hover: #4f46e5;
  --button-primary-text: #ffffff;
}
```

## Step 3: globals.css 변수 매핑

shadcn이 사용하는 변수명과 토큰을 연결합니다.

```css
/* styles/globals.css */
@import './tokens.css'; /* 토큰 파일 import */

@layer base {
  :root {
    /* shadcn 변수 ← 토큰 변수 연결 */
    --background: var(--color-neutral-100);
    --foreground: var(--color-neutral-900);
    --primary: var(--color-primary-500);
    --primary-foreground: #ffffff;
    --radius: var(--radius-md);

    /* 컴포넌트 레벨 토큰 */
    --btn-primary-bg: var(--button-primary-background);
    --btn-primary-bg-hover: var(--button-primary-background-hover);
    --btn-primary-text: var(--button-primary-text);
  }
}
```

**규칙**: 절대로 HEX값을 globals.css에 직접 쓰지 않는다.
항상 `var(--token-name)` 형태로만 참조.

## Step 4: shadcn 컴포넌트 구현

### 기존 shadcn 컴포넌트 수정 방식 (권장)

```bash
# 아직 없는 경우 먼저 설치
npx shadcn@latest add button
```

```typescript
// components/ui/button.tsx
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  // base styles — 토큰 변수 사용
  "inline-flex items-center justify-center rounded-[var(--radius)] font-medium transition-colors",
  {
    variants: {
      variant: {
        // ✅ CSS 변수로 토큰 참조
        primary: [
          "bg-[var(--btn-primary-bg)]",
          "text-[var(--btn-primary-text)]",
          "hover:bg-[var(--btn-primary-bg-hover)]",
        ],
        secondary: [
          "bg-[var(--color-secondary-500)]",
          "text-[var(--color-neutral-50)]",
          "hover:bg-[var(--color-secondary-600)]",
        ],
        outline: [
          "border border-[var(--color-primary-500)]",
          "text-[var(--color-primary-500)]",
          "hover:bg-[var(--color-primary-50)]",
        ],
        ghost: [
          "text-[var(--color-neutral-700)]",
          "hover:bg-[var(--color-neutral-100)]",
        ],
      },
      size: {
        sm: "h-8 px-[var(--spacing-sm)] text-sm",
        md: "h-10 px-[var(--spacing-md)] text-base",
        lg: "h-12 px-[var(--spacing-lg)] text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export function Button({
  variant,
  size,
  isLoading,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="loading-spinner" /> : children}
    </button>
  )
}
```

### Props 타입 규칙

```typescript
// ✅ Figma variant명과 동일하게 유지
variant: "primary" | "secondary" | "outline" | "ghost" | "destructive"
size: "sm" | "md" | "lg"

// ✅ 상태는 HTML 표준 + 커스텀 props 활용
disabled?: boolean
isLoading?: boolean
```

## Step 5: 프리뷰 페이지 추가

```typescript
// app/page.tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-8 space-y-8">

      {/* Variant 확인 */}
      <section>
        <h2 className="text-sm font-medium mb-3 text-gray-500">Variants</h2>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Size 확인 */}
      <section>
        <h2 className="text-sm font-medium mb-3 text-gray-500">Sizes</h2>
        <div className="flex gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* State 확인 */}
      <section>
        <h2 className="text-sm font-medium mb-3 text-gray-500">States</h2>
        <div className="flex gap-3">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </section>

    </div>
  )
}
```

## Step 6: 로컬 확인

```bash
# 토큰 watch + 개발 서버 동시 실행
npm run dev:full

# 또는 개별 실행
npm run tokens   # 토큰 변환
npm run dev      # localhost:3000
```

확인 항목:
- 모든 variant가 Figma 디자인과 시각적으로 일치하는가?
- hover/focus/disabled 상태가 정상 동작하는가?
- 하드코딩된 색상이 없는가? (브라우저 DevTools에서 CSS 변수로 표시되어야 함)