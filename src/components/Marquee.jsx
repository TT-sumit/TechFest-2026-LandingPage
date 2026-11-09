import { ticker } from '../data/site'

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden ? 'true' : undefined}>
      {ticker.map((item) => (
        <li key={item} className="flex items-center gap-8 pr-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash sm:text-[11px]">
            {item}
          </span>
          <span className="text-[9px] text-flame" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2/70 py-4">
      <div className="edge-fade relative flex">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
