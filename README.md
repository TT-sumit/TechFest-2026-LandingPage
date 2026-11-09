# Techfest 2026 · IIT Bombay — Landing Page

A single-page, animation-forward landing page for **Techfest 2026, the 30th edition of IIT Bombay's
science and technology festival**, held **16–18 December 2026** on the IIT Bombay campus in Powai,
Mumbai. Theme: **An Aetherial Renaissance**.

Built as a static front end — no backend, no auth, no database. All registration, competition and
contact journeys hand off to the official festival site.

---

## Stack

| Layer      | Choice                                             |
| ---------- | -------------------------------------------------- |
| Front end  | React 19                                           |
| Build tool | Vite 8                                             |
| Styling    | Tailwind CSS 4 (CSS-first `@theme` tokens)         |
| Animation  | Framer Motion 14                                   |
| Icons      | Lucide React (brand marks inlined as SVG)          |
| Fonts      | Google Fonts — Space Grotesk, Inter, Instrument Serif, JetBrains Mono |
| Deployment | Any static host (Vercel / Netlify / Cloudflare Pages) |

No 3D models, assets or libraries are used. Backgrounds, glows and the grid floor are CSS/SVG; the
hero particles are a small `<canvas>` loop.

---

## Getting started

Requires Node 20+ (developed on Node 24).

```bash
npm install
npm run dev        # http://127.0.0.1:5173
npm run build      # production bundle in dist/
npm run preview    # serve the built bundle locally
```

`dist/` is a plain static bundle — deploy it anywhere that serves files over HTTPS.

---

## Project structure

```
.
├── index.html                  # metadata, font preconnect, favicon
├── vite.config.js              # React + Tailwind v4 plugins, dev host/port
├── public/favicon.svg
└── src
    ├── main.jsx                # React root
    ├── App.jsx                 # page composition + grain overlay
    ├── index.css               # design tokens, base styles, keyframes, textures
    ├── data/site.js            # ALL content, links, events, schedule, gallery
    ├── hooks/usePresence.js    # timer-based mount/unmount for CSS enter-exit
    └── components
        ├── Navbar.jsx          # sticky nav, scroll-spy, full-screen mobile menu
        ├── Hero.jsx            # wordmark, spotlight, particles, countdown
        ├── Marquee.jsx         # infinite fact ticker
        ├── About.jsx           # editorial intro, spec sheet, animated counters
        ├── Events.jsx          # filterable competitions + detail dialog
        ├── Experiences.jsx     # bento grid of festival experiences
        ├── Highlights.jsx      # asymmetric gallery + keyboard lightbox
        ├── Schedule.jsx        # day tabs + running order
        ├── CallToAction.jsx    # registration band + countdown panel
        ├── Footer.jsx          # contact, socials, quick links
        ├── Preloader.jsx       # ~1.2s boot sequence
        ├── Countdown.jsx       # inline + panel countdown to 16 Dec 2026
        └── ui
            ├── ActionLink.jsx  ├── Counter.jsx      ├── Logo.jsx
            ├── Modal.jsx       ├── ParticleField.jsx├── Reveal.jsx
            ├── ScrollProgress.jsx                  ├── SectionHeading.jsx
            └── SocialIcons.jsx
```

**Content lives in one place.** `src/data/site.js` is the single source of truth for every heading,
stat, competition, schedule day, gallery frame and outbound link. Update it there rather than in
components.

---

## Page sections

1. **Hero** — oversized wordmark, theme, dates, venue, live countdown, registration and events CTAs
2. **Ticker** — key facts in an infinite marquee
3. **About** — founding, scale, spec sheet, animated statistics
4. **Events & Competitions** — 12 real tracks, filterable by category, detail dialog, official links
5. **Experiences** — Robowars, exhibitions, workshops, lectures, demos, Technoholix
6. **Highlights** — gallery with a keyboard-navigable lightbox
7. **Schedule** — day-by-day running order (16 / 17 / 18 December 2026)
8. **Call to action** — countdown panel and registration links
9. **Footer / Contact** — office address, official socials, quick links

