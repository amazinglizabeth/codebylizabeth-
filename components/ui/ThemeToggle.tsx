"use client"
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const STORAGE_KEY = 'site-theme'

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'light' || stored === 'dark') return stored
    } catch (e) {}
    // default to dark
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try { localStorage.setItem(STORAGE_KEY, theme) } catch (e) {}
  }, [theme])

  return (
    <button aria-label="Toggle theme" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md bg-white/5 text-slate-100 hover:bg-white/8">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
