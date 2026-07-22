"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends Omit<React.ComponentProps<"textarea">, "size"> {
  label?: string
  required?: boolean
  invalid?: boolean
  helperText?: string
  errorText?: string
  maxCount?: number
}

function Textarea({
  label,
  required = false,
  invalid = false,
  helperText,
  errorText,
  maxCount,
  disabled,
  className,
  style,
  value,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  onScroll,
  ...props
}: TextareaProps) {
  const [focused, setFocused] = React.useState(false)
  const [internalCount, setInternalCount] = React.useState(() => {
    if (typeof value === "string") return value.length
    if (typeof defaultValue === "string") return defaultValue.length
    return 0
  })
  const [thumb, setThumb] = React.useState({ top: 0, height: 0, visible: false })

  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)

  const charCount = typeof value === "string" ? value.length : internalCount

  const updateThumb = React.useCallback(() => {
    const ta = textareaRef.current
    const track = trackRef.current
    if (!ta || !track) return

    const canScroll = ta.scrollHeight > ta.clientHeight
    if (!canScroll) {
      setThumb({ top: 0, height: 0, visible: false })
      return
    }

    const trackH = track.clientHeight
    const thumbH = Math.max(Math.round((ta.clientHeight / ta.scrollHeight) * trackH), 24)
    const maxScrollTop = ta.scrollHeight - ta.clientHeight
    const thumbTop = maxScrollTop > 0
      ? Math.round((ta.scrollTop / maxScrollTop) * (trackH - thumbH))
      : 0

    setThumb({ top: thumbTop, height: thumbH, visible: true })
  }, [])

  React.useEffect(() => {
    updateThumb()
    const ta = textareaRef.current
    if (!ta) return
    const ro = new ResizeObserver(updateThumb)
    ro.observe(ta)
    return () => ro.disconnect()
  }, [updateThumb])

  const borderColor = invalid
    ? "var(--color-border-danger-subtle)"
    : focused
    ? "var(--color-border-primary-subtle)"
    : "var(--color-border-normal)"

  const borderWidth = focused || invalid ? "2px" : "1px"

  const bgColor = disabled
    ? "var(--color-background-alternative)"
    : "var(--color-background-normal)"

  const showError = invalid && !!errorText
  const descriptionText = showError ? errorText : helperText
  const descriptionColor = showError
    ? "var(--color-foreground-danger)"
    : "var(--color-label-alternative)"

  const isCountExceeded = maxCount !== undefined && charCount > maxCount
  const countCurrentColor = invalid || isCountExceeded
    ? "var(--color-theme-danger)"
    : "var(--color-label-alternative)"

  const showBottomRow = !!descriptionText || maxCount !== undefined

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      {label && (
        <div className="flex items-center gap-0.5">
          <label
            style={{
              fontSize: "var(--font-size-050)",
              fontWeight: "var(--font-weight-500)",
              lineHeight: "var(--font-line-height-035)",
              color: "var(--color-label-normal)",
            }}
          >
            {label}
          </label>
          {required && (
            <span
              style={{
                fontSize: "var(--font-size-075)",
                fontWeight: "var(--font-weight-600)",
                color: "var(--color-theme-danger)",
              }}
            >
              *
            </span>
          )}
        </div>
      )}

      {/* Textarea container */}
      <div
        style={{
          borderRadius: "var(--radius-300)",
          border: `${borderWidth} solid ${borderColor}`,
          backgroundColor: bgColor,
          padding: "8px 6px 8px 12px",
          minHeight: 70,
          transition: "border-color 150ms ease, border-width 150ms ease",
          display: "flex",
          gap: "var(--space-100)",
        }}
      >
        {/* Textarea — native scrollbar hidden */}
        <textarea
          ref={textareaRef}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            "flex-1 min-h-[54px] bg-transparent border-none outline-none resize-none overflow-y-auto",
            "[&::-webkit-scrollbar]:hidden",
            disabled
              ? "cursor-not-allowed placeholder:text-[var(--color-label-disabled)]"
              : "placeholder:text-[var(--color-label-assistive)]",
            className,
          )}
          style={{
            fontSize: "var(--font-size-075)",
            fontWeight: "var(--font-weight-400)",
            lineHeight: "var(--font-line-height-050)",
            color: disabled ? "var(--color-label-disabled)" : "var(--color-label-normal)",
            scrollbarWidth: "none",
            ...style,
          }}
          onFocus={(e) => {
            setFocused(true)
            onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            onBlur?.(e)
          }}
          onChange={(e) => {
            const newVal = e.target.value
            if (maxCount !== undefined && newVal.length > maxCount) {
              const truncated = newVal.slice(0, maxCount)
              e.target.value = truncated
              setInternalCount(truncated.length)
              onChange?.(e)
              requestAnimationFrame(updateThumb)
              return
            }
            setInternalCount(newVal.length)
            onChange?.(e)
            requestAnimationFrame(updateThumb)
          }}
          onScroll={(e) => {
            updateThumb()
            onScroll?.(e)
          }}
          {...props}
        />

        {/* Custom scrollbar track */}
        <div
          ref={trackRef}
          style={{ width: 12, flexShrink: 0, position: "relative" }}
        >
          {thumb.visible && (
            <div
              style={{
                position: "absolute",
                top: thumb.top,
                left: "50%",
                transform: "translateX(-50%)",
                width: 6,
                height: thumb.height,
                borderRadius: "var(--radius-050)",
                backgroundColor: "var(--color-border-normal)",
                transition: "top 60ms linear",
              }}
            />
          )}
        </div>
      </div>

      {/* Bottom row: Description + Counter */}
      {showBottomRow && (
        <div className="flex justify-between items-start gap-2">
          {descriptionText ? (
            <p
              style={{
                flex: 1,
                fontSize: "var(--font-size-050)",
                fontWeight: "var(--font-weight-500)",
                lineHeight: "var(--font-line-height-035)",
                color: descriptionColor,
              }}
            >
              {descriptionText}
            </p>
          ) : (
            <span />
          )}
          {maxCount !== undefined && (
            <p
              style={{
                flexShrink: 0,
                fontSize: "var(--font-size-050)",
                fontWeight: "var(--font-weight-500)",
                lineHeight: "var(--font-line-height-035)",
                color: "var(--color-label-alternative)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: countCurrentColor }}>{charCount}</span>
              <span>/{maxCount}</span>
            </p>
          )}
        </div>
      )}
    </div>
  )
}

Textarea.displayName = "Textarea"

export { Textarea }