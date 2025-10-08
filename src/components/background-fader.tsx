"use client"

import * as React from "react"
import { useTheme } from "@/components/theme-provider"

function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? ""
}

function imageFor(theme: "dark" | "light") {
  const base = getBasePath()
  return theme === "dark"
    ? `${base}/synthwave-cityscape-dark.jpg`
    : `${base}/synthwave-cityscape.jpg`
}

export function BackgroundFader() {
  const { theme } = useTheme()
  const [baseSrc, setBaseSrc] = React.useState<string>("")
  const [topSrc, setTopSrc] = React.useState<string>("")
  const [showTop, setShowTop] = React.useState(false)
  const DURATION = 800 // ms

  // Initialize on mount
  React.useEffect(() => {
    setBaseSrc(imageFor(theme))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Crossfade whenever theme changes
  React.useEffect(() => {
    const next = imageFor(theme)
    if (!baseSrc) {
      setBaseSrc(next)
      return
    }
    if (next === baseSrc) return
    setTopSrc(next)
    setShowTop(true)
    const t = setTimeout(() => {
      setBaseSrc(next)
      setShowTop(false)
    }, DURATION)
    return () => clearTimeout(t)
  }, [theme, baseSrc])

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    pointerEvents: "none",
    backgroundImage: `url('${baseSrc}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    opacity: 1,
    transition: `opacity ${DURATION}ms ease-in-out`,
  }

  const topStyle: React.CSSProperties = {
    ...baseStyle,
    backgroundImage: `url('${topSrc}')`,
    opacity: showTop ? 1 : 0,
  }

  return (
    <>
      <div aria-hidden style={baseStyle} />
      <div aria-hidden style={topStyle} />
    </>
  )
}
