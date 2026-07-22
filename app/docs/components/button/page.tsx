import { Button, type ButtonVariant, type ButtonSize } from "@/components/ui/button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const VARIANTS: Array<{ label: string; value: ButtonVariant; description: string }> = [
  { label: "Brand Solid",     value: "brand-solid",     description: "주요 액션에 사용합니다. 페이지당 하나의 주요 버튼 사용을 권장합니다." },
  { label: "Brand Outline",   value: "brand-outline",   description: "Brand Solid와 조합하는 보조 액션에 사용합니다." },
  { label: "Neutral Solid",   value: "neutral-solid",   description: "브랜드 색상 없이 강조가 필요한 중립 주요 액션에 사용합니다." },
  { label: "Neutral Outline", value: "neutral-outline", description: "중립적인 보조 액션에 사용합니다." },
  { label: "Neutral Weak",    value: "neutral-weak",    description: "약한 강조의 중립 액션에 사용합니다." },
  { label: "Critical Solid",  value: "critical-solid",  description: "삭제, 탈퇴 등 위험하거나 되돌릴 수 없는 액션에 사용합니다." },
  { label: "Ghost",           value: "ghost",           description: "배경 없이 최소한의 시각적 표현이 필요할 때 사용합니다." },
]

const SIZES: Array<{ label: string; value: ButtonSize; height: string; description: string }> = [
  { label: "Small",  value: "small",  height: "32px", description: "컴팩트한 공간에서 사용합니다." },
  { label: "Medium", value: "medium", height: "40px", description: "기본 버튼 사이즈입니다. 일반적인 상황에서 사용합니다." },
  { label: "Large",  value: "large",  height: "48px", description: "강조가 필요한 주요 CTA에 사용합니다." },
]

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3Zm0 1.5a.75.75 0 0 1 .75.75v3h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75V5.25A.75.75 0 0 1 8 4.5Z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1a.75.75 0 0 1 .75.75v6.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L7.25 8.44V1.75A.75.75 0 0 1 8 1ZM2.75 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H2.75Z" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5a.75.75 0 0 1 .75.75v5h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0v-5h-5a.75.75 0 0 1 0-1.5h5v-5A.75.75 0 0 1 8 1.5Z" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M5 1.5a.75.75 0 0 1 .75.75V3h4.5V2.25a.75.75 0 0 1 1.5 0V3h1A1.75 1.75 0 0 1 14.5 4.75v8.5A1.75 1.75 0 0 1 12.75 15H3.25A1.75 1.75 0 0 1 1.5 13.25v-8.5A1.75 1.75 0 0 1 3.25 3h1V2.25A.75.75 0 0 1 5 1.5ZM3.25 4.5a.25.25 0 0 0-.25.25V7h10V4.75a.25.25 0 0 0-.25-.25H3.25ZM13 8.5H3v4.75c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V8.5Z" />
    </svg>
  )
}

function EllipsisIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM2.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </svg>
  )
}

// ─── Anatomy Badge ─────────────────────────────────────────────────────────────

function Badge({ n }: { n: number }) {
  return (
    <div style={{
      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
      backgroundColor: "var(--color-theme-dependent-primary)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ fontSize: "var(--font-size-025)", fontWeight: "var(--font-weight-700)", color: "white", lineHeight: 1 }}>{n}</span>
    </div>
  )
}

// ─── Section Header ────────────────────────────────────────────────────────────

function SectionTitle({ title, description, style }: { title: string; description?: string; style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <h2 style={{ fontSize: "var(--font-size-200)", fontWeight: "var(--font-weight-700)", color: "var(--color-label-normal)", marginBottom: description ? 8 : 0 }}>
        {title}
      </h2>
      {description && (
        <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>
          {description}
        </p>
      )}
    </div>
  )
}

function SubTitle({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 4 }}>{title}</p>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>{description}</p>
    </div>
  )
}

