/**
 * Single source of truth for the landing page content.
 *
 * Every fact, date, statistic and outbound link here is taken from Techfest's own
 * channels (techfest.org, its official social profiles and press posts). Copy that
 * could not be verified has been left out on purpose — see README.md.
 */

export const festival = {
  name: 'Techfest',
  host: 'IIT Bombay',
  edition: '30',
  editionLabel: '30th Edition',
  theme: 'An Aetherial Renaissance',
  tagline: "Asia's Largest Science & Technology Festival",
  dates: '16—18 December 2026',
  datesShort: '16—18 DEC 2026',
  venue: 'IIT Bombay, Powai, Mumbai',
  founded: 1998,
  countdownTarget: '2026-12-16T09:00:00+05:30',
  coordinates: '19.1334° N · 72.9179° E',
}

export const links = {
  home: 'https://techfest.org/',
  register: 'https://techfest.org/register',
  competitions: 'https://techfest.org/competitions',
  workshops: 'https://techfest.org/workshops',
  exhibitions: 'https://techfest.org/exhibitions',
  schedule: 'https://techfest.org/schedule',
  accommodation: 'https://techfest.org/accommodation',
  contact: 'https://techfest.org/contact-us',
  ambassador: 'https://ca.techfest.org/',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'contact', label: 'Contact' },
]

export const ticker = [
  '30th Edition',
  '16—18 December 2026',
  'IIT Bombay · Mumbai',
  "Asia's Largest Science & Technology Festival",
  'An Aetherial Renaissance',
  'Competitions · Exhibitions · Workshops · Night Shows',
]

export const stats = [
  { value: 1998, label: 'Founded', detail: 'By the student community of IIT Bombay', plain: true },
  { value: 30, suffix: '', label: 'Edition', detail: 'The 2026 festival on the Powai campus' },
  {
    value: 1.8,
    decimals: 1,
    suffix: 'L+',
    label: 'Footfall',
    detail: 'Reported attendance across three days',
  },
  { value: 2500, suffix: '+', label: 'Colleges', detail: 'Reached across India and overseas' },
]

export const achievements = [
  'Held under the patronage of UNESCO and UNICEF',
  '1.8 lakh+ footfall across three days',
  '2500+ Indian colleges and 500+ international institutions reached',
  'Thirty editions on the IIT Bombay campus since 1998',
]

export const eventCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'robotics', label: 'Robotics' },
  { id: 'aerospace', label: 'Aerospace' },
  { id: 'coding', label: 'Coding' },
  { id: 'innovation', label: 'Innovation' },
]

