"use client"
import React from 'react'
import { Magnifier } from '@/components/ui/Magnifier'
import { Stagger } from '../animations/Stagger'
import { ParallaxShape } from '../animations/Parallax'
import { MagneticButton } from '../ui/MagneticButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative py-20">
      {/* Parallax background shapes */}
      <ParallaxShape speed={0.12} className="absolute -left-16 -top-10 opacity-40">
        <div className="w-48 h-48 rounded-full bg-(--accent-primary)/30 blur-3xl" />
      </ParallaxShape>
      <ParallaxShape speed={0.08} className="absolute -right-24 top-24 opacity-30">
        <div className="w-72 h-72 rounded-2xl bg-(--accent-secondary)/20 blur-3xl" />
      </ParallaxShape>

      <div className="max-w-4xl mx-auto text-center">
        <Stagger>
          <div className="mb-6">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="relative inline-block">
                <h1 data-magnify className="hero-title text-[44px] md:text-[72px] lg:text-[88px] leading-tight">Creative Frontend Developer</h1>
                <div aria-hidden className="absolute inset-0 -z-10 opacity-30 flex items-center justify-center">
                  <div data-magnify className="w-105 h-30 bg-linear-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full filter blur-3xl animate-pulse-slow" />
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12, duration: 0.6 }}>
              <p className="text-(--text-muted) max-w-2xl mx-auto text-lg">Crafting immersive digital experiences with motion, attention to detail, and production-ready frontend architecture.</p>
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center gap-4">
                <MagneticButton onClick={() => location.href = '/projects'}>View Projects</MagneticButton>
                <MagneticButton className="bg-transparent border border-(--border) text-(--text-primary)" onClick={() => location.href = '/contact'}>Contact</MagneticButton>
              </div>
            </motion.div>
          </div>

          <div className="mt-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}>
              <div className="flex items-center justify-center gap-6">
                <a className="text-(--text-muted) hover:text-(--text-primary) transition" href="https://github.com/amazinglizabeth/"> <FaGithub size={18} /> </a>
                <a className="text-(--text-muted) hover:text-(--text-primary) transition" href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"> <FaLinkedin size={18} /> </a>
              </div>
            </motion.div>
          </div>
        </Stagger>
      </div>

      {/* Decorative image removed; add floating magnifier overlay */}
<Magnifier className="block left-1/2 -translate-x-1/2 top-16 md:left-[62%] md:top-24 lg:left-[70%] lg:top-28" />
    </section>
  )
}
