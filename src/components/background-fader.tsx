"use client"

import * as React from "react"
import { useTheme } from "@/components/theme-provider"

function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? ""
}

function imageFor(theme: "dark" | "light") {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  // If images are in public/images/, include /images
  return theme === "dark"
    ? `${base}/images/synthwave-cityscape-dark.jpg`
    : `${base}/images/synthwave-cityscape.jpg`
}

export function BackgroundFader() {
  const { theme } = useTheme()
  const DURATION = 800

  // Base layer shows the current image; top layer crossfades in the next image.
  const [baseSrc, setBaseSrc] = React.useState<string>(() => imageFor(theme))
  const [topSrc, setTopSrc] = React.useState<string>("")
  const [showTop, setShowTop] = React.useState(false)

  React.useEffect(() => {
    const next = imageFor(theme)
    if (next === baseSrc) return
    setTopSrc(next)
    setShowTop(true)
    const t = setTimeout(() => {
      setBaseSrc(next)
      setShowTop(false)
    }, DURATION)
    return () => clearTimeout(t)
  }, [theme, baseSrc])

  const layerBase: React.CSSProperties = {
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

  const layerTop: React.CSSProperties = {
    ...layerBase,
    backgroundImage: `url('${topSrc}')`,
    opacity: showTop ? 1 : 0,
  }

  return (
    <>
      <div aria-hidden style={layerBase} />
      <div aria-hidden style={layerTop} />
    </>
  )
}
