const SHADOWS: { name: string; label: string; boxShadow: string }[] = [
  {
    name: "2xs",
    label: "2XS",
    boxShadow: "var(--shadows-2xs-x) var(--shadows-2xs-y) var(--shadows-2xs-blur) var(--shadows-2xs-spread) var(--shadows-2xs-color)",
  },
  {
    name: "xs",
    label: "XS",
    boxShadow: "var(--shadows-xs-x) var(--shadows-xs-y) var(--shadows-xs-blur) var(--shadows-xs-spread) var(--shadows-xs-color)",
  },
  {
    name: "sm",
    label: "SM",
    boxShadow: [
      "var(--shadows-sm-shadow-1-x) var(--shadows-sm-shadow-1-y) var(--shadows-sm-shadow-1-blur) var(--shadows-sm-shadow-1-spread) var(--shadows-sm-color)",
      "var(--shadows-sm-shadow-2-x) var(--shadows-sm-shadow-2-y) var(--shadows-sm-shadow-2-blur) var(--shadows-sm-shadow-2-spread) var(--shadows-sm-color)",
    ].join(", "),
  },
  {
    name: "md",
    label: "MD",
    boxShadow: [
      "var(--shadows-md-shadow-1-x) var(--shadows-md-shadow-1-y) var(--shadows-md-shadow-1-blur) var(--shadows-md-shadow-1-spread) var(--shadows-md-color)",
      "var(--shadows-md-shadow-2-x) var(--shadows-md-shadow-2-y) var(--shadows-md-shadow-2-blur) var(--shadows-md-shadow-2-spread) var(--shadows-md-color)",
    ].join(", "),
  },
  {
    name: "lg",
    label: "LG",
    boxShadow: [
      "var(--shadows-lg-shadow-1-x) var(--shadows-lg-shadow-1-y) var(--shadows-lg-shadow-1-blur) var(--shadows-lg-shadow-1-spread) var(--shadows-lg-color)",
      "var(--shadows-lg-shadow-2-x) var(--shadows-lg-shadow-2-y) var(--shadows-lg-shadow-2-blur) var(--shadows-lg-shadow-2-spread) var(--shadows-lg-color)",
    ].join(", "),
  },
  {
    name: "xl",
    label: "XL",
    boxShadow: [
      "var(--shadows-xl-shadow-1-x) var(--shadows-xl-shadow-1-y) var(--shadows-xl-shadow-1-blur) var(--shadows-xl-shadow-1-spread) var(--shadows-xl-color)",
      "var(--shadows-xl-shadow-2-x) var(--shadows-xl-shadow-2-y) var(--shadows-xl-shadow-2-blur) var(--shadows-xl-shadow-2-spread) var(--shadows-xl-color)",
    ].join(", "),
  },
  {
    name: "2xl",
    label: "2XL",
    boxShadow: "var(--shadows-2xl-x) var(--shadows-2xl-y) var(--shadows-2xl-blur) var(--shadows-2xl-spread) var(--shadows-2xl-color)",
  },
]

const SHADOW_SPECS: {
  name: string
  layers: { x: string; y: string; blur: string; spread: string }[]
  color: string
}[] = [
  { name: "2XS", layers: [{ x: "0px", y: "1px", blur: "0px",  spread: "0px"  }], color: "--shadows-2xs-color" },
  { name: "XS",  layers: [{ x: "0px", y: "1px", blur: "2px",  spread: "0px"  }], color: "--shadows-xs-color"  },
  { name: "SM",  layers: [{ x: "0px", y: "1px", blur: "3px",  spread: "0px"  }, { x: "0px", y: "1px", blur: "2px", spread: "-1px" }], color: "--shadows-sm-color" },
  { name: "MD",  layers: [{ x: "0px", y: "4px", blur: "6px",  spread: "-1px" }, { x: "0px", y: "2px", blur: "4px", spread: "-2px" }], color: "--shadows-md-color" },
  { name: "LG",  layers: [{ x: "0px", y: "10px",blur: "15px", spread: "-3px" }, { x: "0px", y: "4px", blur: "6px", spread: "-4px" }], color: "--shadows-lg-color" },
  { name: "XL",  layers: [{ x: "0px", y: "20px",blur: "25px", spread: "-5px" }, { x: "0px", y: "8px", blur: "10px",spread: "-6px" }], color: "--shadows-xl-color" },
  { name: "2XL", layers: [{ x: "0px", y: "25px",blur: "50px", spread: "-12px"}], color: "--shadows-2xl-color" },
]

export default function ShadowPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Shadow
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        엘리베이션 레벨에 따른 박스 섀도우 토큰
      </p>

      {/* Visual preview */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32 }}>
          Preview
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-end", paddingBottom: 40 }}>
          {SHADOWS.map((s) => (
            <div key={s.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 100,
                height: 100,
                backgroundColor: "var(--color-background-normal)",
                borderRadius: "var(--radius-300)",
                boxShadow: s.boxShadow,
              }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "var(--font-size-075)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>{s.label}</p>
                <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>--shadows-{s.name}-*</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spec table */}
      <section>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Specs
        </h2>
        <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "56px 72px 56px 56px 72px 1fr", padding: "10px 20px", backgroundColor: "var(--color-background-alternative)", borderBottom: "1px solid var(--color-border-normal)" }}>
            {["Size", "Layer", "X", "Y", "Blur", "Spread / Color"].map((h) => (
              <span key={h} style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>{h}</span>
            ))}
          </div>
          {SHADOW_SPECS.map((spec) =>
            spec.layers.map((layer, j) => (
              <div
                key={`${spec.name}-${j}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 72px 56px 56px 72px 1fr",
                  alignItems: "center",
                  padding: "10px 20px",
                  borderBottom: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                }}
              >
                <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)" }}>{j === 0 ? spec.name : ""}</span>
                <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{spec.layers.length > 1 ? `Layer ${j + 1}` : "Single"}</span>
                <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{layer.x}</span>
                <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{layer.y}</span>
                <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{layer.blur}</span>
                <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>
                  {layer.spread}{j === 0 ? ` · var(${spec.color})` : ""}
                </span>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
