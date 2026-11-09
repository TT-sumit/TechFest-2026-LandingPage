import { ArrowUpRight, Bot, Building2, Cpu, Presentation, Sparkles, Wrench } from 'lucide-react'
import { experiences } from '../data/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const icons = { Bot, Building2, Wrench, Presentation, Cpu, Sparkles }

const robowarsFacts = [
  '8 · 15 · 30 · 60 kg classes',
  '₹10,00,000 prize pool',
  '25+ international teams',
]

export default function Experiences() {
  const featured = experiences.find((item) => item.featured)
  const rest = experiences.filter((item) => !item.featured)

  return (
    <section id="experiences" className="relative scroll-mt-[88px] py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_85%_20%,rgba(255,179,71,0.06),transparent_60%)]"
      />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Experiences"
          title="Beyond the leaderboard."
          intro="Competitions are the spine of the festival, but the three days are built to be walked through — arenas, exhibition floors, workshops and stages that run from morning until the lights go down."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {/* featured card */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden border border-line bg-panel/60 p-6 card-hover sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="hud-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_70%_at_80%_20%,#000,transparent_75%)]" />
                <div className="absolute -right-16 -top-16 size-72 rounded-full bg-flame/10 blur-[70px]" />
                <div className="absolute right-6 top-8 size-44 rounded-full border border-flame/15" />
                <div className="absolute right-14 top-16 size-28 rounded-full border border-flame/20" />
                <div className="absolute right-[4.4rem] top-[6.2rem] size-8 animate-blink rounded-full bg-flame/40 blur-[6px]" />
                <Bot
                  className="absolute -bottom-4 right-4 size-40 text-white/[0.04]"
                  strokeWidth={0.7}
                />
              </div>

              <div className="relative">
                <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-flame-2">
                  Robotic combat
                </span>
                <h3 className="mt-5 max-w-md font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em] text-chalk">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md text-[13.5px] leading-relaxed text-ash">
                  {featured.copy}
                </p>
              </div>

              <div className="relative mt-8">
                <ul className="flex flex-wrap gap-2">
                  {robowarsFacts.map((fact) => (
                    <li
                      key={fact}
                      className="border border-line bg-ink/60 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ash"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>

                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-5 inline-flex items-center gap-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-chalk transition-colors hover:text-flame-2"
                >
                  {featured.linkLabel}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </article>
          </Reveal>

          {rest.map((item, index) => {
            const Icon = icons[item.icon] ?? Sparkles
            return (
              <Reveal key={item.id} delay={0.05 + index * 0.05}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-panel/40 p-5 card-hover sm:p-6">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="grid size-10 place-items-center border border-line bg-white/[0.02] text-flame-2 transition-colors duration-300 group-hover:border-flame/40 group-hover:bg-flame/10">
                        <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.18em] text-ash-2">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-chalk">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-ash">{item.copy}</p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 border-t border-line pb-1.5 pt-3.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ash-2 transition-colors hover:text-flame-2"
                  >
                    {item.linkLabel}
                    <ArrowUpRight aria-hidden="true" className="size-3" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
