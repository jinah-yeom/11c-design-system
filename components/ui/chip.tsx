"use client"

import * as React from "react"

export type ChipVariant = "solid" | "outline"
export type ChipSize    = "xsmall" | "small" | "medium" | "large"

export interface ChipProps {
  variant?:      ChipVariant
  size?:         ChipSize
  label:         string
  leadingIcon?:  React.ReactNode
  trailingIcon?: React.ReactNode
  selected?:     boolean
  disabled?:     boolean
  onClick?:      () => void
}

const sizeConfig: Record<ChipSize, { height: number; paddingV: number; paddingH: number; iconSize: number; fontSize: string }> = {
  xsmall: { height: 24, paddingV: 4,  paddingH: 8,  iconSize: 14, fontSize: "var(--font-size-050)" },
  small:  { height: 32, paddingV: 6,  paddingH: 8,  iconSize: 14, fontSize: "var(--font-size-075)" },
  medium: { height: 36, paddingV: 8,  paddingH: 12, iconSize: 16, fontSize: "var(--font-size-075)" },
  large:  { height: 40, paddingV: 10, paddingH: 12, iconSize: 16, fontSize: "var(--font-size-075)" },
}

function Chip({
  variant  = "solid",
  size     = "medium",
  label,
  leadingIcon,
  trailingIcon,
  selected  = false,
  disabled  = false,
  onClick,
}: ChipProps) {
  const cfg = sizeConfig[size]

  // ── Background ──────────────────────────────────────────────────────────────
  const getBackground = (): string => {
    if (variant === "solid") {
      if (disabled) return "var(--color-gray-050)"
      if (selected) return "var(--color-gray-800)"
      return "var(--color-theme-secondary)"
    }
    // outline
    if (selected) return "var(--color-blue-050)"
    return "transparent"
  }

  // ── Border ───────────────────────────────────────────────────────────────────
  const getBorderColor = (): string => {
    if (variant === "solid") return "transparent"
    // outline
    if (selected)  return "var(--color-border-primary)"
    if (disabled)  return "var(--color-border-disabled)"
    return "var(--color-border-secondary)"
  }

  // ── Text / Icon ──────────────────────────────────────────────────────────────
  const getContentColor = (): string => {
    if (disabled) return variant === "solid" ? "var(--color-label-assistive)" : "var(--color-label-disabled)"
    if (selected) {
      if (variant === "outline") return "var(--color-theme-dependent-foreground-primary)"
      return "var(--color-label-inverse)"
    }
    return "var(--color-label-normal)"
  }

  return (
    <button
      type="button"
      data-chip
      disabled={disabled}
      onClick={onClick}
      style={{
        position:        "relative",
        overflow:        "hidden",
        display:         "inline-flex",
        alignItems:      "center",
        gap:             "var(--space-050)",
        height:          cfg.height,
        paddingTop:      cfg.paddingV,
        paddingBottom:   cfg.paddingV,
        paddingLeft:     cfg.paddingH,
        paddingRight:    cfg.paddingH,
        borderRadius:    "var(--radius-1000)",
        border:          `1px solid ${getBorderColor()}`,
        backgroundColor: getBackground(),
        color:           getContentColor(),
        fontSize:        cfg.fontSize,
        fontWeight:      "var(--font-weight-500)",
        lineHeight:      "var(--font-line-height-050)",
        fontFamily:      "inherit",
        cursor:          disabled ? "not-allowed" : "pointer",
        pointerEvents:   disabled ? "none" : undefined,
        userSelect:      "none",
        outline:         "none",
        transition:      "background-color 120ms ease, border-color 120ms ease, color 120ms ease",
      }}
    >
      {/* ── Interaction overlay ── */}
      {!disabled && (
        <span
          aria-hidden
          className="chip-hover-overlay"
          style={{
            position:        "absolute",
            inset:           0,
            borderRadius:    "var(--radius-200)",
            backgroundColor: "var(--color-label-normal)",
            opacity:         0,
            pointerEvents:   "none",
            transition:      "opacity 120ms ease",
          }}
        />
      )}

      {/* ── Leading Icon ── */}
      {leadingIcon && (
        <span
          aria-hidden
          style={{
            width:          cfg.iconSize,
            height:         cfg.iconSize,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            flexShrink:     0,
          }}
        >
          {leadingIcon}
        </span>
      )}

      {/* ── Label ── */}
      <span>{label}</span>

      {/* ── Trailing Icon ── */}
      {trailingIcon && (
        <span
          aria-hidden
          style={{
            width:          cfg.iconSize,
            height:         cfg.iconSize,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            flexShrink:     0,
          }}
        >
          {trailingIcon}
        </span>
      )}

      <style>{`
        [data-chip]:not(:disabled):hover  .chip-hover-overlay { opacity: 0.05; }
        [data-chip]:not(:disabled):active .chip-hover-overlay { opacity: 0.12; }
      `}</style>
    </button>
  )
}

Chip.displayName = "Chip"

export { Chip }
