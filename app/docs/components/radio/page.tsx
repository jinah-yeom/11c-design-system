"use client"

import { useState } from "react"
import { Radio, RadioGroup } from "@/components/ui/radio"

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
    }}>
      <div style={{
        padding: "28px 32px",
        backgroundColor: "var(--color-background-alternative)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
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

// ─── Usage examples ──────────────────────────────────────────────────────────

function RadioGroupSectionExample() {
  const [value, setValue] = useState("10min")
  return (
    <div style={{
      borderRadius: "var(--radius-500)",
      border: "1px solid var(--color-border-normal)",
      overflow: "hidden",
      minWidth: 200,
    }}>
      <RadioGroup name="remind" value={value} onChange={setValue}>
        <Radio value=""      label="없음" />
        <Radio value="5min"  label="5분 전" />
        <Radio value="10min" label="10분 전" />
        <Radio value="30min" label="30분 전" />
        <Radio value="1h"    label="1시간 전" />
        <Radio value="2h"    label="2시간 전" />
      </RadioGroup>
    </div>
  )
}

function BasicSelectionExample() {
  const [value, setValue] = useState("ko")
  return (
    <RadioGroup name="language" value={value} onChange={setValue}>
      <Radio value="ko" label="한국어" />
      <Radio value="en" label="영어" />
      <Radio value="ja" label="일본어" />
      <Radio value="th" label="태국어" />
    </RadioGroup>
  )
}

function HorizontalExample() {
  const [value, setValue] = useState("10min")
  return (
    <RadioGroup name="duration" value={value} onChange={setValue}>
      <div style={{ display: "flex" }}>
        <Radio value="10min" label="10분" />
        <Radio value="30min" label="30분" />
        <Radio value="1h"    label="1시간" />
      </div>
    </RadioGroup>
  )
}


// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RadioPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Radio
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="Radio는 여러 옵션 중 하나만 선택할 수 있는 단일 선택 컨트롤입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Radio는 Radiomark와 Label로 구성됩니다. Radiomark는 개별 컴포넌트로 제공되어서 자유롭게 조합해서 사용할 수 있습니다."
          style={{ marginBottom: 32 }}
        />

        {/* SVG Diagram */}
        <div style={{
          borderRadius: "var(--radius-400)",
          border: "1px solid var(--color-border-normal)",
          backgroundColor: "var(--color-background-alternative)",
          padding: "48px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}>
          <svg width="240" height="72" viewBox="0 0 240 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Radiomark circle */}
            <circle cx="40" cy="36" r="12"
              fill="var(--color-theme-dependent-primary)" />
            {/* inset white ring to simulate box-shadow: inset 0 0 0 4px white */}
            <circle cx="40" cy="36" r="8"
              fill="white" />
            <circle cx="40" cy="36" r="4"
              fill="var(--color-theme-dependent-primary)" />

            {/* Label text */}
            <text x="64" y="40" fill="var(--color-label-normal)" fontSize="14" fontWeight="500" fontFamily="inherit">Label</text>

            {/* ① Radiomark badge */}
            <circle cx="40" cy="12" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="40" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Label badge */}
            <circle cx="88" cy="12" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="88" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Radiomark", desc: "원형 라디오 버튼입니다." },
            { n: 2, label: "Label",     desc: "라디오 항목을 설명하는 텍스트입니다." },
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
          description="Radio 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Size */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Size"
            description="Regular(40px)와 Large(48px) 두 가지 사이즈를 제공합니다. Regular를 기본으로 사용합니다."
          />
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "Regular · 40px", size: "regular" as const, desc: "기본 사이즈입니다." },
              { label: "Large · 48px",   size: "large"   as const, desc: "강조가 필요한 경우 사용합니다." },
            ].map(({ label, size, desc }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start",
                }}
              >
                <Radio size={size} label="Label" />
                <div>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="State"
            description="Radio는 Default, Hover, Selected, Disabled 상태를 가집니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "Default",           checked: false, disabled: false },
              { label: "Selected",          checked: true,  disabled: false },
              { label: "Disabled",          checked: false, disabled: true  },
              { label: "Selected Disabled", checked: true,  disabled: true  },
            ].map(({ label, checked, disabled }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start",
                }}
              >
                <Radio label="Label" checked={checked} disabled={disabled} />
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Weight */}
        <div>
          <SubTitle
            title="Weight"
            description="라벨 텍스트의 굵기를 Regular(500)와 Bold(600) 중 선택할 수 있습니다. 강조가 필요한 항목에 Bold를 사용합니다."
          />
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Regular", weight: "regular" as const },
              { label: "Bold",    weight: "bold"    as const },
            ].map(({ label, weight }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start",
                }}
              >
                <Radio label="Label" weight={weight} checked />
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clickable area ──────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Clickable area"
          description={"Radio는 Label을 포함한 영역이 Target으로 동작합니다.\nList처럼 Radiomark를 조합해서 사용하는 경우 전체 Row가 Target 영역이 되어야 합니다."}
          style={{ marginBottom: 32 }}
        />
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "stretch" }}>
          {/* Inline */}
          <div style={{
            padding: "20px 24px",
            borderRadius: "var(--radius-300)",
            border: "1px solid var(--color-border-normal)",
            backgroundColor: "var(--color-background-normal)",
            display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16,
          }}>
            <div style={{
              border: "1px dashed var(--color-theme-danger)",
              borderRadius: "var(--radius-100)",
              padding: "4px 12px",
              display: "inline-flex",
              alignItems: "center",
            }}>
              <Radio label="Label" checked />
            </div>
            <div>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Inline</p>
              <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>공백을 포함한 모든 영역이 터치 영역</p>
            </div>
          </div>
          {/* Block */}
          <div style={{
            padding: "20px 24px",
            borderRadius: "var(--radius-300)",
            border: "1px solid var(--color-border-normal)",
            backgroundColor: "var(--color-background-normal)",
            display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16,
          }}>
            <div style={{ padding: "4px 12px", display: "flex", alignItems: "center" }}>
              <div style={{
                border: "1px dashed var(--color-theme-danger)",
                borderRadius: "var(--radius-100)",
                padding: "4px 8px",
                display: "inline-flex",
              }}>
                <Radio label="Label" checked />
              </div>
            </div>
            <div>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Block</p>
              <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>Control과 Label 영역만 터치 영역</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Radio group ─────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Radio group"
          description="선택지가 2개에서 6개 사이일 때 사용합니다."
          style={{ marginBottom: 32 }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <RadioGroupSectionExample />
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Radio 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          <UsagePattern
            title="기본 선택 제공"
            description="Radio를 제공할 때는 사용자의 고민을 덜어주고 빠른 선택을 돕기 위해 가장 일반적인 선택지를 기본으로 제공하는 것을 권장합니다."
          >
            <BasicSelectionExample />
          </UsagePattern>

          <UsagePattern
            title="수직 배열 권장"
            description="여러 Radio를 사용할 시 수직으로 쌓아 올리는 것이 기본적인 정렬 방식입니다. 가로로 나열 시 레이블의 길이가 길어지거나 화면 너비가 좁아질 때 어떤 버튼에 해당하는지 혼동을 일으킬 수 있으므로 지양합니다. 수평으로 배열해야 할 경우, 각 요소가 명확히 구분되도록 충분한 간격(Gap)을 확보해주세요."
          >
            <HorizontalExample />
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
