"use client"

import * as React from "react"
import { useState } from "react"
import { Check } from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

export interface MenuProps {
  variant?: "normal" | "radio" | "checkbox"
  cellPadding?: 8 | 12
  style?: React.CSSProperties
  children: React.ReactNode
}

export interface MenuItemProps {
  size?: "regular" | "large"
  type?: "normal" | "radio" | "checkbox"
  label: string
  subLabel?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  /** Demo-only: force overlay opacity to simulate hover/pressed state */
  _forceOverlayOpacity?: number
}

export interface MenuSectionProps {
  label: string
}

// ─── Size config ──────────────────────────────────────────────────────────────

const sizeConfig = {
  regular: { cellHeight: 40 },
  large:   { cellHeight: 48 },
}

// ─── Inline radio indicator ───────────────────────────────────────────────────

function RadioIndicator({ selected, disabled }: { selected?: boolean; disabled?: boolean }) {
  return (
    <span
      style={{
        width: 24,
        height: 24,
        flexShrink: 0,
        borderRadius: "var(--radius-1000)",
        backgroundColor: selected
          ? disabled ? "var(--color-label-disabled)" : "var(--color-theme-dependent-primary)"
          : "var(--color-background-normal)",
        border: selected ? "none" : "1.5px solid var(--color-border-secondary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 120ms ease, border-color 120ms ease",
      }}
    >
      {selected && (
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />
      )}
    </span>
  )
}

// ─── Inline checkbox indicator ───────────────────────────────────────────────

function CheckboxIndicator({ selected, disabled }: { selected?: boolean; disabled?: boolean }) {
  return (
    <span
      style={{
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: "var(--radius-100)",
        backgroundColor: selected
          ? disabled ? "var(--color-label-disabled)" : "var(--color-theme-dependent-primary)"
          : "transparent",
        border: selected
          ? "none"
          : "1.5px solid var(--color-border-secondary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 120ms ease, border-color 120ms ease",
      }}
    >
      {selected && (
        <Check size={12} strokeWidth={2.5} color="var(--color-label-inverse)" />
      )}
    </span>
  )
}

// ─── MenuSection ──────────────────────────────────────────────────────────────

function MenuSection({ label }: MenuSectionProps) {
  return (
    <div
      style={{
        fontSize: "var(--font-size-050)",
        fontWeight: "var(--font-weight-600)",
        color: "var(--color-label-alternative)",
        padding: "var(--space-100) var(--space-200)",
      }}
    >
      {label}
    </div>
  )
}

MenuSection.displayName = "MenuSection"

// ─── MenuItem ─────────────────────────────────────────────────────────────────

function MenuItem({
  size = "regular",
  type = "normal",
  label,
  subLabel,
  prefix,
  suffix,
  selected = false,
  disabled = false,
  onClick,
  _forceOverlayOpacity,
}: MenuItemProps) {
  const cfg = sizeConfig[size]
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const overlayOpacity = _forceOverlayOpacity ?? (
    disabled ? 0 : isPressed ? 0.12 : isHovered ? 0.05 : 0
  )

  const resolvedPrefix =
    type === "radio"    ? <RadioIndicator selected={selected} disabled={disabled} /> :
    type === "checkbox" ? <CheckboxIndicator selected={selected} disabled={disabled} /> :
    prefix

  const resolvedSuffix =
    type === "normal" && selected && !suffix
      ? <Check size={16} strokeWidth={2} color="var(--color-theme-dependent-primary)" />
      : suffix

  return (
    <div
      role={type === "radio" ? "menuitemradio" : type === "checkbox" ? "menuitemcheckbox" : "menuitem"}
      aria-checked={type !== "normal" ? selected : undefined}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={disabled ? undefined : () => setIsHovered(true)}
      onMouseLeave={disabled ? undefined : () => { setIsHovered(false); setIsPressed(false) }}
      onMouseDown={disabled ? undefined : () => setIsPressed(true)}
      onMouseUp={disabled ? undefined : () => setIsPressed(false)}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        height: cfg.cellHeight,
        padding: "var(--space-150) var(--space-100)",
        gap: "var(--space-200)",
        cursor: disabled ? "not-allowed" : "pointer",
        pointerEvents: disabled ? "none" : undefined,
      }}
    >
      {/* ── Interaction overlay ─────────────────────────────────────── */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "var(--radius-400)",
          backgroundColor: "var(--color-label-normal)",
          opacity: overlayOpacity,
          pointerEvents: "none",
          transition: _forceOverlayOpacity !== undefined ? "none" : "opacity 150ms ease",
        }}
      />

      {/* ── Prefix slot ─────────────────────────────────────────────── */}
      {resolvedPrefix && (
        <span
          style={{
            width: 24,
            height: 24,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {resolvedPrefix}
        </span>
      )}

      {/* ── Text ────────────────────────────────────────────────────── */}
      <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2, zIndex: 1 }}>
        <span
          style={{
            fontSize: "var(--font-size-100)",
            fontWeight: "var(--font-weight-400)",
            lineHeight: "var(--font-line-height-075)",
            color: disabled ? "var(--color-label-disabled)" : "var(--color-label-normal)",
          }}
        >
          {label}
        </span>
        {subLabel && (
          <span
            style={{
              fontSize: "var(--font-size-075)",
              fontWeight: "var(--font-weight-400)",
              lineHeight: "var(--font-line-height-050)",
              color: disabled ? "var(--color-label-disabled)" : "var(--color-label-alternative)",
            }}
          >
            {subLabel}
          </span>
        )}
      </span>

      {/* ── Suffix slot ─────────────────────────────────────────────── */}
      {resolvedSuffix && (
        <span
          style={{
            width: 16,
            height: 16,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {resolvedSuffix}
        </span>
      )}
    </div>
  )
}

MenuItem.displayName = "MenuItem"

// ─── Menu ─────────────────────────────────────────────────────────────────────

function Menu({ style, children }: MenuProps) {
  return (
    <div
      role="menu"
      style={{
        backgroundColor: "var(--color-background-normal)",
        borderRadius: "var(--radius-500)",
        border: "1px solid var(--color-border-normal)",
        boxShadow: "var(--shadows-xs-x) var(--shadows-xs-y) var(--shadows-xs-blur) var(--shadows-xs-spread) var(--shadows-xs-color)",
        padding: "var(--space-150)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-050)",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

Menu.displayName = "Menu"

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Menu, MenuItem, MenuSection }