---

## Content accuracy

The page deliberately contains **no invented statistics, dates, timings or event names**. Every
claim is traceable to Techfest's own channels, cross-checked while building:

| Fact | Source |
| --- | --- |
| 30th edition · 16–18 December 2026 · "An Aetherial Renaissance" | [techfest.org](https://techfest.org/), @techfest_iitbombay |
| Asia's largest science & technology festival, founded 1998 | techfest.org, official YouTube channel |
| 1.8 lakh+ footfall | @Techfest_IITB bio, official YouTube channel |
| 2500+ Indian colleges, 500+ international institutions | official YouTube channel, LinkedIn |
| Patronage from UNESCO and UNICEF | official YouTube channel |
| Competition names and prize pools | [techfest.org/competitions](https://techfest.org/competitions) |
| Robowars weight classes and ₹10,00,000 prize pool | [techfest.org/robowars](https://techfest.org/robowars) |
| Office address | Techfest's official LinkedIn location |
| Social profiles and registration/workshop/schedule URLs | techfest.org footer, Linktree |

Two things are intentionally *not* stated:

- **Clock times for the schedule.** The official schedule had not published slot times for all
  sessions at build time, so the schedule shows each day's running order with a visible note rather
  than guessed timings.
- **Per-event registration status.** Windows change through the season, so each card links to the
  official competitions page where status is authoritative.

### Photography

Gallery frames are **illustrative stock photography** (Unsplash, free to use), not official Techfest
imagery — this is footnoted on the page and in the footer. To use official festival photographs,
replace the `gallery` array in `src/data/site.js` with your licensed images (keep the `span` values
to preserve the layout), drop the files in `public/` or `src/assets/`, and remove the illustrative
notice in `Highlights.jsx` and `Footer.jsx`.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, ordered headings.
- Skip-to-content link; visible focus rings on every interactive element.
- Mobile menu and dialogs are keyboard operable, close on `Escape`, trap focus, lock background
  scroll and restore focus to the trigger.
- Dialogs use `role="dialog"`, `aria-modal`, `aria-labelledby`; the image lightbox supports arrow
  keys and announces the frame count.
- Icon-only links carry `aria-label`; external links announce that they open in a new tab.
- Active navigation uses `aria-current`; filters use `aria-pressed` plus a polite live region.
- `prefers-reduced-motion` is honoured — the preloader is skipped, particle motion is drawn once,
  and entrance/exits collapse to near-instant.
- Interactive targets are at least 24 px; body text keeps AA contrast on the dark surfaces.

## Performance

- No web-font blocking beyond one Google Fonts request with `preconnect` and `display=swap`.
- Gallery images are lazy-loaded, sized by fixed grid rows so they cause no layout shift.
- The particle canvas caps DPR at 2, pauses off-screen and when the tab is hidden.
- Single small bundle (~142 kB gzipped) — React, Framer Motion and icons only.

---

## Deployment

The build is fully static, so no server runtime is needed.

**Vercel**

```bash
npm i -g vercel
vercel --prod        # framework preset: Vite, output: dist
```

**Netlify**

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**Cloudflare Pages** — build command `npm run build`, output directory `dist`.

All navigation is in-page (`#section` anchors) and every external link is absolute, so no SPA
rewrite rules are required.

---

## Screenshots

Add captures to `docs/screenshots/` and reference them here (hero at 1440 px, the competitions grid,
the mobile menu, and the countdown band are the most useful frames):

```md
![Hero](docs/screenshots/hero.png)
![Competitions](docs/screenshots/events.png)
```

---

## Scope

In: the landing page, responsive layout, animations, competition/experience/highlights/schedule
presentation, external registration links.

Out (per the brief): authentication, admin dashboard, database, payments, booking or participant
management, backend APIs, chatbots, real-time event operations.

---

## Disclaimer

An independent landing-page concept built for the Techfest challenge. It is **not** the official
registration portal, and all registrations, payments and official media live on
[techfest.org](https://techfest.org/). "Techfest" and "IIT Bombay" belong to their respective owners.
