"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../lib/data'
import { FiExternalLink, FiGlobe } from 'react-icons/fi'

const MotionDiv = motion.div as any

type CategoryFilter = 'all' | 'web-app' | 'website'

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.categories?.includes(filter))

  const categories: { label: string; value: CategoryFilter; count: number }[] = [
    { label: 'All Projects', value: 'all', count: projects.length },
    { label: 'Web App', value: 'web-app', count: projects.filter(p => p.categories?.includes('web-app')).length },
    { label: 'Website', value: 'website', count: projects.filter(p => p.categories?.includes('website')).length },
  ]

  const cleanUrl = (url: string) => {
    return url.replace('https://', '').replace('www.', '').replace(/\/$/, '')
  }

  return (
    <section id="projects" className="py-10 md:py-14 relative">
      {/* Ambient background bloom */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Featured Projects &amp; Web Apps
          </h2>
          <p className="text-slate-400 mt-2 max-w-xl text-base">
            A curated collection of production fintech apps, trading portals, estate security, and high-conversion client web solutions.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                filter === cat.value
                  ? 'bg-linear-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {cat.label} <span className="opacity-60 text-[10px]">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <MotionDiv 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <MotionDiv
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              className="group flex flex-col rounded-2xl glass-panel overflow-hidden border border-white/10 hover:border-indigo-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Browser Mockup Top Bar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-black/40 border-b border-white/6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                </div>
                
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-slate-400 max-w-[180px] truncate">
                  <FiGlobe className="text-[10px] text-slate-500 shrink-0" />
                  <span className="truncate">{cleanUrl(project.live)}</span>
                </div>

                <div className="w-8" />
              </div>

              {/* Screenshot Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-[#060810] via-black/20 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
                
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-indigo-500/90 text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-md backdrop-blur-xs">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Details */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-linear-to-b from-transparent to-black/20">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/6 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-5 mt-5 border-t border-white/6 flex items-center justify-between">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                  >
                    <span>Visit Live Site</span>
                    <FiExternalLink className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {project.badge || 'Web App'}
                  </span>
                </div>
              </div>
            </MotionDiv>
          ))}
        </AnimatePresence>
      </MotionDiv>
    </section>
  )
}
