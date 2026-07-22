"use client"

import { useState } from "react"
import { Chip } from "@/components/ui/chip"

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronDownIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" />
    </svg>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

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
  previewStyle,
}: {
  title: string
  description: string
  children: React.ReactNode
  previewStyle?: React.CSSProperties
}) {
  return (
    <div style={{
      borderRadius: "var(--radius-400)",
      border: "1px solid var(--color-border-normal)",
      overflow: "hidden",
    }}>
      <div style={{
        padding: "28px 32px",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...previewStyle,
      }}>
        {children}
      </div>
      <div style={{
        padding: "16px 20px",
        backgroundColor: "var(--color-background-normal)",
        borderTop: "1px solid var(--color-border-normal)",
      }}>
        <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 4 }}>{title}</p>
        <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{description}</p>
      </div>
    </div>
  )
}

// ─── Interactive examples ─────────────────────────────────────────────────────

function ChipGroupExample() {
  const [selected, setSelected] = useState("주식회사 두시")
  const items = ["주식회사 두시", "클리닝 비품", "소모품/비품"]
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-100)" }}>
      {items.map((label) => (
        <Chip
          key={label}
          variant="solid"
          size="medium"
          label={label}
          selected={selected === label}
          onClick={() => setSelected(label)}
        />
      ))}
    </div>
  )
}

function FilterBarExample() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-100)" }}>
      <Chip variant="outline" size="medium" label="최신 업데이트순" selected trailingIcon={<ChevronDownIcon />} />
      <Chip variant="outline" size="medium" label="체크아웃됨" selected />
      <Chip variant="outline" size="medium" label="업무" trailingIcon={<ChevronDownIcon />} />
      <Chip variant="outline" size="medium" label="지점/동/층" trailingIcon={<ChevronDownIcon />} />
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const VARIANTS: Array<{ key: "solid" | "outline"; label: string }> = [
  { key: "solid",   label: "Solid"   },
  { key: "outline", label: "Outline" },
]

const STATES: Array<{ key: string; label: string; selected: boolean; pressed: boolean; disabled: boolean }> = [
  { key: "selected", label: "Selected", selected: true,  pressed: false, disabled: false },
  { key: "pressed",  label: "Pressed",  selected: false, pressed: true,  disabled: false },
  { key: "enabled",  label: "Enabled",  selected: false, pressed: false, disabled: false },
  { key: "disabled", label: "Disabled", selected: false, pressed: false, disabled: true  },
]

