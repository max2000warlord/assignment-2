'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Home, Zap, Radio, Settings, School, User } from 'lucide-react'


interface SlideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  const pathname = usePathname()

  // Helper: checks if link matches current page
  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-25 right-0 h-max w-80 bg-black/50 backdrop-blur-2xl transform transition-transform duration-300 ease-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          borderColor: 'var(--neon-purple)',
          borderRadius: '10px',
          boxShadow:
            '0 0 30px var(--neon-purple), inset 0 0 30px rgba(138, 43, 226, 0.1)',
        }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <nav className="flex-1 space-y-2">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-1 rounded-lg font-mono text-lg transition-all duration-200 ${isActive('/') ? 'bg-[var(--neon-cyan)]/20' : 'hover:bg-[var(--neon-cyan)]/10'
                }`}
              style={{ color: 'var(--neon-cyan)' }}
            >
              <Home />
              Home
            </Link>

            <Link
              href="/tools/tabs-generator"
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-mono text-lg transition-all duration-200 ${isActive('/tools/tabs-generator')
                ? 'bg-[var(--neon-yellow)]/20'
                : 'hover:bg-[var(--neon-yellow)]/10'
                }`}
              style={{ color: 'var(--neon-yellow)' }}
            >
              <Zap /> Tabs Generator
            </Link>
            <Link
              href="/tools/escape-room"
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-mono text-lg transition-all duration-200 ${isActive('/tools/tabs-generator')
                ? 'bg-[var(--neon-pink)]/20'
                : 'hover:bg-[var(--neon-pink)]/10'
                }`}
              style={{ color: 'var(--neon-pink)' }}
            >
              <School /> Escape Room
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-mono text-lg transition-all duration-200 ${isActive('/tools/tabs-generator')
                ? 'bg-[var(--neon-pink)]/20'
                : 'hover:bg-[var(--neon-pink)]/10'
                }`}
              style={{ color: 'var(--neon-cyan)' }}
            >
              <User /> Escape Room
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

function MenuItem({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  return (
    <button
      className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-foreground transition-all duration-200 group"
      style={{
        background: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${color}20`
        e.currentTarget.style.boxShadow = `0 0 15px ${color}40`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <span
        className="group-hover:scale-110 transition-transform"
        style={{ color }}
      >
        {icon}
      </span>
      <span className="font-mono text-lg" style={{ color }}>
        {label}
      </span>
    </button>
  )
}
