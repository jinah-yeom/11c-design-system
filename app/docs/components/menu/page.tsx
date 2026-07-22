"use client"

import { useState } from "react"
import { Paperclip, Plus } from "lucide-react"
import { Menu, MenuItem, MenuSection } from "@/components/ui/menu"
import { Avatar } from "@/components/ui/avatar"

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
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 16,
        flexWrap: "wrap",
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

// ─── Max-height scroll example ────────────────────────────────────────────────

function MaxHeightExample() {
  const [hovered, setHovered] = useState(false)
  const items = ["항목 A", "항목 B", "항목 C", "항목 D", "항목 E", "항목 F", "항목 G", "항목 H", "항목 I", "항목 J", "항목 K"]
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Menu style={{ width: 320, maxHeight: 400, overflowY: hovered ? "auto" : "hidden" }}>
        {items.map((label) => (
          <MenuItem key={label} label={label} />
        ))}
      </Menu>
    </div>
  )
}

// ─── Usage stateful examples ──────────────────────────────────────────────────

function NormalUsageExample() {
  const [selected, setSelected] = useState<string | null>("unassigned")
  const items = [
    { value: "all",        label: "전체" },
    { value: "reported",   label: "보고됨" },
    { value: "unassigned", label: "미배정" },
    { value: "assigned",   label: "배정됨" },
    { value: "pending",    label: "수행전" },
  ]
  return (
    <Menu style={{ width: 320 }}>
      {items.map((item) => (
        <MenuItem
          key={item.value}
          label={item.label}
          selected={selected === item.value}
          onClick={() => setSelected(item.value)}
        />
      ))}
    </Menu>
  )
}

function RadioUsageExample() {
  const [selected, setSelected] = useState("manager")
  const items = [
    { value: "super",   label: "총괄 관리자" },
    { value: "manager", label: "관리자" },
    { value: "member",  label: "구성원" },
    { value: "other",   label: "기타" },
  ]
  return (
    <Menu variant="radio" style={{ width: 320 }}>
      {items.map((item) => (
        <MenuItem
          key={item.value}
          type="radio"
          label={item.label}
          selected={selected === item.value}
          onClick={() => setSelected(item.value)}
        />
      ))}
    </Menu>
  )
}

