"use client"

import { useState } from "react"
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react"
import { Select, type SelectOption } from "@/components/ui/select"

// ─── Demo data ─────────────────────────────────────────────────────────────────

const FRUIT_OPTIONS: SelectOption[] = [
  { value: "apple",  label: "사과" },
  { value: "banana", label: "바나나" },
  { value: "grape",  label: "포도" },
  { value: "mango",  label: "망고" },
  { value: "orange", label: "오렌지" },
]


const DEPT_OPTIONS: SelectOption[] = [
  { value: "head",   label: "팀장" },
  { value: "part",   label: "파트리더" },
  { value: "member", label: "팀원" },
  { value: "staff",  label: "스태프" },
]

const TASK_STATUS_OPTIONS: SelectOption[] = [
  { value: "all",      label: "전체" },
  { value: "done",     label: "완료" },
  { value: "canceled", label: "취소" },
]

const TASK_OPTIONS: SelectOption[] = [
  { value: "space-work-std", label: "공간 업무 기준" },
  { value: "space-work-adv", label: "공간 업무 심화" },
  { value: "housescan",      label: "하우스캔" },
]

const BRANCH_OPTIONS: SelectOption[] = [
  { value: "b1", label: "0753골프 개포점" },
  { value: "b2", label: "0753 골프 서현점" },
  { value: "b3", label: "0753골프 아라점" },
  { value: "b4", label: "0753골프 판교점" },
]

const NUMBER_OPTIONS: SelectOption[] = [
  { value: "1000", label: "1000" },
  { value: "1001", label: "1001" },
  { value: "1002", label: "1002" },
  { value: "1003", label: "1003" },
  { value: "1004", label: "1004" },
]

const SPACE_OPTIONS: SelectOption[] = [
  { value: "s1", label: "인천(부평) 스테이 패스포트 오키나와 료칸" },
  { value: "s2", label: "저스트슬립 다산" },
  { value: "s3", label: "웨이브파크점" },
  { value: "s4", label: "부산역점" },
]

// ─── Helper components ─────────────────────────────────────────────────────────

function Badge({ n }: { n: number }) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        flexShrink: 0,
        backgroundColor: "var(--color-theme-dependent-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontSize: "var(--font-size-025)",
          fontWeight: "var(--font-weight-700)",
          color: "white",
          lineHeight: 1,
        }}
      >
        {n}
      </span>
    </div>
  )
}

