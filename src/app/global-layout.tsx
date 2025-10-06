'use client'
import { useState } from 'react'
import { SlideMenu } from '@/components/slide-menu'
import { ThemeToggle } from '@/components/theme-toggle'

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <ThemeToggle />
      <SlideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      {children}
    </>
  )
}
