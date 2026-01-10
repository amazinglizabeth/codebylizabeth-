"use client"
import React from 'react'
import Image from 'next/image'
import { GlassCard } from '../ui/GlassCard'
import { Badge } from '../ui/Badge'
import { projects } from '../../lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold">Selected Projects</h3>
        <p className="text-(--text-muted) hidden md:block">A curated selection of product and motion-driven UI work.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="group">
            <GlassCard className="p-0 overflow-hidden">
              <div className="relative">
                <Image src={p.image} alt={p.title} width={1200} height={700} className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <div className="flex gap-2">
                      {p.stack.slice(0,3).map(s => <Badge key={s}>{s}</Badge>)}
                    </div>
                  </div>
                  <p className="text-(--text-muted) mt-2 text-sm">{p.description}</p>

                  <div className="mt-4 flex items-center gap-4">
                    <a className="text-(--accent-primary)" href={p.live}>View Project</a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  )
}
