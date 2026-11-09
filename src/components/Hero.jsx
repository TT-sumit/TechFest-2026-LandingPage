import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'
import { festival, links } from '../data/site'
import ActionLink from './ui/ActionLink'
import Countdown from './Countdown'
import ParticleField from './ui/ParticleField'

const WORD = 'TECHFEST'

const letterParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } },
}

const letter = {
  hidden: { opacity: 0, y: '0.32em', filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const sectionRef = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15])

  const handlePointerMove = (event) => {
    if (reduce) return
    const node = sectionRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    node.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      {/* ---------- backdrop layers ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(130%_85%_at_50%_-15%,rgba(255,74,28,0.16),transparent_62%)]" />
        <div className="hud-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(75%_60%_at_50%_35%,#000_10%,transparent_78%)]" />

        <div className="absolute -left-40 top-0 size-[34rem] animate-glow rounded-full bg-flame/16 blur-[130px]" />
        <div className="absolute -right-32 top-1/3 size-[30rem] animate-glow rounded-full bg-ember/8 blur-[140px] [animation-delay:2s]" />

        <ParticleField className="absolute inset-0 h-full w-full opacity-70" />

        <div className="grid-floor absolute inset-x-0 bottom-0 h-[45vh] animate-floor opacity-70" />

        <div className="absolute inset-0 bg-[radial-gradient(560px_circle_at_var(--mx,50%)_var(--my,45%),rgba(255,120,60,0.12),transparent_68%)]" />

        <div className="absolute inset-x-0 h-px animate-scan bg-gradient-to-r from-transparent via-flame/70 to-transparent" />

        <div className="scanlines absolute inset-0 opacity-[0.35] mix-blend-soft-light" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* ---------- HUD rails ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[92px] z-10 hidden justify-center sm:flex"
      >
        <div className="flex w-full max-w-[1320px] items-center justify-between px-8 font-mono text-[9.5px] uppercase tracking-[0.3em] text-ash-2/80">
          <span>
            TF//{festival.edition} — EST. {festival.founded}
          </span>
          <span className="text-ash-2/70">POWAI · MUMBAI · {festival.coordinates}</span>
        </div>
      </div>

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1320px] px-5 text-center sm:px-8"
      >
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border border-line bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 animate-blink rounded-full bg-flame" />
            <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-chalk sm:text-[10px]">
              {festival.editionLabel}
            </span>
          </span>
          <span className="hidden h-3 w-px bg-line-strong sm:block" />
          <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-ash sm:text-[10px]">
            {festival.datesShort}
          </span>
        </motion.div>

        <h1 className="mt-8 sm:mt-10">
          <span className="sr-only">
            Techfest 2026, IIT Bombay. An Aetherial Renaissance. 16 to 18 December 2026.
          </span>
          <motion.span
            aria-hidden="true"
            variants={letterParent}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="flex justify-center font-display text-[clamp(2.85rem,15.1vw,13.5rem)] font-semibold leading-[0.85] tracking-[-0.045em] text-chalk"
          >
            {WORD.split('').map((char, index) => (
              <motion.span key={`${char}-${index}`} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 flex flex-col items-center gap-4 sm:mt-4"
        >
          <p
            aria-hidden="true"
            className="text-outline font-display text-[clamp(1.05rem,4.6vw,2.9rem)] font-medium leading-none tracking-[0.28em] sm:tracking-[0.38em]"
          >
            IIT BOMBAY
          </p>

          <p className="flex items-center gap-3 font-serif text-[clamp(1.25rem,3vw,2rem)] italic text-chalk/90">
            <span aria-hidden="true" className="h-px w-6 bg-flame/70 sm:w-10" />
            {festival.theme}
            <span aria-hidden="true" className="h-px w-6 bg-flame/70 sm:w-10" />
          </p>
        </motion.div>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-ash sm:mt-6 sm:text-[15.5px]"
        >
          Three days on the IIT Bombay campus where robotics, AI, aerospace and deep tech stop being
          slides and start being something you can walk up to and touch.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <ActionLink href={links.register} external variant="primary" className="w-full sm:w-auto">
            Register now
          </ActionLink>
          <ActionLink href="#events" variant="ghost" className="w-full sm:w-auto">
            Explore events
          </ActionLink>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 border-t border-line/70 pt-6 sm:mt-10 sm:flex-row sm:gap-6"
        >
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
            <CalendarDays aria-hidden="true" className="size-3.5 text-flame/80" strokeWidth={1.7} />
            {festival.dates}
          </span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
            <MapPin aria-hidden="true" className="size-3.5 text-flame/80" strokeWidth={1.7} />
            {festival.venue}
          </span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
          <Countdown />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mt-12 flex justify-center sm:mt-14">
        <a
          href="#about"
          className="group flex flex-col items-center gap-3 font-mono text-[9px] uppercase tracking-[0.32em] text-ash-2 transition-colors hover:text-chalk"
        >
          Scroll
          <span className="relative h-9 w-px overflow-hidden bg-line-strong">
            <span className="absolute inset-x-0 top-0 h-3 animate-[scrolldot_2.6s_ease-in-out_infinite] bg-flame" />
          </span>
        </a>
      </div>
    </section>
  )
}
