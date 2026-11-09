import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Lightweight drifting-particle canvas used behind the hero.
 * - Pauses when offscreen or when the tab is hidden.
 * - Draws a single static frame for visitors who prefer reduced motion.
 */
export default function ParticleField({ className = '', density = 0.00007, maxParticles = 80 }) {
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles = []
    let frame = 0
    let visible = true
    let running = true
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const build = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      width = rect?.width ?? window.innerWidth
      height = rect?.height ?? window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(maxParticles, Math.max(20, Math.round(width * height * density)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.5 + 0.15,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 140, 90, ${p.a})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < 118) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(255, 110, 60, ${(1 - dist / 118) * 0.1})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
    }

    const step = () => {
      if (!running) return
      if (visible) {
        for (const p of particles) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -10) p.x = width + 10
          if (p.x > width + 10) p.x = -10
          if (p.y < -10) p.y = height + 10
          if (p.y > height + 10) p.y = -10
        }
        draw()
      }
      frame = requestAnimationFrame(step)
    }

    build()

    if (reduce) {
      draw()
      return undefined
    }

    frame = requestAnimationFrame(step)

    const onResize = () => {
      build()
      draw()
    }

    const onVisibility = () => {
      running = !document.hidden
      if (running) {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(step)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 },
    )

    window.addEventListener('resize', onResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    observer.observe(canvas)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      observer.disconnect()
    }
  }, [density, maxParticles, reduce])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