function CheckboxUsageExample() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["ara", "seohyun2"]))
  const items = [
    { value: "gaepo",    label: "0753골프 개포점" },
    { value: "seohyun1", label: "0753골프 서현점" },
    { value: "ara",      label: "0753골프 아라점" },
    { value: "seohyun2", label: "0753골프 서현점" },
    { value: "youngton", label: "0753골프 영통점" },
  ]
  const toggle = (v: string) => setSelected((prev) => {
    const next = new Set(prev)
    next.has(v) ? next.delete(v) : next.add(v)
    return next
  })
  return (
    <Menu variant="checkbox" style={{ width: 320 }}>
      <MenuSection label="김캐디" />
      {items.map((item) => (
        <MenuItem
          key={item.value}
          type="checkbox"
          label={item.label}
          selected={selected.has(item.value)}
          onClick={() => toggle(item.value)}
        />
      ))}
    </Menu>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MenuPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Menu
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="메뉴(Menu)는 사용자가 선택할 수 있는 여러 옵션이나 기능을 나열한 인터페이스 요소입니다. 단일 선택, 라디오 선택, 다중 선택(체크박스) 세 가지 동작 방식을 제공합니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Menu는 Container와 여러 Item/Cell로 구성됩니다. 각 아이템은 선택적 Prefix, Label, 선택적 SubLabel, 선택적 Suffix를 포함하며 Section Heading으로 그룹을 구분할 수 있습니다."
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
          <svg width="420" height="200" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── Container ── */}
            <rect x="40" y="20" width="280" height="160" rx="12" fill="var(--color-background-normal)" stroke="var(--color-border-normal)" strokeWidth="1.5" />

            {/* ── Section Heading (32px): y=20 to y=52 ── */}
            <rect x="56" y="31" width="50" height="8" rx="3" fill="var(--color-border-secondary)" />
            <line x1="40" y1="52" x2="320" y2="52" stroke="var(--color-border-normal)" strokeWidth="0.5" />

            {/* ── Item row 1 (40px): y=52 to y=92 ── */}
            <rect x="40" y="52" width="280" height="40" fill="none" stroke="var(--color-border-primary-subtle)" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="68" cy="72" r="8" fill="var(--color-border-secondary)" />
            <rect x="84" y="67" width="60" height="10" rx="3" fill="var(--color-border-normal)" />
            <rect x="284" y="67" width="24" height="10" rx="3" fill="var(--color-border-normal)" />

            {/* ── Item row 2 (subLabel, 48px): y=92 to y=140 ── */}
            <rect x="40" y="92" width="280" height="48" fill="none" stroke="var(--color-border-primary-subtle)" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="68" cy="114" r="8" fill="var(--color-border-secondary)" />
            <rect x="84" y="106" width="70" height="9" rx="3" fill="var(--color-border-normal)" />
            <rect x="84" y="120" width="50" height="8" rx="3" fill="var(--color-background-alternative)" stroke="var(--color-border-normal)" strokeWidth="0.5" />

            {/* ── Item row 3 (40px): y=140 to y=180 ── */}
            <rect x="40" y="140" width="280" height="40" rx="0" fill="none" stroke="var(--color-border-primary-subtle)" strokeWidth="1" strokeDasharray="4 2" />
            <circle cx="68" cy="160" r="8" fill="var(--color-border-secondary)" />
            <rect x="84" y="155" width="60" height="10" rx="3" fill="var(--color-border-normal)" />

            {/* ── Badges ── */}
            {/* ① Container */}
            <circle cx="360" cy="100" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="360" y="104" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>
            <line x1="351" y1="100" x2="322" y2="100" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ② Item/Cell */}
            <circle cx="360" cy="72" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="360" y="76" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
            <line x1="351" y1="72" x2="322" y2="72" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ③ Interaction overlay */}
            <circle cx="20" cy="62" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="66" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>
            <line x1="29" y1="62" x2="50" y2="62" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ④ Prefix */}
            <circle cx="20" cy="114" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="118" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>
            <line x1="29" y1="114" x2="57" y2="114" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ⑤ Label */}
            <circle cx="20" cy="160" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="164" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">5</text>
            <line x1="29" y1="160" x2="82" y2="160" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ⑥ Line 2 (subLabel) */}
            <circle cx="360" cy="128" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="360" y="132" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">6</text>
            <line x1="351" y1="128" x2="136" y2="124" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ⑦ Suffix */}
            <circle cx="360" cy="160" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="360" y="164" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">7</text>
            <line x1="351" y1="160" x2="310" y2="160" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ⑧ Section Heading */}
            <circle cx="360" cy="36" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="360" y="40" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">8</text>
            <line x1="351" y1="36" x2="109" y2="35" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Container",          desc: "메뉴 전체를 감싸는 컨테이너입니다. 배경색, 테두리, 라운드 처리를 담당합니다." },
            { n: 2, label: "Item / Cell",         desc: "개별 선택 가능한 아이템 행입니다. 클릭 시 동작을 실행하거나 선택 상태를 변경합니다." },
            { n: 3, label: "Interaction overlay", desc: "hover/pressed 시 표시되는 반투명 오버레이입니다. 각 셀에 독립적으로 적용됩니다." },
            { n: 4, label: "Prefix",              desc: "(Optional) 좌측 슬롯. 24×24px. Radio/Checkbox 인디케이터 또는 커스텀 아이콘을 표시합니다." },
            { n: 5, label: "Label",               desc: "항목의 기본 텍스트입니다. font-size 100, font-weight 400으로 표시됩니다." },
            { n: 6, label: "Line 2",              desc: "(Optional) 보조 텍스트입니다. Label 아래에 font-size 075, color alternative로 표시됩니다." },
            { n: 7, label: "Suffix",              desc: "(Optional) 우측 슬롯. 16×16px. Normal 타입 선택 시 Check 아이콘이 자동으로 표시됩니다." },
            { n: 8, label: "Section Heading",     desc: "(Optional) 메뉴 그룹 제목입니다. font-size 050, font-weight 600, color alternative로 표시됩니다." },
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
          description="Menu 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Size */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Size"
            description="Regular(40px)와 Large(48px) 두 가지 높이를 제공합니다. Regular를 기본으로 사용합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {([
              { size: "regular" as const, label: "Regular", desc: "height 40px · 기본" },
              { size: "large"   as const, label: "Large",   desc: "height 48px · 정보 밀도 낮을 때" },
            ]).map(({ size, label, desc }) => (
              <div
                key={size}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start",
                }}
              >
                <Menu style={{ width: 320 }}>
                  <MenuItem size={size} label="항목 A" />
                  <MenuItem size={size} label="항목 B" />
                  <MenuItem size={size} label="항목 C" />
                </Menu>
                <div>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Type */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Type"
            description="Normal, Radio, Checkbox 세 가지 타입을 제공합니다. 선택 동작 방식이 다릅니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {([
              { type: "normal"   as const, label: "Normal",   desc: "단일 선택 · Check 아이콘 표시", selectedKey: "item1" },
              { type: "radio"    as const, label: "Radio",    desc: "단일 선택 · Radio 인디케이터",   selectedKey: "item2" },
              { type: "checkbox" as const, label: "Checkbox", desc: "다중 선택 · Checkbox 인디케이터", selectedKey: "item1" },
            ]).map(({ type, label, desc, selectedKey }) => (
              <div
                key={type}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start",
                }}
              >
                <Menu style={{ width: 320 }}>
                  <MenuItem type={type} label="항목 A" selected={selectedKey === "item1"} />
                  <MenuItem type={type} label="항목 B" selected={selectedKey === "item2"} />
                  <MenuItem type={type} label="항목 C" />
                </Menu>
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
            description="Default, Hover, Pressed, Selected, Disabled 5가지 상태를 제공합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {/* Default */}
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Menu style={{ width: 320 }}>
                <MenuItem label="항목 A" />
                <MenuItem label="항목 B" />
              </Menu>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>Default</p>
            </div>

            {/* Hover */}
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Menu style={{ width: 320 }}>
                <MenuItem label="항목 A" _forceOverlayOpacity={0.05} />
                <MenuItem label="항목 B" />
              </Menu>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>Hover</p>
            </div>

            {/* Pressed */}
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Menu style={{ width: 320 }}>
                <MenuItem label="항목 A" _forceOverlayOpacity={0.12} />
                <MenuItem label="항목 B" />
              </Menu>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>Pressed</p>
            </div>

            {/* Selected */}
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Menu style={{ width: 320 }}>
                <MenuItem label="항목 A" selected />
                <MenuItem label="항목 B" />
              </Menu>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>Selected</p>
            </div>

            {/* Disabled */}
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12 }}>
              <Menu style={{ width: 320 }}>
                <MenuItem label="항목 A" disabled />
                <MenuItem label="항목 B" />
              </Menu>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>Disabled</p>
            </div>
          </div>
        </div>

        {/* Width / Height */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Width / Height"
            description="Menu의 너비는 Min-width 140px 범위 내에서 자유롭게 설정할 수 있습니다. 아이템이 많아질 경우 Max-height 400px을 초과하면 내부 스크롤이 생성됩니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <Menu style={{ width: 140 }}>
                <MenuItem label="항목 A" />
                <MenuItem label="항목 B" />
                <MenuItem label="항목 C" />
              </Menu>
              <div>
                <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Min-width</p>
                <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>140px</p>
              </div>
            </div>
            <div style={{ padding: "20px 24px", borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)", display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <MaxHeightExample />
              <div>
                <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>Max-height</p>
                <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>400px · hover 시 스크롤 표시</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Menu 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Card 1 - 단일 선택 - Normal */}
          <UsagePattern
            title="단일 선택 - Normal"
            description="Normal은 별도 액션 없이 단일 아이템 선택 시 값이 바로 적용될 때 사용합니다. 선택한 값의 적용, 변동이 잦아도 문제가 없을 시 사용합니다. 선택된 값은 우측의 Check icon으로 표현합니다."
          >
            <NormalUsageExample />
          </UsagePattern>

          {/* Card 2 - 단일 선택 - Radio */}
          <UsagePattern
            title="단일 선택 - Radio"
            description="Radio는 단일 선택한 값을 사용자가 확인하고 비교적 신중하게 적용해야할 때 사용합니다."
          >
            <RadioUsageExample />
          </UsagePattern>

          {/* Card 3 - 다중 선택 - Checkbox */}
          <UsagePattern
            title="다중 선택 - Checkbox"
            description="Checkbox는 다중 아이템 선택 시 값을 사용자가 확인하고 비교적 신중하게 적용해야할 때 사용합니다."
          >
            <CheckboxUsageExample />
          </UsagePattern>

          {/* Card 4 - Prefix Contents */}
          <UsagePattern
            title="Prefix Contents"
            description="Prefix 아이콘은 아바타, 아이콘 등 원하는 유형으로 자유롭게 선택하여 사용할 수 있습니다."
          >
            {/* A: Avatar prefix */}
            <Menu style={{ width: 320 }}>
              {["Person name A", "Person name B", "Person name C", "Person name D", "Person name E"].map((name) => (
                <MenuItem
                  key={name}
                  label={name}
                  prefix={<Avatar size="sm" initials="KP" />}
                />
              ))}
            </Menu>

            {/* B: Icon prefix with Section Heading */}
            <Menu style={{ width: 320 }}>
              <MenuSection label="파일" />
              <MenuItem
                label="파일 첨부하기"
                prefix={<Paperclip size={16} color="var(--color-label-normal)" />}
              />
              <MenuItem
                label="항목 추가하기"
                prefix={<Plus size={16} color="var(--color-label-normal)" />}
              />
            </Menu>
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
