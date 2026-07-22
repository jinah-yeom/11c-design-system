"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { MenuItem } from "@/components/ui/menu"
import { Chip } from "@/components/ui/chip"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SelectOption {
  value: string
  label: string
  subLabel?: string
}

export interface SelectProps {
  label?: string
  required?: boolean
  placeholder?: string
  helperText?: string
  errorText?: string
  invalid?: boolean
  disabled?: boolean
  multiple?: boolean
  render?: "text" | "chip"
  overflow?: boolean
  prefix?: React.ReactNode
  options: SelectOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  style?: React.CSSProperties
  /** Menu item type for single-select. Defaults to "radio". */
  menuItemType?: "normal" | "radio"
  /** Demo-only: force focused border style */
  _forceFocused?: boolean
  /** Demo-only: force dropdown open */
  _forceOpen?: boolean
}

// ─── Select ───────────────────────────────────────────────────────────────────

function Select({
  label,
  required = false,
  placeholder = "선택해 주세요",
  helperText,
  errorText,
  invalid = false,
  disabled = false,
  multiple = false,
  render = "text",
  overflow = false,
  prefix,
  options,
  value,
  onChange,
  menuItemType = "radio",
  style,
  _forceFocused = false,
  _forceOpen = false,
}: SelectProps) {
  const [open, setOpen] = useState(_forceOpen)
  const [isFocused, setIsFocused] = useState(_forceOpen)
  const containerRef = useRef<HTMLDivElement>(null)

  const selected: string[] =
    value === undefined ? [] : Array.isArray(value) ? value : [value]

  // ── Close on outside click ─────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [open])

  // ── Close on ESC ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        setIsFocused(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleToggle = () => {
    if (disabled) return
    const next = !open
    setOpen(next)
    setIsFocused(next)
  }

  const handleSelect = (optValue: string) => {
    if (multiple) {
      const next = selected.includes(optValue)
        ? selected.filter((v) => v !== optValue)
        : [...selected, optValue]
      onChange?.(next)
    } else {
      onChange?.(optValue)
      setOpen(false)
      setIsFocused(false)
    }
  }


  // ── Derived styles ────────────────────────────────────────────────────────
  // border 두께를 항상 2px로 통일해 레이아웃 흔들림 방지
  const getBorder = () => {
    if (invalid) return "2px solid var(--color-border-danger-subtle)"
    if (open || isFocused || _forceFocused) return "2px solid var(--color-border-primary-subtle)"
    return "1px solid var(--color-border-normal)"
  }

  const getValueColor = () => {
    if (disabled) return "var(--color-label-disabled)"
    if (selected.length > 0) return "var(--color-label-normal)"
    return "var(--color-label-assistive)"
  }

  const selectedOptions = options.filter((o) => selected.includes(o.value))

  const displayText =
    selected.length === 0
      ? placeholder
      : options
          .filter((o) => selected.includes(o.value))
          .map((o) => o.label)
          .join(", ")

  const footerText = invalid ? errorText : helperText
  const footerColor = invalid
    ? "var(--color-foreground-danger)"
    : "var(--color-label-alternative)"

  return (
    <div
      ref={containerRef}
      style={{
        width: 320,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-050)",
        ...style,
      }}
    >
      {/* ── Label ─────────────────────────────────────────────────────── */}
      {label && (
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <span
            style={{
              fontSize: "var(--font-size-050)",
              fontWeight: "var(--font-weight-500)",
              lineHeight: "var(--font-line-height-035)",
              color: "var(--color-label-normal)",
            }}
          >
            {label}
          </span>
          {required && (
            <span
              style={{
                fontSize: "var(--font-size-075)",
                fontWeight: "var(--font-weight-600)",
                color: "var(--color-foreground-danger)",
              }}
            >
              *
            </span>
          )}
        </div>
      )}

      {/* ── Trigger + Dropdown ────────────────────────────────────────── */}
      <div style={{ position: "relative" }}>
        {/* Trigger */}
        <div
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={handleToggle}
          onFocus={() => !disabled && setIsFocused(true)}
          onBlur={() => { if (!open) setIsFocused(false) }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handleToggle()
            }
          }}
          style={{
            display: "flex",
            alignItems: overflow ? "flex-start" : "center",
            gap: "var(--space-100)",
            height: overflow ? undefined : 48,
            minHeight: overflow ? 48 : undefined,
            padding: "var(--space-150)",
            borderRadius: "var(--radius-400)",
            border: getBorder(),
            backgroundColor: disabled
              ? "var(--color-gray-100)"
              : "var(--color-background-normal)",
            cursor: disabled ? "not-allowed" : "pointer",
            pointerEvents: disabled ? "none" : undefined,
            outline: "none",
            boxShadow: "var(--shadows-xs-x) var(--shadows-xs-y) var(--shadows-xs-blur) var(--shadows-xs-spread) var(--shadows-xs-color)",
            transition: "border-color 150ms ease",
            userSelect: "none",
            overflow: overflow ? undefined : "hidden",
          }}
        >
          {/* ── Prefix ──────────────────────────────────────────── */}
          {prefix && (
            <span
              style={{
                width: 24,
                height: 24,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {prefix}
            </span>
          )}

          {/* ── Value / Placeholder / Chips ─────────────────────── */}
          <span
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              gap: "var(--space-050)",
              flexWrap: overflow ? "wrap" : "nowrap",
              overflow: "hidden",
            }}
          >
            {render === "chip" && selectedOptions.length > 0 ? (
              selectedOptions.map((opt) => (
                <span key={opt.value} onClick={(e) => e.stopPropagation()} style={{ flexShrink: 0 }}>
                  <Chip
                    size="xsmall"
                    variant="solid"
                    label={opt.label}
                    trailingIcon={!disabled ? <X size={10} /> : undefined}
                    onClick={!disabled ? () => onChange?.(selected.filter((v) => v !== opt.value)) : undefined}
                  />
                </span>
              ))
            ) : (
              <span
                style={{
                  fontSize: "var(--font-size-100)",
                  fontWeight: "var(--font-weight-400)",
                  lineHeight: "var(--font-line-height-075)",
                  color: getValueColor(),
                  overflow: "hidden",
                  textOverflow: overflow ? undefined : "ellipsis",
                  whiteSpace: overflow ? "normal" : "nowrap",
                }}
              >
                {displayText}
              </span>
            )}
          </span>

          {/* ── Chevron ─────────────────────────────────────────── */}
          <span
            style={{
              width: 24,
              height: 24,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: disabled
                ? "var(--color-label-disabled)"
                : "var(--color-label-alternative)",
            }}
          >
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </div>

        {/* ── Dropdown ──────────────────────────────────────────── */}
        {open && (
          <div
            role="listbox"
            aria-multiselectable={multiple}
            style={{
              position: "absolute",
              top: "calc(100% + var(--space-050))",
              left: 0,
              width: "100%",
              zIndex: 50,
              backgroundColor: "var(--color-background-normal)",
              borderRadius: "var(--radius-500)",
              border: "1px solid var(--color-border-normal)",
              boxShadow: [
                "var(--shadows-md-shadow-1-x) var(--shadows-md-shadow-1-y) var(--shadows-md-shadow-1-blur) var(--shadows-md-shadow-1-spread) var(--shadows-md-color)",
                "var(--shadows-md-shadow-2-x) var(--shadows-md-shadow-2-y) var(--shadows-md-shadow-2-blur) var(--shadows-md-shadow-2-spread) var(--shadows-md-color)",
              ].join(", "),
              padding: "var(--space-150)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-050)",
              maxHeight: 400,
              overflowY: "auto",
            }}
          >
            {options.map((opt) => (
              <MenuItem
                key={opt.value}
                type={multiple ? "checkbox" : menuItemType}
                label={opt.label}
                subLabel={opt.subLabel}
                selected={selected.includes(opt.value)}
                onClick={() => handleSelect(opt.value)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Helper / Error text ───────────────────────────────────── */}
      {footerText && (
        <span
          style={{
            fontSize: "var(--font-size-050)",
            fontWeight: "var(--font-weight-500)",
            lineHeight: "var(--font-line-height-035)",
            color: footerColor,
          }}
        >
          {footerText}
        </span>
      )}
    </div>
  )
}

Select.displayName = "Select"

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Select }
