"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'

export function Navbar() {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (path === '/' && href.startsWith('/#')) return false
    return path === href || (href !== '/' && path?.startsWith(href))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pb-2 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-full border transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060810]/85 border-white/12 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl py-2 px-5' 
          : 'bg-[#0A0E1A]/70 border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-lg py-2.5 px-6'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo & Status */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/15 bg-white/5 flex items-center justify-center p-1 group-hover:border-indigo-400 transition-colors">
              <Image
                src="/cbl-logo.png"
                alt="CodeByLizabeth"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                Elizabeth
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/6 rounded-full px-3 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive(link.href)
                    ? 'text-white bg-white/10 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Socials & Contact CTA */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/amazinglizabeth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>

            <Link
              href="/#contact"
              className="relative inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.03] transition-all"
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {open ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto rounded-2xl bg-[#080B14]/95 border border-white/12 shadow-2xl backdrop-blur-2xl p-5">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Connect with me</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/amazinglizabeth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-slate-300"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
