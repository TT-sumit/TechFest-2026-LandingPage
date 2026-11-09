import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Events from './components/Events'
import Experiences from './components/Experiences'
import Highlights from './components/Highlights'
import Schedule from './components/Schedule'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ScrollProgress from './components/ui/ScrollProgress'

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />

      {/* film grain over the whole page */}
      <div
        aria-hidden="true"
        className="noise pointer-events-none fixed inset-0 z-40 opacity-[0.028]"
      />

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Events />
        <Experiences />
        <Highlights />
        <Schedule />
        <CallToAction />
      </main>

      <Footer />
    </>
  )
}
