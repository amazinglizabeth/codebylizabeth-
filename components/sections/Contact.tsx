"use client"
import React, { useState } from 'react'
import { MagneticButton } from '../ui/MagneticButton'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section id="contact" className="py-12">
      <h3 className="text-3xl font-semibold">Contact</h3>
      <p className="text-(--text-muted) mt-2">Interested in collaborating? Send a concise note — I reply within a few business days.</p>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('UI-only form — integrate a backend or service to handle messages.') }}>
        <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="p-3 rounded-md bg-(--card) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--accent-primary)" />
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="p-3 rounded-md bg-(--card) border border-(--border) focus:outline-none focus:ring-2 focus:ring-(--accent-primary)" />
        <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="md:col-span-2 p-3 rounded-md bg-(--card) border border-(--border) h-36 focus:outline-none focus:ring-2 focus:ring-(--accent-primary)" />

        <div className="md:col-span-2">
          <MagneticButton type="submit">Send message</MagneticButton>
        </div>
      </form>

      <div className="mt-8 flex gap-4">
        <a className="text-(--text-muted) hover:text-(--text-primary)" href="https://github.com/amazinglizabeth/">GitHub</a>
        <a className="text-(--text-muted) hover:text-(--text-primary)" href="https://www.linkedin.com/in/adenike-elizabeth-olanrewaju-0b62681ba">LinkedIn</a>
      </div>
    </section>
  )
}
