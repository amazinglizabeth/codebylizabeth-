"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { timeline } from '../../lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h3 className="text-3xl font-semibold">Experience</h3>
      <p className="text-(--text-muted) mt-2">Selected roles where I led design systems, performance efforts, and cross-functional product builds.</p>

      <div className="mt-10 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-(--border)" />

        <div className="space-y-12">
          {timeline.map((t, i) => (
            <motion.div key={t.company} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className={`flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-6` }>
                <div className="w-8 h-8 rounded-full bg-(--accent-primary) flex items-center justify-center text-black font-bold">{i+1}</div>
                <div className="max-w-3xl">
                  <div className="text-sm text-(--text-muted)">{t.range} • <span className="text-(--text-primary) font-semibold">{t.role}</span></div>
                  <div className="text-(--text-muted) mt-2">{t.company} — {t.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
