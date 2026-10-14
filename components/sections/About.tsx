"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiLayout, FiZap, FiCode, FiLayers } from 'react-icons/fi'
import { SiFigma, SiReact, SiTypescript } from 'react-icons/si'

const MotionDiv = motion.div as any

export default function About() {
  const [activeToken, setActiveToken] = useState<'tokens' | 'motion' | 'a11y'>('tokens')

  return (
    <section id="about" className="py-10 md:py-14 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-20 w-[450px] h-[350px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs uppercase tracking-wider mb-3">
          Behind The Code
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
          Where design precision meets production engineering.
        </h2>
        <p className="text-slate-400 mt-3 text-base sm:text-lg leading-relaxed">
          I am a frontend developer who treats user interfaces as a product craftsmanship discipline — ensuring high aesthetic standards, robust state management, and silky 60fps animations.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bento Card 1: Core Story (8 cols) */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4">
              <FiCode className="text-base" />
              <span>Engineering Philosophy</span>
            </div>
            
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
              Bridging the gap between Figma designs and scalable web architecture.
            </h3>
            
            <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed">
              In my day-to-day work at <span className="text-indigo-300 font-semibold">Crednet Technologies</span> and through independent engineering projects, I construct resilient frontend architectures using Next.js and TypeScript. I ensure every screen is fully responsive, accessible, and fast — from complex multi-asset investment calculators to high-volume merchant dashboards.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-2.5">
              <FiCheckCircle className="text-emerald-400 mt-1 shrink-0 text-sm" />
              <div>
                <div className="text-sm font-semibold text-white">Pixel Precision</div>
                <div className="text-xs text-slate-400 mt-0.5">Figma tokens faithfully converted into CSS variables</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <FiZap className="text-cyan-400 mt-1 shrink-0 text-sm" />
              <div>
                <div className="text-sm font-semibold text-white">Performance First</div>
                <div className="text-xs text-slate-400 mt-0.5">Minimal re-renders, fast LCP &amp; zero layout shifts</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <FiLayers className="text-purple-400 mt-1 shrink-0 text-sm" />
              <div>
                <div className="text-sm font-semibold text-white">Modular Code</div>
                <div className="text-xs text-slate-400 mt-0.5">Reusable design systems and typed components</div>
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Bento Card 2: Key Numbers & Experience (4 cols) */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-white/10 bg-linear-to-b from-indigo-950/20 to-transparent"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Proven Track Record
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="font-display font-extrabold text-5xl text-white">2+</div>
                <div className="text-sm text-indigo-300 font-medium mt-1">Years Building for the Web</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Active experience across junior engineering roles and production freelance engagements.
                </p>
              </div>

              <div className="pt-4 border-t border-white/8">
                <div className="font-display font-extrabold text-5xl gradient-text-accent">9+</div>
                <div className="text-sm text-cyan-300 font-medium mt-1">Live Applications &amp; Sites</div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Covering fintech, crypto, e-commerce, digital estates, and learning platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Clean Architecture</span>
            <span className="text-emerald-400">● 100% Reliable</span>
          </div>
        </MotionDiv>

        {/* Bento Card 3: Interactive Component Preview (6 cols) */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-6 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
              <FiLayout />
              <span>Design System Standards</span>
            </div>
            
            {/* Interactive Selector */}
            <div className="flex gap-1 bg-white/5 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => setActiveToken('tokens')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeToken === 'tokens' ? 'bg-indigo-500 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tokens
              </button>
              <button
                onClick={() => setActiveToken('motion')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeToken === 'motion' ? 'bg-indigo-500 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Motion
              </button>
              <button
                onClick={() => setActiveToken('a11y')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  activeToken === 'a11y' ? 'bg-indigo-500 text-white font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                A11y
              </button>
            </div>
          </div>

          {activeToken === 'tokens' && (
            <div className="p-4 rounded-2xl bg-black/40 border border-white/8 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span>--font-display: &apos;Space Grotesk&apos;;</span>
                <span className="text-indigo-400">Headings</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>--font-sans: &apos;Plus Jakarta Sans&apos;;</span>
                <span className="text-cyan-400">Body copy</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>--radius-panel: 24px;</span>
                <span className="text-emerald-400">Sleek curves</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="w-5 h-5 rounded-md bg-indigo-500 inline-block shadow-sm" />
                <span className="w-5 h-5 rounded-md bg-cyan-400 inline-block shadow-sm" />
                <span className="w-5 h-5 rounded-md bg-purple-500 inline-block shadow-sm" />
                <span className="w-5 h-5 rounded-md bg-emerald-500 inline-block shadow-sm" />
                <span className="text-slate-500 text-[11px] ml-2">Harmonious Dark Theme Palette</span>
              </div>
            </div>
          )}

          {activeToken === 'motion' && (
            <div className="p-4 rounded-2xl bg-black/40 border border-white/8 space-y-2.5 font-mono text-xs">
              <div className="text-slate-400">// Framer Motion Transitions</div>
              <div className="text-indigo-300">ease: [0.16, 1, 0.3, 1] <span className="text-slate-500">// Custom cubic-bezier</span></div>
              <div className="text-cyan-300">duration: 0.45s <span className="text-slate-500">// Snappy yet smooth</span></div>
              <div className="text-emerald-400">reducedMotion: &apos;user-respectful&apos;</div>
            </div>
          )}

          {activeToken === 'a11y' && (
            <div className="p-4 rounded-2xl bg-black/40 border border-white/8 space-y-2.5 font-mono text-xs">
              <div className="text-slate-400">// Web Accessibility Standards</div>
              <div className="text-emerald-300">✓ Semantic HTML5 landmarks (header, nav, main, footer)</div>
              <div className="text-cyan-300">✓ WCAG AAA high-contrast color ratios</div>
              <div className="text-indigo-300">✓ Keyboard focus rings &amp; screen reader labels</div>
            </div>
          )}

          <p className="text-xs text-slate-400 mt-4 leading-relaxed">
            Every client application and project I deliver implements strict frontend design hygiene, from CSS variables down to keyboard navigation.
          </p>
        </MotionDiv>

        {/* Bento Card 4: Tools & Stack Integrations (6 cols) */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-6 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Workflow &amp; Collaboration
            </div>
            
            <h4 className="font-display font-bold text-xl text-white">
              Seamless collaboration with designers and backend teams.
            </h4>
            
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Experienced in translating complex Figma flows, working alongside backend engineers on REST/WebSocket contracts, and maintaining clean version control practices.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/8 text-xs font-mono text-slate-200">
              <SiFigma className="text-purple-400" />
              <span>Figma Dev Mode</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/8 text-xs font-mono text-slate-200">
              <SiReact className="text-cyan-400" />
              <span>React Server/Client</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/8 text-xs font-mono text-slate-200">
              <SiTypescript className="text-blue-400" />
              <span>Strict TypeScript</span>
            </div>
          </div>
        </MotionDiv>

      </div>
    </section>
  )
}
