"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
}

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "dark",
  setTheme: () => null,
})

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const root = document.documentElement
    const base = "/assignment-2"
    const targetImage = theme === "dark"
      ? `${base}/synthwave-cityscape-dark.jpg`
      : `${base}/synthwave-cityscape.jpg`

    // 1) Apply theme immediately so variables/classes are correct right away
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    root.style.setProperty("--background-image", `url('${targetImage}')`)

    // 2) Overlay to crossfade new image across the entire viewport, above the body background
    const overlay = document.createElement("div")
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background-image: url('${targetImage}');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      opacity: 0;
      transition: opacity 0.8s ease-in-out;
      pointer-events: none;
      z-index: 0; /* IMPORTANT: above body background */
    `
    document.body.appendChild(overlay)

    // Fade overlay in, then out
    requestAnimationFrame(() => { overlay.style.opacity = "1" })
    const outTimer = setTimeout(() => {
      overlay.style.opacity = "0"
      const removeTimer = setTimeout(() => {
        overlay.remove()
      }, 900)
      return () => clearTimeout(removeTimer)
    }, 900)

    return () => {
      clearTimeout(outTimer)
      overlay.remove()
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = React.useContext(ThemeContext)
  if (ctx === undefined) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
