"use client"

import * as React from "react"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BadgeProps {
  type: "dot" | "new" | "number"
  count?: number
}

// ─── Badge ────────────────────────────────────────────────────────────────────

function Badge({ type, count = 0 }: BadgeProps) {
  if (type === "dot") {
    return (
      <span
        style={{
          display: "inline-flex",
          width: 6,
          height: 6,
          borderRadius: "var(--radius-1000)",
          backgroundColor: "var(--color-red-400)",
          flexShrink: 0,
        }}
      />
    )
  }

  if (type === "new") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 16,
          height: 16,
          borderRadius: "var(--radius-300)",
          backgroundColor: "var(--color-theme-dependent-primary)",
          fontSize: "var(--font-size-050)",
          fontWeight: "var(--font-weight-600)",
          lineHeight: "var(--font-line-height-035)",
          color: "var(--color-label-inverse)",
          flexShrink: 0,
        }}
      >
        N
      </span>
    )
  }

  // type === "number"
  const isOverflow = count > 99
  const label = isOverflow ? "99+" : String(count)
  const width = isOverflow ? 31 : 16

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width,
        height: 16,
        borderRadius: "var(--radius-300)",
        backgroundColor: "var(--color-theme-dependent-primary)",
        fontSize: "var(--font-size-050)",
        fontWeight: "var(--font-weight-600)",
        lineHeight: "var(--font-line-height-035)",
        color: "var(--color-label-inverse)",
        padding: "0 4px",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  )
}

Badge.displayName = "Badge"

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Badge }
