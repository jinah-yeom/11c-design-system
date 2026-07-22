import Image from "next/image"

const LOGO_COLOR = {
  hex: "#1E6EF5",
  rgb: "R 30 / G 110 / B 245",
  cmyk: "C 79 / M 49 / Y 0 / K 0",
  pantone: "PANTONE 2727C",
}

const SECONDARY_VARIANTS = [
  { label: "Black", file: "/images/logo/logo-secondary-black.svg", bg: "var(--color-background-normal)" },
  { label: "Gray",  file: "/images/logo/logo-secondary-gray.svg",  bg: "var(--color-background-normal)" },
  { label: "White", file: "/images/logo/logo-secondary-white.svg", bg: "var(--color-background-normal-inverse)" },
]

const SYMBOL_VARIANTS = [
  { label: "Color", file: "/images/logo/logo-symbol-color.svg", bg: "var(--color-background-normal)" },
  { label: "Black", file: "/images/logo/logo-symbol-black.svg", bg: "var(--color-background-normal)" },
  { label: "Gray",  file: "/images/logo/logo-symbol-gray.svg",  bg: "var(--color-background-normal)" },
]

export default function LogoPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Logo
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* Type */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: "var(--font-size-200)", fontWeight: "var(--font-weight-700)", color: "var(--color-label-normal)", marginBottom: 8 }}>
          Type
        </h2>
        <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 32 }}>
          Keeper의 중심이 되는 대표 로고입니다. 대내외 다양한 커뮤니케이션에 최우선으로 사용되어야 하며, 단독으로 표기하는 것을 원칙으로 하고 있습니다.
        </p>

        {/* Primary Logo */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
            Primary Logo
          </p>
          <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 20 }}>
            로고를 적용할 때 일반적으로 기본 로고를 사용하여 아래 이미지를 사용해야 합니다.
          </p>
          <div style={{ borderRadius: "var(--radius-400)", border: "1px solid var(--color-border-normal)", overflow: "hidden", maxWidth: 480 }}>
            <div style={{ height: 160, backgroundColor: "var(--color-background-normal)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/images/logo/logo-primary-color.svg" alt="Keeper primary logo" width={141} height={35} style={{ height: 35, width: "auto" }} unoptimized />
            </div>
            <div style={{ padding: "12px 16px", backgroundColor: "var(--color-background-normal)", borderTop: "1px solid var(--color-border-normal)" }}>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 4 }}>Color</p>
              <div style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", fontFamily: "monospace", lineHeight: 1.8 }}>
                <div>HEX {LOGO_COLOR.hex}</div>
                <div>RGB {LOGO_COLOR.rgb}</div>
                <div>CMYK {LOGO_COLOR.cmyk}</div>
                <div>{LOGO_COLOR.pantone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Logo */}
        <div>
          <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
            Secondary Logo
          </p>
          <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 20 }}>
            기본 로고를 사용하는 것을 권장하지만, 로고를 적용하는 상황에 따라 보조 로고를 사용할 수 있습니다.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {SECONDARY_VARIANTS.map((v) => (
              <div
                key={v.label}
                style={{
                  borderRadius: "var(--radius-400)",
                  border: "1px solid var(--color-border-normal)",
                  overflow: "hidden",
                  minWidth: 180,
                  flex: 1,
                }}
              >
                <div style={{
                  height: 120,
                  backgroundColor: v.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Image src={v.file} alt={`Keeper logo ${v.label}`} width={135} height={30} style={{ height: 24, width: "auto" }} unoptimized />
                </div>
                <div style={{ padding: "10px 16px", backgroundColor: "var(--color-background-normal)", borderTop: "1px solid var(--color-border-normal)" }}>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-normal)" }}>Color: {v.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Symbol */}
        <div style={{ marginTop: 40 }}>
          <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
            Symbol
          </p>
          <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 20 }}>
            심볼은 로고타입 없이 단독으로 사용할 수 있습니다.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {SYMBOL_VARIANTS.map((v) => (
              <div
                key={v.label}
                style={{
                  borderRadius: "var(--radius-400)",
                  border: "1px solid var(--color-border-normal)",
                  overflow: "hidden",
                  minWidth: 140,
                  flex: 1,
                }}
              >
                <div style={{ height: 100, backgroundColor: v.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image src={v.file} alt={`Keeper symbol ${v.label}`} width={40} height={40} style={{ width: 40, height: 40 }} unoptimized />
                </div>
                <div style={{ padding: "10px 16px", backgroundColor: "var(--color-background-normal)", borderTop: "1px solid var(--color-border-normal)" }}>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-normal)" }}>Color: {v.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Standard Logo */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: "var(--font-size-200)", fontWeight: "var(--font-weight-700)", color: "var(--color-label-normal)", marginBottom: 8 }}>
          Partnership Standard Logo
        </h2>
        <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 32 }}>
          다른 로고와 조합할 때 사용되며, 두 브랜드의 정체성이 조화를 이루도록 디자인합니다.
        </p>

        {/* Clear Space */}
        <div>
          <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
            Clear Space
          </p>
          <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 20 }}>
            일관된 브랜드 아이덴티티와 명시성을 고려하여 타 요소들의 시각적 침해로부터 보호받는 공간이 보장되어야 합니다.
          </p>
          <div style={{
            borderRadius: "var(--radius-400)",
            border: "1px solid var(--color-border-normal)",
            backgroundColor: "var(--color-background-normal)",
            padding: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 24px",
              border: "2px dashed var(--color-border-normal)",
              borderRadius: "var(--radius-300)",
              position: "relative",
            }}>
              <span style={{
                position: "absolute",
                top: -18,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "var(--font-size-025)",
                color: "var(--color-label-assistive)",
                whiteSpace: "nowrap",
              }}>
                Clear Space
              </span>
              <Image src="/images/logo/logo-primary-color.svg" alt="Keeper logo" width={100} height={22} style={{ height: 22, width: "auto" }} unoptimized />
              <div style={{ width: 1, height: 28, backgroundColor: "var(--color-divider-normal)", margin: "0 20px" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: "var(--radius-200)",
                  backgroundColor: "var(--color-background-alternative)",
                  border: "1px solid var(--color-border-normal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "var(--font-size-025)",
                  color: "var(--color-label-assistive)",
                }}>P</div>
                <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>서비스명</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space & Minimum Size */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: "var(--font-size-200)", fontWeight: "var(--font-weight-700)", color: "var(--color-label-normal)", marginBottom: 8 }}>
          Space &amp; Minimum Size
        </h2>
        <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 32 }}>
          적용되는 매체의 특성을 고려하여 가독성 확보가 가능한 크기로 표현되어야 합니다.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Spacing */}
          <div style={{ borderRadius: "var(--radius-400)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)" }}>
              <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 4 }}>Spacing</p>
              <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>가시성을 보장할 수 있도록 최소한의 공간을 확보해야 합니다.</p>
            </div>
            <div style={{
              backgroundColor: "var(--color-background-alternative)",
              padding: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                padding: 16,
                border: "1px dashed var(--color-border-normal)",
                borderRadius: "var(--radius-200)",
                position: "relative",
              }}>
                <Image src="/images/logo/logo-primary-color.svg" alt="Keeper logo spacing" width={100} height={22} style={{ height: 22, width: "auto" }} unoptimized />
                {["top", "bottom"].map((side) => (
                  <span key={side} style={{
                    position: "absolute",
                    [side === "top" ? "top" : "bottom"]: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 9,
                    color: "var(--color-label-assistive)",
                    fontStyle: "italic",
                  }}>x</span>
                ))}
                {["left", "right"].map((side) => (
                  <span key={side} style={{
                    position: "absolute",
                    top: "50%",
                    [side]: -12,
                    transform: "translateY(-50%)",
                    fontSize: 9,
                    color: "var(--color-label-assistive)",
                    fontStyle: "italic",
                  }}>x</span>
                ))}
              </div>
            </div>
          </div>

          {/* Minimum Size */}
          <div style={{ borderRadius: "var(--radius-400)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--color-border-normal)", backgroundColor: "var(--color-background-normal)" }}>
              <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 4 }}>Minimum Size</p>
              <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)" }}>모바일 화면에서 20px, 인쇄물에서 5mm 이상이어야 합니다.</p>
            </div>
            <div style={{
              backgroundColor: "var(--color-background-alternative)",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 24,
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Image src="/images/logo/logo-primary-color.svg" alt="Screen minimum size" width={68} height={15} style={{ height: 15, width: "auto" }} unoptimized />
                <span style={{
                  display: "inline-block",
                  fontSize: "var(--font-size-025)",
                  color: "var(--color-label-assistive)",
                  backgroundColor: "var(--color-background-normal)",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-100)",
                  border: "1px solid var(--color-border-normal)",
                }}>Screen — 20px</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Image src="/images/logo/logo-primary-color.svg" alt="Print minimum size" width={85} height={19} style={{ height: 19, width: "auto" }} unoptimized />
                <span style={{
                  display: "inline-block",
                  fontSize: "var(--font-size-025)",
                  color: "var(--color-label-assistive)",
                  backgroundColor: "var(--color-background-normal)",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-100)",
                  border: "1px solid var(--color-border-normal)",
                }}>Print — 5mm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
