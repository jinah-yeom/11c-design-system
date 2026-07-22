"use client"

import * as React from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RadioProps {
  size?: "regular" | "large"
  weight?: "regular" | "bold"
  label?: string
  subLabel?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  name?: string
  value?: string
  onChange?: (value: string) => void
}

export interface RadioGroupProps {
  name: string
  value?: string
  onChange?: (value: string) => void
  children: React.ReactNode
}

// ─── Size config ─────────────────────────────────────────────────────────────

const sizeConfig = {
  regular: { cellHeight: 40, cellPadding: 8  },
  large:   { cellHeight: 48, cellPadding: 12 },
}

// ─── Context ─────────────────────────────────────────────────────────────────

interface RadioGroupCtx {
  name: string
  value?: string
  onChange?: (value: string) => void
}

const RadioGroupContext = React.createContext<RadioGroupCtx | null>(null)

// ─── Radio ───────────────────────────────────────────────────────────────────

function Radio({
  size = "regular",
  weight = "regular",
  label,
  subLabel,
  prefix,
  suffix,
  checked: checkedProp,
  disabled = false,
  name: nameProp,
  value = "",
  onChange,
}: RadioProps) {
  const group = React.useContext(RadioGroupContext)

  const name    = group?.name ?? nameProp
  const checked = group
    ? group.value !== undefined && group.value === value
    : checkedProp === true

  const handleChange = () => {
    if (disabled) return
    group?.onChange?.(value)
    onChange?.(value)
  }

  const cfg = sizeConfig[size]

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-200)",
        height: cfg.cellHeight,
        paddingLeft: cfg.cellPadding,
        paddingRight: cfg.cellPadding,
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {/* ── Interaction overlay (cell 전체) ─────────────────────────── */}
      {!disabled && (
        <span
          aria-hidden
          className="radio-cell-overlay"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--radius-400)",
            backgroundColor: "var(--color-label-normal)",
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 120ms ease",
          }}
        />
      )}

      {/* ── Hidden native input ──────────────────────────────────────── */}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0, pointerEvents: "none" }}
        aria-hidden
      />

      {/* ── Prefix slot ─────────────────────────────────────────────── */}
      {prefix && (
        <span style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {prefix}
        </span>
      )}

      {/* ── Radiomark ───────────────────────────────────────────────── */}
      <span
        style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
          borderRadius: "var(--radius-1000)",
          backgroundColor: checked
            ? "var(--color-theme-dependent-primary)"
            : "var(--color-background-normal)",
          border: checked ? "none" : "1.5px solid var(--color-border-normal)",
          transition: "background-color 120ms ease, border-color 120ms ease",
          zIndex: 1,
        }}
      >
        {checked && (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          />
        )}
      </span>

      {/* ── Text ────────────────────────────────────────────────────── */}
      {(label || subLabel) && (
        <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0, zIndex: 1 }}>
          {label && (
            <span
              style={{
                fontSize: "var(--font-size-075)",
                fontWeight: weight === "bold" ? "var(--font-weight-600)" : "var(--font-weight-500)",
                lineHeight: "var(--font-line-height-050)",
                color: "var(--color-label-normal)",
              }}
            >
              {label}
            </span>
          )}
          {subLabel && (
            <span
              style={{
                fontSize: "var(--font-size-050)",
                fontWeight: "var(--font-weight-400)",
                lineHeight: "var(--font-line-height-050)",
                color: "var(--color-label-alternative)",
              }}
            >
              {subLabel}
            </span>
          )}
        </span>
      )}

      {/* ── Suffix slot ─────────────────────────────────────────────── */}
      {suffix && (
        <span style={{ width: 16, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
          {suffix}
        </span>
      )}

      <style>{`
        label:not([style*="not-allowed"]):hover .radio-cell-overlay {
          opacity: 0.05;
        }
        label:not([style*="not-allowed"]):active .radio-cell-overlay {
          opacity: 0.12;
        }
      `}</style>
    </label>
  )
}

Radio.displayName = "Radio"

// ─── RadioGroup ──────────────────────────────────────────────────────────────

function RadioGroup({ name, value, onChange, children }: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div role="radiogroup" aria-label={name}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

RadioGroup.displayName = "RadioGroup"

// ─── Exports ─────────────────────────────────────────────────────────────────

export { Radio, RadioGroup }
