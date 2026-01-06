"use client"
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export const Magnifier: React.FC<{ className?: string }> = ({ className = '' }) => {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const lensCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const snapshotTextRef = useRef<HTMLCanvasElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const LENS_SIZE = 180
  const ZOOM = 1.9

  async function createSnapshot() {
    try {
      const html2canvas = (await import('html2canvas')).default
      const target = document.querySelector<HTMLElement>('#hero')
      if (!target) return
      const dpr = Math.max(1, window.devicePixelRatio || 1)

      // Create a text-only clone: hide images, svgs, canvases and background images
      const clone = target.cloneNode(true) as HTMLElement
      clone.style.position = 'fixed'
      clone.style.left = '-10000px'
      clone.style.top = '0'
      clone.style.width = `${target.offsetWidth}px`
      clone.style.boxSizing = 'border-box'
      clone.classList.add('magnifier-clone')

      // Hide media and non-text elements
      clone.querySelectorAll('img,svg,canvas,picture,video').forEach((n) => (n as HTMLElement).remove())
      // remove background images and heavy decorative shapes
      clone.querySelectorAll<HTMLElement>('*').forEach((el) => {
        const bg = window.getComputedStyle(el).backgroundImage
        if (bg && bg !== 'none') {
          el.style.background = 'transparent'
        }
      })

      document.body.appendChild(clone)

      // capture the clone (text-only) with transparent background
      const textCanvas = await html2canvas(clone as HTMLElement, { backgroundColor: null, scale: dpr })
      snapshotTextRef.current = textCanvas

      // cleanup clone
      document.body.removeChild(clone)

      // prepare lens canvas for high DPI
      if (lensCanvasRef.current) {
        lensCanvasRef.current.width = Math.round(LENS_SIZE * dpr)
        lensCanvasRef.current.height = Math.round(LENS_SIZE * dpr)
        lensCanvasRef.current.style.width = `${LENS_SIZE}px`
        lensCanvasRef.current.style.height = `${LENS_SIZE}px`
      }
    } catch (e) {
      // fail silently
    }
  }

  function handleUpdate(latest: any) {
    const lensCanvas = lensCanvasRef.current
    const snap = snapshotTextRef.current
    if (!wrapRef.current || !lensCanvas || !snap) return
    try {
      const rect = wrapRef.current.getBoundingClientRect()
      const tx = (typeof latest.x === 'number') ? latest.x : 0
      const ty = (typeof latest.y === 'number') ? latest.y : 0
      const centerX = rect.left + rect.width / 2 + tx
      const centerY = rect.top + rect.height / 2 + ty

      const target = document.querySelector<HTMLElement>('#hero')
      if (!target) return
      const targRect = target.getBoundingClientRect()
      const px = centerX - targRect.left
      const py = centerY - targRect.top

      const ctx = lensCanvas.getContext('2d')
      if (!ctx) return

      // snapshot canvas is rendered at devicePixelRatio scale
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      const sourceWidth = (LENS_SIZE / ZOOM) * dpr
      const sourceHeight = (LENS_SIZE / ZOOM) * dpr
      const sx = Math.max(0, Math.round((px * dpr) - sourceWidth / 2))
      const sy = Math.max(0, Math.round((py * dpr) - sourceHeight / 2))

      ctx.clearRect(0, 0, lensCanvas.width, lensCanvas.height)
      ctx.save()
      ctx.beginPath()
      ctx.arc(lensCanvas.width / 2, lensCanvas.height / 2, lensCanvas.width / 2, 0, Math.PI * 2)
      ctx.clip()
      // draw only the text snapshot scaled into lens
      ctx.drawImage(snap, sx, sy, sourceWidth, sourceHeight, 0, 0, lensCanvas.width, lensCanvas.height)
      ctx.restore()
      // subtle glass rim (transparent center)
      ctx.beginPath()
      ctx.arc(lensCanvas.width / 2, lensCanvas.height / 2, lensCanvas.width / 2 - 1.5, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.12)'
      ctx.lineWidth = 3
      ctx.stroke()

      // update ring color based on motion offsets so the border changes while moving
      try {
        if (ringRef.current) {
          // Ordered color list: yellow, blue, red, green, pink
          const COLORS = ['#FFD600', '#2B9BFF', '#FF495F', '#2CFF88', '#FF6EC7']
          // period in ms per color step
          const PERIOD = 800
          const tStep = Math.floor(Date.now() / PERIOD)
          // Optional small influence from motion so the step can shift slightly when moving
          const x = (typeof latest.x === 'number') ? latest.x : 0
          const y = (typeof latest.y === 'number') ? latest.y : 0
          const motionOffset = Math.round((x + y) / 200)
          const idx = Math.abs((tStep + motionOffset) % COLORS.length)
          const borderColor = COLORS[idx]
          // use a slightly transparent version for the glow
          const glow = borderColor + '33'
          ringRef.current.style.border = `3px solid ${borderColor}`
          ringRef.current.style.boxShadow = `0 10px 28px ${glow}`
        }
      } catch (e) {
        // ignore
      }
    } catch (e) {
      // ignore
    }
  }

  useEffect(() => {
    createSnapshot()
    // refresh snapshot every few seconds to account for any late images
    const timer = window.setInterval(() => createSnapshot(), 5000)
    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <div ref={wrapRef} className={`absolute pointer-events-none ${className}`}>
      <motion.div
        onUpdate={handleUpdate}
        animate={{
          x: [-220, 120, 40, -60, 160, -120, 100, -180],
          y: [-100, 100, -40, 80, -60, 120, 40, -80],
          rotate: [0, 10, -6, 6, -4, 8, -6, 0],
          scale: [1, 1.03, 1.02, 1.04, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      >
        <div style={{ width: LENS_SIZE, height: LENS_SIZE }} className="rounded-full border border-white/10 bg-transparent flex items-center justify-center shadow-xl overflow-hidden relative">
            {/* animated border ring */}
            <div ref={ringRef} className="absolute inset-0 rounded-full pointer-events-none" style={{ border: '3px solid rgba(255,255,255,0.12)', boxSizing: 'border-box', zIndex: 40, transition: 'border-color 220ms linear, box-shadow 220ms linear' }} />
            <canvas ref={lensCanvasRef} className="pointer-events-none" style={{ position: 'relative', zIndex: 10 }} />
            <div style={{ width: 110, height: 110, left: `calc(50% - 55px)`, top: `calc(50% - 55px)`, zIndex: 20 }} className="rounded-full border border-white/8 bg-white/6 mix-blend-normal pointer-events-none absolute" />
        </div>
      </motion.div>
    </div>
  )
}
