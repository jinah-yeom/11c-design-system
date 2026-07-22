const FONT_WEIGHTS = [
  { token: "--font-weight-400", label: "Regular",   value: "400" },
  { token: "--font-weight-500", label: "Medium",    value: "500" },
  { token: "--font-weight-600", label: "SemiBold",  value: "600" },
  { token: "--font-weight-700", label: "Bold",      value: "700" },
  { token: "--font-weight-800", label: "ExtraBold", value: "800" },
]

const LETTER_SPACINGS = [
  { token: "--font-letter-spacing-display",    label: "Display",    value: "-0.4px" },
  { token: "--font-letter-spacing-heading-lg", label: "Heading LG", value: "-0.4px" },
  { token: "--font-letter-spacing-heading-md", label: "Heading MD", value: "-0.3px" },
  { token: "--font-letter-spacing-heading-sm", label: "Heading SM", value: "-0.2px" },
  { token: "--font-letter-spacing-heading-xs", label: "Heading XS", value: "-0.1px" },
  { token: "--font-letter-spacing-subtitle",   label: "Subtitle",   value: "-0.1px" },
  { token: "--font-letter-spacing-body",       label: "Body",       value: "-0.1px" },
  { token: "--font-letter-spacing-none",       label: "None",       value: "0px"    },
]

