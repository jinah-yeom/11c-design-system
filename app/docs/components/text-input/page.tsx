"use client"

import { useState } from "react"
import { X, Eye, EyeOff } from "lucide-react"
import { TextInput, type TextInputSize } from "@/components/ui/text-input"
import { Button } from "@/components/ui/button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIZES: Array<{ label: string; value: TextInputSize; description: string }> = [
  { label: "sm", value: "sm", description: "컴팩트한 공간에서 사용합니다." },
  { label: "md", value: "md", description: "기본 사이즈입니다. 일반적인 상황에서 사용합니다." },
  { label: "lg", value: "lg", description: "넓은 공간이 필요한 상황에서 사용합니다." },
  { label: "xl", value: "xl", description: "강조가 필요한 주요 입력 필드에 사용합니다." },
]

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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function TextInputPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Text Input
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="텍스트 인풋(TextInput)은 사용자가 텍스트 데이터를 입력하거나 편집할 수 있는 영역입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="TextInput은 입력 필드, 이를 감싸는 Container, Suffix Button (Optional), Prefix Button (Optional)으로 구성됩니다."
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
          <svg width="320" height="136" viewBox="0 0 320 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ① Label text */}
            <text x="20" y="20" fill="var(--color-label-normal)" fontSize="12" fontWeight="500" fontFamily="inherit">Label</text>
            {/* ② Required * */}
            <text x="62" y="20" fill="var(--color-theme-danger)" fontSize="13" fontWeight="600" fontFamily="inherit">*</text>

            {/* Input container */}
            <rect x="20" y="30" width="280" height="36" rx="6"
              stroke="var(--color-border-normal)" strokeWidth="1.5"
              fill="var(--color-background-normal)" />

            {/* ③ Prefix text */}
            <text x="32" y="53" fill="var(--color-label-alternative)" fontSize="11" fontWeight="500" fontFamily="inherit" opacity="0.8">https://</text>

            {/* Divider */}
            <line x1="88" y1="38" x2="88" y2="58" stroke="var(--color-border-normal)" strokeWidth="1" />

            {/* ⑤ Placeholder text */}
            <text x="96" y="53" fill="var(--color-label-assistive)" fontSize="12" fontFamily="inherit">Placeholder</text>

            {/* ⑥ Suffix icon area */}
            <rect x="270" y="40" width="18" height="18" rx="3"
              fill="var(--color-foreground-alternative)" opacity="0.3" />

            {/* ④ Description / helper text */}
            <text x="20" y="82" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit" opacity="0.8">Helper text</text>

            {/* ① Label badge */}
            <circle cx="20" cy="30" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="34" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Required Badge badge */}
            <circle cx="74" cy="10" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="74" y="14" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>

            {/* ③ Prefix badge */}
            <circle cx="54" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="54" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>

            {/* ④ Description badge */}
            <circle cx="20" cy="96" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="20" y="100" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>

            {/* ⑤ Placeholder badge */}
            <circle cx="150" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="150" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">5</text>

            {/* ⑥ Suffix badge */}
            <circle cx="300" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="300" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">6</text>
          </svg>
        </div>

        {/* Anatomy description */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Label",           desc: "입력 필드의 목적을 설명하는 텍스트입니다." },
            { n: 2, label: "Required Badge",  desc: "필수 입력 필드임을 나타내는 표시입니다." },
            { n: 3, label: "Prefix Contents", desc: "입력 필드 좌측에 위치하는 콘텐츠입니다. (Optional)" },
            { n: 4, label: "Description",     desc: "입력 필드를 보조하는 안내 또는 오류 텍스트입니다." },
            { n: 5, label: "Placeholder",     desc: "입력값이 없을 때 표시되는 안내 텍스트입니다." },
            { n: 6, label: "Suffix Contents", desc: "입력 필드 우측에 위치하는 콘텐츠입니다. (Optional)" },
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
          description="TextInput 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Size */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Size"
            description="Size는 sm, md, lg, xl 네 가지 사이즈로 제공됩니다. md 사이즈를 기본 입력 필드로 사용합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {SIZES.map(({ label, value, description }) => (
              <div
                key={value}
                style={{
                  flex: 1, minWidth: 180,
                  padding: "20px 16px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-alternative)",
                  display: "flex", flexDirection: "column", gap: 12,
                }}
              >
                <TextInput size={value} label="Label" placeholder="Placeholder" helperText="Helper text" />
                <div>
                  <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
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
            description="Input은 default, focused, invalid, disabled 상태를 가집니다."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {[
              {
                label: "Default",
                node: <TextInput size="md" label="Label" required placeholder="Placeholder" helperText="Helper text" />,
              },
              {
                label: "Focused",
                node: <TextInput size="md" label="Label" required placeholder="Click to focus" helperText="Click to focus" />,
              },
              {
                label: "Invalid",
                node: <TextInput size="md" label="Label" required placeholder="Placeholder" invalid errorText="특수문자를 제외하고 입력해 주세요." />,
              },
              {
                label: "Disabled",
                node: <TextInput size="md" label="Label" required placeholder="Placeholder" disabled helperText="Helper text" />,
              },
            ].map(({ label, node }) => (
              <div
                key={label}
                style={{
                  padding: "20px 16px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16,
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
          description="Input 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* 날짜 */}
          <UsagePattern
            title="날짜"
            description="날짜를 직접 입력할 시 YYYY. MM. DD 양식 사용을 권장하며, 가급적 Text input을 기반으로 한 Date picker 컴포넌트 사용을 권장합니다."
          >
            <DateExample />
          </UsagePattern>

          {/* 패스워드 */}
          <UsagePattern
            title="패스워드"
            description="패스워드 입력 시 Hidden과 Visible 옵션 제공을 권장하며, 해당 옵션 제공 시 기본 값은 Hidden 상태입니다."
          >
            <PasswordExample />
          </UsagePattern>

          {/* 유닛 */}
          <UsagePattern
            title="유닛"
            description="Suffix contents의 'Unit'를 활용하여 특정 고정 값에 대한 Suffix 값을 둘 수 있습니다."
          >
            <UnitExample />
          </UsagePattern>

          {/* 에러 메세지 */}
          <UsagePattern
            title="에러 메세지"
            description="실패 사유를 명확하게 안내하여 사용자에게 명확한 행동을 유도합니다."
          >
            <div style={{ width: 320 }}>
              <TextInput size="md" label="지점명" required placeholder="열한@#시" invalid errorText="특수문자를 제외하고 입력해 주세요." />
            </div>
          </UsagePattern>

          {/* 버튼 하단 inline */}
          <UsagePattern
            title="버튼이 하단에 inline으로 위치한 경우"
            description="입력 필드 아래에 즉각적인 액션이 필요한 경우 사용합니다. 버튼과 입력 필드 간 간격이 필요할 때 사용합니다."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 320 }}>
              <TextInput size="md" label="이메일" placeholder="example@email.com" />
              <Button variant="brand-solid" size="medium" style={{ width: "100%" }}>인증 코드 발송</Button>
            </div>
          </UsagePattern>

          {/* 수직 배치 */}
          <UsagePattern
            title="여러 개의 입력 필드를 수직으로 배치할 경우"
            description="여러 개의 입력 필드를 수직으로 정렬하여 단계적 흐름을 만들고 싶을 때 사용합니다."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
              <TextInput size="md" label="아이디" placeholder="example@email.com" />
              <TextInput size="md" label="비밀번호" placeholder="비밀번호를 입력해 주세요." type="password" />
            </div>
          </UsagePattern>

          {/* 가로 배치 */}
          <UsagePattern
            title="여러 개의 입력 필드를 가로로 배치할 경우"
            description="두 개 이상의 관련된 입력 필드를 공간 효율적으로 배치하고 싶을 때 사용합니다. 각 필드가 의미적으로 연결되어 있는 경우에 적합합니다."
          >
            <div style={{ display: "flex", gap: 12, width: "100%", maxWidth: 480 }}>
              <div style={{ flex: 1, minWidth: 0 }}><TextInput size="md" label="도시" placeholder="Seoul" /></div>
              <div style={{ flex: 1, minWidth: 0 }}><TextInput size="md" label="국가" placeholder="South Korea" /></div>
            </div>
          </UsagePattern>

          {/* Prefix / Suffix */}
          <UsagePattern
            title="Prefix / Suffix 활용"
            description="입력 맥락을 명확히 하기 위해 Prefix나 Suffix 텍스트를 활용합니다."
          >
            <div style={{ display: "flex", gap: 12, width: "100%", maxWidth: 480 }}>
              <div style={{ flex: 1, minWidth: 0 }}><TextInput size="md" label="URL" placeholder="example.com" prefixText="https://" /></div>
              <div style={{ flex: 1, minWidth: 0 }}><TextInput size="md" label="이메일" placeholder="username" suffixText="@company.com" /></div>
            </div>
          </UsagePattern>
        </div>
      </section>
    </div>
  )
}

// ─── Usage Example Components ──────────────────────────────────────────────────

function ClearButton({ onClear }: { onClear: () => void }) {
  return (
    <button
      type="button"
      onClick={onClear}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "none", border: "none", padding: 0, cursor: "pointer",
        color: "var(--color-label-alternative)",
      }}
    >
      <X size={16} />
    </button>
  )
}

