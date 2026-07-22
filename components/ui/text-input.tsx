"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type TextInputSize = "sm" | "md" | "lg" | "xl"

export interface TextInputProps extends Omit<React.ComponentProps<"input">, "size"> {
  size?: TextInputSize
  label?: string
  required?: boolean
  invalid?: boolean
  helperText?: string
  errorText?: string
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  prefixText?: string
  suffixText?: string
  descriptionIcon?: React.ReactNode
  isFocused?: boolean
}

const sizeConfig: Record<TextInputSize, {
  wrapper: string
  font: React.CSSProperties
  labelFont: React.CSSProperties
}> = {
  sm: {
    wrapper: "h-6 px-2 py-1 rounded-[var(--radius-100)] gap-1",
    font: {
      fontSize: "var(--font-size-050)",
      lineHeight: "var(--font-line-height-035)",
      fontWeight: "var(--font-weight-400)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
    labelFont: {
      fontSize: "var(--font-size-050)",
      lineHeight: "var(--font-line-height-035)",
      fontWeight: "var(--font-weight-500)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
  },
  md: {
    wrapper: "h-8 px-3 py-1.5 rounded-[var(--radius-300)] gap-1.5",
    font: {
      fontSize: "var(--font-size-075)",
      lineHeight: "var(--font-line-height-050)",
      fontWeight: "var(--font-weight-400)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
    labelFont: {
      fontSize: "var(--font-size-050)",
      lineHeight: "var(--font-line-height-035)",
      fontWeight: "var(--font-weight-500)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
  },
  lg: {
    wrapper: "h-9 px-4 py-2 rounded-[var(--radius-300)] gap-2",
    font: {
      fontSize: "var(--font-size-075)",
      lineHeight: "var(--font-line-height-050)",
      fontWeight: "var(--font-weight-400)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
    labelFont: {
      fontSize: "var(--font-size-050)",
      lineHeight: "var(--font-line-height-035)",
      fontWeight: "var(--font-weight-500)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
  },
  xl: {
    wrapper: "h-10 px-4 py-2 rounded-[var(--radius-300)] gap-2",
    font: {
      fontSize: "var(--font-size-100)",
      lineHeight: "var(--font-line-height-075)",
      fontWeight: "var(--font-weight-400)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
    labelFont: {
      fontSize: "var(--font-size-050)",
      lineHeight: "var(--font-line-height-035)",
      fontWeight: "var(--font-weight-500)",
      letterSpacing: "var(--font-letter-spacing-none)",
    },
  },
}

const helperFont: React.CSSProperties = {
  fontSize: "var(--font-size-050)",
  lineHeight: "var(--font-line-height-035)",
  fontWeight: "var(--font-weight-500)",
  letterSpacing: "var(--font-letter-spacing-none)",
}

function TextInput({
  size = "md",
  label,
  required,
  invalid = false,
  helperText,
  errorText,
  leadingIcon,
  trailingIcon,
  prefixText,
  suffixText,
  descriptionIcon,
  isFocused: isFocusedProp,
  disabled,
  className,
  style,
  onFocus,
  onBlur,
  ...props
}: TextInputProps) {
  const config = sizeConfig[size]
  const [focusedState, setFocused] = React.useState(false)
  const focused = isFocusedProp ?? focusedState

  const wrapperBorderColor = invalid
    ? "var(--color-border-danger-subtle)"
    : disabled
    ? "var(--color-border-disabled)"
    : focused
    ? "var(--color-border-primary-subtle)"
    : "var(--color-border-normal)"

  const wrapperBg = disabled
    ? "var(--color-background-alternative)"
    : "var(--color-background-normal)"

  const labelColor = "var(--color-label-normal)"

  const inputTextColor = disabled
    ? "var(--color-label-disabled)"
    : "var(--color-label-normal)"

  const placeholderClass = disabled
    ? "placeholder:text-[var(--color-label-disabled)]"
    : "placeholder:text-[var(--color-label-assistive)]"

  const showError = invalid && errorText
  const descriptionText = showError ? errorText : helperText
  const descriptionColor = showError
    ? "var(--color-foreground-danger)"
    : "var(--color-label-alternative)"

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Label */}
      {label && (
        <div className="flex items-center gap-0.5">
          <label
            style={{
              ...config.labelFont,
              color: labelColor,
            }}
          >
            {label}
          </label>
          {required && (
            <span
              style={{
                fontSize: "var(--font-size-075)",
                lineHeight: "var(--font-line-height-050)",
                fontWeight: "var(--font-weight-600)",
                color: "var(--color-theme-danger)",
              }}
            >
              *
            </span>
          )}
        </div>
      )}

      {/* Input wrapper */}
      <div
        className={cn(
          "flex items-center border w-full",
          config.wrapper,
          disabled && "cursor-not-allowed",
        )}
        style={{
          backgroundColor: wrapperBg,
          borderColor: wrapperBorderColor,
          borderWidth: focused ? "2px" : "1px",
          boxShadow: "var(--shadows-xs-x) var(--shadows-xs-y) var(--shadows-xs-blur) var(--shadows-xs-spread) var(--shadows-xs-color)",
        }}
      >
        {/* Leading icon */}
        {leadingIcon && (
          <>
            <span
              className="shrink-0 flex items-center"
              style={{ color: disabled ? "var(--color-label-disabled)" : "var(--color-label-neutral)" }}
            >
              {leadingIcon}
            </span>
            <span style={{ width: "var(--space-050)", flexShrink: 0 }} />
          </>
        )}

        {/* Prefix text */}
        {prefixText && (
          <span
            className="shrink-0 whitespace-nowrap"
            style={{
              ...config.font,
              fontWeight: "var(--font-weight-500)",
              color: disabled ? "var(--color-label-disabled)" : "var(--color-label-alternative)",
            }}
          >
            {prefixText}
          </span>
        )}

        {/* Input element */}
        <input
          disabled={disabled}
          className={cn(
            "flex-1 min-w-0 bg-transparent border-none outline-none",
            placeholderClass,
            disabled && "cursor-not-allowed",
            className,
          )}
          style={{
            ...config.font,
            color: inputTextColor,
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
          {...props}
        />

        {/* Suffix text */}
        {suffixText && (
          <span
            className="shrink-0 whitespace-nowrap"
            style={{
              ...config.font,
              fontWeight: "var(--font-weight-500)",
              color: disabled ? "var(--color-label-disabled)" : "var(--color-label-alternative)",
            }}
          >
            {suffixText}
          </span>
        )}

        {/* Trailing icon */}
        {trailingIcon && (
          <span
            className="shrink-0 flex items-center"
            style={{ color: disabled ? "var(--color-label-disabled)" : "var(--color-label-neutral)" }}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {/* Helper / Error text */}
      {descriptionText && (
        <div
          className="flex items-center"
          style={{ gap: "var(--space-050)" }}
        >
          {descriptionIcon && (
            <span
              className="shrink-0 flex items-center"
              style={{
                width: "var(--dimension-200)",
                height: "var(--dimension-200)",
                color: descriptionColor,
              }}
            >
              {descriptionIcon}
            </span>
          )}
          <p
            style={{
              ...helperFont,
              color: descriptionColor,
            }}
          >
            {descriptionText}
          </p>
        </div>
      )}
    </div>
  )
}

TextInput.displayName = "TextInput"

export { TextInput }
