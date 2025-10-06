'use client'
import { useState } from 'react'
import { SlideMenu } from '@/components/slide-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import StdNo from '@/components/Footer'
import { MenuButton } from '@/components/MenuButton'
import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <StdNo />
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <ThemeToggle />
        <MenuButton />
      </div>
      <SlideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      {children}
    </>
  )
}
