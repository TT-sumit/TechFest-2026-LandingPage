import { festival, links } from '../data/site'
import Reveal from './ui/Reveal'
import ActionLink from './ui/ActionLink'
import Countdown from './Countdown'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_20%_0%,rgba(255,74,28,0.14),transparent_60%)]" />
        <div className="hud-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(80%_80%_at_30%_30%,#000,transparent_75%)]" />
        <div className="absolute -bottom-32 right-0 size-[26rem] animate-glow rounded-full bg-flame/12 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-[0.32em] text-flame">06</span>
                <span className="h-px w-8 bg-flame/50" />
                <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ash">
                  Take part
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.8vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-chalk">
                Make the 30th edition the one you were part of.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ash">
                Competitions, workshops and delegate registrations all run through the official
                Techfest site. Pick a track, build the thing, and be on campus in Powai this
                December.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <ActionLink href={links.register} external variant="primary">
                  Register now
                </ActionLink>
                <ActionLink href={links.competitions} external variant="ghost">
                  Browse competitions
                </ActionLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="border border-line bg-panel/50 p-5 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-ash-2">
                  Gates open
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-flame-2">
                  {festival.datesShort}
                </p>
              </div>

              <Countdown variant="panel" className="mt-5" />

              <dl className="mt-5 space-y-2 border-t border-line pt-4 font-mono text-[9.5px] uppercase tracking-[0.16em]">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ash-2">Venue</dt>
                  <dd className="text-right text-chalk">IIT Bombay, Mumbai</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ash-2">Edition</dt>
                  <dd className="text-right text-chalk">{festival.editionLabel}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
