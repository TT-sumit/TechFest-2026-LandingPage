import { motion } from 'framer-motion'
import useMotionReady from '../../hooks/useMotionReady'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Scroll-triggered entrance. Renders at its final state when animations cannot
 * run (reduced motion, or a background tab whose timeline is frozen), and never
 * re-runs once seen.
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 26,
  duration = 0.75,
  className,
  ...rest
}) {
  const motionReady = useMotionReady()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial={motionReady ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export { EASE }
