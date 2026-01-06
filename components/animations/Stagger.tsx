"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const Stagger: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  return (
    <div className={className}>
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delay } } }}>{children}</motion.div>
      </motion.div>
    </div>
  )
}
