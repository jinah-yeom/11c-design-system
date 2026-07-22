import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant =
  | "brand-solid"
  | "brand-outline"
  | "neutral-solid"
  | "neutral-outline"
  | "neutral-weak"
  | "critical-solid"
  | "ghost"

export type ButtonSize = "small" | "medium" | "large"

export interface ButtonProps extends React.ComponentProps<"button"> {
  /** Visual style of the button */
  variant?: ButtonVariant
  /** Size of the button — maps to Small(32px) / Medium(40px) / Large(48px) */
  size?: ButtonSize
  /** Square icon-only mode — removes horizontal padding, forces equal width/height */
  iconOnly?: boolean
  /** Render as child element via Radix Slot */
  asChild?: boolean
}

// ─── Variants ─────────────────────────────────────────────────────────────────

/**
 * Token mapping reference (all colors from styles/tokens.css):
 *
 * BG tokens
 *   --color-theme-dependent-primary  → #1e6ef5  (brand blue)
 *   --color-theme-danger             → #d92d2d  (critical red)
 *   --color-gray-800                 → #3e404c  (neutral solid)
 *   --color-theme-secondary          → #e8e8ee  (neutral weak)
 *   --color-gray-100                 → #f0f0f5  (disabled surface)
 *   --color-gray-050                 → #f7f7fa  (hover surface on transparent)
 *
 * Text tokens
 *   --color-label-inverse            → #ffffff           (on dark bg)
 *   --color-label-neutral            → rgba(46,47,51,.88) (on light bg)
 *   --color-label-assistive          → rgba(55,56,60,.28) (solid disabled)
 *   --color-label-disabled           → rgba(55,56,60,.16) (outline/ghost disabled)
 *
 * Border tokens
 *   --color-border-primary    → #1e6ef5  (brand outline)
 *   --color-border-secondary  → #cdced6  (neutral outline)
 *   --color-border-disabled   → #e8e8ee  (any disabled outline)
 *
 * Interaction (hover/pressed)
 *   Solid variants   → brightness filter (no hardcoded overlay color)
 *   Transparent/weak → bg-[var(--color-gray-050)] hover / bg-[var(--color-gray-100)] active
 */
