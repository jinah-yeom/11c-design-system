"use client"

import * as React from "react"
import { User } from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AvatarProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  initials?: string
  src?: string
  alt?: string
}

// ─── Size config ──────────────────────────────────────────────────────────────

const sizeConfig = {
  xs: { dimension: 20, fontSize: "var(--font-size-050)", lineHeight: "var(--font-line-height-035)", iconSize: 10 },
  sm: { dimension: 24, fontSize: "var(--font-size-050)", lineHeight: "var(--font-line-height-035)", iconSize: 12 },
  md: { dimension: 28, fontSize: "var(--font-size-075)", lineHeight: "var(--font-line-height-050)", iconSize: 14 },
  lg: { dimension: 32, fontSize: "var(--font-size-100)", lineHeight: "var(--font-line-height-075)", iconSize: 16 },
  xl: { dimension: 40, fontSize: "var(--font-size-300)", lineHeight: "var(--font-line-height-200)", iconSize: 20 },
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({
  size = "md",
  initials,
  src,
  alt = "",
}: AvatarProps) {
  const cfg = sizeConfig[size]

  const resolvedType = src ? "images" : initials ? "initials" : "default"

  const containerStyle: React.CSSProperties = {
    width: cfg.dimension,
    height: cfg.dimension,
    borderRadius: "var(--radius-1000)",
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor:
      resolvedType === "default"
        ? "var(--color-border-secondary)"
        : "var(--color-background-alternative)",
  }

  if (resolvedType === "images") {
    return (
      <span style={containerStyle}>
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </span>
    )
  }

  if (resolvedType === "initials") {
    return (
      <span style={containerStyle}>
        <span
          style={{
            fontSize: cfg.fontSize,
            fontWeight: "var(--font-weight-400)",
            lineHeight: cfg.lineHeight,
            color: "var(--color-label-normal)",
            userSelect: "none",
          }}
        >
          {initials!.slice(0, 2).toUpperCase()}
        </span>
      </span>
    )
  }

  return (
    <span style={containerStyle}>
      <User size={cfg.iconSize} color="var(--color-label-inverse)" strokeWidth={1.5} />
    </span>
  )
}

Avatar.displayName = "Avatar"

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Avatar }
