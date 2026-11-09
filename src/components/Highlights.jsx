import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { gallery, links, socials } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Modal from './ui/Modal'

const large = (src) => src.replace(/w=\d+/, 'w=1600')

export default function Highlights() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const show = useCallback((next) => {
    setIndex((next + gallery.length) % gallery.length)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setIndex((value) => (value + 1) % gallery.length)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setIndex((value) => (value - 1 + gallery.length) % gallery.length)
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const item = gallery[index]

  return (
    <section id="highlights" className="relative scroll-mt-[88px] py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Highlights"
            title="What thirty editions leave behind."
            intro="The texture of the festival: arenas at full volume, exhibition floors, workshops that run long past their slot, and three nights of stage shows. Open any frame for a closer look."
          />

          <Reveal delay={0.12} className="shrink-0">
            <ul className="flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ash-2">
              <li className="border border-line px-3 py-2">1.8L+ footfall</li>
              <li className="border border-line px-3 py-2">2500+ colleges</li>
              <li className="border border-line px-3 py-2">30 editions</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid auto-rows-[130px] grid-cols-2 gap-2.5 sm:auto-rows-[168px] md:grid-cols-4 md:auto-rows-[188px]">
            {gallery.map((entry, position) => (
              <button
                key={entry.label}
                type="button"
                onClick={() => {
                  setIndex(position)
                  setOpen(true)
                }}
                className={`group relative overflow-hidden border border-line bg-panel-2 text-left ${entry.span}`}
              >
                <img
                  src={entry.src}
                  alt={entry.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover opacity-80 transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100 motion-reduce:transform-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-flame/40"
                />

                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                  <span>
                    <span className="block font-mono text-[8px] uppercase tracking-[0.24em] text-flame-2">
                      {entry.label}
                    </span>
                    <span className="mt-1.5 block font-display text-[12.5px] font-medium leading-tight text-chalk sm:text-sm">
                      {entry.caption}
                    </span>
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.16em] text-ash-2">
                    {String(position + 1).padStart(2, '0')}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[11.5px] leading-relaxed text-ash-2">
              Photography on this page is illustrative and licensed for reuse. Official festival
              media is published by Techfest on its own channels.
            </p>
            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-chalk transition-colors hover:text-flame-2"
            >
              <Play aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
              Watch the aftermovies
              <span className="sr-only"> (opens YouTube in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="lightbox-title"
        label="Close image"
        panelClassName="max-w-5xl border border-line bg-ink"
      >
        <div className="flex items-center justify-between gap-3 border-b border-line py-3 pl-4 pr-16">
          <p
            id="lightbox-title"
            className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-ash"
          >
            {item.label}
            <span className="mx-2 text-ash-2">/</span>
            <span className="text-ash-2">{item.caption}</span>
          </p>
          <p className="tabular shrink-0 font-mono text-[9.5px] tracking-[0.18em] text-ash-2">
            {String(index + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
          </p>
        </div>

        <div className="relative">
          <img
            src={large(item.src)}
            alt={item.alt}
            className="max-h-[62vh] w-full bg-ink object-contain"
          />

          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              onClick={() => show(index - 1)}
              className="inline-flex size-10 items-center justify-center border border-line bg-ink/80 text-chalk backdrop-blur transition-colors hover:border-flame/50 hover:text-flame-2"
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
              <span className="sr-only">Previous image</span>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="button"
              onClick={() => show(index + 1)}
              className="inline-flex size-10 items-center justify-center border border-line bg-ink/80 text-chalk backdrop-blur transition-colors hover:border-flame/50 hover:text-flame-2"
            >
              <ChevronRight aria-hidden="true" className="size-4" />
              <span className="sr-only">Next image</span>
            </button>
          </div>
        </div>

        <p className="border-t border-line px-4 py-3 text-[11px] text-ash-2">
          Use the arrow keys to move between frames. Illustrative imagery — see{' '}
          <a
            href={links.home}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ash underline decoration-line-strong underline-offset-2 transition-colors hover:text-chalk"
          >
            techfest.org
          </a>{' '}
          for official galleries.
        </p>
      </Modal>
    </section>
  )
}