const buttonVariants = cva(
  // Base styles
  [
    "relative inline-flex shrink-0 items-center justify-center gap-2",
    "rounded-lg border whitespace-nowrap overflow-hidden",
    "transition-[background-color,color,border-color,opacity] duration-200",
    "select-none outline-none cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "focus-visible:ring-[var(--color-border-primary)]",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        // ── Brand Solid ──────────────────────────────────────────────────────
        "brand-solid": [
          "bg-[var(--color-theme-dependent-primary)]",
          "text-[var(--color-label-inverse)]",
          "border-transparent",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-label-normal)] before:opacity-0",
          "hover:before:opacity-[0.075] active:before:opacity-[0.18]",
          "disabled:bg-[var(--color-gray-100)]",
          "disabled:text-[var(--color-label-assistive)]",
          "disabled:before:hidden",
        ].join(" "),

        // ── Brand Outline ────────────────────────────────────────────────────
        "brand-outline": [
          "bg-transparent",
          "text-[var(--color-theme-dependent-primary)]",
          "border-[var(--color-border-primary)]",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-theme-dependent-primary)] before:opacity-0",
          "hover:before:opacity-[0.05] active:before:opacity-[0.12]",
          "disabled:bg-transparent",
          "disabled:text-[var(--color-label-disabled)]",
          "disabled:border-[var(--color-border-disabled)]",
          "disabled:before:hidden",
        ].join(" "),

        // ── Neutral Solid ────────────────────────────────────────────────────
        "neutral-solid": [
          "bg-[var(--color-gray-800)]",
          "text-[var(--color-label-inverse)]",
          "border-transparent",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-label-normal)] before:opacity-0",
          "hover:before:opacity-[0.075] active:before:opacity-[0.18]",
          "disabled:bg-[var(--color-gray-100)]",
          "disabled:text-[var(--color-label-assistive)]",
          "disabled:before:hidden",
        ].join(" "),

        // ── Neutral Outline ──────────────────────────────────────────────────
        "neutral-outline": [
          "bg-transparent",
          "text-[var(--color-label-neutral)]",
          "border-[var(--color-border-secondary)]",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-base-black)] before:opacity-0",
          "hover:before:opacity-[0.05] active:before:opacity-[0.12]",
          "disabled:bg-transparent",
          "disabled:text-[var(--color-label-disabled)]",
          "disabled:border-[var(--color-border-disabled)]",
          "disabled:before:hidden",
        ].join(" "),

        // ── Neutral Weak ─────────────────────────────────────────────────────
        "neutral-weak": [
          "bg-[var(--color-theme-secondary)]",
          "text-[var(--color-label-neutral)]",
          "border-transparent",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-label-neutral)] before:opacity-0",
          "hover:before:opacity-[0.05] active:before:opacity-[0.12]",
          "disabled:bg-[var(--color-gray-100)]",
          "disabled:text-[var(--color-label-assistive)]",
          "disabled:before:hidden",
        ].join(" "),

        // ── Critical Solid ───────────────────────────────────────────────────
        "critical-solid": [
          "bg-[var(--color-theme-danger)]",
          "text-[var(--color-label-inverse)]",
          "border-transparent",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-label-normal)] before:opacity-0",
          "hover:before:opacity-[0.075] active:before:opacity-[0.18]",
          "disabled:bg-[var(--color-gray-100)]",
          "disabled:text-[var(--color-label-assistive)]",
          "disabled:before:hidden",
        ].join(" "),

        // ── Ghost ────────────────────────────────────────────────────────────
        ghost: [
          "bg-transparent",
          "text-[var(--color-label-neutral)]",
          "border-transparent",
          "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
          "before:bg-[var(--color-base-black)] before:opacity-0",
          "hover:before:opacity-[0.05] active:before:opacity-[0.12]",
          "disabled:bg-transparent",
          "disabled:text-[var(--color-label-disabled)]",
          "disabled:before:hidden",
        ].join(" "),
      },

      size: {
        // height / px / py / font-size / icon-size match Figma spec exactly
        small:  "h-8  px-3 py-1.5 [&_svg]:size-4", // 32px / 12px / 6px  / 16px
        medium: "h-10 px-4 py-2   [&_svg]:size-5", // 40px / 16px / 8px  / 20px
        large:  "h-12 px-6 py-3   [&_svg]:size-5", // 48px / 24px / 12px / 20px
      },

      iconOnly: {
        true:  "",
        false: "",
      },
    },

    compoundVariants: [
      // icon-only: square, remove horizontal padding
      { size: "small",  iconOnly: true, class: "w-8  px-0" },
      { size: "medium", iconOnly: true, class: "w-10 px-0" },
      { size: "large",  iconOnly: true, class: "w-12 px-0" },
    ],

    defaultVariants: {
      variant: "brand-solid",
      size: "medium",
      iconOnly: false,
    },
  }
)

// ─── Component ────────────────────────────────────────────────────────────────

const fontStyles = {
  small: {
    fontSize:      "var(--font-size-075)",
    fontWeight:    "var(--font-weight-600)",
    lineHeight:    "var(--font-line-height-050)",
    letterSpacing: "var(--font-letter-spacing-none)",
  },
  medium: {
    fontSize:      "var(--font-size-100)",
    fontWeight:    "var(--font-weight-600)",
    lineHeight:    "var(--font-line-height-075)",
    letterSpacing: "var(--font-letter-spacing-none)",
  },
  large: {
    fontSize:      "var(--font-size-100)",
    fontWeight:    "var(--font-weight-600)",
    lineHeight:    "var(--font-line-height-075)",
    letterSpacing: "var(--font-letter-spacing-none)",
  },
} as const

function Button({
  className,
  variant,
  size = "medium",
  iconOnly = false,
  asChild = false,
  style,
  ...props
}: ButtonProps & VariantProps<typeof buttonVariants>) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-icon-only={iconOnly || undefined}
      className={cn(buttonVariants({ variant, size, iconOnly, className }))}
      style={{ ...fontStyles[size], ...style }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
