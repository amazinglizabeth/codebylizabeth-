"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCheck, FaCopy, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

const MotionDiv = motion.div as any

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('eadenike14@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Prepare mailto or handle state
    const mailtoUrl = `mailto:eadenike14@gmail.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`
    window.location.href = mailtoUrl
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setEmail('')
      setMessage('')
    }, 4000)
  }

  return (
    <section id="contact" className="py-10 md:py-14 relative">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs uppercase tracking-wider mb-3">
          Get In Touch
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
          Let&apos;s build something exceptional together.
        </h2>
        <p className="text-slate-400 mt-3 text-base sm:text-lg">
          Available for full-time frontend roles, freelance web applications, and technical consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Connect Card */}
          <div className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/10 space-y-5">
            <h3 className="font-display font-bold text-xl text-white">
              Direct Contact
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Prefer an immediate conversation? Reach out directly via email or drop a message on LinkedIn.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-sm">
                    <FaEnvelope />
                  </div>
                  <div className="text-xs">
                    <div className="text-slate-500 font-mono">Email Address</div>
                    <div className="text-slate-200 font-medium truncate max-w-[190px] sm:max-w-xs">
                      eadenike14@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-white/8 flex items-center gap-3">
              <a
                href="https://github.com/amazinglizabeth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 text-xs font-semibold text-slate-200 hover:text-white transition-all"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 text-xs font-semibold text-slate-200 hover:text-white transition-all"
              >
                <FaLinkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10">
            <h3 className="font-display font-bold text-xl text-white mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your project scope or opportunity details below.
            </p>

            {submitted ? (
              <MotionDiv
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                  <FaCheck />
                </div>
                <h4 className="font-display font-bold text-lg text-white">Opening Email Client...</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Your message has been pre-filled. Thank you for reaching out — I will get back to you promptly!
                </p>
              </MotionDiv>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">Project Scope / Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <FaPaperPlane className="text-xs" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
