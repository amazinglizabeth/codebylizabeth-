"use client"
import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

export const ParallaxShape: React.FC<{ children: React.ReactNode; speed?: number; className?: string }> = ({ children, speed = 0.2, className = '' }) => {
  // Note: useViewportScroll is fine for simple parallax in client components
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -100 * speed])

  return (
    <div className={className}>
      <motion.div style={{ y } as any}>
        {children}
      </motion.div>
    </div>
  )
}
