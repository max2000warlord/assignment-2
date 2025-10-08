"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

const ThemeContext = React.createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "dark",
  setTheme: () => { },
})

function getBasePath() {
  // Set in next.config.ts via env: { NEXT_PUBLIC_BASE_PATH: isProd ? '/assignment-2' : '' }
  return process.env.NEXT_PUBLIC_BASE_PATH ?? ""
}

function imageFor(theme: Theme) {
  const base = getBasePath()
  return theme === "dark"
    ? `${base}/synthwave-cityscape-dark.jpg`
    : `${base}/synthwave-cityscape.jpg`
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme)
  root.style.setProperty("--background-image", `url('${imageFor(theme)}')`)
}

export function ThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [theme, _setTheme] = React.useState<Theme>(defaultTheme)

  // Apply immediately on mount to avoid any gap
  React.useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as Theme | null
      const initial = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      _setTheme(initial)
      applyTheme(initial)
    } catch {
      applyTheme(defaultTheme)
    }
  }, [defaultTheme])

  const setTheme = React.useCallback((next: Theme) => {
    _setTheme(next)
    try {
      localStorage.setItem("theme", next)
    } catch { }
    applyTheme(next)
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
