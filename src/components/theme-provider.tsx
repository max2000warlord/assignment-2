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
  theme: "light",
  setTheme: () => null,
})

export function ThemeProvider({ children, defaultTheme = "light", attribute = "class" }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const root = window.document.documentElement

    // Get the target background image
    const targetImage = theme === 'dark'
      ? '/synthwave-cityscape-dark.jpg'
      : '/synthwave-cityscape.jpg'

    // Create overlay with new background image
    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('${targetImage}');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      opacity: 0;
      transition: opacity 0.8s ease-in-out;
      pointer-events: none;
      z-index: -1;
    `

    document.body.appendChild(overlay)

    // Trigger fade in
    setTimeout(() => {
      overlay.style.opacity = '1'
    }, 10)

    // Change theme classes and update CSS variable at halfway point
    setTimeout(() => {
      root.classList.remove("light", "dark")
      root.classList.add(theme)

      // Update the CSS variable for the main background
      document.documentElement.style.setProperty(
        '--background-image',
        `url('${targetImage}')`
      )
    }, 900)

    // Fade out overlay and cleanup
    setTimeout(() => {
      overlay.style.opacity = '0'
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay)
        }
      }, 1500)
    }, 1500)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
