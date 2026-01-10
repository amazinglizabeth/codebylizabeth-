"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'


export function Navbar() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-4 relative">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
         <Link href="/" className="flex items-center gap-3">
  <div className="w-14 h-14 rounded-lg overflow-hidden">
    <Image
      src="/cbl-logo.png"
      alt="CodeByLizabeth logo"
      width={54}
      height={54}
      className="object-contain"
      priority
    />
  </div>
</Link>

          <div className="hidden sm:block">
            <div className="text-sm text-(--text-muted)">CodeByLizabeth</div>
            <div className="text-xs text-(--text-muted)">Creative Frontend Developer</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-(--text-muted)">
          <Link href="/about" className={path?.startsWith('/about') ? 'text-(--text-primary)' : ''}>About</Link>
          <Link href="/projects" className={path?.startsWith('/projects') ? 'text-(--text-primary)' : ''}>Projects</Link>
          <Link href="/experience" className={path?.startsWith('/experience') ? 'text-(--text-primary)' : ''}>Experience</Link>
          <Link href="/contact" className={path?.startsWith('/contact') ? 'text-(--text-primary)' : ''}>Contact</Link>
        </nav>

        {/* Right Icons + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            className="p-2 rounded-md text-(--text-muted) hover:text-(--text-primary) transition"
            href="https://github.com/amazinglizabeth/"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="p-2 rounded-md text-(--text-muted) hover:text-(--text-primary) transition"
            href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-(--text-muted)"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-(--bg) border-t border-(--border)">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-(--text-muted)">
            <Link onClick={() => setOpen(false)} href="/about">About</Link>
            <Link onClick={() => setOpen(false)} href="/projects">Projects</Link>
            <Link onClick={() => setOpen(false)} href="/experience">Experience</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
