"use client"

import { Badge } from "@/components/ui/badge"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function AnatomyBadge({ n }: { n: number }) {
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
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        flexWrap: "wrap",
        backgroundColor: "var(--color-background-alternative)",
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BadgePage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Badge
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="Badge는 숫자, 상태, 신규 여부 등을 간결하게 표시하는 정적 표시 컴포넌트입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Badge는 Container와 선택적 Label로 구성됩니다. Dot 타입은 텍스트 없이 Container만 존재합니다."
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
          <svg width="360" height="120" viewBox="0 0 360 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── Dot badge ── */}
            <circle cx="60" cy="60" r="6" fill="var(--color-red-400)" />
            <text x="60" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit">Dot</text>

            {/* ── New badge ── */}
            <rect x="112" y="52" width="16" height="16" rx="4" fill="var(--color-theme-dependent-primary)" />
            <text x="120" y="64" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="inherit">N</text>
            <text x="120" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit">New</text>

            {/* ── Number 1-digit badge ── */}
            <rect x="172" y="52" width="16" height="16" rx="4" fill="var(--color-theme-dependent-primary)" />
            <text x="180" y="64" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="inherit">1</text>
            <text x="180" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit">1-digit</text>

            {/* ── Number 2-digit badge ── */}
            <rect x="225" y="52" width="31" height="16" rx="4" fill="var(--color-theme-dependent-primary)" />
            <text x="240.5" y="64" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="inherit">99+</text>
            <text x="240.5" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit">2-digit</text>

            {/* ── Badge ① Container ── */}
            <circle cx="48" cy="32" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="48" y="36" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>
            <line x1="57" y1="38" x2="60" y2="52" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ── Badge ② Label ── */}
            <circle cx="310" cy="32" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="310" y="36" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
            <line x1="301" y1="38" x2="184" y2="58" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Container", desc: "배경색과 둥근 모서리를 가진 외형입니다. 타입에 따라 크기와 색상이 다릅니다." },
            { n: 2, label: "Label",     desc: "(Optional) 텍스트 콘텐츠입니다. Number/New 타입에만 존재하며, Dot 타입에는 없습니다." },
          ].map((item) => (
            <div key={item.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <AnatomyBadge n={item.n} />
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
          description="Badge 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Type */}
        <div>
          <SubTitle
            title="Type"
            description="Dot, New, Number 세 가지 타입을 제공합니다. 표시 목적에 따라 선택합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              {
                label: "Dot",
                desc: "6×6px · 새 정보 포함 알림",
                hint: "인터랙션 없는 점 형태의 표시",
                node: <Badge type="dot" />,
              },
              {
                label: "New",
                desc: "16×16px · 신규 기능/서비스",
                hint: '"N" 텍스트 고정',
                node: <Badge type="new" />,
              },
              {
                label: "Number (1-digit)",
                desc: "16×16px · 숫자 1자리",
                hint: "1 이상 99 이하",
                node: <Badge type="number" count={5} />,
              },
              {
                label: "Number (2-digit)",
                desc: "31×16px · 99 초과",
                hint: '"99+" 고정 표시',
                node: <Badge type="number" count={120} />,
              },
            ].map(({ label, desc, hint, node }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "flex-start",
                  minWidth: 160,
                }}
              >
                <div style={{
                  width: "100%",
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-background-alternative)",
                  borderRadius: "var(--radius-200)",
                }}>
                  {node}
                </div>
                <div>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", marginBottom: 2 }}>{desc}</p>
                  <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-assistive)" }}>{hint}</p>
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
          description="Badge 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          <UsagePattern
            title="Dot — 새 알림 표시"
            description="해당 영역에 새로운 정보가 포함된다는 사실을 사용자에게 알릴 때 사용합니다. 텍스트 없이 작은 원형으로 표시합니다."
          >
            <div style={{ position: "relative", display: "inline-flex" }}>
              <div style={{
                width: 40, height: 40,
                borderRadius: "var(--radius-1000)",
                backgroundColor: "var(--color-background-alternative)",
                border: "1px solid var(--color-border-normal)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>아이콘</span>
              </div>
              <span style={{ position: "absolute", top: 0, right: 0 }}>
                <Badge type="dot" />
              </span>
            </div>
          </UsagePattern>

          <UsagePattern
            title="New — 신규 기능 표시"
            description="새로운 기능이나 서비스가 출시되었을 때 사용합니다. 메뉴 항목이나 탭 옆에 배치하여 신규 여부를 표시합니다."
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "var(--font-size-100)", color: "var(--color-label-normal)" }}>AI 작성</span>
              <Badge type="new" />
            </div>
          </UsagePattern>

          <UsagePattern
            title="Number — 읽지 않은 항목 수"
            description="아이템 개수, 읽지 않은 알림 수 등 개수 표시가 필요한 경우에 사용합니다. 중요도에 맞게 Primary 색상을 사용합니다."
          >
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <div style={{ position: "relative", display: "inline-flex" }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: "var(--radius-1000)",
                  backgroundColor: "var(--color-background-alternative)",
                  border: "1px solid var(--color-border-normal)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>아이콘</span>
                </div>
                <span style={{ position: "absolute", top: -4, right: -4 }}>
                  <Badge type="number" count={3} />
                </span>
              </div>
              <div style={{ position: "relative", display: "inline-flex" }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: "var(--radius-1000)",
                  backgroundColor: "var(--color-background-alternative)",
                  border: "1px solid var(--color-border-normal)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>아이콘</span>
                </div>
                <span style={{ position: "absolute", top: -4, right: -4 }}>
                  <Badge type="number" count={99} />
                </span>
              </div>
            </div>
          </UsagePattern>

          <UsagePattern
            title="Number — 99+ 초과 표시"
            description="개수가 99를 초과하면 자동으로 '99+'로 표시됩니다. 컨테이너 너비는 텍스트 길이에 맞춰 자동 조정됩니다."
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "var(--font-size-100)", color: "var(--color-label-normal)" }}>받은 편지함</span>
              <Badge type="number" count={128} />
            </div>
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