export const events = [
  {
    id: 'agentic-ai-bfsi',
    name: 'Agentic AI in BFSI: Hackathon 2026',
    category: 'ai',
    prize: '₹1,00,000',
    presenter: 'Presented by Perfios',
    blurb:
      'Build agentic systems that read borrower distress from voice, or catch rogue AI agents mid-transaction.',
    detail:
      'A Perfios-backed AI hackathon where teams build agentic systems for real banking problems — either reading a borrower’s distress from their voice, or catching rogue AI agents mid-transaction — and prove it with a working prototype at the finals.',
  },
  {
    id: 'ayushtech',
    name: 'AyushTech Innovate',
    category: 'ai',
    prize: '₹1,50,000',
    presenter: 'National Open Ayurveda AI Challenge',
    blurb:
      'Trustworthy, source-grounded, medically safe software built on IIT Bombay’s open-source AyurParam LLM.',
    detail:
      'A national open AI challenge to build trustworthy, source-grounded and medically safe software frameworks on IIT Bombay’s open-source AyurParam LLM, for Ayurvedic clinical, academic and public-health applications.',
  },
  {
    id: 'forge-a-thon',
    name: 'TrueFoundry Forge-a-thon',
    category: 'coding',
    prize: '₹3,00,000',
    presenter: 'With TrueFoundry',
    blurb:
      'An editor-native coding agent, built as a VS Code extension, running its agent loop on TrueForge.',
    detail:
      'Build an editor-native coding agent as a Visual Studio Code extension whose agent loop runs on TrueForge — TrueFoundry’s open-source agent harness — with multi-file edits, smart context retrieval, safe diff reviews and immediate cancellations.',
  },
  {
    id: 'uav-x',
    name: 'UAV-X: Resilient BVLOS Swarm Challenge',
    category: 'aerospace',
    prize: 'Up to ₹25,50,000',
    presenter: 'Pushpak Grand Challenge 2026',
    blurb:
      'Autonomous UAV swarms holding resilient beyond-visual-line-of-sight comms through a disaster mission.',
    detail:
      'A national engineering challenge to build autonomous UAV swarms that maintain resilient BVLOS communication while executing a disaster-response mission, taking teams from simulation to a field-ready design under expert mentorship.',
  },
  {
    id: 'wrecking-ball',
    name: 'The Wrecking Ball Challenge',
    category: 'robotics',
    prize: '₹3,50,000',
    presenter: 'Autonomous spherical robotics',
    blurb:
      'An autonomous spherical robot racing a 75-metre obstacle arena on vision-based navigation.',
    detail:
      'Design, build and deploy an autonomous, battery-powered spherical robot that navigates a 75-metre obstacle-laden arena using vision-based navigation, centre-of-gravity stabilisation and real-time obstacle evasion.',
  },
  {
    id: 'aeromodelling',
    name: 'National Aeromodelling Challenge',
    category: 'aerospace',
    prize: '₹1,00,000',
    presenter: 'Payload flight challenge',
    blurb:
      'Student teams build a fixed-wing RC aircraft that carries and hands-free unloads its payload.',
    detail:
      'A payload-focused RC aircraft challenge where student teams design and build their own fixed-wing plane to carry golf balls, load and unload them hands-free, and fly a timed round trip where every second on the ground costs points.',
  },
  {
    id: 'robo-reach',
    name: 'RoboReach',
    category: 'robotics',
    prize: '₹1,00,000',
    presenter: 'Robotic arm championship',
    blurb:
      'A wireless bot with a mounted arm takes on 13 tasks, from 15-degree ramps to a physical Tower of Hanoi.',
    detail:
      'A manually controlled, wireless bot with a mounted robotic arm must grasp, lift, stack and precisely place objects while the bot itself navigates ramps, bridges and tight turns — across 13 tasks, from picking up a cube to writing letters with a marker.',
  },
  {
    id: 'namma-space',
    name: 'Namma Space',
    category: 'innovation',
    prize: '₹1,50,000',
    presenter: 'Spatial computing',
    blurb: 'Turn ordinary smartphone captures of indoor spaces into interactive digital twins.',
    detail:
      'Build an end-to-end intelligent spatial engine that converts standard smartphone captures of indoor spaces into interactive 3D digital twins.',
  },
  {
    id: 'urban-mobility',
    name: 'The Urban Autonomous Mobility Challenge',
    category: 'robotics',
    prize: '₹1,50,000',
    presenter: 'Smart-city autonomy',
    blurb:
      'Program a self-driving miniature car through lanes, signals, pedestrians and parking — zero remote control.',
    detail:
      'A hands-on robotics challenge where teams build and program a self-driving miniature car to navigate a full smart-city street — lanes, signals, pedestrians and parking — with zero remote control, escalating round by round into a surprise finale.',
  },
  {
    id: 'zero-code',
    name: 'ZeroCode',
    category: 'coding',
    prize: '₹80,000',
    presenter: 'Prompt engineering sprint',
    blurb: 'One surprise brief, one shot, one fully working web app before the clock runs out.',
    detail:
      'A high-stakes test of prompt precision, where participants have one shot to turn a surprise brief into a fully working web app before the clock runs out.',
  },
  {
    id: 'meshmerize',
    name: 'Meshmerize',
    category: 'robotics',
    prize: '₹1,00,000',
    presenter: 'Memory-mapped maze racing',
    blurb:
      'An autonomous line follower maps a maze in the dry run, then races it again from memory.',
    detail:
      'A hardware challenge where students build an autonomous line-following robot that maps a maze in a dry run, then races through it from memory in the actual run.',
  },
  {
    id: 'innovatex',
    name: 'InnovateX',
    category: 'innovation',
    prize: '₹80,000',
    presenter: 'The Future Habitats Challenge',
    blurb:
      'Solve underground water, urban air quality or coastal plastic pollution with a solution that scales.',
    detail:
      'A national innovation competition calling on students to solve critical urban and environmental challenges — IoT-based underground water management, rising AQI levels in modern cities, or rising plastic pollution in coastal cities — with a practical solution that scales from a neighbourhood pilot to national impact.',
  },
]

