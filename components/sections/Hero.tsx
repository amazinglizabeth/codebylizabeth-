"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCheck, FaCopy } from 'react-icons/fa'
import { HiArrowSmRight } from 'react-icons/hi'
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si'

const MotionDiv = motion.div as any
const MotionH1 = motion.h1 as any
const MotionP = motion.p as any

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'stack' | 'metrics'>('stack')

  const copyEmail = () => {
    navigator.clipboard.writeText('eadenike14@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="hero" className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-linear-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Beacon */}
            <MotionDiv
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium mb-6 shadow-sm shadow-indigo-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Creative Frontend Engineer</span>
              <span className="text-white/20">•</span>
              <span className="text-slate-300">Available for Work</span>
            </MotionDiv>

            {/* Main Headline */}
            <MotionH1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white"
            >
              Transforming complex ideas into{' '}
              <span className="gradient-text-accent">clean, motion-rich</span> digital experiences.
            </MotionH1>

            {/* Bio Paragraph */}
            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal"
            >
              Hi, I&apos;m <span className="text-white font-semibold">Elizabeth</span>. I engineer high-performance fintech dashboards, e-commerce stores, and responsive web platforms with modern design systems and seamless micro-interactions.
            </MotionP>

            {/* CTAs */}
            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Selected Work</span>
                <HiArrowSmRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-sm font-medium backdrop-blur-md transition-all active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-slate-400 text-xs" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href="https://github.com/amazinglizabeth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/8 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/8 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </MotionDiv>

            {/* Quick Tech Ticker */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/8 w-full flex items-center gap-4 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 uppercase tracking-wider text-[10px]">Core Stack</span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/6 text-slate-300">
                  <SiReact className="text-cyan-400" /> React 19
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/6 text-slate-300">
                  <SiNextdotjs className="text-white" /> Next.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/6 text-slate-300">
                  <SiTypescript className="text-blue-400" /> TypeScript
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/6 text-slate-300">
                  <SiTailwindcss className="text-teal-400" /> Tailwind
                </span>
              </div>
            </MotionDiv>
          </div>

          {/* Right Interactive Developer Card */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />

            <div className="glass-panel rounded-2xl overflow-hidden border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/8">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">Elizabeth.profile.tsx</span>
                </div>
                <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'stack' ? 'bg-indigo-500 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'metrics' ? 'bg-indigo-500 text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Impact
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-5">
                {activeTab === 'stack' ? (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 font-mono text-xs">
                      <div className="text-slate-500">// Engineering Focus</div>
                      <div className="mt-1 text-slate-200">
                        <span className="text-purple-400">const</span> <span className="text-indigo-300">developer</span> = &#123;
                      </div>
                      <div className="pl-4 text-slate-300 mt-1 space-y-0.5">
                        <div>name: <span className="text-emerald-400">&apos;Elizabeth Olanrewaju&apos;</span>,</div>
                        <div>role: <span className="text-cyan-400">&apos;Junior Frontend Engineer&apos;</span>,</div>
                        <div>company: <span className="text-amber-400">&apos;Crednet Technologies&apos;</span>,</div>
                        <div>obsession: <span className="text-rose-400">&apos;Pixel-perfect UI &amp; Motion&apos;</span>,</div>
                        <div>status: <span className="text-emerald-400">&apos;Ready to ship 🚀&apos;</span></div>
                      </div>
                      <div className="text-slate-200 mt-1">&#125;</div>
                    </div>

                    {/* Interactive Highlights */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/15">
                        <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs">
                          <SiFramer className="text-indigo-400" />
                          <span>Motion Design</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">Smooth transitions with Framer Motion &amp; CSS</p>
                      </div>

                      <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/15">
                        <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs">
                          <SiReact className="text-cyan-400" />
                          <span>Fintech UX</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug">Production trading dashboards &amp; wallets</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-center">
                        <div className="font-display text-3xl font-bold text-white">9+</div>
                        <div className="text-xs text-slate-400 mt-1 font-mono">Shipped Web Projects</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-center">
                        <div className="font-display text-3xl font-bold text-emerald-400">2+</div>
                        <div className="text-xs text-slate-400 mt-1 font-mono">Years Experience</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6">
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                        <span className="font-medium">Core Web Vitals &amp; Performance</span>
                        <span className="text-emerald-400 font-mono">98% Score</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-indigo-500 to-emerald-400 rounded-full w-[98%]" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 text-xs text-slate-300 space-y-1">
                      <div className="text-slate-400 text-[11px]">Primary Domains Delivered:</div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-[11px]">Fintech Platforms</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-[11px]">Crypto Trading</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-[11px]">Access Security</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/8 text-[11px]">E-Commerce</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Status Bar */}
                <div className="mt-4 pt-3 border-t border-white/6 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Next.js 16 • Turbopack
                  </span>
                  <span>100% Component Driven</span>
                </div>
              </div>
            </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  )
}
