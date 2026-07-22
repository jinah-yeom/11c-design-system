const SPACES = [
  { token: "--space-000", value: "0px"  },
  { token: "--space-025", value: "2px"  },
  { token: "--space-050", value: "4px"  },
  { token: "--space-075", value: "6px"  },
  { token: "--space-100", value: "8px"  },
  { token: "--space-125", value: "10px" },
  { token: "--space-150", value: "12px" },
  { token: "--space-175", value: "14px" },
  { token: "--space-200", value: "16px" },
  { token: "--space-225", value: "18px" },
  { token: "--space-250", value: "20px" },
  { token: "--space-300", value: "24px" },
  { token: "--space-400", value: "32px" },
  { token: "--space-500", value: "40px" },
  { token: "--space-600", value: "48px" },
  { token: "--space-700", value: "56px" },
  { token: "--space-800", value: "64px" },
  { token: "--space-900", value: "72px" },
]

export default function SpacePage() {
  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Space
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        레이아웃 간격, 패딩, 마진에 사용되는 스페이싱 토큰
      </p>

      <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 80px 1fr", padding: "10px 20px", backgroundColor: "var(--color-background-alternative)", borderBottom: "1px solid var(--color-border-normal)" }}>
          <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Token</span>
          <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Value</span>
          <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Preview</span>
        </div>
        {SPACES.map((s, i) => (
          <div
            key={s.token}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 80px 1fr",
              alignItems: "center",
              padding: "12px 20px",
              borderBottom: i < SPACES.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
              backgroundColor: "var(--color-background-normal)",
            }}
          >
            <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-normal)", fontFamily: "monospace" }}>{s.token}</span>
            <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{s.value}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              {s.value !== "0px" ? (
                <div style={{
                  height: 20,
                  width: `var(${s.token})`,
                  backgroundColor: "var(--color-theme-dependent-primary)",
                  borderRadius: 2,
                  opacity: 0.7,
                }} />
              ) : (
                <span style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-assistive)" }}>—</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
