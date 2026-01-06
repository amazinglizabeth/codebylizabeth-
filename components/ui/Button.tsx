"use client"
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export const Button: React.FC<Props> = ({ children, variant = 'primary', ...props }) => {
  const base = 'px-4 py-2 rounded-md font-medium inline-flex items-center gap-2 transition-transform transform'
  const styles = variant === 'primary'
    ? 'bg-gradient-to-r from-sky-400 to-violet-500 text-black shadow-md hover:-translate-y-1 active:scale-95'
    : 'bg-transparent border border-white/6 text-slate-100 hover:-translate-y-1 active:scale-95'

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  )
}
