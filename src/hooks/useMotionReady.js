import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Whether entrance animations can safely run.
 *
 * Browsers freeze the Web Animations timeline for background tabs, so a page
 * that is loaded but never shown would sit at `opacity: 0` until it is viewed.
 * Rendering at the final state instead keeps content readable in every case —
 * animations then apply only once the page is actually visible.
 */
export default function useMotionReady() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState === 'visible',
  )

  useEffect(() => {
    if (visible) return undefined

    const onChange = () => {
      if (document.visibilityState === 'visible') setVisible(true)
    }

    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [visible])

  return !reduce && visible
}
