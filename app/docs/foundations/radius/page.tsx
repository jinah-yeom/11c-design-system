const RADII = [
  { token: "--radius-000", value: "0px"  },
  { token: "--radius-050", value: "2px"  },
  { token: "--radius-100", value: "4px"  },
  { token: "--radius-200", value: "6px"  },
  { token: "--radius-300", value: "8px"  },
  { token: "--radius-400", value: "12px" },
  { token: "--radius-500", value: "16px" },
  { token: "--radius-600", value: "20px" },
  { token: "--radius-700", value: "24px" },
  { token: "--radius-800", value: "32px" },
  { token: "--radius-900", value: "40px" },
  { token: "--radius-1000", value: "9999px" },
]

export default function RadiusPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Radius
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트 모서리 둥글기에 사용되는 보더 라디우스 토큰
      </p>

      {/* Visual grid */}
      <section style={{ marginBottom: 48 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {RADII.map((r) => (
            <div key={r.token} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 80,
                height: 80,
                backgroundColor: "var(--color-background-alternative)",
                border: "2px solid var(--color-theme-dependent-primary)",
                borderRadius: `var(${r.token})`,
              }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-normal)", marginBottom: 2 }}>{r.value}</p>
                <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>{r.token.replace("--radius-", "radius-")}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Table */}
      <section>
        <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 80px", padding: "10px 20px", backgroundColor: "var(--color-background-alternative)", borderBottom: "1px solid var(--color-border-normal)" }}>
            <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Token</span>
            <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>Value</span>
          </div>
          {RADII.map((r, i) => (
            <div
              key={r.token}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 80px",
                alignItems: "center",
                padding: "12px 20px",
                borderBottom: i < RADII.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
                backgroundColor: "var(--color-background-normal)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-normal)", fontFamily: "monospace" }}>{r.token}</span>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{r.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
