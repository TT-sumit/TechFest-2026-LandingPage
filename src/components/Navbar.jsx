import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { links, navItems, socials } from '../data/site'
import Logo from './ui/Logo'
import SocialIcon from './ui/SocialIcons'
import usePresence from '../hooks/usePresence'

const socialEntries = Object.entries(socials)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { mounted, visible } = usePresence(open, 200)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (sections.length === 0 || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleEntry) setActive(visibleEntry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:border focus:border-flame focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.2em] focus:text-chalk"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? 'border-b border-line bg-ink/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
          <a
            href="#home"
            className="shrink-0 py-2"
            aria-label="Techfest, IIT Bombay — back to top"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group relative block py-2 font-mono text-[10.5px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? 'text-chalk' : 'text-ash hover:text-chalk'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-flame transition-all duration-300 ${
                          isActive
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={links.register}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 bg-flame px-4 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#0b0402] transition-colors hover:bg-flame-2 sm:inline-flex"
            >
              Register
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
              <span className="sr-only"> on techfest.org (opens in a new tab)</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex size-10 items-center justify-center border border-line text-chalk transition-colors hover:border-flame/50 lg:hidden"
            >
              {open ? (
                <X aria-hidden="true" className="size-[18px]" />
              ) : (
                <Menu aria-hidden="true" className="size-[18px]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mounted ? (
        <div
          id="mobile-menu"
          aria-hidden={!open}
          inert={!open}
          className={`fixed inset-0 z-[45] flex flex-col bg-ink/97 backdrop-blur-xl transition-opacity duration-200 ease-out lg:hidden ${
            visible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="noise pointer-events-none absolute inset-0 opacity-[0.04]" />

          <div className="relative flex h-full flex-col overflow-y-auto px-5 pb-10 pt-[88px] sm:px-8">
            <nav aria-label="Mobile" className="flex-1">
              <ul className="divide-y divide-line border-y border-line">
                {navItems.map((item, index) => (
                  <li
                    key={item.id}
                    style={{ transitionDelay: visible ? `${60 + index * 40}ms` : '0ms' }}
                    className={`transition-[opacity,transform] duration-300 ease-out ${
                      visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-display text-2xl font-medium tracking-[-0.01em] text-chalk">
                        {item.label}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.24em] text-ash-2">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8">
              <a
                href={links.register}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between bg-flame px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0b0402]"
              >
                Register for Techfest
                <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>

              <div className="mt-6 flex items-center justify-between">
                <p className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-ash-2">
                  16—18 Dec 2026 · IIT Bombay
                </p>
                <ul className="flex items-center gap-1">
                  {socialEntries.map(([name, href]) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Techfest on ${name}`}
                        className="inline-flex size-9 items-center justify-center text-ash transition-colors hover:text-flame-2"
                      >
                        <SocialIcon name={name} className="size-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
