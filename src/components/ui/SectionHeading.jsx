import Reveal from './Reveal'

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
  id,
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        <div
          className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}
          aria-hidden="true"
        >
          <span className="font-mono text-[11px] tracking-[0.32em] text-flame">{index}</span>
          <span className="h-px w-8 bg-flame/50" />
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-ash">
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          id={id}
          className="mt-6 font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-chalk"
        >
          {title}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ash sm:text-base">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
