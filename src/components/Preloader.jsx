import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { festival } from '../data/site'

/**
 * A 1.2s boot sequence. Decorative only: skipped entirely for reduced motion,
 * and unmounting is time-based rather than animation-based.
 */
export default function Preloader() {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState('in')

  useEffect(() => {
    if (reduce) {
      setPhase('done')
      return undefined
    }
    const out = window.setTimeout(() => setPhase('out'), 1050)
    const done = window.setTimeout(() => setPhase('done'), 1600)
    return () => {
      window.clearTimeout(out)
      window.clearTimeout(done)
    }
  }, [reduce])

  if (reduce || phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink transition-transform duration-[550ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'out' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative flex flex-col items-center px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-ash-2">
          Loading the {festival.edition}th edition
        </p>

        <p className="mt-5 font-display text-[clamp(2rem,7vw,3.4rem)] font-semibold tracking-[-0.03em] text-chalk">
          TECHFEST
        </p>

        <div className="mt-7 h-px w-[min(58vw,260px)] overflow-hidden bg-white/12">
          <div className="h-full origin-left animate-[loadbar_1s_cubic-bezier(0.4,0,0.2,1)_forwards] bg-flame" />
        </div>

        <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.36em] text-flame/80">
          {festival.theme}
        </p>
      </div>
    </div>
  )
}
