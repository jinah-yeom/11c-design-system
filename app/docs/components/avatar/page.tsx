"use client"

import { Avatar } from "@/components/ui/avatar"

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
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 12,
        flexWrap: "wrap",
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

export default function AvatarPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Avatar
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="아바타(Avatar)는 사용자, 그룹, 또는 엔티티를 시각적으로 표현하는 컴포넌트입니다. 인터페이스 내에서 빠른 식별을 돕고, 개인화된 경험이나 맥락을 제공합니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Avatar는 Container와 내부 콘텐츠로 구성됩니다. Type에 따라 Initials 텍스트, 이미지, 기본 아이콘 중 하나가 표시됩니다."
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
          <svg width="360" height="100" viewBox="0 0 360 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── Initials avatar ── */}
            <circle cx="44" cy="50" r="20" fill="var(--color-background-normal)" stroke="var(--color-border-normal)" strokeWidth="1" />
            <text x="44" y="55" textAnchor="middle" fill="var(--color-label-normal)" fontSize="12" fontWeight="400" fontFamily="inherit">KP</text>

            {/* ── Images avatar ── */}
            <circle cx="120" cy="50" r="20" fill="var(--color-border-normal)" />
            {/* photo placeholder lines */}
            <circle cx="120" cy="44" r="6" fill="var(--color-label-assistive)" />
            <path d="M103 62 Q110 54 120 58 Q130 54 137 62" fill="var(--color-label-assistive)" />

            {/* ── Default avatar ── */}
            <circle cx="196" cy="50" r="20" fill="var(--color-border-secondary)" />
            {/* user icon head */}
            <circle cx="196" cy="44" r="5" fill="var(--color-label-inverse)" />
            {/* user icon body */}
            <path d="M184 65 Q184 57 196 57 Q208 57 208 65" stroke="var(--color-label-inverse)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* ① Container badge */}
            <circle cx="44" cy="18" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="44" y="22" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Initials badge */}
            <circle cx="68" cy="26" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="68" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>
            <line x1="59" y1="30" x2="53" y2="41" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ③ Images badge */}
            <circle cx="144" cy="26" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="144" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>
            <line x1="135" y1="30" x2="128" y2="38" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* ④ Default icon badge */}
            <circle cx="220" cy="26" r="9" fill="var(--color-theme-dependent-primary)" />
            <text x="220" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>
            <line x1="211" y1="30" x2="204" y2="38" stroke="var(--color-theme-dependent-primary)" strokeWidth="1" />

            {/* Labels */}
            <text x="44" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="10" fontFamily="inherit">Initials</text>
            <text x="120" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="10" fontFamily="inherit">Images</text>
            <text x="196" y="88" textAnchor="middle" fill="var(--color-label-alternative)" fontSize="10" fontFamily="inherit">Default</text>
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Container",    desc: "완전한 원형 컨테이너입니다. Type에 따라 배경색이 달라집니다." },
            { n: 2, label: "Initials",     desc: "사용자 이름의 성과 이름 첫 글자를 조합해 표시합니다. (예: 김판석 → KP)" },
            { n: 3, label: "Image",        desc: "사용자가 업로드한 사진 또는 브랜드 이미지를 원형으로 표시합니다." },
            { n: 4, label: "Default icon", desc: "이미지와 이니셜 정보가 없을 때 표시되는 기본 User 아이콘입니다." },
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
          description="Avatar 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* Size */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="Size"
            description="xs(20px)부터 xl(40px)까지 5가지 사이즈를 제공합니다. md(28px)를 기본으로 사용합니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-end" }}>
            {([
              { size: "xs" as const, label: "xs · 20px", desc: "밀도 높은 UI" },
              { size: "sm" as const, label: "sm · 24px", desc: "채팅 목록 등" },
              { size: "md" as const, label: "md · 28px", desc: "표준 크기" },
              { size: "lg" as const, label: "lg · 32px", desc: "강조 필요 시" },
              { size: "xl" as const, label: "xl · 40px", desc: "주요 영역" },
            ]).map(({ size, label, desc }) => (
              <div
                key={size}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16, alignItems: "center",
                }}
              >
                <Avatar size={size} initials="KP" />
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Type */}
        <div>
          <SubTitle
            title="Type"
            description="Initials, Images, Default 세 가지 타입을 제공합니다. src → initials → Default 순으로 자동 Fallback됩니다."
          />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {([
              {
                label: "Initials",
                desc: "이니셜 표시",
                avatar: <Avatar size="xl" initials="KP" />,
              },
              {
                label: "Images",
                desc: "이미지 표시",
                avatar: <Avatar size="xl" src="https://i.pravatar.cc/80?img=3" alt="프로필 이미지" />,
              },
              {
                label: "Default",
                desc: "기본 아이콘",
                avatar: <Avatar size="xl" />,
              },
            ]).map(({ label, desc, avatar }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16, alignItems: "center",
                  minWidth: 120,
                }}
              >
                {avatar}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "var(--font-size-050)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>{desc}</p>
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
          description="Avatar 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          <UsagePattern
            title="Fallback 계층"
            description="src → initials → Default 순으로 자동 Fallback됩니다. 이미지 로딩 실패 시를 고려해 initials도 함께 전달하는 것을 권장합니다."
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Avatar size="lg" src="https://i.pravatar.cc/80?img=5" alt="이미지" initials="KP" />
                <span style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>src 있음</span>
              </div>
              <span style={{ color: "var(--color-label-assistive)", fontSize: "var(--font-size-075)" }}>→</span>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Avatar size="lg" initials="KP" />
                <span style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>initials만</span>
              </div>
              <span style={{ color: "var(--color-label-assistive)", fontSize: "var(--font-size-075)" }}>→</span>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <Avatar size="lg" />
                <span style={{ fontSize: "var(--font-size-025)", color: "var(--color-label-alternative)" }}>둘 다 없음</span>
              </div>
            </div>
          </UsagePattern>

          <UsagePattern
            title="Initials 아바타"
            description="이름에서 성과 이름의 첫 글자를 조합해 전달합니다. 최대 2자만 표시됩니다."
          >
            <Avatar size="md" initials="KP" />
            <Avatar size="md" initials="JA" />
            <Avatar size="md" initials="PT" />
            <Avatar size="md" initials="DH" />
            <Avatar size="md" initials="SY" />
          </UsagePattern>

          <UsagePattern
            title="사이즈 혼합 사용"
            description="컨텍스트에 맞는 사이즈를 선택합니다. 하나의 화면 내에서 동일한 사이즈를 일관되게 사용하는 것을 권장합니다."
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar size="xs" initials="KP" />
              <Avatar size="sm" initials="KP" />
              <Avatar size="md" initials="KP" />
              <Avatar size="lg" initials="KP" />
              <Avatar size="xl" initials="KP" />
            </div>
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