function UsagePattern({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div style={{
      borderRadius: "var(--radius-400)",
      border: "1px solid var(--color-border-normal)",
      overflow: "hidden",
      display: "flex",
    }}>
      <div style={{
        flex: 1,
        padding: "32px 28px",
        backgroundColor: "var(--color-background-alternative)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 100,
        gap: 12,
        flexWrap: "wrap",
      }}>
        {children}
      </div>
      <div style={{
        width: 260,
        flexShrink: 0,
        padding: "20px 24px",
        backgroundColor: "var(--color-background-normal)",
        borderLeft: "1px solid var(--color-border-normal)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
      }}>
        <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>{title}</p>
        <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ButtonPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Button
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="버튼(Button)은 사용자가 액션을 수행하거나 선택을 할 수 있도록 하는 인터랙티브 컴포넌트입니다. 클릭하거나 탭하면 즉각적인 이벤트가 발생합니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="버튼은 Container, Leading Icon(Optional), Label, Trailing Icon(Optional)으로 구성됩니다."
          style={{ marginBottom: 32 }}
        />

        {/* SVG Diagram */}
        <div style={{
          borderRadius: "var(--radius-400)",
          border: "1px solid var(--color-border-normal)",
          backgroundColor: "var(--color-background-alternative)",
          padding: "40px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}>
          <svg width="300" height="96" viewBox="0 0 300 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Container */}
            <rect x="30" y="28" width="240" height="44" rx="8"
              stroke="var(--color-border-contrast)" strokeWidth="1.5" strokeDasharray="4 2"
              fill="var(--color-background-normal)" />

            {/* Leading icon placeholder */}
            <rect x="54" y="44" width="16" height="16" rx="3"
              fill="var(--color-foreground-alternative)" opacity="0.35" />

            {/* Label */}
            <text x="150" y="59" textAnchor="middle"
              fill="var(--color-label-normal)" fontSize="14" fontWeight="600" fontFamily="inherit">
              Button
            </text>

            {/* Trailing icon placeholder */}
            <rect x="230" y="44" width="16" height="16" rx="3"
              fill="var(--color-foreground-alternative)" opacity="0.35" />

            {/* ① Container badge */}
            <circle cx="30" cy="28" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="30" y="32" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Leading Icon badge */}
            <circle cx="62" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="62" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>

            {/* ③ Label badge */}
            <circle cx="150" cy="16" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="150" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>

            {/* ④ Trailing Icon badge */}
            <circle cx="238" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="238" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>
          </svg>
        </div>

        {/* Anatomy description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Container",     desc: "버튼 전체를 감싸는 클릭 영역입니다." },
            { n: 2, label: "Leading Icon",  desc: "버튼 좌측에 위치하는 아이콘입니다. (Optional)" },
            { n: 3, label: "Label",         desc: "버튼의 텍스트 레이블입니다." },
            { n: 4, label: "Trailing Icon", desc: "버튼 우측에 위치하는 아이콘입니다. (Optional)" },
          ].map((item) => (
            <div key={item.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Badge n={item.n} />
              <div style={{ display: "flex", gap: 6 }}>
                <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", flexShrink: 0 }}>{item.label}</p>
                <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Properties ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Properties"
          description="버튼 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Variant */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Variant"
            description="7가지 variant를 제공합니다. 상황과 중요도에 따라 적절한 variant를 선택합니다."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {VARIANTS.map(({ label, value, description }) => (
              <div
                key={value}
                style={{
                  display: "flex", alignItems: "center", gap: 24,
                  padding: "16px 20px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                }}
              >
                <div style={{ width: 148, flexShrink: 0 }}>
                  <Button variant={value} size="medium">Button</Button>
                </div>
                <div>
                  <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Size"
            description="Small(32px), Medium(40px), Large(48px) 세 가지 사이즈를 제공합니다. md 사이즈를 기본으로 사용합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {SIZES.map(({ label, value, height, description }) => (
              <div
                key={value}
                style={{
                  flex: 1, minWidth: 160,
                  padding: "24px 20px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-alternative)",
                  display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16,
                }}
              >
                <Button variant="brand-solid" size={value}>Button</Button>
                <div>
                  <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label} · {height}</p>
                  <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State */}
        <div>
          <SubTitle
            title="State"
            description="버튼은 Enabled, Hover, Active, Disabled, Focus 상태를 가집니다."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
            {[
              { label: "Enabled",   node: <Button variant="brand-solid" size="medium">Button</Button> },
              { label: "Disabled",  node: <Button variant="brand-solid" size="medium" disabled>Button</Button> },
              { label: "Icon Only", node: <Button variant="brand-solid" size="medium" iconOnly aria-label="icon only"><ClockIcon /></Button> },
              { label: "Icon Only Disabled", node: <Button variant="brand-solid" size="medium" iconOnly disabled aria-label="icon only disabled"><ClockIcon /></Button> },
            ].map(({ label, node }) => (
              <div
                key={label}
                style={{
                  padding: "24px 20px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16,
                }}
              >
                {node}
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Button 컴포넌트를 활용할 경우 권장하는 사용 예시입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* 기본 형태 */}
          <UsagePattern
            title="기본 형태"
            description="텍스트만 사용하는 가장 기본적인 형태입니다."
          >
            <Button variant="brand-solid" size="medium">저장</Button>
          </UsagePattern>

          {/* 좌측 아이콘 */}
          <UsagePattern
            title="좌측 아이콘 추가"
            description="아이콘을 앞에 배치해 시각적 힌트를 추가합니다. 아이콘은 수행될 기능의 성격이나 상태를 나타냅니다."
          >
            <Button variant="neutral-outline" size="medium"><DownloadIcon />내려받기</Button>
            <Button variant="neutral-outline" size="medium"><PlusIcon />지점 추가</Button>
          </UsagePattern>

          {/* 우측 아이콘 */}
          <UsagePattern
            title="우측 아이콘 추가"
            description="텍스트 뒤에 아이콘을 배치해 액션을 전달합니다. 주로 화살표, 더보기 등의 아이콘이 사용됩니다."
          >
            <Button variant="neutral-solid" size="medium">더보기<EllipsisIcon /></Button>
            <Button variant="brand-solid" size="medium">다음<ChevronRightIcon /></Button>
          </UsagePattern>

          {/* 양쪽 아이콘 */}
          <UsagePattern
            title="양쪽 아이콘 추가"
            description="좌우에 각각 다른 역할의 아이콘을 배치한 상태입니다."
          >
            <Button variant="neutral-outline" size="medium"><CalendarIcon />날짜 선택<ChevronRightIcon /></Button>
          </UsagePattern>

          {/* 가로 정렬 */}
          <UsagePattern
            title="가로 정렬"
            description="버튼 여러 개를 가로로 나란히 정렬해 연관된 액션을 표현합니다."
          >
            <Button variant="neutral-weak" size="medium">이전</Button>
            <Button variant="brand-solid" size="medium">다음</Button>
          </UsagePattern>

          {/* 세로 정렬 */}
          <UsagePattern
            title="세로 정렬"
            description="버튼 여러 개를 세로로 정렬해 여러 액션을 선택해 사용할 수 있습니다. 주로 모바일이나 강조가 필요한 경우 사용합니다."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 280 }}>
              <Button variant="neutral-weak" size="medium" className="w-full">나중에 하기</Button>
              <Button variant="brand-solid" size="medium" className="w-full">지금 업데이트 하기</Button>
            </div>
          </UsagePattern>
        </div>
      </section>
    </div>
  )
}
