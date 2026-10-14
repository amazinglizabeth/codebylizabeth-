"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiFigma, 
  SiVite, 
  SiGit, 
  SiHtml5, 
  SiCss3,
  SiJavascript,
  SiRedux
} from 'react-icons/si'
import { FiCpu, FiLayers, FiActivity, FiTool } from 'react-icons/fi'

const MotionDiv = motion.div as any

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Frameworks & Core',
      icon: <FiCpu className="text-indigo-400" />,
      description: 'Modern, reactive frontend stacks powering fast and scalable user interfaces.',
      skills: [
        { name: 'React', level: 'Advanced', icon: <SiReact className="text-cyan-400" /> },
        { name: 'Next.js', level: 'Advanced', icon: <SiNextdotjs className="text-white" /> },
        { name: 'TypeScript', level: 'Proficient', icon: <SiTypescript className="text-blue-400" /> },
        { name: 'JavaScript (ES6+)', level: 'Advanced', icon: <SiJavascript className="text-amber-400" /> },
        { name: 'HTML5 Semantic', level: 'Expert', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS3 / Modern CSS', level: 'Expert', icon: <SiCss3 className="text-blue-500" /> },
      ]
    },
    {
      title: 'Styling, Design & Motion',
      icon: <FiLayers className="text-purple-400" />,
      description: 'Design systems, micro-animations, and fluid responsive behaviors.',
      skills: [
        { name: 'Tailwind CSS', level: 'Expert', icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'Framer Motion', level: 'Advanced', icon: <SiFramer className="text-purple-400" /> },
        { name: 'Figma to Code', level: 'Expert', icon: <SiFigma className="text-rose-400" /> },
        { name: 'Responsive Layouts', level: 'Expert', icon: <FiLayers className="text-emerald-400" /> },
        { name: 'Dark Mode Systems', level: 'Advanced', icon: <FiActivity className="text-indigo-400" /> },
        { name: 'Micro-interactions', level: 'Advanced', icon: <SiFramer className="text-pink-400" /> },
      ]
    },
    {
      title: 'State, Data & Architecture',
      icon: <FiActivity className="text-cyan-400" />,
      description: 'Managing complex application state, network requests, and realtime feeds.',
      skills: [
        { name: 'REST API Integration', level: 'Advanced', icon: <FiCpu className="text-cyan-400" /> },
        { name: 'State Management', level: 'Advanced', icon: <SiRedux className="text-purple-400" /> },
        { name: 'Form Validation', level: 'Advanced', icon: <FiActivity className="text-emerald-400" /> },
        { name: 'Auth & Session Flows', level: 'Proficient', icon: <FiTool className="text-amber-400" /> },
        { name: 'WebSockets / Feeds', level: 'Working', icon: <FiActivity className="text-blue-400" /> },
        { name: 'Speed Optimization', level: 'Advanced', icon: <FiZap className="text-yellow-400" /> },
      ]
    },
    {
      title: 'Tooling, Testing & Workflow',
      icon: <FiTool className="text-amber-400" />,
      description: 'Developer tooling and industry-standard deployment ecosystems.',
      skills: [
        { name: 'Vite / Bundlers', level: 'Advanced', icon: <SiVite className="text-purple-400" /> },
        { name: 'Git & Version Control', level: 'Advanced', icon: <SiGit className="text-orange-400" /> },
        { name: 'Turbopack', level: 'Proficient', icon: <SiNextdotjs className="text-slate-200" /> },
        { name: 'ESLint / Prettier', level: 'Advanced', icon: <FiTool className="text-blue-400" /> },
        { name: 'Vercel Deployment', level: 'Expert', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Chrome DevTools', level: 'Advanced', icon: <FiActivity className="text-emerald-400" /> },
      ]
    }
  ]

  function FiZap(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  }

  return (
    <section id="skills" className="py-10 md:py-14 relative">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
          Technical Arsenal
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
          Skills &amp; Technologies
        </h2>
        <p className="text-slate-400 mt-3 text-base sm:text-lg">
          Core toolset and frontend specializations honed across production applications and fintech products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skillCategories.map((category, idx) => (
          <MotionDiv
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-lg">
                {category.icon}
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                {category.title}
              </h3>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              {category.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col p-3 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/6 hover:border-indigo-400/30 transition-all cursor-default"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-300 transition-colors">
                      {skill.level}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-200 mt-2 truncate group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}
