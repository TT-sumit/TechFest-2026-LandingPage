import { ArrowUp, Mail } from 'lucide-react'
import { contact, festival, footerGroups, links, socials } from '../data/site'
import Logo from './ui/Logo'
import SocialIcon from './ui/SocialIcons'

const socialEntries = Object.entries(socials)

const socialLabels = {
  instagram: 'Instagram',
  x: 'X',
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
}

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-[88px] overflow-hidden bg-ink-2">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hud-grid absolute inset-0 opacity-25 [mask-image:radial-gradient(60%_70%_at_50%_100%,#000,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr] lg:gap-16">
          <div>
            <a
              href="#home"
              className="inline-block"
              aria-label="Techfest, IIT Bombay — back to top"
            >
              <Logo />
            </a>

            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-ash">
              {festival.tagline}. Held every December on the IIT Bombay campus in Powai, Mumbai.
            </p>

            <div className="mt-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-ash-2">
                Get in touch
              </p>
              <address className="mt-3 not-italic text-[13px] leading-relaxed text-ash">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={links.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-flame-2 transition-colors hover:text-chalk"
              >
                <Mail aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
                Contact desk
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            <ul className="mt-7 flex items-center gap-2">
              {socialEntries.map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Techfest on ${socialLabels[name] ?? name}`}
                    className="inline-flex size-9 items-center justify-center border border-line text-ash transition-colors hover:border-flame/50 hover:text-flame-2"
                  >
                    <SocialIcon name={name} className="size-[15px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-mono text-[9px] uppercase tracking-[0.26em] text-flame-2">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group inline-flex items-center gap-1 py-1 text-[13px] text-ash transition-colors hover:text-chalk"
                      >
                        {link.label}
                        {link.external ? (
                          <span className="text-[10px] text-ash-2 transition-colors group-hover:text-flame-2">
                            ↗
                          </span>
                        ) : null}
                        {link.external ? (
                          <span className="sr-only"> (opens in a new tab)</span>
                        ) : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <p className="text-[11.5px] text-ash-2">
              © 2026 Techfest, IIT Bombay. Organised by the student community of IIT Bombay.
            </p>
            <p className="text-[11px] text-ash-2/80">
              An independent landing-page concept. Photography is illustrative; official media lives
              on techfest.org.
            </p>
          </div>

          <a
            href="#home"
            className="group inline-flex shrink-0 items-center gap-2 border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ash transition-colors hover:border-flame/50 hover:text-chalk"
          >
            Back to top
            <ArrowUp
              aria-hidden="true"
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
