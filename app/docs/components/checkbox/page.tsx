"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

// ─── Helpers ────────────────────────────────────────────────────────────────

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

// ─── Usage examples ─────────────────────────────────────────────────────────

function GroupExample() {
  const [parent, setParent] = useState<boolean | "indeterminate">(false)
  const [items, setItems] = useState([false, false, false])

  const handleParent = (checked: boolean) => {
    setParent(checked)
    setItems(items.map(() => checked))
  }

  const handleItem = (index: number, checked: boolean) => {
    const next = items.map((v, i) => (i === index ? checked : v))
    setItems(next)
    const all = next.every(Boolean)
    const none = next.every((v) => !v)
    setParent(all ? true : none ? false : "indeterminate")
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-100)" }}>
      <Checkbox
        label="모든 지점 (부모 체크박스)"
        checked={parent === true}
        indeterminate={parent === "indeterminate"}
        onChange={handleParent}
        weight="bold"
      />
      <div style={{ paddingLeft: 32, display: "flex", flexDirection: "column", gap: "var(--space-100)" }}>
        {["서울 지점", "부산 지점", "인천 지점"].map((name, i) => (
          <Checkbox
            key={name}
            label={name}
            checked={items[i]}
            onChange={(checked) => handleItem(i, checked)}
          />
        ))}
      </div>
    </div>
  )
}

function SingleExample() {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      label="(선택) 마케팅 활용 및 광고성 정보 수신 동의"
      checked={checked}
      onChange={setChecked}
    />
  )
}

function GhostExample() {
  const [items, setItems] = useState([false, false, false])
  const toggle = (i: number) => setItems(items.map((v, idx) => idx === i ? !v : v))
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-100)" }}>
      {["오전 반차", "오후 반차", "연차"].map((label, i) => (
        <Checkbox
          key={label}
          shape="ghost"
          label={label}
          checked={items[i]}
          onChange={() => toggle(i)}
        />
      ))}
    </div>
  )
}

