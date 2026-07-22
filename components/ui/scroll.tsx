"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// ─── Scrollbar Thumb ─────────────────────────────────────────────────────────

export interface ScrollThumbProps {
  type?: "vertical" | "horizontal"
  /** Position along the track in px */
  offset: number
  /** Length of the thumb in px */
  size: number
}

function ScrollThumb({ type = "vertical", offset, size }: ScrollThumbProps) {
  const isVertical = type === "vertical"
  return (
    <div
      style={{
        position: "absolute",
        ...(isVertical
          ? { top: offset, left: "50%", transform: "translateX(-50%)", width: 6, height: size }
          : { left: offset, top: "50%", transform: "translateY(-50%)", height: 6, width: size }),
        borderRadius: "var(--radius-050)",
        backgroundColor: "var(--color-border-normal)",
        transition: isVertical ? "top 60ms linear" : "left 60ms linear",
      }}
    />
  )
}

// ─── ScrollArea ───────────────────────────────────────────────────────────────

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "vertical" | "horizontal" | "both"
  /** Min thumb length in px (default 24) */
  minThumbSize?: number
  /** Track width/height in px (default 12) */
  trackSize?: number
}

export function ScrollArea({
  type = "vertical",
  minThumbSize = 24,
  trackSize = 12,
  children,
  className,
  style,
  ...props
}: ScrollAreaProps) {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const vTrackRef = React.useRef<HTMLDivElement>(null)
  const hTrackRef = React.useRef<HTMLDivElement>(null)

  const [vThumb, setVThumb] = React.useState({ offset: 0, size: 0, visible: false })
  const [hThumb, setHThumb] = React.useState({ offset: 0, size: 0, visible: false })

  const hasVertical = type === "vertical" || type === "both"
  const hasHorizontal = type === "horizontal" || type === "both"

  const updateThumbs = React.useCallback(() => {
    const el = contentRef.current

    if (hasVertical && vTrackRef.current && el) {
      const canScroll = el.scrollHeight > el.clientHeight
      if (!canScroll) {
        setVThumb({ offset: 0, size: 0, visible: false })
      } else {
        const trackH = vTrackRef.current.clientHeight
        const thumbH = Math.max(Math.round((el.clientHeight / el.scrollHeight) * trackH), minThumbSize)
        const maxScroll = el.scrollHeight - el.clientHeight
        const thumbTop = maxScroll > 0 ? Math.round((el.scrollTop / maxScroll) * (trackH - thumbH)) : 0
        setVThumb({ offset: thumbTop, size: thumbH, visible: true })
      }
    }

    if (hasHorizontal && hTrackRef.current && el) {
      const canScroll = el.scrollWidth > el.clientWidth
      if (!canScroll) {
        setHThumb({ offset: 0, size: 0, visible: false })
      } else {
        const trackW = hTrackRef.current.clientWidth
        const thumbW = Math.max(Math.round((el.clientWidth / el.scrollWidth) * trackW), minThumbSize)
        const maxScroll = el.scrollWidth - el.clientWidth
        const thumbLeft = maxScroll > 0 ? Math.round((el.scrollLeft / maxScroll) * (trackW - thumbW)) : 0
        setHThumb({ offset: thumbLeft, size: thumbW, visible: true })
      }
    }
  }, [hasVertical, hasHorizontal, minThumbSize])

  React.useEffect(() => {
    updateThumbs()
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver(updateThumbs)
    ro.observe(el)
    return () => ro.disconnect()
  }, [updateThumbs])

  return (
    <div
      className={cn("relative", className)}
      style={style}
      {...props}
    >
      {/* Scrollable content */}
      <div
        ref={contentRef}
        className={cn(
          "[&::-webkit-scrollbar]:hidden",
          hasVertical && hasHorizontal && "overflow-auto",
          hasVertical && !hasHorizontal && "overflow-y-auto overflow-x-hidden",
          !hasVertical && hasHorizontal && "overflow-x-auto overflow-y-hidden",
        )}
        style={{ scrollbarWidth: "none", height: "100%", width: "100%" }}
        onScroll={updateThumbs}
      >
        {children}
      </div>

      {/* Vertical track */}
      {hasVertical && (
        <div
          ref={vTrackRef}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: hasHorizontal ? trackSize : 0,
            width: trackSize,
            flexShrink: 0,
          }}
        >
          {vThumb.visible && (
            <ScrollThumb type="vertical" offset={vThumb.offset} size={vThumb.size} />
          )}
        </div>
      )}

      {/* Horizontal track */}
      {hasHorizontal && (
        <div
          ref={hTrackRef}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: hasVertical ? trackSize : 0,
            height: trackSize,
            flexShrink: 0,
          }}
        >
          {hThumb.visible && (
            <ScrollThumb type="horizontal" offset={hThumb.offset} size={hThumb.size} />
          )}
        </div>
      )}
    </div>
  )
}

ScrollArea.displayName = "ScrollArea"
