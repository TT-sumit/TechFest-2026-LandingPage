import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { links, scheduleDays } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Schedule() {
  const [active, setActive] = useState(scheduleDays[0].id)
  const reduce = useReducedMotion()
  const day = scheduleDays.find((entry) => entry.id === active) ?? scheduleDays[0]

  return (
    <section id="schedule" className="relative scroll-mt-[88px] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Schedule"
          title="Three days, one campus."
          intro="The shape of the festival, day by day. Exact timings, venues and stage line-ups are published on the official schedule as each edition locks them in."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div
              role="group"
              aria-label="Choose a festival day"
              className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1"
            >
              {scheduleDays.map((entry) => {
                const isActive = active === entry.id
                return (
                  <button
                    key={entry.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(entry.id)}
                    className={`group relative flex items-center gap-4 border p-4 text-left transition-colors duration-300 sm:flex-col sm:items-start lg:flex-row lg:items-center ${
                      isActive
                        ? 'border-flame/50 bg-flame/[0.07]'
                        : 'border-line bg-panel/30 hover:border-line-strong'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-0 left-0 w-px transition-colors ${
                        isActive ? 'bg-flame' : 'bg-transparent'
                      }`}
                    />
                    <span className="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-chalk">
                      {entry.date}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ash-2">
                        {entry.weekday}
                      </span>
                      <span
                        className={`font-mono text-[9.5px] uppercase tracking-[0.2em] ${
                          isActive ? 'text-flame-2' : 'text-ash'
                        }`}
                      >
                        {entry.month} 2026
                      </span>
                    </span>
                    <span className="ml-auto hidden font-mono text-[9px] tracking-[0.2em] text-ash-2 lg:ml-auto lg:block">
                      D{entry.day}
                    </span>
                  </button>
                )
              })}
            </div>

            <p className="mt-5 flex items-start gap-2 text-[11.5px] leading-relaxed text-ash-2">
              <Clock aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-flame/70" />
              Times shown as the running order of the day, not clock slots.
            </p>
          </Reveal>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-flame-2">
                  Day {day.day} · {day.weekday}
                </p>
                <h3 className="mt-2 font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-chalk">
                  {day.theme}
                </h3>
              </div>
              <a
                href={links.schedule}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-ash transition-colors hover:text-chalk"
              >
                Official schedule
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <motion.ol
              key={day.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-2"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-6 left-[15px] top-6 w-px bg-line"
              />
              {day.items.map((item, index) => (
                <li key={item.title} className="relative flex gap-4 py-4 sm:gap-5">
                  <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-line bg-ink font-mono text-[9px] text-flame-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 border-b border-line/60 pb-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h4 className="font-display text-[15px] font-medium text-chalk">
                        {item.title}
                      </h4>
                      <span className="border border-line px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.2em] text-ash-2">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ash">{item.copy}</p>
                  </div>
                </li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  )
}