function DateExample() {
  const [value, setValue] = useState("2026.03.13")
  return (
    <div style={{ width: 320 }}>
      <TextInput
        size="md"
        label="날짜"
        placeholder="2026.03.13"
        value={value}
        isFocused
        onChange={(e) => setValue(e.target.value)}
        trailingIcon={value ? <ClearButton onClear={() => setValue("")} /> : undefined}
      />
    </div>
  )
}

function PasswordExample() {
  const [pw, setPw] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const EyeToggle = ({ show, onToggle }: { show: boolean; onToggle: () => void }) => (
    <button
      type="button"
      onClick={onToggle}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "none", border: "none", padding: 0, cursor: "pointer",
        color: "var(--color-label-alternative)",
      }}
    >
      {show ? <EyeOff size={16} /> : <Eye size={16} />}
    </button>
  )

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
      <TextInput
        size="md"
        label="비밀번호"
        required
        placeholder="●●●●"
        type={showPw ? "text" : "password"}
        value={pw}
        isFocused
        onChange={(e) => setPw(e.target.value)}
        trailingIcon={
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {pw && <ClearButton onClear={() => setPw("")} />}
            <EyeToggle show={showPw} onToggle={() => setShowPw((v) => !v)} />
          </div>
        }
      />
      <TextInput
        size="md"
        label="비밀번호 확인"
        required
        placeholder="●●●●"
        type={showConfirm ? "text" : "password"}
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        trailingIcon={
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {confirm && <ClearButton onClear={() => setConfirm("")} />}
            <EyeToggle show={showConfirm} onToggle={() => setShowConfirm((v) => !v)} />
          </div>
        }
      />
    </div>
  )
}

function UnitExample() {
  const [value, setValue] = useState("10")
  return (
    <div style={{ width: 320 }}>
      <TextInput
        size="md"
        label="일감 경험치"
        placeholder="10"
        value={value}
        isFocused
        onChange={(e) => setValue(e.target.value)}
        suffixText="포인트"
        trailingIcon={value ? <ClearButton onClear={() => setValue("")} /> : undefined}
      />
    </div>
  )
}

// ─── Usage Pattern wrapper ─────────────────────────────────────────────────────

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