function SectionTitle({
  title,
  description,
  style,
}: {
  title: string
  description?: string
  style?: React.CSSProperties
}) {
  return (
    <div style={style}>
      <h2
        style={{
          fontSize: "var(--font-size-200)",
          fontWeight: "var(--font-weight-700)",
          color: "var(--color-label-normal)",
          marginBottom: description ? 8 : 0,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontSize: "var(--font-size-075)",
            color: "var(--color-label-alternative)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

function SubTitle({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p
        style={{
          fontSize: "var(--font-size-100)",
          fontWeight: "var(--font-weight-600)",
          color: "var(--color-label-normal)",
          marginBottom: 4,
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>
        {description}
      </p>
    </div>
  )
}

function UsagePattern({
  title,
  description,
  children,
  minHeight = 320,
}: {
  title: string
  description: string
  children: React.ReactNode
  minHeight?: number
}) {
  return (
    <div
      style={{
        borderRadius: "var(--radius-400)",
        border: "1px solid var(--color-border-normal)",
      }}
    >
      <div
        style={{
          padding: "40px 32px",
          backgroundColor: "var(--color-background-alternative)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          minHeight,
          borderRadius: "var(--radius-400) var(--radius-400) 0 0",
        }}
      >
        {children}
      </div>
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "var(--color-background-normal)",
          borderTop: "1px solid var(--color-border-normal)",
          borderRadius: "0 0 var(--radius-400) var(--radius-400)",
        }}
      >
        <p
          style={{
            fontSize: "var(--font-size-075)",
            fontWeight: "var(--font-weight-600)",
            color: "var(--color-label-normal)",
            marginBottom: 4,
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>
          {description}
        </p>
      </div>
    </div>
  )
}

// ─── Trigger demos ─────────────────────────────────────────────────────────────

function TriggerMenuDemo() {
  return (
    <Select
      label="부서 팀"
      placeholder="선택해 주세요"
      options={DEPT_OPTIONS}
      menuItemType="normal"
      _forceOpen
      style={{ width: 320 }}
    />
  )
}

function TriggerModalDemo() {
  const DAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"]
  const WEEKS = [
    [null, null, null, null, null, null,    1],
    [2,    3,    4,    5,    6,    7,    8],
    [9,    10,   11,   12,   13,   14,   15],
    [16,   17,   18,   19,   20,   21,   22],
    [23,   24,   25,   26,   27,   28,   29],
    [30,   31,   null, null, null, null, null],
  ]
  return (
    <div style={{ width: 320 }}>
      {/* Trigger */}
      <div style={{ marginBottom: 4, pointerEvents: "none" }}>
        <Select
          label="일감 선택"
          placeholder="날짜를 선택해 주세요"
          options={[]}
          prefix={<CalendarDays size={16} color="var(--color-label-alternative)" />}
          style={{ width: "100%" }}
        />
      </div>

      {/* Calendar modal */}
      <div
        style={{
          backgroundColor: "var(--color-background-normal)",
          borderRadius: "var(--radius-500)",
          border: "1px solid var(--color-border-normal)",
          boxShadow: [
            "var(--shadows-md-shadow-1-x) var(--shadows-md-shadow-1-y) var(--shadows-md-shadow-1-blur) var(--shadows-md-shadow-1-spread) var(--shadows-md-color)",
            "var(--shadows-md-shadow-2-x) var(--shadows-md-shadow-2-y) var(--shadows-md-shadow-2-blur) var(--shadows-md-shadow-2-spread) var(--shadows-md-color)",
          ].join(", "),
          padding: "var(--space-200)",
        }}
      >
        {/* Month navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <button
            style={{
              width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
              border: "none", background: "none", cursor: "pointer",
              color: "var(--color-label-alternative)", borderRadius: "var(--radius-200)",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <span
            style={{
              fontSize: "var(--font-size-075)",
              fontWeight: "var(--font-weight-600)",
              color: "var(--color-label-normal)",
            }}
          >
            2025년 3월
          </span>
          <button
            style={{
              width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
              border: "none", background: "none", cursor: "pointer",
              color: "var(--color-label-alternative)", borderRadius: "var(--radius-200)",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Day labels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", marginBottom: 4 }}>
          {DAY_LABELS.map((d) => (
            <span
              key={d}
              style={{
                textAlign: "center",
                fontSize: "var(--font-size-050)",
                fontWeight: "var(--font-weight-500)",
                color: "var(--color-label-assistive)",
                padding: "4px 0",
              }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Date grid */}
        {WEEKS.map((week, wi) => (
          <div key={wi} style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
            {week.map((d, di) => (
              <div
                key={di}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 32,
                }}
              >
                {d !== null && (
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-1000)",
                      fontSize: "var(--font-size-075)",
                      color: d === 19 ? "var(--color-label-inverse)" : "var(--color-label-normal)",
                      backgroundColor: d === 19 ? "var(--color-theme-dependent-primary)" : "transparent",
                      cursor: "pointer",
                    }}
                  >
                    {d}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            marginTop: 12,
            paddingTop: 12,
            borderTop: "1px solid var(--color-border-normal)",
          }}
        >
          {["취소", "확인"].map((label) => (
            <button
              key={label}
              style={{
                height: 32,
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: "var(--radius-300)",
                border: label === "취소" ? "1px solid var(--color-border-normal)" : "none",
                backgroundColor: label === "확인" ? "var(--color-theme-dependent-primary)" : "transparent",
                color: label === "확인" ? "var(--color-label-inverse)" : "var(--color-label-normal)",
                fontSize: "var(--font-size-075)",
                fontWeight: "var(--font-weight-500)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Interactive demos ─────────────────────────────────────────────────────────

function SingleSelectDemo() {
  const [value, setValue] = useState<string>("all")
  return (
    <Select
      label="일감 상태"
      placeholder="선택해 주세요"
      options={TASK_STATUS_OPTIONS}
      value={value}
      onChange={(v) => setValue(v as string)}
      _forceOpen
      style={{ width: 320 }}
    />
  )
}

function MultiSelectDemo() {
  const [value, setValue] = useState<string[]>(["space-work-std", "housescan"])
  return (
    <Select
      label="일감"
      options={TASK_OPTIONS}
      multiple
      render="chip"
      value={value}
      onChange={(v) => setValue(v as string[])}
      _forceOpen
      style={{ width: 320 }}
    />
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SelectPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1
        style={{
          fontSize: "var(--font-size-300)",
          fontWeight: "var(--font-weight-600)",
          color: "var(--color-label-normal)",
          marginBottom: 8,
        }}
      >
        Select
      </h1>
      <p
        style={{
          fontSize: "var(--font-size-075)",
          color: "var(--color-label-alternative)",
          marginBottom: 48,
        }}
      >
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="Select는 사용자가 미리 정의된 옵션 목록에서 하나 또는 여러 값을 선택할 수 있는 입력 컴포넌트입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Select는 Label, Input 트리거, Dropdown Menu로 구성됩니다."
          style={{ marginBottom: 32 }}
        />

        {/* SVG Diagram */}
        <div
          style={{
            borderRadius: "var(--radius-400)",
            border: "1px solid var(--color-border-normal)",
            backgroundColor: "var(--color-background-alternative)",
            padding: "48px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <svg width="320" height="248" viewBox="0 0 320 248" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ① Label text */}
            <text x="20" y="16" fill="var(--color-label-normal)" fontSize="12" fontWeight="500" fontFamily="inherit">Label</text>
            {/* ② Required * */}
            <text x="59" y="16" fill="var(--color-foreground-danger)" fontSize="14" fontWeight="600" fontFamily="inherit">*</text>

            {/* ③ Input container */}
            <rect x="20" y="24" width="280" height="48" rx="12"
              stroke="var(--color-border-primary-subtle)" strokeWidth="1.5"
              fill="var(--color-background-normal)" />

            {/* ④ Prefix icon area */}
            <rect x="32" y="36" width="24" height="24" rx="4"
              fill="var(--color-foreground-alternative)" opacity="0.2" />

            {/* ⑤ Placeholder text */}
            <text x="64" y="53" fill="var(--color-label-assistive)" fontSize="13" fontFamily="inherit">선택해 주세요</text>

            {/* ⑥ Chevron down */}
            <polyline points="274,43 280,50 286,43"
              stroke="var(--color-label-normal)" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* ⑦ Helper text */}
            <text x="20" y="88" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit">Helper text</text>

            {/* ⑧ Menu container */}
            <rect x="20" y="100" width="280" height="136" rx="16"
              stroke="var(--color-border-normal)" strokeWidth="1"
              fill="var(--color-background-normal)" />
            {/* Menu item 1 — hovered */}
            <rect x="32" y="112" width="256" height="36" rx="8"
              fill="var(--color-label-normal)" opacity="0.05" />
            <text x="48" y="134" fill="var(--color-label-normal)" fontSize="13" fontFamily="inherit">Option 1</text>
            {/* Menu item 2 */}
            <text x="48" y="166" fill="var(--color-label-normal)" fontSize="13" fontFamily="inherit">Option 2</text>
            {/* Menu item 3 */}
            <text x="48" y="198" fill="var(--color-label-alternative)" fontSize="13" fontFamily="inherit">Option 3</text>
            {/* Check icon (selected) */}
            <polyline points="272,127 276,131 284,123"
              stroke="var(--color-theme-dependent-primary)" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* ① Label badge */}
            <circle cx="20" cy="30" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="34" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Required badge */}
            <circle cx="70" cy="8" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="70" y="12" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>

            {/* ③ Input badge */}
            <circle cx="20" cy="68" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="72" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>

            {/* ④ Prefix badge */}
            <circle cx="44" cy="24" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="44" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>

            {/* ⑤ Placeholder badge */}
            <circle cx="155" cy="18" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="155" y="22" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">5</text>

            {/* ⑥ Chevron badge */}
            <circle cx="300" cy="24" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="300" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">6</text>

            {/* ⑦ Helper badge */}
            <circle cx="20" cy="100" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="104" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">7</text>

            {/* ⑧ Menu badge */}
            <circle cx="300" cy="100" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="300" y="104" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">8</text>
          </svg>
        </div>

        {/* Anatomy description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Label",              desc: "입력 필드의 목적을 설명하는 텍스트입니다." },
            { n: 2, label: "Required Badge",     desc: "필수 입력 필드임을 나타내는 표시입니다." },
            { n: 3, label: "Input",              desc: "클릭 시 드롭다운 메뉴를 열고 닫는 트리거 버튼입니다." },
            { n: 4, label: "Prefix",             desc: "입력 필드 좌측에 위치하는 선택적 아이콘 슬롯입니다. (Optional)" },
            { n: 5, label: "Placeholder / Value",desc: "선택된 값 또는 선택 전 안내 텍스트입니다. 다중 선택 시 Chip 형태로 표시됩니다." },
            { n: 6, label: "Chevron 아이콘",     desc: "드롭다운의 열림/닫힘 상태를 시각적으로 나타냅니다." },
            { n: 7, label: "Helper / Error 텍스트",desc: "입력을 보조하거나 유효성 오류를 안내하는 텍스트입니다." },
            { n: 8, label: "Menu",               desc: "선택 가능한 옵션 목록이 표시되는 드롭다운 영역입니다." },
          ].map((item) => (
            <div key={item.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <Badge n={item.n} />
              <div style={{ display: "flex", gap: 6 }}>
                <p
                  style={{
                    fontSize: "var(--font-size-075)",
                    fontWeight: "var(--font-weight-600)",
                    color: "var(--color-label-normal)",
                    flexShrink: 0,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: "var(--font-size-075)",
                    color: "var(--color-label-alternative)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Properties ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Properties"
          description="Select 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* State */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="State"
            description="Select는 inactive, focus, active, invalid, disabled 상태를 가집니다."
          />
          <StateGrid />
        </div>

        {/* Render */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Render"
            description="Render 요소는 Text와 Chip 두가지로 이루어져 있습니다. Text는 단일, 복수의 값을 모두 표현할 수 있으며 Chip은 복수의 값을 표현할 때만 사용 권장하고 있습니다."
          />
          <RenderGrid />
        </div>

        {/* Overflow */}
        <div>
          <SubTitle
            title="Overflow"
            description="Overflow는 False가 기본값이며 중요한 값들을 관리하기 용이하도록 별도 스크롤이나 액션 없이 필드 내에서 한 눈에 볼 수 있게 하는 옵션입니다."
          />
          <OverflowGrid />
        </div>
      </section>

      {/* ── Trigger ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Trigger"
          description="Select의 트리거 유형을 설명합니다."
          style={{ marginBottom: 32 }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <UsagePattern
            title="Menu"
            description="기본 트리거 유형으로, 웹 환경에서만 사용할 수 있습니다. 단일 선택과 복수 선택을 모두 지원합니다."
            minHeight={340}
          >
            <TriggerMenuDemo />
          </UsagePattern>
          <UsagePattern
            title="Modal"
            description="Bottom Sheet, Dialog 등 모든 형태의 모달을 호출할 수 있습니다. 모바일 환경에서는 Menu 대신 Bottom Sheet를 자동으로 호출하여 최적화된 사용자 경험을 제공합니다."
            minHeight={480}
          >
            <TriggerModalDemo />
          </UsagePattern>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Select 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* 단일 선택 */}
          <UsagePattern
            title="단일 선택"
            description="기본적으로 Radio 사용을 권장합니다. 단, 즉각적인 선택을 유도해야 하는 경우 Check 아이콘과 함께 배치하여 사용할 수 있습니다."
          >
            <SingleSelectDemo />
          </UsagePattern>

          {/* 다중 선택 */}
          <UsagePattern
            title="다중 선택"
            description="복수 선택 시 사용자가 선택 상태를 명확히 인지할 수 있어야 합니다. Menu 내에서 Checkbox 사용을 권장하며, 필드 내 선택된 값의 표시 형태는 자유롭게 설정할 수 있으나 가급적 Chip 형태 사용을 권장합니다."
          >
            <MultiSelectDemo />
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}

// ─── Properties: State grid ────────────────────────────────────────────────────

function StateGrid() {
  const STATES: Array<{
    label: string
    props: Partial<React.ComponentProps<typeof Select>>
    value?: string
    _forceFocused?: boolean
  }> = [
    {
      label: "Inactive",
      props: { label: "Label", required: true, placeholder: "Placeholder", helperText: "Helper text" },
    },
    {
      label: "Focus",
      props: { label: "Label", required: true, placeholder: "Placeholder", helperText: "Helper text" },
      _forceFocused: true,
    },
    {
      label: "Active",
      props: { label: "Label", required: true, helperText: "Helper text" },
      value: "apple",
    },
    {
      label: "Invalid",
      props: { label: "Label", required: true, placeholder: "Placeholder", invalid: true, errorText: "올바른 값을 선택해 주세요." },
    },
    {
      label: "Disabled",
      props: { label: "Label", required: true, placeholder: "Placeholder", disabled: true, helperText: "Helper text" },
    },
  ]

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16,
      }}
    >
      {STATES.map(({ label, props, value, _forceFocused }) => (
        <div
          key={label}
          style={{
            minWidth: 0,
            padding: "20px 16px",
            borderRadius: "var(--radius-300)",
            border: "1px solid var(--color-border-normal)",
            backgroundColor: "var(--color-background-normal)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ pointerEvents: "none" }}>
            <Select
              options={FRUIT_OPTIONS}
              value={value}
              onChange={() => {}}
              _forceFocused={_forceFocused}
              {...props}
              style={{ width: "100%" }}
            />
          </div>
          <p
            style={{
              fontSize: "var(--font-size-050)",
              color: "var(--color-label-alternative)",
            }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}

// ─── Properties: Render grid ───────────────────────────────────────────────────

function RenderGrid() {
  const [chipValue, setChipValue] = useState<string[]>(["1000", "1001", "1002", "1003"])

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <div
        style={{
          flex: 1,
          minWidth: 240,
          padding: "20px 16px",
          borderRadius: "var(--radius-300)",
          border: "1px solid var(--color-border-normal)",
          backgroundColor: "var(--color-background-normal)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ pointerEvents: "none" }}>
          <Select
            label="지점 선택"
            required
            options={BRANCH_OPTIONS}
            render="text"
            style={{ width: "100%" }}
          />
        </div>
        <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>
          Text
        </p>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 240,
          padding: "20px 16px",
          borderRadius: "var(--radius-300)",
          border: "1px solid var(--color-border-normal)",
          backgroundColor: "var(--color-background-normal)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Select
          label="공간 이름"
          required
          options={NUMBER_OPTIONS}
          render="chip"
          multiple
          value={chipValue}
          onChange={(v) => setChipValue(v as string[])}
          style={{ width: "100%" }}
        />
        <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>
          Chip
        </p>
      </div>
    </div>
  )
}

// ─── Properties: Overflow grid ─────────────────────────────────────────────────

function OverflowGrid() {
  const textValue = ["b1", "b2", "b3"]
  const chipValue = ["s1", "s2", "s3", "s4"]

  return (
    <div style={{ display: "flex", gap: 16 }}>
      {(["False", "True"] as const).map((label) => {
        const isOverflow = label === "True"
        return (
          <div
            key={label}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "20px 16px",
              borderRadius: "var(--radius-300)",
              border: "1px solid var(--color-border-normal)",
              backgroundColor: "var(--color-background-normal)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <p
              style={{
                fontSize: "var(--font-size-050)",
                fontWeight: "var(--font-weight-600)",
                color: "var(--color-label-normal)",
              }}
            >
              {label}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, pointerEvents: "none" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-assistive)" }}>Text</p>
                <Select
                  options={BRANCH_OPTIONS}
                  render="text"
                  multiple
                  value={textValue}
                  onChange={() => {}}
                  overflow={isOverflow}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-assistive)" }}>Chip</p>
                <Select
                  options={SPACE_OPTIONS}
                  render="chip"
                  multiple
                  value={chipValue}
                  onChange={() => {}}
                  overflow={isOverflow}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
