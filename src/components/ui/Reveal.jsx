import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Scroll-triggered entrance. Collapses to a plain fade when the visitor has
 * asked for reduced motion, and never re-runs once seen.
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
  const reduce = useReducedMotion()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: reduce ? 0.35 : duration, delay: reduce ? 0 : delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export { EASE }
