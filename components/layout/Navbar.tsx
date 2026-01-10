"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Navbar() {
  const path = usePathname()

  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-linear-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-black font-bold">E</div>
          </Link>
          <div className="hidden sm:block">
            <div className="text-sm text-(--text-muted)">CodeByLizabeth</div>
            <div className="text-xs text-(--text-muted)">Creative Frontend Developer</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-(--text-muted)">
          <Link href="/about" className={path?.startsWith('/about') ? 'text-(--text-primary)' : ''}>About</Link>
          <Link href="/projects" className={path?.startsWith('/projects') ? 'text-(--text-primary)' : ''}>Projects</Link>
          <Link href="/experience" className={path?.startsWith('/experience') ? 'text-(--text-primary)' : ''}>Experience</Link>
          <Link href="/contact" className={path?.startsWith('/contact') ? 'text-(--text-primary)' : ''}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a className="p-2 rounded-md text-(--text-muted) hover:text-(--text-primary) transition" href="https://github.com/amazinglizabeth/" aria-label="GitHub"><FaGithub /></a>
          <a className="p-2 rounded-md text-(--text-muted) hover:text-(--text-primary) transition" href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba" aria-label="LinkedIn"><FaLinkedin /></a>

        </div>
      </div>
    </header>
  )
}
