import { useEffect, useState } from 'react'

/**
 * Keeps an element mounted long enough for its CSS exit transition to play.
 *
 * Deliberately time-based rather than animation-event based: mounting and
 * unmounting must never depend on an animation finishing.
 *
 * @returns {{ mounted: boolean, visible: boolean }}
 */
export default function usePresence(open, duration = 240) {
  const [mounted, setMounted] = useState(open)
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    if (open) {
      setMounted(true)
      // Reveal on the next frame so the browser paints the "enter" state
      // first. The timer is a fallback: rAF is suspended in background tabs.
      const frame = requestAnimationFrame(() => setVisible(true))
      const timer = window.setTimeout(() => setVisible(true), 80)
      return () => {
        cancelAnimationFrame(frame)
        window.clearTimeout(timer)
      }
    }

    setVisible(false)
    const timer = window.setTimeout(() => setMounted(false), duration)
    return () => window.clearTimeout(timer)
  }, [open, duration])

  return { mounted, visible }
}
