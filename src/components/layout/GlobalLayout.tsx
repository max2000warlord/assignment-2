'use client'
import { useState } from 'react'
import { SlideMenu } from '@/components/layout/SlideMenu'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import StdNo from '@/components/layout/StdNo'
import { MenuButton } from '@/components/layout/MenuButton'
import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
import type React from "react" // Added import for React


export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <StdNo />
      <div className="fixed rounded-xl top-4 right-4 z-50 flex px-5 bg-black/50 backdrop-blur-2xl items-center gap-4">
        <ThemeToggle />
        <MenuButton
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)} // Toggle instead of always setting to true
        />
      </div>
      <SlideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      {children}
    </>
  )
}
