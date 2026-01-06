"use client"
import React, { useRef, useState } from 'react'

export const MagneticHover: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [tx, setTx] = useState(0)
  const [ty, setTy] = useState(0)

  function onMove(e: React.MouseEvent) {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const dx = (e.clientX - (r.left + r.width / 2)) / 12
    const dy = (e.clientY - (r.top + r.height / 2)) / 12
    setTx(dx)
    setTy(dy)
  }
  function onLeave() { setTx(0); setTy(0) }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ perspective: 800 }}>
      <div style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}>
        {children}
      </div>
    </div>
  )
}
