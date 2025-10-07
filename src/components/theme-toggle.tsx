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
      <Sun className="h-4 w-4 color-white/100" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4" />
    </div>
  )
}
