import { Textarea } from "@/components/ui/textarea"

// ─── Helpers ────────────────────────────────────────────────────────────────

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

// ─── Page ───────────────────────────────────────────────────────────────────

export default function TextareaPage() {
  return (
    <div style={{ maxWidth: 900 }}>
      <h1 style={{ fontSize: "var(--font-size-300)", fontWeight: "var(--font-weight-600)", color: "var(--color-label-normal)", marginBottom: 8 }}>
        Textarea
      </h1>
      <p style={{ fontSize: "var(--font-size-075)", color: "var(--color-label-alternative)", marginBottom: 48 }}>
        컴포넌트의 구조와 사용 방법을 설명합니다. 올바른 컴포넌트 활용을 위해 사용 전 확인해 주세요.
      </p>

      {/* ── Definition ──────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Definition"
          description="텍스트에어리어(Textarea)는 사용자가 여러 줄의 텍스트를 입력하거나 편집할 수 있는 영역입니다."
        />
      </section>

      {/* ── Anatomy ─────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Anatomy"
          description="Textarea는 입력 영역을 감싸는 Container, 레이블(Label), 플레이스홀더(Placeholder), 설명 텍스트(Description), 글자 수 카운터(Counter)로 구성됩니다."
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
          <svg width="320" height="196" viewBox="0 0 320 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Label text */}
            <text x="28" y="22" fill="var(--color-label-normal)" fontSize="12" fontWeight="500" fontFamily="inherit">Label</text>
            {/* Required * */}
            <text x="62" y="22" fill="var(--color-theme-danger)" fontSize="14" fontWeight="600" fontFamily="inherit">*</text>

            {/* Container */}
            <rect x="20" y="30" width="280" height="110" rx="6"
              stroke="var(--color-border-normal)" strokeWidth="1.5"
              fill="var(--color-background-normal)" />

            {/* Placeholder text inside container */}
            <text x="32" y="56" fill="var(--color-label-assistive)" fontSize="12" fontFamily="inherit">Placeholder</text>

            {/* Scrollbar indicator */}
            <rect x="285" y="42" width="5" height="36" rx="2.5"
              fill="var(--color-border-normal)" opacity="0.6" />

            {/* Counter inside container bottom area */}
            <text x="232" y="133" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit">0/100</text>

            {/* Description text below container */}
            <text x="20" y="162" fill="var(--color-label-alternative)" fontSize="11" fontFamily="inherit" opacity="0.8">도움말 텍스트</text>

            {/* ① Label badge */}
            <circle cx="14" cy="14" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="14" y="18" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">1</text>

            {/* ② Required badge */}
            <circle cx="74" cy="10" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="74" y="14" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">2</text>

            {/* ③ Placeholder badge */}
            <circle cx="160" cy="20" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="160" y="24" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">3</text>

            {/* ④ Container badge */}
            <circle cx="308" cy="30" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="308" y="34" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">4</text>

            {/* ⑤ Description badge */}
            <circle cx="14" cy="176" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="14" y="180" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">5</text>

            {/* ⑥ Counter badge */}
            <circle cx="306" cy="176" r="10" fill="var(--color-theme-dependent-primary)" />
            <text x="306" y="180" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">6</text>
          </svg>
        </div>

        {/* Anatomy description list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { n: 1, label: "Label",          desc: "입력 필드의 목적을 설명하는 텍스트입니다." },
            { n: 2, label: "Required Badge", desc: "필수 입력 필드임을 나타내는 표시입니다." },
            { n: 3, label: "Placeholder",    desc: "입력값이 없을 때 표시되는 안내 텍스트입니다." },
            { n: 4, label: "Container",      desc: "텍스트 입력 영역을 감싸는 컨테이너입니다. 최소 높이는 70px(2줄)이며, 최대 높이 초과 시 내부 스크롤이 생성됩니다." },
            { n: 5, label: "Description",    desc: "입력 필드를 보조하는 안내 또는 오류 텍스트입니다. (Optional)" },
            { n: 6, label: "Counter",        desc: "현재 입력된 글자 수를 최대 글자 수와 함께 표시합니다. maxCount prop 설정 시 노출됩니다. (Optional)" },
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
          description="Textarea 컴포넌트를 활용할 수 있는 속성을 설명합니다."
          style={{ marginBottom: 40 }}
        />

        {/* State */}
        <div style={{ marginBottom: 48 }}>
          <SubTitle
            title="State"
            description="Textarea는 default, focused, completed, invalid, disabled 상태를 가집니다."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {[
              {
                label: "Default",
                node: <Textarea label="Label" required placeholder="Placeholder" helperText="Helper text" maxCount={100} />,
              },
              {
                label: "Focused",
                node: <Textarea label="Label" required placeholder="클릭하여 포커스" helperText="클릭하여 포커스" maxCount={100} />,
              },
              {
                label: "Completed",
                node: <Textarea label="Label" required placeholder="Placeholder" helperText="Helper text" maxCount={100} defaultValue="입력된 내용입니다." />,
              },
              {
                label: "Invalid",
                node: <Textarea label="Label" required placeholder="Placeholder" invalid errorText="오류가 발생한 이유를 써주세요." maxCount={100} defaultValue="잘못된 내용입니다." />,
              },
              {
                label: "Disabled",
                node: <Textarea label="Label" required placeholder="Placeholder" disabled helperText="Helper text" maxCount={100} />,
              },
            ].map(({ label, node }) => (
              <div
                key={label}
                style={{
                  padding: "20px 16px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16,
                }}
              >
                {node}
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div>
          <SubTitle
            title="Counter"
            description="maxCount prop을 설정하면 입력 영역 하단 우측에 현재 글자 수/최대 글자 수가 표시됩니다."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {[
              {
                label: "기본 카운터",
                node: <Textarea label="내용" placeholder="내용을 입력해 주세요." maxCount={200} />,
              },
            ].map(({ label, node }) => (
              <div
                key={label}
                style={{
                  padding: "20px 16px",
                  borderRadius: "var(--radius-300)",
                  border: "1px solid var(--color-border-normal)",
                  backgroundColor: "var(--color-background-normal)",
                  display: "flex", flexDirection: "column", gap: 16,
                }}
              >
                {node}
                <p style={{ fontSize: "var(--font-size-050)", color: "var(--color-label-alternative)" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Usage ───────────────────────────────────────────────────────────── */}
      <section style={{ marginBottom: 64 }}>
        <SectionTitle
          title="Usage"
          description="Textarea 컴포넌트를 활용할 경우 권장하는 사용 예제입니다."
          style={{ marginBottom: 32 }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* 기본 형태 */}
          <UsagePattern
            title="기본 형태"
            description="레이블과 플레이스홀더를 함께 사용하는 기본 형태입니다. 사용자가 무엇을 입력해야 하는지 명확하게 안내합니다."
          >
            <div style={{ width: 320 }}>
              <Textarea label="내용" placeholder="내용을 입력해 주세요." />
            </div>
          </UsagePattern>

          {/* 글자 수 제한 */}
          <UsagePattern
            title="글자 수 제한"
            description="maxCount prop을 사용하여 입력 글자 수를 제한할 수 있습니다. 현재 입력된 글자 수와 최대 글자 수를 실시간으로 확인할 수 있습니다."
          >
            <div style={{ width: 320 }}>
              <Textarea label="업무 일지" required placeholder="오늘의 업무 내용을 입력해 주세요." helperText="주요 업무 내용, 이슈, 특이사항을 포함해 주세요." maxCount={500} />
            </div>
          </UsagePattern>

          {/* 에러 메시지 */}
          <UsagePattern
            title="에러 메시지"
            description="실패 사유를 명확하게 안내하여 사용자에게 명확한 행동을 유도합니다."
          >
            <div style={{ width: 320 }}>
              <Textarea label="신고 내용" required placeholder="신고 내용을 입력해 주세요." invalid errorText="최소 10자 이상 입력해 주세요." maxCount={1000} defaultValue="짧은 글" />
            </div>
          </UsagePattern>

          {/* 도움말 텍스트 */}
          <UsagePattern
            title="도움말 텍스트"
            description="helperText prop을 활용하여 입력 방식에 대한 추가 안내를 제공합니다."
          >
            <div style={{ width: 320 }}>
              <Textarea label="자기소개" placeholder="본인을 소개하는 글을 작성해 주세요." helperText="지원 동기, 역량, 경험 등을 자유롭게 작성해 주세요." maxCount={2000} />
            </div>
          </UsagePattern>

          {/* 여러 개 수직 배치 */}
          <UsagePattern
            title="여러 개의 Textarea를 수직으로 배치할 경우"
            description="여러 개의 Textarea를 수직으로 정렬하여 단계적 흐름을 만들고 싶을 때 사용합니다."
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
              <Textarea label="오전 업무" placeholder="오전에 진행한 업무를 입력해 주세요." maxCount={300} />
              <Textarea label="오후 업무" placeholder="오후에 진행한 업무를 입력해 주세요." maxCount={300} />
            </div>
          </UsagePattern>

          {/* 필수 + 비활성화 */}
          <UsagePattern
            title="비활성화 상태"
            description="수정이 불가능한 내용을 표시할 때 disabled prop을 사용합니다. 사용자가 입력할 수 없음을 시각적으로 전달합니다."
          >
            <div style={{ width: 320 }}>
              <Textarea
                label="이전 업무 일지"
                disabled
                helperText="확정된 내용은 수정할 수 없습니다."
                maxCount={500}
                defaultValue="오늘 오전 10시경, A동 3층 복도에서 누수 현상이 발견되어 즉각적인 조치를 취했습니다."
              />
            </div>
          </UsagePattern>

        </div>
      </section>
    </div>
  )
}
