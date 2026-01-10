"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { Stagger } from '../animations/Stagger'

export default function About() {
  const [years, setYears] = useState(0)

  useEffect(() => {
    let start = 0
    const target = 2
    const id = setInterval(() => {
      start += 1
      setYears(start)
      if (start >= target) clearInterval(id)
    }, 120)
    return () => clearInterval(id)
  }, [])

  const MD: unknown = motion.div

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* colorful blurred background shapes */}
      <div aria-hidden className="about-bg -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 items-start">
          
          {/* LEFT CONTENT */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <Stagger>
              <h1 className="about-title mb-5 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                I am Elizabeth I create{" "}
                <span className="about-accent">unconventional</span> yet functional
                & visually pleasing interfaces for website & webapp.
              </h1>

              <p className="text-(--text-muted) max-w-2xl text-base sm:text-lg">
                I blend visual design and frontend engineering to deliver
                production-grade interfaces with motion systems, accessible
                patterns, and component-driven architecture used in real
                products.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
                <GlassCard className="w-36 sm:w-40">
                  <div className="text-sm text-(--text-muted)">Years</div>
                  <div className="text-3xl font-bold">{years}+</div>
                </GlassCard>

                <GlassCard className="w-36 sm:w-40">
                  <div className="text-sm text-(--text-muted)">Projects</div>
                  <div className="text-3xl font-bold">10+</div>
                </GlassCard>
              </div>
            </Stagger>
          </div>

          {/* RIGHT STACKED CARDS */}
<div className="relative flex items-center justify-center pt-8 sm:pt-10 md:pt-0">
  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
    
    {/* CARD 1 (BOTTOM) */}
    <motion.div
      className="project-card relative z-10"
      initial={{ opacity: 0, y: 40, x: 0 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="project-inner" />
    </motion.div>

    {/* CARD 2 (MIDDLE) */}
    <motion.div
      className="project-card relative z-20 -mt-20 sm:-mt-24"
      initial={{ opacity: 0, y: 60, x: 10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="project-inner" />
    </motion.div>

    {/* CARD 3 (TOP) */}
    <motion.div
      className="project-card relative z-30 -mt-20 sm:-mt-24"
      initial={{ opacity: 0, y: 80, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -10, scale: 1.03 }}
    >
      <div className="project-inner flex items-center justify-center text-white text-base sm:text-xl font-medium">
        ILLUSTRATIONS
      </div>
    </motion.div>

  </div>
</div>


        </div>
      </div>
    </section>
  )
}
