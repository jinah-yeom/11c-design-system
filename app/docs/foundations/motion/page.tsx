const EASINGS: { token: string; label: string; value: string; description: string; curve: string }[] = [
  { token: "--motion-easing-standard",   label: "Standard",   value: "ease",        description: "일반적인 요소 전환",       curve: "M0,1 C0.25,1 0.25,0 1,0"      },
  { token: "--motion-easing-out",        label: "Out",        value: "ease-out",    description: "화면에 진입하는 요소",     curve: "M0,1 C0.0,1 0.2,1 1,0"        },
  { token: "--motion-easing-in",         label: "In",         value: "ease-in",     description: "화면에서 퇴장하는 요소",   curve: "M0,1 C0.8,0 1.0,0 1,0"        },
  { token: "--motion-easing-emphasized", label: "Emphasized", value: "ease-in-out", description: "강조 또는 주요 상태 변화", curve: "M0,1 C0.42,1 0.58,0 1,0"      },
]

const DURATIONS: { token: string; label: string; value: string; usage: string }[] = [
  { token: "--motion-duration-d1", label: "D1", value: "50ms",  usage: "극히 짧은 전환 (hover, focus)" },
  { token: "--motion-duration-d2", label: "D2", value: "100ms", usage: "빠른 피드백"                   },
  { token: "--motion-duration-d3", label: "D3", value: "150ms", usage: "기본 인터랙션"                 },
  { token: "--motion-duration-d4", label: "D4", value: "200ms", usage: "표준 애니메이션"               },
  { token: "--motion-duration-d5", label: "D5", value: "250ms", usage: "모달, 드로어 등 레이어"        },
  { token: "--motion-duration-d6", label: "D6", value: "300ms", usage: "복잡한 전환"                   },
]

export default function MotionPage() {
  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Motion
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        애니메이션 이징 커브와 지속 시간 토큰
      </p>

      {/* Easing */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Easing
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {EASINGS.map((e) => (
            <div
              key={e.token}
              style={{
                padding: 20,
                borderRadius: "var(--radius-300)",
                border: "1px solid var(--color-border-normal)",
                backgroundColor: "var(--color-background-normal)",
              }}
            >
              <svg width="72" height="72" viewBox="0 0 1 1" style={{ display: "block", marginBottom: 12, overflow: "visible" }}>
                <rect x="0" y="0" width="1" height="1" fill="none" stroke="var(--color-border-normal)" strokeWidth="0.02" />
                <path d={e.curve} fill="none" stroke="var(--color-theme-dependent-primary)" strokeWidth="0.04" strokeLinecap="round" />
              </svg>
              <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 4 }}>{e.label}</p>
              <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", marginBottom: 10 }}>{e.description}</p>
              <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-assistive)", fontFamily: "monospace", marginBottom: 2 }}>{e.token}</p>
              <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-assistive)" }}>{e.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Duration */}
      <section>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Duration
        </h2>
        <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "48px 200px 72px 1fr", padding: "10px 20px", backgroundColor: "var(--color-background-alternative)", borderBottom: "1px solid var(--color-border-normal)" }}>
            {["Scale", "Token", "Value", "Usage"].map((h) => (
              <span key={h} style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>{h}</span>
            ))}
          </div>
          {DURATIONS.map((d, i) => (
            <div
              key={d.token}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 200px 72px 1fr",
                alignItems: "center",
                padding: "14px 20px",
                borderBottom: i < DURATIONS.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
                backgroundColor: "var(--color-background-normal)",
              }}
            >
              <span style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>{d.label}</span>
              <span style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>{d.token}</span>
              <span style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-500)", color: "var(--color-theme-dependent-foreground-primary)" }}>{d.value}</span>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{d.usage}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-assistive)", marginTop: 12 }}>
          * <code style={{ fontFamily: "monospace" }}>--motion-duration-*</code> 토큰은 <code style={{ fontFamily: "monospace" }}>transition-duration</code> 또는 <code style={{ fontFamily: "monospace" }}>animation-duration</code>에 사용합니다.
        </p>
      </section>
    </div>
  )
}
