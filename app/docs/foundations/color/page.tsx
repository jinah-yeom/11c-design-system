const SEMANTIC_GROUPS: { group: string; tokens: { token: string; label: string }[] }[] = [
  {
    group: "Background",
    tokens: [
      { token: "--color-background-normal",         label: "Normal"         },
      { token: "--color-background-alternative",    label: "Alternative"    },
      { token: "--color-background-normal-inverse", label: "Normal Inverse" },
      { token: "--color-background-overlay",        label: "Overlay"        },
    ],
  },
  {
    group: "Label",
    tokens: [
      { token: "--color-label-normal",      label: "Normal"      },
      { token: "--color-label-strong",      label: "Strong"      },
      { token: "--color-label-neutral",     label: "Neutral"     },
      { token: "--color-label-alternative", label: "Alternative" },
      { token: "--color-label-assistive",   label: "Assistive"   },
      { token: "--color-label-disabled",    label: "Disabled"    },
      { token: "--color-label-inverse",     label: "Inverse"     },
    ],
  },
  {
    group: "Foreground",
    tokens: [
      { token: "--color-foreground-normal",                    label: "Normal"                    },
      { token: "--color-foreground-alternative",               label: "Alternative"               },
      { token: "--color-foreground-secondary",                 label: "Secondary"                 },
      { token: "--color-foreground-secondary-on-transparent",  label: "Secondary on Transparent"  },
      { token: "--color-foreground-contrast",                  label: "Contrast"                  },
      { token: "--color-foreground-contrast-on-transparent",   label: "Contrast on Transparent"   },
      { token: "--color-foreground-hint",                      label: "Hint"                      },
      { token: "--color-foreground-hint-on-transparent",       label: "Hint on Transparent"       },
      { token: "--color-foreground-success",                   label: "Success"                   },
      { token: "--color-foreground-success-on-transparent",    label: "Success on Transparent"    },
      { token: "--color-foreground-success-on-background",     label: "Success on Background"     },
      { token: "--color-foreground-warning",                   label: "Warning"                   },
      { token: "--color-foreground-warning-on-transparent",    label: "Warning on Transparent"    },
      { token: "--color-foreground-warning-on-background",     label: "Warning on Background"     },
      { token: "--color-foreground-danger",                    label: "Danger"                    },
      { token: "--color-foreground-danger-on-transparent",     label: "Danger on Transparent"     },
      { token: "--color-foreground-danger-on-background",      label: "Danger on Background"      },
      { token: "--color-foreground-disabled",                  label: "Disabled"                  },
      { token: "--color-foreground-light",                     label: "Light"                     },
    ],
  },
  {
    group: "Border",
    tokens: [
      { token: "--color-border-normal",         label: "Normal"         },
      { token: "--color-border-secondary",      label: "Secondary"      },
      { token: "--color-border-contrast",       label: "Contrast"       },
      { token: "--color-border-disabled",       label: "Disabled"       },
      { token: "--color-border-primary",        label: "Primary"        },
      { token: "--color-border-primary-subtle", label: "Primary Subtle" },
      { token: "--color-border-success",        label: "Success"        },
      { token: "--color-border-success-subtle", label: "Success Subtle" },
      { token: "--color-border-danger",         label: "Danger"         },
      { token: "--color-border-danger-subtle",  label: "Danger Subtle"  },
      { token: "--color-border-warning",        label: "Warning"        },
      { token: "--color-border-warning-subtle", label: "Warning Subtle" },
    ],
  },
  {
    group: "Theme",
    tokens: [
      { token: "--color-theme-dependent-primary",                           label: "Primary"                          },
      { token: "--color-theme-dependent-foreground-primary",                label: "Foreground Primary"               },
      { token: "--color-theme-dependent-foreground-primary-on-transparent", label: "Foreground Primary on Transparent"},
      { token: "--color-theme-dependent-foreground-primary-on-background",  label: "Foreground Primary on BG"         },
      { token: "--color-theme-success",   label: "Success"   },
      { token: "--color-theme-warning",   label: "Warning"   },
      { token: "--color-theme-danger",    label: "Danger"    },
      { token: "--color-theme-hint",      label: "Hint"      },
      { token: "--color-theme-secondary", label: "Secondary" },
      { token: "--color-theme-contrast",  label: "Contrast"  },
    ],
  },
  {
    group: "Divider",
    tokens: [
      { token: "--color-divider-normal",      label: "Normal"      },
      { token: "--color-divider-neutral",     label: "Neutral"     },
      { token: "--color-divider-alternative", label: "Alternative" },
      { token: "--color-divider-strong",      label: "Strong"      },
    ],
  },
]

