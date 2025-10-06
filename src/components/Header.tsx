'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ModeToggle } from '@/components/mode-toggle'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'

// load react-burger-menu client-side only
const Menu = dynamic(
  () => import('react-burger-menu').then(mod => mod.slide),
  { ssr: false }
)

// SVG icons that use currentColor so they follow text color
const BurgerIcon: React.FC = () => (
  <div className="text-black dark:text-white" aria-hidden>
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <rect x="0" y="1" width="22" height="2" rx="1" fill="currentColor" />
      <rect x="0" y="7" width="22" height="2" rx="1" fill="currentColor" />
      <rect x="0" y="13" width="22" height="2" rx="1" fill="currentColor" />
    </svg>
  </div>
)

const CrossIcon: React.FC = () => (
  <div className="text-black dark:text-white" aria-hidden>
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen)
  }

  useEffect(() => {
    Cookies.set('lastVisitedPage', pathname, { expires: 7 })
  }, [pathname])

  const closeMenu = () => setMenuOpen(false)
  const showSettings = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('Settings clicked')
  }

  const isActive = (path: string) =>
    pathname === path ? 'menu-item menu-item-active' : 'menu-item'

  return (
    <header className="flex justify-end items-center gap-7 p-2 pr-10">
      <ModeToggle />

      <Menu
        right
        width={250}
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        // use our SVG icons
        customBurgerIcon={<BurgerIcon />}
        customCrossIcon={<CrossIcon />}
      >
        <Link id="home" className={isActive('/')} href="/" onClick={closeMenu}>🏠 Home</Link>
        <Link id="tabs-generator" className={isActive('/tools/tabs-generator')} href="/tools/tabs-generator" onClick={closeMenu}>🔖 Tabs Generator</Link>
        <Link id="escape-room" className={isActive('/escape-room')} href="/escape-room" onClick={closeMenu}>🚪 Escape Room</Link>
        <Link id="court-room" className={isActive('/court-room')} href="/court-room" onClick={closeMenu}>⚖️ Court Room</Link>
        <Link id="coding-races" className={isActive('/coding-races')} href="/coding-races" onClick={closeMenu}>🏁 Coding Races</Link>
        <Link id="about" className={isActive('/about')} href="/about" onClick={closeMenu}>ℹ️ About</Link>
        <Link id="contact" className={isActive('/contact')} href="/contact" onClick={closeMenu}>📧 Contact</Link>

        <button
          onClick={showSettings}
          className="menu-item--small mt-4 pt-4 border-t border-gray-300 dark:border-gray-700"
        >
          ⚙️ Settings
        </button>
      </Menu>
    </header>
  )
}
