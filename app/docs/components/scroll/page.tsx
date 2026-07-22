"use client"

import { ScrollArea } from "@/components/ui/scroll"

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

// ─── Dummy content ────────────────────────────────────────────────────────────

const LOREM = "인터페이스 디자인은 사용자와 시스템 간의 상호작용을 시각적으로 구성하는 과정입니다. 좋은 UI는 직관적이고 일관성이 있어야 하며, 사용자가 원하는 목표를 최소한의 노력으로 달성할 수 있도록 도와야 합니다. 컴포넌트 단위로 설계하면 재사용성과 유지보수성을 높일 수 있습니다. "

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ScrollPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Scroll
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="네이티브 스크롤바를 숨기고 커스텀 Thumb으로 대체하는 스크롤바 컴포넌트입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Scroll은 스크롤 가능한 콘텐츠 영역을 감싸는 Container와, 현재 스크롤 위치를 나타내는 Thumb으로 구성됩니다."
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
          gap: 64,
          marginBottom: 24,
        }}>
          {/* Vertical */}
          <svg width="140" height="180" viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="70" y="16" textAnchor="middle" fill="var(--color-label-normal)" fontSize="11" fontWeight="600" fontFamily="inherit">Vertical</text>
            {/* Container */}
            <rect x="10" y="24" width="120" height="140" rx="6"
              stroke="var(--color-border-normal)" strokeWidth="1.5"
              fill="var(--color-background-normal)" />
            {/* Content lines */}
            <rect x="20" y="36" width="88" height="8" rx="2" fill="var(--color-border-normal)" opacity="0.4" />
            <rect x="20" y="52" width="72" height="8" rx="2" fill="var(--color-border-normal)" opacity="0.3" />
            <rect x="20" y="68" width="80" height="8" rx="2" fill="var(--color-border-normal)" opacity="0.3" />
            <rect x="20" y="84" width="64" height="8" rx="2" fill="var(--color-border-normal)" opacity="0.2" />
            {/* Vertical thumb */}
            <rect x="120" y="36" width="6" height="48" rx="3"
              fill="var(--color-border-normal)" />
            {/* ① Container badge */}
            <circle cx="10" cy="24" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="10" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>
            {/* ② Thumb badge */}
            <circle cx="130" cy="168" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="130" y="172" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
          </svg>

          {/* Horizontal */}
          <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="90" y="16" textAnchor="middle" fill="var(--color-label-normal)" fontSize="11" fontWeight="600" fontFamily="inherit">Horizontal</text>
            {/* Container */}
            <rect x="10" y="24" width="160" height="80" rx="6"
              stroke="var(--color-border-normal)" strokeWidth="1.5"
              fill="var(--color-background-normal)" />
            {/* Content columns */}
            <rect x="20" y="36" width="180" height="10" rx="2" fill="var(--color-border-normal)" opacity="0.4" />
            <rect x="20" y="54" width="180" height="10" rx="2" fill="var(--color-border-normal)" opacity="0.3" />
            {/* Horizontal thumb */}
            <rect x="20" y="96" width="60" height="6" rx="3"
              fill="var(--color-border-normal)" />
            {/* ① Container badge */}
            <circle cx="10" cy="24" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="10" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>
            {/* ② Thumb badge */}
            <circle cx="170" cy="110" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="170" y="114" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Container", desc: "스크롤 가능한 콘텐츠 영역을 감싸는 컨테이너입니다. 네이티브 스크롤바는 완전히 숨겨집니다." },
            { n: 2, label: "Thumb",     desc: "현재 스크롤 위치와 비율을 나타내는 커스텀 Thumb입니다. 두께 6px, borderRadius var(--radius-050), 색상 var(--color-border-normal)." },
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
          description="Scroll 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Type */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Type"
            description="Scroll은 vertical, horizontal, both 세 가지 타입을 제공합니다."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {[
              {
                label: "Vertical",
                desc: "세로 방향 스크롤을 제공합니다.",
                node: (
                  <ScrollArea type="vertical" style={{ height: 120, border: "1px solid var(--color-border-normal)", borderRadius: "var(--radius-300)" }}>
                    <div style={{ padding: "12px 16px" }}>
                      {[...Array(8)].map((_, i) => (
                        <div key={i} style={{ height: 24, marginBottom: 8, borderRadius: "var(--radius-100)", backgroundColor: "var(--color-background-alternative)" }} />
                      ))}
                    </div>
                  </ScrollArea>
                ),
              },
              {
                label: "Horizontal",
                desc: "가로 방향 스크롤을 제공합니다.",
                node: (
                  <ScrollArea type="horizontal" style={{ width: "100%", border: "1px solid var(--color-border-normal)", borderRadius: "var(--radius-300)" }}>
                    <div style={{ display: "flex", gap: 8, padding: "12px 16px", width: "max-content" }}>
                      {[...Array(10)].map((_, i) => (
                        <div key={i} style={{ width: 80, height: 60, flexShrink: 0, borderRadius: "var(--radius-200)", backgroundColor: "var(--color-background-alternative)" }} />
                      ))}
                    </div>
                  </ScrollArea>
                ),
              },
              {
                label: "Both",
                desc: "가로·세로 방향 모두 스크롤을 제공합니다.",
                node: (
                  <ScrollArea type="both" style={{ height: 120, width: "100%", border: "1px solid var(--color-border-normal)", borderRadius: "var(--radius-300)" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 80px)", gap: 8, padding: "12px 16px", width: "max-content" }}>
                      {[...Array(24)].map((_, i) => (
                        <div key={i} style={{ width: 80, height: 40, borderRadius: "var(--radius-100)", backgroundColor: "var(--color-background-alternative)" }} />
                      ))}
                    </div>
                  </ScrollArea>
                ),
              },
            ].map(({ label, desc, node }) => (
              <div
                key={label}
                style={{
                  padding: "20px 16px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 12,
                }}
              >
                {node}
                <div>
                  <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Token */}
        <div>
          <SubTitle
            title="Token"
            description="Scroll Thumb에 사용된 디자인 토큰입니다."
          />
          <div style={{
            border: "1px solid var(--color-border-normal)",
            borderRadius: "var(--radius-300)",
            overflow: "hidden",
          }}>
            {[
              { prop: "두께",         value: "6px" },
              { prop: "최소 길이",    value: "24px" },
              { prop: "borderRadius", value: "var(--radius-050)" },
              { prop: "color",        value: "var(--color-border-normal)" },
            ].map(({ prop, value }, i, arr) => (
              <div
                key={prop}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
                  gap: 16,
                }}
              >
                <p style={{ width: 120, flexShrink: 0, fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-normal)" }}>{prop}</p>
                <code style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>{value}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="ScrollArea 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* 세로 스크롤 */}
          <UsagePattern
            title="세로 스크롤"
            description="높이가 고정된 컨테이너 내에서 세로 방향으로 콘텐츠를 스크롤합니다."
          >
            <ScrollArea
              type="vertical"
              style={{
                height: 200,
                width: 320,
                border: "1px solid var(--color-border-normal)",
                borderRadius: "var(--radius-300)",
                backgroundColor: "var(--color-background-normal)",
              }}
            >
              <div style={{ padding: "16px 20px" }}>
                <p style={{
                  fontSize: "var(--font-size-075)",
                  lineHeight: "var(--font-line-height-050)",
                  color: "var(--color-label-normal)",
                }}>
                  {LOREM.repeat(4)}
                </p>
              </div>
            </ScrollArea>
          </UsagePattern>

          {/* 가로 스크롤 */}
          <UsagePattern
            title="가로 스크롤"
            description="너비가 고정된 컨테이너 내에서 가로 방향으로 콘텐츠를 스크롤합니다."
          >
            <ScrollArea
              type="horizontal"
              style={{
                width: 320,
                border: "1px solid var(--color-border-normal)",
                borderRadius: "var(--radius-300)",
                backgroundColor: "var(--color-background-normal)",
              }}
            >
              <div style={{ display: "flex", gap: 12, padding: "16px 20px", width: "max-content" }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 100,
                      height: 80,
                      flexShrink: 0,
                      borderRadius: "var(--radius-200)",
                      backgroundColor: "var(--color-background-alternative)",
                      border: "1px solid var(--color-border-normal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>Item {i + 1}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </UsagePattern>

          {/* 양방향 스크롤 */}
          <UsagePattern
            title="양방향 스크롤"
            description="콘텐츠가 컨테이너보다 가로·세로 모두 클 때 양방향 스크롤을 제공합니다."
          >
            <ScrollArea
              type="both"
              style={{
                height: 200,
                width: 320,
                border: "1px solid var(--color-border-normal)",
                borderRadius: "var(--radius-300)",
                backgroundColor: "var(--color-background-normal)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 90px)", gap: 8, padding: "16px 20px", width: "max-content" }}>
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 90,
                      height: 56,
                      borderRadius: "var(--radius-100)",
                      backgroundColor: "var(--color-background-alternative)",
                      border: "1px solid var(--color-border-normal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>{i + 1}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
