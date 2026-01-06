"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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

  const MD: any = motion.div

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* colorful blurred background shapes */}
      <div aria-hidden className="about-bg -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="pt-8">
            <Stagger>
              <h1 className="about-title mb-6">I am Elizabeth I create <span className="about-accent">unconventional</span> yet functional & visually pleasing interfaces for website & webapp.</h1>

              <p className="text-(--text-muted) max-w-2xl text-lg">I blend visual design and frontend engineering to deliver production-grade interfaces with motion systems, accessible patterns, and component-driven architecture used in real products.</p>

              <div className="mt-8 flex gap-6">
                <GlassCard className="w-40">
                  <div className="text-sm text-(--text-muted)">Years</div>
                  <div className="text-3xl font-bold">{years}+</div>
                </GlassCard>

                <GlassCard className="w-40">
                  <div className="text-sm text-(--text-muted)">Projects</div>
                  <div className="text-3xl font-bold">10+</div>
                </GlassCard>
              </div>
            </Stagger>
          </div>

          <div className="relative flex items-center justify-center pt-12 md:pt-0">
            {/* stacked project cards to the right */}
            <div className="w-135 max-w-full">
                <div className="relative">
                  <MD
                    className="project-card"
                    aria-hidden
                    initial={{ opacity: 0, y: 30, x: 40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ y: -6, scale: 1.01 }}
                  >
                    <div className="project-inner" />
                  </MD>

                  <MD
                    className="project-card"
                    aria-hidden
                    initial={{ opacity: 0, y: 30, x: 20, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ delay: 0.16, duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="project-inner" />
                  </MD>

                  <MD
                    className="project-card"
                    role="img"
                    aria-label="Illustration"
                    initial={{ opacity: 0, y: 30, x: 0, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ delay: 0.24, duration: 0.7, ease: 'easeOut' }}
                    whileHover={{ y: -8, scale: 1.03 }}
                  >
                    <div className="project-inner flex items-center justify-center text-white text-xl font-medium">ILLUSTRATIONS</div>
                  </MD>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
