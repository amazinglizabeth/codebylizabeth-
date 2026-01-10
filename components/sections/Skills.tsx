"use client"
import { GlassCard } from '../ui/GlassCard'

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  Tools: ['Vite', 'ESLint', 'Vitest'],
  'UI / UX': ['Figma', 'Framer Motion']
}

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h3 className="text-3xl font-semibold">Skills</h3>
      <p className="text-(--text-muted) mt-2">Floating skillsets — interactive, component-first, and production-ready.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, list]) => (
          <GlassCard key={cat} className="p-6">
            <h4 className="font-semibold mb-4">{cat}</h4>
            <div className="flex flex-wrap gap-3">
              {(list as string[]).map((s, i) => (
                <div key={s} className="group relative inline-flex items-center px-3 py-2 bg-(--card) rounded-full border border-[var(--border)] hover:scale-105 transition-transform" style={{ transformOrigin: 'center' }}>
                  <span className="text-(--text-muted) mr-2 text-sm">{s}</span>
                  <span className="w-2 h-2 rounded-full bg-(--accent-primary) opacity-80" />
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
