'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Home, Zap, Radio, Settings, Scale, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-card border-l-2 shadow-2xl transform transition-transform duration-300 ease-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          borderColor: 'var(--neon-purple)',
          boxShadow:
            '0 0 30px var(--neon-purple), inset 0 0 30px rgba(138, 43, 226, 0.1)',
        }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-2xl font-bold font-mono"
              style={{
                background: `linear-gradient(135deg, var(--neon-purple), var(--neon-pink))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 15px var(--neon-purple))',
              }}
            >
              MENU
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-primary/20"
              style={{ color: 'var(--neon-pink)' }}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Items */}
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

            <MenuItem icon={<Zap />} label="Features" color="var(--neon-yellow)" />

            <Link
              href="/tools/tabs-generator"
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-mono text-lg transition-all duration-200 ${isActive('/tools/tabs-generator')
                ? 'bg-[var(--neon-pink)]/20'
                : 'hover:bg-[var(--neon-pink)]/10'
                }`}
              style={{ color: 'var(--neon-pink)' }}
            >
              🔖 Tabs Generator
            </Link>

            <MenuItem icon={<Radio />} label="Broadcast" color="var(--neon-orange)" />
            <MenuItem icon={<User />} label="Profile" color="var(--neon-green)" />
            <MenuItem icon={<Settings />} label="Settings" color="var(--neon-pink)" />
          </nav>

          {/* Footer */}
          <div
            className="pt-6 border-t"
            style={{ borderColor: 'var(--neon-purple)' }}
          >
            <p className="text-sm text-muted-foreground font-mono text-center">
              SYNTHWAVE v1.0
            </p>
          </div>
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
