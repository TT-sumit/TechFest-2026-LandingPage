import { Check, ArrowUpRight } from 'lucide-react'
import { achievements, festival, links, stats } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Counter from './ui/Counter'

const specRows = [
  ['Edition', `${festival.editionLabel} · 2026`],
  ['Founded', String(festival.founded)],
  ['Dates', festival.dates],
  ['Venue', 'IIT Bombay, Powai, Mumbai'],
  ['Format', 'Three days, campus-wide'],
  ['Host', 'Student community, IIT Bombay'],
  ['Patronage', 'UNESCO · UNICEF'],
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-[88px] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
          <div>
            <SectionHeading
              index="01"
              eyebrow="About Techfest"
              title="Thirty editions of turning science into spectacle."
              intro="Techfest began in 1998 as an initiative of the student community at IIT Bombay — a stage built by students, for students. Three decades later it is Asia's largest science and technology festival, and it still runs the same way: student-organised, non-profit, on the same campus in Powai."
            />

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ash">
                Every December the campus becomes a working exhibition of what comes next: national
                and international competitions, research-grade exhibitions, hands-on workshops,
                lectures and night shows. The 30th edition carries the theme{' '}
                <span className="font-serif italic text-chalk">An Aetherial Renaissance</span>.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-8 space-y-3">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-ash">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center border border-flame/30 bg-flame/10 text-flame">
                      <Check aria-hidden="true" className="size-3" strokeWidth={2.4} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href={links.home}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-flame-2 transition-colors hover:text-chalk"
              >
                More at techfest.org
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          </div>

          {/* spec sheet */}
          <Reveal delay={0.1} className="relative">
            <div className="relative overflow-hidden border border-line bg-panel/70">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px glow-line" />

              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ash-2">
                  Techfest // File {festival.edition}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-flame-2">
                  <span className="size-1 animate-blink rounded-full bg-flame" />
                  Live
                </span>
              </div>

              <div className="relative px-5 py-6 sm:px-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-ash-2">
                      Edition
                    </p>
                    <p className="mt-2 font-display text-[clamp(3.4rem,9vw,5.2rem)] font-semibold leading-none tracking-[-0.05em] text-chalk">
                      {festival.edition}
                      <span className="text-flame">.</span>
                    </p>
                  </div>
                  <p className="pb-2 text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-ash-2">
                    1998
                    <br />— 2026
                  </p>
                </div>

                <dl className="mt-7 divide-y divide-line border-t border-line">
                  {specRows.map(([term, value]) => (
                    <div key={term} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-ash-2">
                        {term}
                      </dt>
                      <dd className="text-right text-[12.5px] text-chalk">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-ash-2">
                    {festival.coordinates}
                  </span>
                  <span className="h-4 w-10 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.35)_0_1px,transparent_1px_4px)]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:mt-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="bg-ink px-5 py-7 sm:px-6 sm:py-8"
            >
              <p className="font-display text-[clamp(2rem,4.4vw,2.9rem)] font-semibold leading-none tracking-[-0.03em] text-chalk">
                <Counter
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix ?? ''}
                  plain={stat.plain}
                />
              </p>
              <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.24em] text-flame-2">
                {stat.label}
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-ash-2">{stat.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
