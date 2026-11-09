import { festival } from '../../data/site'

export default function Logo({ className = '', showHost = true }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="size-9 shrink-0 sm:size-10"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M20 2 36 11v18L20 38 4 29V11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          className="text-flame/70"
        />
        <path
          d="M20 2v5.5M36 11l-4.8 2.8M36 29l-4.8-2.8M20 38v-5.5M4 29l4.8-2.8M4 11l4.8 2.8"
          stroke="currentColor"
          strokeWidth="1"
          className="text-flame/45"
        />
        <path
          d="M13 15.5h14M20 15.5v11.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          className="text-chalk"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[14px] font-semibold tracking-[0.2em] text-chalk sm:text-[15px]">
          TECHFEST
        </span>
        {showHost ? (
          <span className="mt-1.5 font-mono text-[8.5px] tracking-[0.3em] text-ash-2 sm:text-[9px]">
            {festival.host.toUpperCase()}
          </span>
        ) : null}
      </span>
    </span>
  )
}
