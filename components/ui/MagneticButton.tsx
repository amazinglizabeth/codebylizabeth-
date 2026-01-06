"use client"
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }

export const MagneticButton: React.FC<Props> = ({ children, className = '', ...props }) => {
  const ref = useRef<HTMLButtonElement | null>(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function onMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / 8
    const dy = (e.clientY - cy) / 8
    setX(dx)
    setY(dy)
  }

  function onLeave() {
    setX(0)
    setY(0)
  }

  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`relative overflow-hidden rounded-md px-5 py-3 font-semibold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-black shadow-lg ${className}`}
        {...props}
        style={{ perspective: 600 }}
      >
        <span style={{ transform: `translate3d(${x}px, ${y}px, 0)` }} className="relative z-10 inline-block">
          {children}
        </span>
        <span aria-hidden className="absolute inset-0 z-0" style={{ mixBlendMode: 'overlay', opacity: 0.06 }} />
      </button>
    </motion.div>
  )
}