const PALETTES: { name: string; steps: string[]; tokens: string[] }[] = [
  { name: "Gray",    steps: ["000","050","100","200","300","400","500","600","700","800","900","950"], tokens: ["color-gray-000","color-gray-050","color-gray-100","color-gray-200","color-gray-300","color-gray-400","color-gray-500","color-gray-600","color-gray-700","color-gray-800","color-gray-900","color-gray-950"] },
  { name: "Blue",    steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-blue-050","color-blue-100","color-blue-200","color-blue-300","color-blue-400","color-blue-500","color-blue-600","color-blue-700","color-blue-800","color-blue-900"] },
  { name: "Red",     steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-red-050","color-red-100","color-red-200","color-red-300","color-red-400","color-red-500","color-red-600","color-red-700","color-red-800","color-red-900"] },
  { name: "Green",   steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-green-050","color-green-100","color-green-200","color-green-300","color-green-400","color-green-500","color-green-600","color-green-700","color-green-800","color-green-900"] },
  { name: "Yellow",  steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-yellow-050","color-yellow-100","color-yellow-200","color-yellow-300","color-yellow-400","color-yellow-500","color-yellow-600","color-yellow-700","color-yellow-800","color-yellow-900"] },
  { name: "Orange",  steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-orange-050","color-orange-100","color-orange-200","color-orange-300","color-orange-400","color-orange-500","color-orange-600","color-orange-700","color-orange-800","color-orange-900"] },
  { name: "Purple",  steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-purple-050","color-purple-100","color-purple-200","color-purple-300","color-purple-400","color-purple-500","color-purple-600","color-purple-700","color-purple-800","color-purple-900"] },
  { name: "Magenta", steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-magenta-050","color-magenta-100","color-magenta-200","color-magenta-300","color-magenta-400","color-magenta-500","color-magenta-600","color-magenta-700","color-magenta-800","color-magenta-900"] },
  { name: "Cyan",    steps: ["050","100","200","300","400","500","600","700","800","900"], tokens: ["color-cyan-050","color-cyan-100","color-cyan-200","color-cyan-300","color-cyan-400","color-cyan-500","color-cyan-600","color-cyan-700","color-cyan-800","color-cyan-900"] },
]

export default function ColorPage() {
  return (
    <div style={{ maxWidth: 960 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Color
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        시맨틱 컬러 토큰 및 파운데이션 팔레트
      </p>

      {/* Semantic colors */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Semantic Tokens
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {SEMANTIC_GROUPS.map((group) => (
            <div key={group.group}>
              <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-alternative)", marginBottom: 8 }}>
                {group.group}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
                {group.tokens.map((t) => (
                  <div key={t.token} style={{ borderRadius: "var(--radius-200)", border: "1px solid var(--color-border-normal)", overflow: "hidden" }}>
                    <div style={{ height: 48, backgroundColor: `var(${t.token})` }} />
                    <div style={{ padding: "8px 10px", backgroundColor: "var(--color-background-normal)" }}>
                      <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-normal)", marginBottom: 2 }}>{t.label}</p>
                      <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)", fontFamily: "monospace", wordBreak: "break-all" }}>{t.token}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Foundation palette */}
      <section>
        <h2 style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-assistive)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
          Foundation Palette
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {PALETTES.map((palette) => (
            <div key={palette.name} style={{ display: "grid", gridTemplateColumns: "72px 1fr", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-500)", color: "var(--color-label-neutral)" }}>{palette.name}</span>
              <div style={{ display: "flex", borderRadius: "var(--radius-200)", overflow: "hidden", height: 36 }}>
                {palette.tokens.map((token, i) => (
                  <div
                    key={token}
                    title={`--${token} (${palette.steps[i]})`}
                    style={{ flex: 1, backgroundColor: `var(--${token})` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
