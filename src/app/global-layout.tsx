'use client'
import { useState } from 'react'
import { SlideMenu } from '@/components/slide-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import StdNo from '@/components/Footer'
import { Menu, BookOpen, FileText, BarChart3, Calendar, FolderOpen, Wrench } from "lucide-react"
export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <StdNo />
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(true)}
          className="rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Open menu"
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <rect x="0" y="1" width="22" height="2" rx="1" />
            <rect x="0" y="7" width="22" height="2" rx="1" />
            <rect x="0" y="13" width="22" height="2" rx="1" />
          </svg>
        </button>
      </div>
      <SlideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      {children}
    </>
  )
}
