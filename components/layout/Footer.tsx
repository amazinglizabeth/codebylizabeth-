"use client"

import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/8 bg-[#05070D] relative overflow-hidden mt-10 md:mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-extrabold text-lg text-white">
              Elizabeth Olanrewaju
            </span>
            <span className="text-xs font-mono text-slate-400 mt-1">
              Creative Frontend Engineer • Crafting resilient interfaces
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <Link href="/#about" className="hover:text-white transition">About</Link>
            <Link href="/#projects" className="hover:text-white transition">Projects</Link>
            <Link href="/#skills" className="hover:text-white transition">Skills</Link>
            <Link href="/#experience" className="hover:text-white transition">Experience</Link>
            <Link href="/#contact" className="hover:text-white transition">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/amazinglizabeth/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <HiArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Elizabeth. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            <span>100% Production Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
