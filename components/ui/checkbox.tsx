"use client"

import * as React from "react"
import { Check, Minus } from "lucide-react"

export interface CheckboxProps {
  shape?: "square" | "ghost"
  size?: "large" | "medium"
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  label?: string
  weight?: "regular" | "bold"
  onChange?: (checked: boolean) => void
}

const sizeConfig = {
  large: {
    control: "var(--dimension-300)",  // 24px
    inner: 22,                        // 22px (background 내부)
    icon: 14,
  },
  medium: {
    control: "var(--dimension-250)",  // 20px
    inner: 18,                        // 18px (background 내부)
    icon: 12,
  },
}

function Checkbox({
  shape = "square",
  size = "medium",
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  weight = "regular",
  onChange,
}: CheckboxProps) {
  const cfg = sizeConfig[size]

  // Ghost는 Indeterminate 없음 → checked만 사용
  const isChecked = shape === "ghost" ? checked : (checked || indeterminate)

  // ── Checkmark 배경 스타일 ──────────────────────────────────────────
  const getBorderColor = () => {
    if (shape === "ghost") return "transparent"
    if (disabled || isChecked) return "transparent"
    return "var(--color-border-secondary)"
  }

  const getFillColor = () => {
    if (shape === "ghost") return "transparent"
    if (disabled) return "var(--color-gray-100)"
    if (isChecked) return "var(--color-theme-dependent-primary)"
    return "transparent"
  }

  const getIconColor = () => {
    if (shape === "ghost") {
      if (disabled && isChecked) return "var(--color-label-disabled)"
      if (isChecked) return "var(--color-theme-dependent-primary)"
      return "var(--color-label-assistive)"   // unchecked (enabled/disabled 공통)
    }
    // Square
    if (disabled) return "var(--color-label-disabled)"
    return "var(--color-label-inverse)"
  }

  // ── Label 폰트 ───────────────────────────────────────────────────────
  const labelStyle: React.CSSProperties = {
    fontSize: "var(--font-size-075)",
    lineHeight: "var(--font-line-height-050)",
    fontWeight: weight === "bold"
      ? "var(--font-weight-600)"
      : "var(--font-weight-500)",
    color: disabled
      ? "var(--color-label-assistive)"
      : "var(--color-label-normal)",
    userSelect: "none",
  }

  const handleClick = () => {
    if (disabled) return
    onChange?.(!checked)
  }

  return (
    <div
      role="checkbox"
      aria-checked={indeterminate ? "mixed" : checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault()
          handleClick()
        }
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-100)",
        cursor: disabled ? "not-allowed" : "pointer",
        pointerEvents: disabled ? "none" : undefined,
      }}
    >
      {/* ── Checkmark control ── */}
      <span
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: cfg.control,
          height: cfg.control,
          flexShrink: 0,
        }}
      >
        {/* Hover overlay (before pseudo 대체) */}
        {!disabled && (
          <span
            aria-hidden
            className="checkbox-hover-overlay"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "var(--radius-100)",
              backgroundColor: "var(--color-label-normal)",
              opacity: 0,
              pointerEvents: "none",
              transition: "opacity 120ms ease",
            }}
          />
        )}

        {/* Background */}
        <span
          style={{
            width: cfg.inner,
            height: cfg.inner,
            borderRadius: "var(--radius-100)",
            border: `1.5px solid ${getBorderColor()}`,
            backgroundColor: getFillColor(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 120ms ease, border-color 120ms ease",
          }}
        >
          {/* Icon
              Ghost: 항상 Check 표시 (unchecked=assistive, checked=primary)
              Square: Minus(indeterminate) / Check(checked) / null(unchecked)
          */}
          {shape === "ghost" ? (
            <Check
              size={cfg.icon}
              strokeWidth={2.5}
              style={{ color: getIconColor(), flexShrink: 0 }}
            />
          ) : indeterminate ? (
            <Minus
              size={cfg.icon}
              strokeWidth={2.5}
              style={{ color: getIconColor(), flexShrink: 0 }}
            />
          ) : isChecked ? (
            <Check
              size={cfg.icon}
              strokeWidth={2.5}
              style={{ color: getIconColor(), flexShrink: 0 }}
            />
          ) : null}
        </span>
      </span>

      {/* ── Label ── */}
      {label && (
        <span style={labelStyle}>{label}</span>
      )}

      <style>{`
        [role="checkbox"]:not([aria-disabled="true"]):hover .checkbox-hover-overlay {
          opacity: 0.05;
        }
        [role="checkbox"]:not([aria-disabled="true"]):active .checkbox-hover-overlay {
          opacity: 0.12;
        }
      `}</style>
    </div>
  )
}

Checkbox.displayName = "Checkbox"

export { Checkbox }
