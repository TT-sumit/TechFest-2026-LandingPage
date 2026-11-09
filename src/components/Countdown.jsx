import { useEffect, useState } from 'react'
import { festival } from '../data/site'

const TARGET = new Date(festival.countdownTarget).getTime()

function remaining() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    done: false,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(value) {
  return String(value).padStart(2, '0')
}

export default function Countdown({ variant = 'inline', className = '' }) {
  const [time, setTime] = useState(remaining)

  useEffect(() => {
    const id = window.setInterval(() => setTime(remaining()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const label = time.done
    ? 'Techfest 2026 is underway'
    : `${time.days} days, ${time.hours} hours, ${time.minutes} minutes until Techfest 2026`

  if (time.done) {
    return (
      <p
        className={`font-mono text-[10.5px] uppercase tracking-[0.26em] text-flame-2 ${className}`}
      >
        Happening now · 16—18 December 2026
      </p>
    )
  }

  if (variant === 'panel') {
    const cells = [
      { value: time.days, unit: 'Days' },
      { value: time.hours, unit: 'Hours' },
      { value: time.minutes, unit: 'Minutes' },
      { value: time.seconds, unit: 'Seconds' },
    ]

    return (
      <div className={className}>
        <p className="sr-only" aria-live="off">
          {label}
        </p>
        <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-hidden="true">
          {cells.map((cell) => (
            <div
              key={cell.unit}
              className="border border-line bg-white/[0.02] px-2 py-3 text-center sm:px-3 sm:py-4"
            >
              <div className="tabular font-display text-2xl font-semibold leading-none text-chalk sm:text-3xl">
                {pad(cell.value)}
              </div>
              <div className="mt-2 font-mono text-[8.5px] uppercase tracking-[0.22em] text-ash-2 sm:text-[9px]">
                {cell.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <p
      className={`tabular font-mono text-[10px] uppercase tracking-[0.2em] text-ash sm:text-[11px] ${className}`}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden="true">
        <span className="text-flame">T−</span> {pad(time.days)}D : {pad(time.hours)}H :{' '}
        {pad(time.minutes)}M : <span className="text-chalk">{pad(time.seconds)}S</span>
      </span>
    </p>
  )
}
