"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider" // Use your custom hook
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleToggle = (checked: boolean) => {
    console.log('Toggle called:', checked) // Debug log
    setTheme(checked ? "dark" : "light")
  }

  console.log('Current theme:', theme) // Debug log

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${theme === "dark"
          ? "scale-75 rotate-12"
          : "scale-100 rotate-0"
          }`}
        style={{
          color: theme === "dark" ? "#A1A1AA" : "var(--neon-yellow)"
        }}
      />
      <Switch
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${theme === "light"
          ? "scale-75 rotate-12"
          : "scale-100 rotate-0"
          }`}
        style={{
          color: theme === "light" ? "#A1A1AA" : "var(--neon-cyan)"
        }}
      />
    </div>
  )
}
