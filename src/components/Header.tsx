'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import { ModeToggle } from "@/components/mode-toggle";


export default function Header() {
  //const BurgerMenu = Menu
  const [menuOpen, setMenuOpen] = useState(false)

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
  const showSettings = (event: React.MouseEvent) => {
    event.preventDefault()
    // Add your settings logic here
    console.log('Settings clicked')
  }

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  //return (
  //<header className="flex justify-end items-center gap-2 p-2 pr-10">
  //  <ModeToggle />
  //  <BurgerMenu right width={200}>
  //      <Link id="home" className="menu-item" href="/">Home</Link>
  //    <Link id="about" className="menu-item" href="/about">About</Link>
  //    <Link id="contact" className="menu-item" href="/contact">Contact</Link>
  //    <button onClick={showSettings} className="menu-item--small">Settings</button>
  //  </BurgerMenu>
  //</header>
  //);
  return (
    <header className="flex justify-end items-center gap-2 p-2 pr-10">
      <ModeToggle />
      <Menu
        right
        width={200}
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        overlayClassName={"custom-overlay"}
      >
        <Link id="home" className="menu-item" href="/" onClick={closeMenu}>Home</Link>
        <Link id="about" className="menu-item" href="/about" onClick={closeMenu}>About</Link>
        <Link id="contact" className="menu-item" href="/contact" onClick={closeMenu}>Contact</Link>
        <button onClick={closeMenu} className="menu-item--small">Settings</button>
      </Menu>
    </header>
  )
}