function BoldExample() {
  const [checked, setChecked] = useState(false)
  return (
    <Checkbox
      label="전체 동의"
      checked={checked}
      onChange={setChecked}
      weight="bold"
      size="large"
    />
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function CheckboxPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Checkbox
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="Checkbox는 사용자가 하나 이상의 항목을 선택하거나 해제할 수 있는 컨트롤입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Checkbox는 Checkmark와 Label로 구성됩니다. Checkmark는 Background와 Icon으로 이루어집니다."
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
          <svg width="280" height="100" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Checkmark outer (control area) */}
            <rect x="20" y="30" width="40" height="40" rx="4"
              stroke="var(--color-theme-dependent-primary)" strokeWidth="1.5" strokeDasharray="4 2"
              fill="none" />

            {/* Background inner rect (checked fill) */}
            <rect x="23" y="33" width="34" height="34" rx="3"
              fill="var(--color-theme-dependent-primary)" />

            {/* Check icon lines */}
            <polyline points="31,51 37,57 49,43"
              stroke="var(--color-label-inverse)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Label text */}
            <text x="76" y="53" fill="var(--color-label-normal)" fontSize="14" fontWeight="500" fontFamily="inherit">Label</text>

            {/* ① Checkmark badge (top-left of control area) */}
            <circle cx="20" cy="22" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Background badge (bottom-right of inner rect) */}
            <circle cx="60" cy="78" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="60" y="82" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>

            {/* ③ Icon badge (center of inner rect) */}
            <circle cx="40" cy="78" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="40" y="82" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>

            {/* ④ Label badge */}
            <circle cx="118" cy="22" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="118" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>

            {/* gap label */}
            <line x1="62" y1="50" x2="74" y2="50" stroke="var(--color-label-alternative)" strokeWidth="1" strokeDasharray="2 2" />
            <text x="65" y="44" fill="var(--color-label-alternative)" fontSize="9" fontFamily="inherit">8px</text>
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Checkmark",  desc: "체크마크 컨트롤 영역입니다. 클릭/탭 시 상태가 전환됩니다." },
            { n: 2, label: "Background", desc: "테두리와 배경을 담당하는 사각형입니다. 상태에 따라 색상이 달라집니다." },
            { n: 3, label: "Icon",       desc: "Checked 상태에서는 Check 아이콘, Indeterminate 상태에서는 Minus 아이콘이 표시됩니다." },
            { n: 4, label: "Label",      desc: "체크박스의 선택 항목을 설명하는 텍스트입니다. Regular / Bold 두 가지 굵기를 지원합니다." },
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
          description="Checkbox 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Shape */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Shape"
            description="Square는 테두리가 표시되는 기본 형태입니다. Ghost는 테두리·배경이 없고 아이콘 색상으로만 선택 여부를 표현합니다. 선택 사항이며 3개 이하 항목에 권장합니다."
          />
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "stretch" }}>
            {/* Square */}
            <div
              style={{
                padding: "20px 24px",
                borderRadius: "var(--radius-300)",
                border: "1px solid var(--color-border-normal)",
                backgroundColor: "var(--color-background-normal)",
                display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, alignItems: "flex-start",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Checkbox shape="square" label="Unchecked" />
                <Checkbox shape="square" label="Checked" checked />
                <Checkbox shape="square" label="Indeterminate" indeterminate />
              </div>
              <div>
                <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Square</p>
                <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>파란 배경 + 흰 아이콘</p>
              </div>
            </div>
            {/* Ghost */}
            <div
              style={{
                padding: "20px 24px",
                borderRadius: "var(--radius-300)",
                border: "1px solid var(--color-border-normal)",
                backgroundColor: "var(--color-background-normal)",
                display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16, alignItems: "flex-start",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Checkbox shape="ghost" label="Unchecked" />
                <Checkbox shape="ghost" label="Checked" checked />
              </div>
              <div>
                <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Ghost</p>
                <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>배경 없음 + 아이콘 색상으로 선택 표시</p>
              </div>
            </div>
          </div>
        </div>

        {/* Size */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Size"
            description="Checkbox는 Medium(20px)과 Large(24px) 두 가지 사이즈로 제공됩니다."
          />
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "Medium (기본)", size: "medium" as const },
              { label: "Large",        size: "large"  as const },
            ].map(({ label, size }) => (
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
                <Checkbox size={size} label="Label" checked />
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* State */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="State"
            description="Checkbox는 Unchecked / Checked / Indeterminate / Disabled 상태를 가집니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "Unchecked",     checked: false, indeterminate: false, disabled: false },
              { label: "Checked",       checked: true,  indeterminate: false, disabled: false },
              { label: "Indeterminate", checked: false, indeterminate: true,  disabled: false },
              { label: "Disabled",      checked: false, indeterminate: false, disabled: true  },
              { label: "Checked + Disabled", checked: true, indeterminate: false, disabled: true },
            ].map(({ label, checked, indeterminate, disabled }) => (
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
                <Checkbox label="Label" checked={checked} indeterminate={indeterminate} disabled={disabled} />
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
                <Checkbox label="Label" weight={weight} checked />
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
          description={"Checkbox는 Label을 포함한 영역이 Target으로 동작합니다.\nList처럼 Checkmark를 조합해서 사용하는 경우 전체 Row가 Target 영역이 되어야 합니다."}
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
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
            }}>
              <Checkbox label="Label" checked />
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
            <div style={{ padding: "8px 12px", display: "flex", alignItems: "center" }}>
              <div style={{
                border: "1px dashed var(--color-theme-danger)",
                borderRadius: "var(--radius-100)",
                padding: "4px 8px",
                display: "inline-flex",
              }}>
                <Checkbox label="Label" checked />
              </div>
            </div>
            <div>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Block</p>
              <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>Control과 Label 영역만 터치 영역</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Checkbox 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* 기본 형태 */}
          <UsagePattern
            title="기본 형태"
            description="단일 항목의 동의 여부를 수집할 때 사용합니다."
          >
            <SingleExample />
          </UsagePattern>

          {/* 그룹 선택 */}
          <UsagePattern
            title="그룹 선택 (부모-자식 Indeterminate)"
            description="여러 항목을 그룹으로 묶을 때 부모 Checkbox를 최상단에 배치합니다. 일부 자식만 선택 시 부모는 Indeterminate 상태로 표시됩니다."
          >
            <GroupExample />
          </UsagePattern>

          {/* Ghost 타입 */}
          <UsagePattern
            title="Ghost 타입"
            description="필수 선택 항목이 아니고, 3개 이하 항목으로 구성될 경우 Ghost Shape을 사용합니다. 테두리·배경 없이 파란 아이콘으로만 선택 여부를 표현합니다."
          >
            <div style={{ display: "flex", gap: 48 }}>
              <GhostExample />
            </div>
          </UsagePattern>

          {/* Disabled 상태 */}
          <UsagePattern
            title="Disabled 상태"
            description="선택이 불가능한 항목은 disabled prop을 사용하여 비활성화 상태로 표시합니다."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-100)" }}>
              <Checkbox label="선택 불가 항목" disabled />
              <Checkbox label="선택된 비활성 항목" checked disabled />
            </div>
          </UsagePattern>

          {/* Bold 라벨 */}
          <UsagePattern
            title="Bold 라벨"
            description="전체 선택 등 강조가 필요한 항목에 Bold Weight와 Large Size를 함께 사용합니다."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-100)" }}>
              <BoldExample />
              <div style={{ paddingLeft: 32, display: "flex", flexDirection: "column", gap: "var(--space-100)" }}>
                <Checkbox label="항목 1" />
                <Checkbox label="항목 2" />
                <Checkbox label="항목 3" />
              </div>
            </div>
          </UsagePattern>

          {/* 임의 변경 금지 */}
          <UsagePattern
            title="임의 변경 금지"
            description="Control을 우측에 배치하여 사용하지 않습니다."
          >
            <div style={{
              borderRadius: "var(--radius-300)",
              border: "1px solid var(--color-border-normal)",
              backgroundColor: "var(--color-background-normal)",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-100)",
              minWidth: 220,
            }}>
              {["{roomGroup}", "{roomGroup}", "{roomGroup}", "{roomGroup}"].map((label, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--space-100)",
                    padding: "2px 0",
                  }}
                >
                  <span style={{
                    fontSize: "var(--font-size-075)",
                    fontWeight: "var(--font-weight-500)",
                    color: "var(--color-label-normal)",
                  }}>{label}</span>
                  <Checkbox checked={i < 2} />
                </div>
              ))}
            </div>
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
