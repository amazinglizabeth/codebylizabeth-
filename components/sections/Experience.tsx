"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../../lib/data'
import { FiBriefcase, FiCalendar, FiArrowUpRight } from 'react-icons/fi'

const MotionDiv = motion.div as any

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-14 relative">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs uppercase tracking-wider mb-3">
          Career Journey
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
          Work Experience
        </h2>
        <p className="text-slate-400 mt-3 text-base sm:text-lg">
          Roles where I engineered production interfaces, collaborated on API integration, and shipped user-facing products.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
        {timeline.map((item, idx) => (
          <MotionDiv
            key={item.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#060810] border-2 border-indigo-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

            {/* Experience Card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 group-hover:border-white/20 transition-all hover:-translate-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-indigo-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5 flex items-center gap-2">
                    <FiBriefcase className="text-indigo-400 text-xs" />
                    <span>{item.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-300 self-start sm:self-auto">
                  <FiCalendar className="text-[11px]" />
                  <span>{item.range}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Skills used */}
              {item.skills && (
                <div className="mt-6 pt-5 border-t border-white/8 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-1">Skills:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/6 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