const TYPE_SCALE: {
  group: string
  description: string
  rows: { styleName: string; sizeToken: string; size: string; lineHeight: string; weight: string; ls: string; label: string }[]
}[] = [
  {
    group: "Display",
    description: "사용자의 디바이스 환경에 최적화된 시스템 폰트를 사용하여, 브랜드의 핵심 메시지를 가장 압도적인 크기로 전달합니다. 이는 다양한 운영 체제에서 일관된 첫인상을 형성하며 시각적 임팩트와 가독성을 동시에 보장합니다.",
    rows: [
      { styleName: "display-1", sizeToken: "--font-size-display-display-1", size: "var(--font-size-800)",  lineHeight: "var(--font-line-height-1100)", weight: "var(--font-weight-800)", ls: "var(--font-letter-spacing-display)", label: "Display 1 · 64px / 800" },
      { styleName: "display-2", sizeToken: "--font-size-display-display-2", size: "var(--font-size-700)",  lineHeight: "var(--font-line-height-1000)", weight: "var(--font-weight-800)", ls: "var(--font-letter-spacing-display)", label: "Display 2 · 48px / 800" },
      { styleName: "display-3", sizeToken: "--font-size-display-display-3", size: "var(--font-size-550)",  lineHeight: "var(--font-line-height-700)",  weight: "var(--font-weight-800)", ls: "var(--font-letter-spacing-display)", label: "Display 3 · 36px / 800" },
    ],
  },
  {
    group: "Heading",
    description: "콘텐츠의 구조를 정의하고 정보의 위계를 명확히 구분하여 사용자가 화면의 흐름을 빠르게 파악하도록 돕습니다.\n시스템 폰트 고유의 굵기 대비를 활용해 섹션 간의 경계를 명확히 하고 가공되지 않은 정보에 질서를 부여합니다.",
    rows: [
      { styleName: "heading-1", sizeToken: "--font-size-heading-heading-1", size: "var(--font-size-650)", lineHeight: "var(--font-line-height-900)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-lg)", label: "Heading 1 · 40px / 700" },
      { styleName: "heading-2", sizeToken: "--font-size-heading-heading-2", size: "var(--font-size-500)", lineHeight: "var(--font-line-height-600)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-lg)", label: "Heading 2 · 32px / 700" },
      { styleName: "heading-3", sizeToken: "--font-size-heading-heading-3", size: "var(--font-size-400)", lineHeight: "var(--font-line-height-400)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-md)", label: "Heading 3 · 24px / 700" },
      { styleName: "heading-4", sizeToken: "--font-size-heading-heading-4", size: "var(--font-size-300)", lineHeight: "var(--font-line-height-200)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-sm)", label: "Heading 4 · 20px / 700" },
      { styleName: "heading-5", sizeToken: "--font-size-heading-heading-5", size: "var(--font-size-200)", lineHeight: "var(--font-line-height-100)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-xs)", label: "Heading 5 · 18px / 700" },
      { styleName: "heading-6", sizeToken: "--font-size-heading-heading-6", size: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-xs)", label: "Heading 6 · 16px / 700" },
    ],
  },
  {
    group: "Body",
    description: "긴 글을 읽는 사용자의 피로도를 최소화하기 위해 각 OS가 제공하는 최적의 가독성 설정을 그대로 계승합니다.\n이는 전 세계 다양한 문화권의 사용자에게 익숙하고 편안한 판독 경험을 제공하며 정보 전달력을 극대화합니다.",
    rows: [
      { styleName: "body-1", sizeToken: "--font-size-body-body-1", size: "var(--font-size-300)", lineHeight: "var(--font-line-height-200)", weight: "var(--font-weight-400)", ls: "var(--font-letter-spacing-body)", label: "Body 1 · 20px / 400" },
      { styleName: "body-2", sizeToken: "--font-size-body-body-2", size: "var(--font-size-200)", lineHeight: "var(--font-line-height-100)", weight: "var(--font-weight-400)", ls: "var(--font-letter-spacing-body)", label: "Body 2 · 18px / 400" },
      { styleName: "body-3", sizeToken: "--font-size-body-body-3", size: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", weight: "var(--font-weight-400)", ls: "var(--font-letter-spacing-none)", label: "Body 3 · 16px / 400" },
      { styleName: "body-4", sizeToken: "--font-size-body-body-4", size: "var(--font-size-075)", lineHeight: "var(--font-line-height-050)", weight: "var(--font-weight-400)", ls: "var(--font-letter-spacing-none)", label: "Body 4 · 14px / 400" },
    ],
  },
  {
    group: "Label",
    description: "버튼이나 폼 필드 등 좁은 인터랙션 영역 내에서 정보의 가독성과 명확한 인지를 최우선으로 합니다.\n시스템 폰트의 정교한 힌팅 기술을 활용하여 작은 크기에서도 텍스트가 뭉치지 않고 선명하게 노출되도록 관리합니다.",
    rows: [
      { styleName: "label-1/bold",    sizeToken: "--font-size-label-label-1", size: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", weight: "var(--font-weight-600)", ls: "var(--font-letter-spacing-none)", label: "Label 1 Bold · 16px / 600" },
      { styleName: "label-1/regular", sizeToken: "--font-size-label-label-1", size: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-none)", label: "Label 1 Regular · 16px / 500" },
      { styleName: "label-2/bold",    sizeToken: "--font-size-label-label-2", size: "var(--font-size-075)", lineHeight: "var(--font-line-height-050)", weight: "var(--font-weight-600)", ls: "var(--font-letter-spacing-none)", label: "Label 2 Bold · 14px / 600" },
      { styleName: "label-2/regular", sizeToken: "--font-size-label-label-2", size: "var(--font-size-075)", lineHeight: "var(--font-line-height-050)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-none)", label: "Label 2 Regular · 14px / 500" },
      { styleName: "label-3/bold",    sizeToken: "--font-size-label-label-3", size: "var(--font-size-050)", lineHeight: "var(--font-line-height-035)", weight: "var(--font-weight-600)", ls: "var(--font-letter-spacing-none)", label: "Label 3 Bold · 12px / 600" },
      { styleName: "label-3/medium",  sizeToken: "--font-size-label-label-3", size: "var(--font-size-050)", lineHeight: "var(--font-line-height-035)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-none)", label: "Label 3 Medium · 12px / 500" },
      { styleName: "label-3/regular", sizeToken: "--font-size-label-label-3", size: "var(--font-size-050)", lineHeight: "var(--font-line-height-035)", weight: "var(--font-weight-400)", ls: "var(--font-letter-spacing-none)", label: "Label 3 Regular · 12px / 400" },
    ],
  },
  {
    group: "Navigation",
    description: "서비스의 이동 경로를 안내하는 네비게이션 요소에 시스템 폰트를 적용하여 기기 환경과 동화된 직관적인 조작 경험을 제공합니다.\n메뉴의 활성 상태에 따른 시각적 변화를 명확히 구현하여 사용자가 길을 잃지 않도록 돕는 이정표 역할을 합니다.",
    rows: [
      { styleName: "nav-title-medium",  sizeToken: "--font-size-navigation-nav-title-medium",  size: "var(--font-size-400)", lineHeight: "var(--font-line-height-400)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-heading-md)", label: "Nav Title Medium · 24px / 500" },
      { styleName: "nav-title-small",   sizeToken: "--font-size-navigation-nav-title-small",   size: "var(--font-size-300)", lineHeight: "var(--font-line-height-200)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-heading-sm)", label: "Nav Title Small · 20px / 500" },
      { styleName: "nav-depth1-bold",   sizeToken: "--font-size-navigation-nav-depth1-bold",   size: "var(--font-size-200)", lineHeight: "var(--font-line-height-100)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-heading-xs)", label: "Nav Depth1 Bold · 18px / 700" },
      { styleName: "nav-depth1-medium", sizeToken: "--font-size-navigation-nav-depth1-medium", size: "var(--font-size-200)", lineHeight: "var(--font-line-height-100)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-heading-xs)", label: "Nav Depth1 Medium · 18px / 500" },
      { styleName: "nav-depth2-bold",   sizeToken: "--font-size-navigation-nav-depth2-bold",   size: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", weight: "var(--font-weight-700)", ls: "var(--font-letter-spacing-body)",       label: "Nav Depth2 Bold · 16px / 700" },
      { styleName: "nav-depth2-medium", sizeToken: "--font-size-navigation-nav-depth2-medium", size: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", weight: "var(--font-weight-500)", ls: "var(--font-letter-spacing-body)",       label: "Nav Depth2 Medium · 16px / 500" },
    ],
  },
]

const FONT_SIZES = [
  { token: "--font-size-025", value: "10px" },
  { token: "--font-size-050", value: "12px" },
  { token: "--font-size-075", value: "14px" },
  { token: "--font-size-100", value: "16px" },
  { token: "--font-size-200", value: "18px" },
  { token: "--font-size-300", value: "20px" },
  { token: "--font-size-350", value: "22px" },
  { token: "--font-size-400", value: "24px" },
  { token: "--font-size-450", value: "28px" },
  { token: "--font-size-500", value: "32px" },
  { token: "--font-size-550", value: "36px" },
  { token: "--font-size-600", value: "38px" },
  { token: "--font-size-650", value: "40px" },
  { token: "--font-size-700", value: "48px" },
  { token: "--font-size-800", value: "64px" },
  { token: "--font-size-900", value: "80px" },
]

export default function TypographyPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Typography
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        Pretendard 폰트 기반 타입 스케일 토큰
      </p>

      {/* Semantic Type Scale */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Semantic Type Scale
        </h2>
        {TYPE_SCALE.map((group) => (
          <div key={group.group} style={{ marginBottom: 48 }}>
            <p style={{ fontSize: "var(--font-size-100)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
              {group.group}
            </p>
            <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 20, lineHeight: "var(--font-line-height-200)", whiteSpace: "pre-line" }}>
              {group.description}
            </p>
            {/* Table header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr 200px",
              padding: "8px 20px",
              backgroundColor: "var(--color-background-alternative)",
              borderRadius: "var(--radius-300) var(--radius-300) 0 0",
              border: "1px solid var(--color-border-normal)",
              borderBottom: "none",
            }}>
              {["Style", "Preview", "Specs"].map((h) => (
                <span key={h} style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)" }}>{h}</span>
              ))}
            </div>
            <div style={{ borderRadius: "0 0 var(--radius-300) var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
              {group.rows.map((row, i) => (
                <div
                  key={row.styleName}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr 200px",
                    alignItems: "center",
                    padding: "16px 20px",
                    gap: 16,
                    borderBottom: i < group.rows.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
                    backgroundColor: "var(--color-background-normal)",
                  }}
                >
                  {/* Style name */}
                  <div>
                    <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-normal)", marginBottom: 2 }}>{row.styleName}</p>
                    <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-assistive)", fontFamily: "monospace" }}>{row.sizeToken}</p>
                  </div>
                  {/* Preview */}
                  <span style={{
                    fontSize: row.size,
                    lineHeight: row.lineHeight,
                    fontWeight: row.weight,
                    letterSpacing: row.ls,
                    color: "var(--color-label-normal)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                  }}>
                    The quick brown fox
                  </span>
                  {/* Specs */}
                  <div style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", fontFamily: "monospace", lineHeight: 1.8 }}>
                    <div>{row.label.split(" · ")[1]?.split(" / ")[0]} · w{row.label.split("/ ")[1]}</div>
                    <div style={{ color: "var(--color-label-assistive)" }}>lh {row.lineHeight.replace("var(--font-line-height-", "").replace(")", "")}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Font Weight */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Font Weight
        </h2>
        <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
          {FONT_WEIGHTS.map((w, i) => (
            <div key={w.token} style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 80px",
              alignItems: "center",
              padding: "14px 20px",
              borderBottom: i < FONT_WEIGHTS.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
              backgroundColor: "var(--color-background-normal)",
            }}>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>{w.token}</span>
              <span style={{ fontSize: "var(--font-size-200)", fontWeight: `var(${w.token})`, color: "var(--color-label-normal)" }}>{w.label}</span>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", textAlign: "right" }}>{w.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Font Size Scale */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Font Size Scale
        </h2>
        <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
          {FONT_SIZES.map((s, i) => (
            <div key={s.token} style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 80px",
              alignItems: "center",
              padding: "10px 20px",
              borderBottom: i < FONT_SIZES.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
              backgroundColor: "var(--color-background-normal)",
            }}>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>{s.token}</span>
              <span style={{ fontSize: `var(${s.token})`, color: "var(--color-label-normal)", lineHeight: 1.3 }}>Aa</span>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", textAlign: "right" }}>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Letter Spacing
        </h2>
        <div style={{ borderRadius: "var(--radius-300)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
          {LETTER_SPACINGS.map((ls, i) => (
            <div key={ls.token} style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr 80px",
              alignItems: "center",
              padding: "12px 20px",
              borderBottom: i < LETTER_SPACINGS.length - 1 ? "1px solid var(--color-border-normal)" : undefined,
              backgroundColor: "var(--color-background-normal)",
            }}>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", fontFamily: "monospace" }}>{ls.token}</span>
              <span style={{ fontSize: "var(--font-size-100)", letterSpacing: `var(${ls.token})`, color: "var(--color-label-normal)" }}>The quick brown fox</span>
              <span style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)", textAlign: "right" }}>{ls.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