export const experiences = [
  {
    id: 'robowars',
    title: 'International Robowars',
    icon: 'Bot',
    featured: true,
    copy: 'Machines from around the world meet in the arena for an all-out battle of power, precision and strategy.',
    link: links.competitions,
    linkLabel: 'See the championships',
  },
  {
    id: 'exhibitions',
    title: 'International Exhibitions',
    icon: 'Building2',
    copy: 'Robotics, AI, aerospace and deep-tech showcases from universities, research labs and startups.',
    link: links.exhibitions,
    linkLabel: 'Exhibition floor',
  },
  {
    id: 'workshops',
    title: 'Hands-on Workshops',
    icon: 'Wrench',
    copy: 'Sessions with industry experts, built around doing the work — with official IIT Bombay certification.',
    link: links.workshops,
    linkLabel: 'Browse workshops',
  },
  {
    id: 'lectures',
    title: 'Guest Lectures',
    icon: 'Presentation',
    copy: 'Conversations with the scientists, founders and space-programme leaders shaping what comes next.',
    link: links.schedule,
    linkLabel: 'See the line-up',
  },
  {
    id: 'demos',
    title: 'Technology Demonstrations',
    icon: 'Cpu',
    copy: 'Prototypes straight off the research floor, running live for you to walk up to and interrogate.',
    link: links.exhibitions,
    linkLabel: 'Live demos',
  },
  {
    id: 'technoholix',
    title: 'Technoholix',
    icon: 'Sparkles',
    copy: 'The night shows — artists, light and sound that turn the whole campus into a stage.',
    link: links.schedule,
    linkLabel: 'Night shows',
  },
]

export const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=75',
    alt: 'A humanoid robot head and shoulders in a studio, lit from the side',
    label: 'Robotics',
    caption: 'Machines that move with intent',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=75',
    alt: 'A crowd watching a brightly lit stage at an indoor arena event',
    label: 'Arena',
    caption: 'The noise of a final',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=75',
    alt: 'Macro photograph of a circuit board with copper traces and components',
    label: 'Exhibitions',
    caption: 'Deep tech, on the floor',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=75',
    alt: 'A satellite orbiting above the curved horizon of Earth',
    label: 'Aerospace',
    caption: 'Above the atmosphere',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=75',
    alt: 'An engineer working with precision equipment in a laboratory',
    label: 'Workshops',
    caption: 'Hands on, every hour',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=75',
    alt: 'A concert crowd silhouetted against warm stage lights and haze',
    label: 'Technoholix',
    caption: 'Nights that do not sit still',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=75',
    alt: 'Green code characters falling across a dark screen',
    label: 'Hackathons',
    caption: 'Built against the clock',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=75',
    alt: 'A glowing network of connections wrapping the Earth at night',
    label: 'Global',
    caption: 'A campus with worldwide reach',
    span: 'col-span-1 row-span-1',
  },
]

