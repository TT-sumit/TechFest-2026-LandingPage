import { ArrowRight, ArrowUpRight } from 'lucide-react'

const base =
  'group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300'

const variants = {
  primary: 'bg-flame text-[#0b0402] font-medium hover:bg-flame-2 active:bg-flame',
  ghost:
    'border border-line-strong text-chalk hover:border-flame/60 hover:bg-white/[0.04] hover:text-flame-2',
  quiet: 'text-ash hover:text-flame-2',
}

/**
 * The single button/link treatment used across the page. Renders an anchor,
 * adds the right affordance for external destinations and labels them for
 * assistive tech.
 */
export default function ActionLink({
  href,
  children,
  variant = 'primary',
  external = false,
  icon,
  className = '',
  ...rest
}) {
  const Icon = icon ?? (external ? ArrowUpRight : ArrowRight)

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      <span>{children}</span>
      <Icon
        aria-hidden="true"
        className="size-[15px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.8}
      />
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  )
}
