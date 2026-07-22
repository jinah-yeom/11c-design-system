"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

type NavItem = { label: string; href?: string }
type NavGroup = { category: string; items: NavItem[] }
type NavSection = {
  label: string
  basePath: string
  firstHref: string
  items?: NavItem[]
  groups?: NavGroup[]
}

const NAV: NavSection[] = [
  {
    label: "Foundations",
    basePath: "/docs/foundations",
    firstHref: "/docs/foundations/logo",
    items: [
      { label: "Logo",       href: "/docs/foundations/logo"       },
      { label: "Typography", href: "/docs/foundations/typography" },
      { label: "Color",      href: "/docs/foundations/color"      },
      { label: "Space",      href: "/docs/foundations/space"      },
      { label: "Dimension",  href: "/docs/foundations/dimension"  },
      { label: "Radius",     href: "/docs/foundations/radius"     },
      { label: "Shadow",     href: "/docs/foundations/shadow"     },
      { label: "Motion",     href: "/docs/foundations/motion"     },
    ],
  },
  {
    label: "Components",
    basePath: "/docs/components",
    firstHref: "/docs/components/button",
    groups: [
      {
        category: "Actions",
        items: [
          { label: "Button",                href: "/docs/components/button" },
          { label: "Chip", href: "/docs/components/chip" },
          { label: "Floating Action Button" },
        ],
      },
      {
        category: "Controls",
        items: [
          { label: "Radio", href: "/docs/components/radio" },
          { label: "Checkbox",   href: "/docs/components/checkbox"   },
          { label: "Switch" },
          { label: "Select", href: "/docs/components/select" },
          { label: "Text Input", href: "/docs/components/text-input" },
          { label: "Textarea",   href: "/docs/components/textarea"   },
          { label: "Date picker" },
          { label: "Time picker" },
          { label: "Tag" },
        ],
      },
      {
        category: "Display",
        items: [
          { label: "Avatar", href: "/docs/components/avatar" },
          { label: "Badge", href: "/docs/components/badge" },
          { label: "Image" },
          { label: "Scroll", href: "/docs/components/scroll" },
        ],
      },
      {
        category: "Feedback",
        items: [
          { label: "Callout" },
          { label: "Table" },
          { label: "Toast" },
          { label: "Tooltip" },
          { label: "Snackbar" },
          { label: "Spinner" },
          { label: "Stepper" },
        ],
      },
      {
        category: "Layout",
        items: [
          { label: "Dialog" },
          { label: "Bottom sheet" },
          { label: "List" },
          { label: "Menu", href: "/docs/components/menu" },
        ],
      },
      {
        category: "Navigation",
        items: [
          { label: "Breadcrumb" },
          { label: "Bottom navigation" },
          { label: "Side navigation" },
          { label: "Top navigation" },
          { label: "Pagination" },
          { label: "Progress" },
          { label: "Tab" },
        ],
      },
    ],
  },
]

function SideNavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const overlayOpacity = isPressed ? 0.12 : isHovered ? 0.05 : 0

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "var(--space-100) var(--space-200)",
        borderRadius: "var(--radius-400)",
        textDecoration: "none",
        fontSize: "var(--font-size-075)",
        fontWeight: "var(--font-weight-400)",
        lineHeight: "var(--font-line-height-050)",
        color: "var(--color-label-normal)",
        backgroundColor: isActive ? "var(--color-background-alternative)" : "transparent",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false) }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {label}
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "var(--radius-400)",
          backgroundColor: "var(--color-label-normal)",
          opacity: overlayOpacity,
          pointerEvents: "none",
          transition: "opacity 150ms",
        }}
      />
    </Link>
  )
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const activeSection = NAV.find((s) => pathname.startsWith(s.basePath)) ?? NAV[0]

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-background-normal)",
        color: "var(--color-label-normal)",
      }}
    >
      {/* ── GNB ── */}
      <header
        style={{
          height: 48,
          borderBottom: "1px solid var(--color-border-normal)",
          backgroundColor: "var(--color-background-normal)",
          display: "flex",
          alignItems: "center",
          paddingLeft: 24,
          gap: 4,
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        {NAV.map((section) => {
          const isActive = pathname.startsWith(section.basePath)
          return (
            <Link
              key={section.basePath}
              href={section.firstHref}
              style={{
                height: 32,
                display: "inline-flex",
                alignItems: "center",
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: "var(--radius-200)",
                textDecoration: "none",
                fontSize: "var(--font-size-075)",
                fontWeight: isActive ? "var(--font-weight-600)" : "var(--font-weight-400)",
                color: isActive
                  ? "var(--color-label-normal)"
                  : "var(--color-label-alternative)",
                backgroundColor: isActive
                  ? "var(--color-background-alternative)"
                  : "transparent",
              }}
            >
              {section.label}
            </Link>
          )
        })}
      </header>

      <div style={{ display: "flex", flex: 1 }}>
        {/* ── Sidebar ── */}
        <aside
          style={{
            width: 200,
            borderRight: "1px solid var(--color-border-normal)",
            padding: "20px 12px",
            position: "sticky",
            top: 48,
            height: "calc(100svh - 48px)",
            overflowY: "auto",
            flexShrink: 0,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {activeSection.groups
              ? activeSection.groups.map((group, gi) => (
                  <div key={group.category} style={{ marginTop: gi === 0 ? 0 : "var(--space-500)" }}>
                    <p
                      style={{
                        fontSize: "var(--font-size-050)",
                        fontWeight: "var(--font-weight-700)",
                        lineHeight: "var(--font-line-height-035)",
                        color: "var(--color-label-assistive)",
                        letterSpacing: "var(--font-letter-spacing-none)",
                        padding: "var(--space-100) var(--space-200)",
                        marginBottom: 2,
                      }}
                    >
                      {group.category}
                    </p>
                    {group.items.map((item) =>
                      item.href ? (
                        <SideNavLink
                          key={item.label}
                          href={item.href}
                          label={item.label}
                          isActive={pathname === item.href}
                        />
                      ) : (
                        <span
                          key={item.label}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "var(--space-100) var(--space-200)",
                            borderRadius: "var(--radius-400)",
                            fontSize: "var(--font-size-075)",
                            fontWeight: "var(--font-weight-400)",
                            lineHeight: "var(--font-line-height-050)",
                            color: "var(--color-label-disabled)",
                            cursor: "default",
                          }}
                        >
                          {item.label}
                        </span>
                      )
                    )}
                  </div>
                ))
              : activeSection.items?.map((item) => {
                  if (!item.href) return null
                  return (
                    <SideNavLink
                      key={item.label}
                      href={item.href}
                      label={item.label}
                      isActive={pathname === item.href}
                    />
                  )
                })}
          </nav>
        </aside>

        {/* ── Main content ── */}
        <main style={{ flex: 1, padding: "40px 48px", minWidth: 0 }}>
          {children}
        </main>
      </div>
    </div>
  )
}