export const scheduleDays = [
  {
    id: 'day-1',
    day: '01',
    weekday: 'Wednesday',
    date: '16',
    month: 'December',
    theme: 'The doors open',
    items: [
      {
        title: 'Campus access & delegate check-in',
        tag: 'Arrival',
        copy: 'Registrations, the accommodation desk and your first look at the festival map.',
      },
      {
        title: 'Inaugural ceremony',
        tag: 'Ceremony',
        copy: 'The 30th edition opens on the IIT Bombay campus.',
      },
      {
        title: 'International exhibitions go live',
        tag: 'Exhibitions',
        copy: 'Robotics, AI, aerospace and deep-tech showcases open to all visitors.',
      },
      {
        title: 'Competition rounds begin',
        tag: 'Competitions',
        copy: 'Hackathon finals, robotics heats and championship qualifiers get underway.',
      },
      {
        title: 'Technoholix',
        tag: 'Night show',
        copy: 'The main stage takes over for the first night of the festival.',
      },
    ],
  },
  {
    id: 'day-2',
    day: '02',
    weekday: 'Thursday',
    date: '17',
    month: 'December',
    theme: 'The contest deepens',
    items: [
      {
        title: 'Techfest World MUN — Day 1',
        tag: 'Conference',
        copy: 'Committees convene for the two-day Techfest World Model United Nations.',
      },
      {
        title: 'National finals',
        tag: 'Competitions',
        copy: 'The autonomy, robotics and aeromodelling arenas move into their final rounds.',
      },
      {
        title: 'Workshops & masterclasses',
        tag: 'Workshops',
        copy: 'Hands-on sessions with industry experts across the day.',
      },
      {
        title: 'Guest lectures',
        tag: 'Talks',
        copy: 'Conversations with the people building the next decade of technology.',
      },
      {
        title: 'Technoholix',
        tag: 'Night show',
        copy: 'A second night of artists, light and sound on the main stage.',
      },
    ],
  },
  {
    id: 'day-3',
    day: '03',
    weekday: 'Friday',
    date: '18',
    month: 'December',
    theme: 'The last word',
    items: [
      {
        title: 'Grand finals',
        tag: 'Competitions',
        copy: 'Championship deciders across the competition tracks.',
      },
      {
        title: 'Techfest World MUN — Day 2',
        tag: 'Conference',
        copy: 'Final sessions, resolutions and closing debate.',
      },
      {
        title: 'Exhibitions — final day',
        tag: 'Exhibitions',
        copy: 'Last chance to walk the exhibition floor and meet the teams.',
      },
      {
        title: 'Prize distribution',
        tag: 'Awards',
        copy: 'Winners take the stage across every category.',
      },
      {
        title: 'Closing ceremony',
        tag: 'Ceremony',
        copy: 'The 30th edition signs off on the IIT Bombay campus.',
      },
    ],
  },
]

export const socials = {
  instagram: 'https://www.instagram.com/techfest_iitbombay/',
  x: 'https://x.com/Techfest_IITB',
  facebook: 'https://www.facebook.com/iitbombaytechfest/',
  linkedin: 'https://in.linkedin.com/company/techfest',
  youtube: 'https://www.youtube.com/user/techfestiitbombay',
}

export const contact = {
  addressLines: [
    'Techfest Office',
    "Students' Activity Centre",
    'IIT Bombay, Powai',
    'Mumbai 400076',
  ],
  note: 'For registrations, delegations, sponsorship and media enquiries, reach the team through the official contact desk.',
}

export const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'About Techfest', href: '#about' },
      { label: 'Events & Competitions', href: '#events' },
      { label: 'Experiences', href: '#experiences' },
      { label: 'Highlights', href: '#highlights' },
      { label: 'Schedule', href: '#schedule' },
    ],
  },
  {
    title: 'Take part',
    links: [
      { label: 'Register', href: links.register, external: true },
      { label: 'Competitions', href: links.competitions, external: true },
      { label: 'Workshops', href: links.workshops, external: true },
      { label: 'Accommodation', href: links.accommodation, external: true },
      { label: 'College Ambassador', href: links.ambassador, external: true },
    ],
  },
  {
    title: 'Official',
    links: [
      { label: 'techfest.org', href: links.home, external: true },
      { label: 'Full schedule', href: links.schedule, external: true },
      { label: 'Exhibitions', href: links.exhibitions, external: true },
      { label: 'Contact desk', href: links.contact, external: true },
    ],
  },
]
