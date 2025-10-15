"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MenuButton({
  color = "var(--neon-cyan)",
  isOpen,
  onToggle
}: {
  color?: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="border-2 transition-all duration-200 hover:scale-105"
      style={{
        borderColor: "var(--neon-cyan)",
        color: "var(--neon-cyan)",
        background: "transparent",
        boxShadow: `0 0 15px ${color}, inset 0 0 15px ${color}`,
      }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="h-5 w-5" strokeWidth={2.5} />
      ) : (
        <Menu className="h-5 w-5" strokeWidth={2.5} />
      )}
    </Button>
  )
}
