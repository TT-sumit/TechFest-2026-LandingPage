import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { eventCategories, events, festival, links } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import ActionLink from './ui/ActionLink'
import Modal from './ui/Modal'

const categoryLabel = (id) => eventCategories.find((item) => item.id === id)?.label ?? id

export default function Events() {
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  const counts = useMemo(() => {
    const map = { all: events.length }
    for (const item of events) map[item.category] = (map[item.category] ?? 0) + 1
    return map
  }, [])

  const filtered = useMemo(
    () => (category === 'all' ? events : events.filter((item) => item.category === category)),
    [category],
  )

  const openEvent = (event) => {
    setSelected(event)
    setOpen(true)
  }

  return (
    <section id="events" className="relative scroll-mt-[88px] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_15%_0%,rgba(255,74,28,0.07),transparent_60%)]"
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            eyebrow="Events & Competitions"
            title="Build something the world has to notice."
            intro="A selection of the tracks running at Techfest 2026 — from agentic AI and autonomous drones to spherical robots and prompt-only web builds. Prize pools are exactly as published by the festival."
          />

          <Reveal delay={0.12} className="shrink-0">
            <a
              href={links.competitions}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash transition-colors hover:border-flame/50 hover:text-chalk"
            >
              All competitions
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Reveal>
        </div>

        {/* filters */}
        <Reveal delay={0.08}>
          <div
            role="group"
            aria-label="Filter competitions by category"
            className="mt-12 flex flex-wrap gap-2"
          >
            {eventCategories.map((item) => {
              const isActive = category === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setCategory(item.id)}
                  className={`group inline-flex items-center gap-2 border px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    isActive
                      ? 'border-flame/60 bg-flame/10 text-chalk'
                      : 'border-line text-ash hover:border-line-strong hover:text-chalk'
                  }`}
                >
                  {item.label}
                  <span
                    className={`tabular text-[9px] ${isActive ? 'text-flame-2' : 'text-ash-2'}`}
                  >
                    {counts[item.id] ?? 0}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <p aria-live="polite" className="sr-only">
          {filtered.length} competitions shown
        </p>

        <div key={category} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.4,
                delay: reduce ? 0 : Math.min(index, 6) * 0.045,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-panel/50 p-5 card-hover sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-flame to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />

              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-flame-2">
                    {categoryLabel(event.category)}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.18em] text-ash-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[18px] font-medium leading-snug tracking-[-0.01em] text-chalk sm:text-[19px]">
                  {event.name}
                </h3>

                <p className="mt-3 text-[12.5px] leading-relaxed text-ash">{event.blurb}</p>
              </div>

              <div className="mt-6 flex items-end justify-between gap-3 border-t border-line pt-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-ash-2">
                    Prize pool
                  </p>
                  <p className="mt-1.5 font-mono text-[12.5px] leading-none text-ember">
                    {event.prize}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ash transition-colors group-hover:text-chalk">
                  Details
                  <Plus
                    aria-hidden="true"
                    className="size-3 transition-transform duration-300 group-hover:rotate-90"
                  />
                </span>
              </div>

              <button
                type="button"
                onClick={() => openEvent(event)}
                className="absolute inset-0 z-10 cursor-pointer"
              >
                <span className="sr-only">View details for {event.name}</span>
              </button>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl text-[12px] leading-relaxed text-ash-2">
            Registration windows, eligibility and problem statements live on the official Techfest
            site and change through the season. Always confirm there before you plan.
          </p>
        </Reveal>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="event-dialog-title"
        label="Close competition details"
      >
        {selected ? (
          <div className="max-h-[80vh] overflow-y-auto p-6 pt-14 sm:p-9 sm:pt-14">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="border border-flame/40 bg-flame/10 px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.24em] text-flame-2">
                {categoryLabel(selected.category)}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ash-2">
                {selected.presenter}
              </span>
            </div>

            <h3
              id="event-dialog-title"
              className="mt-4 pr-8 font-display text-[clamp(1.4rem,3.4vw,2rem)] font-semibold leading-tight tracking-[-0.02em] text-chalk"
            >
              {selected.name}
            </h3>

            <hr className="my-6 border-line" />

            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-ash-2">
                  Prize pool
                </dt>
                <dd className="mt-2 font-mono text-sm text-ember">{selected.prize}</dd>
              </div>
              <div>
                <dt className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-ash-2">
                  When
                </dt>
                <dd className="mt-2 text-sm text-chalk">{festival.dates}</dd>
              </div>
            </dl>

            <p className="mt-6 text-[13.5px] leading-relaxed text-ash">{selected.detail}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={links.competitions} external variant="primary">
                Register on techfest.org
              </ActionLink>
              <ActionLink href={links.schedule} external variant="ghost">
                Full schedule
              </ActionLink>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-ash-2">
              Registration status, deadlines and problem statements are managed by Techfest on the
              official competitions page.
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
