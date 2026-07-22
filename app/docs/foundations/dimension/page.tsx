const DIMENSIONS = [
  { token: "--dimension-025", value: "2px"  },
  { token: "--dimension-050", value: "4px"  },
  { token: "--dimension-075", value: "6px"  },
  { token: "--dimension-100", value: "8px"  },
  { token: "--dimension-150", value: "12px" },
  { token: "--dimension-175", value: "14px" },
  { token: "--dimension-200", value: "16px" },
  { token: "--dimension-225", value: "18px" },
  { token: "--dimension-250", value: "20px" },
  { token: "--dimension-300", value: "24px" },
  { token: "--dimension-400", value: "32px" },
  { token: "--dimension-450", value: "36px" },
  { token: "--dimension-500", value: "40px" },
  { token: "--dimension-600", value: "48px" },
  { token: "--dimension-700", value: "56px" },
  { token: "--dimension-800", value: "64px" },
]

export default function DimensionPage() {
  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Dimension
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트 크기, 아이콘, 높이 등 고정 크기에 사용되는 디멘션 토큰
      </p>

      <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 80px 1fr", padding: "10px 20px", backgroundColor: "var(--color-background-alternative)", borderBottom: "1px solid var(--color-border-normal)" }}>
          <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Token</span>
          <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Value</span>
          <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Preview</span>
        </div>
        {DIMENSIONS.map((d, i) => (
          <div
            key={d.token}
            style={{
              display: "grid",
              gridTemplateColumns: "200px 80px 1fr",
              alignItems: "center",
              padding: "10px 20px",
              borderBottom: i < DIMENSIONS.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
              backgroundColor: "var(--color-background-normal)",
            }}
          >
            <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-normal)", fontFamily: "monospace" }}>{d.token}</span>
            <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{d.value}</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{
                width: `var(${d.token})`,
                height: `var(${d.token})`,
                backgroundColor: "var(--color-theme-dependent-primary)",
                borderRadius: "var(--radius-050)",
                opacity: 0.7,
                flexShrink: 0,
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