export default function ChipPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Chip
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="Chip은 사용자가 선택하거나 필터링할 수 있는 소형 인터랙티브 요소입니다. 클릭하면 선택 상태가 토글되며, 카테고리 필터링이나 태그 선택 등에 사용됩니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Chip은 Root, Leading Icon(Optional), Label, Trailing Icon(Optional), Interaction Overlay로 구성됩니다."
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
          <svg width="320" height="96" viewBox="0 0 320 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="28" width="260" height="40" rx="20"
              stroke="var(--color-border-contrast)" strokeWidth="1.5" strokeDasharray="4 2"
              fill="var(--color-background-normal)" />
            <rect x="34" y="32" width="252" height="32" rx="6"
              stroke="var(--color-border-contrast)" strokeWidth="1" strokeDasharray="3 2"
              fill="none" opacity="0.4" />
            <rect x="56" y="44" width="14" height="14" rx="3"
              fill="var(--color-foreground-alternative)" opacity="0.35" />
            <text x="160" y="57" textAnchor="middle"
              fill="var(--color-label-normal)" fontSize="13" fontWeight="600" fontFamily="inherit">
              Label
            </text>
            <rect x="250" y="44" width="14" height="14" rx="3"
              fill="var(--color-foreground-alternative)" opacity="0.35" />
            <circle cx="30" cy="28" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="30" y="32" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>
            <circle cx="63" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="63" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
            <circle cx="160" cy="16" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="160" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>
            <circle cx="257" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="257" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>
            <circle cx="290" cy="28" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="290" y="32" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">5</text>
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Root",                desc: "Pill shape의 최상위 컨테이너입니다. border-radius: 9999px." },
            { n: 2, label: "Leading Icon",        desc: "레이블 앞에 위치하는 아이콘입니다. (Optional)" },
            { n: 3, label: "Label",               desc: "Chip의 텍스트 레이블입니다." },
            { n: 4, label: "Trailing Icon",       desc: "레이블 뒤에 위치하는 아이콘입니다. (Optional)" },
            { n: 5, label: "Interaction Overlay", desc: "Hover/Active 시 표시되는 오버레이 레이어입니다. Disabled 상태에서는 표시되지 않습니다." },
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
          description="Chip 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Variant */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Variant"
            description="2가지 variant를 제공합니다. 배경의 밀도와 테두리 강도에 따라 선택합니다."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {([
              { label: "Solid",   variant: "solid"   as const, description: "채워진 배경의 강한 시각적 표현입니다. 선택 시 어두운 배경으로 전환됩니다." },
              { label: "Outline", variant: "outline" as const, description: "테두리가 있는 표현입니다. 선택 시 어두운 배경으로 전환됩니다." },
            ]).map(({ label, variant, description }) => (
              <div
                key={variant}
                style={{
                  display: "flex", alignItems: "center", gap: 24,
                  padding: "16px 20px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                }}
              >
                <div style={{ width: 160, flexShrink: 0, display: "flex", gap: "var(--space-100)" }}>
                  <Chip variant={variant} size="medium" label="Chip" />
                  <Chip variant={variant} size="medium" label="Chip" selected />
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
            description="XSmall(24px), Small(32px), Medium(36px), Large(40px) 네 가지 사이즈를 제공합니다. Medium 사이즈를 기본으로 사용합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {([
              { label: "XSmall", size: "xsmall" as const, height: "24px", description: "가장 작은 사이즈로 공간이 매우 제한된 경우 사용합니다." },
              { label: "Small",  size: "small"  as const, height: "32px", description: "컴팩트한 공간에서 사용합니다." },
              { label: "Medium", size: "medium" as const, height: "36px", description: "기본 Chip 사이즈입니다." },
              { label: "Large",  size: "large"  as const, height: "40px", description: "강조가 필요한 경우 사용합니다." },
            ]).map(({ label, size, height, description }) => (
              <div
                key={size}
                style={{
                  flex: 1, minWidth: 160,
                  padding: "24px 20px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16,
                }}
              >
                <Chip variant="solid" size={size} label="Chip" />
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
            description="Chip은 Selected, Pressed, Enabled, Disabled 상태를 가집니다."
          />

          <style>{`
            .chip-pressed-demo [data-chip] .chip-hover-overlay { opacity: 0.12; }
          `}</style>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderRadius: "var(--radius-300)",
            border: "1px solid var(--color-border-normal)",
            overflow: "hidden",
          }}>
            {VARIANTS.map(({ key: variant, label: variantLabel }, vi) => (
              <div
                key={variant}
                style={{
                  backgroundColor: "var(--color-background-normal)",
                  padding: "24px 20px",
                  borderLeft: vi > 0 ? "1px solid var(--color-border-normal)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {STATES.map(({ key: stateKey, label: stateLabel, selected, pressed, disabled }) => (
                  <div
                    key={stateKey}
                    className={pressed ? "chip-pressed-demo" : undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      padding: "6px 0",
                    }}
                  >
                    <Chip
                      variant={variant}
                      size="medium"
                      label="Label"
                      selected={selected}
                      disabled={disabled}
                    />
                    <span style={{
                      fontSize: "var(--font-size-050)",
                      color: "var(--color-label-assistive)",
                      flexShrink: 0,
                    }}>
                      {stateLabel}
                    </span>
                  </div>
                ))}

                <div style={{
                  marginTop: 12,
                  paddingTop: 12,
                  borderTop: "1px solid var(--color-border-normal)",
                }}>
                  <p style={{
                    fontSize: "var(--font-size-050)",
                    fontWeight: "var(--font-weight-600)",
                    color: "var(--color-label-normal)",
                  }}>
                    {variantLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Chip 컴포넌트를 활용할 경우 권장하는 사용 예시입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          <UsagePattern
            title="Chip Group (Selection)"
            description="클릭으로 상태를 변경할 수 있습니다. 선택할 수 있는 모든 값이 한 화면에 보일 때 사용하는 것을 권장합니다. 요소를 나열할 시 요소 간의 간격을 균일하게 유지하며 레이아웃을 채웁니다."
          >
            <ChipGroupExample />
          </UsagePattern>

          <UsagePattern
            title="Filter Bar"
            description="사용자가 원하는 항목을 쉽게 선택하고 필터링할 수 있도록 돕습니다."
          >
            <FilterBarExample />
          </UsagePattern>

          <UsagePattern
            title="Category"
            description="Tab보다 낮은 레벨로 화면 혹은 섹션에 뿌려지는 값을 구분할 때 Chip으로 구성된 카테고리를 사용합니다."
            previewStyle={{ padding: 0, height: 287, backgroundColor: "transparent" }}
          >
            <img
              src="/images/chip/category-example.png"
              alt="티켓 잡기 필터 선택 예시"
              style={{ width: 356, height: "auto", display: "block", margin: "0 auto", border: "1px solid var(--color-border-normal)", borderRadius: "var(--radius-300)" }}
            />
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
