import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import usePresence from '../../hooks/usePresence'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Portal-based dialog: traps focus, closes on Escape or backdrop click, locks
 * background scroll and restores focus to the trigger on close.
 *
 * Enter/exit is CSS-driven and unmounting is timer-driven, so a paused or
 * throttled animation can never leave an invisible overlay behind.
 */
export default function Modal({
  open,
  onClose,
  labelledBy,
  children,
  label = 'Close dialog',
  panelClassName = 'max-w-2xl border border-line bg-panel shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]',
}) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  const { mounted, visible } = usePresence(open, 230)

  useEffect(() => {
    if (!open) return undefined

    const trigger = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60)

    const handleKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const nodes = Array.from(panelRef.current.querySelectorAll(FOCUSABLE)).filter(
        (node) => node.offsetParent !== null || node === document.activeElement,
      )
      if (nodes.length === 0) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKey)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
      if (trigger instanceof HTMLElement) trigger.focus()
    }
  }, [open])

  if (!mounted) return null

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain p-4 py-10 transition-opacity duration-200 ease-out sm:items-center sm:p-6 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
      inert={!open}
    >
      <div
        className="fixed inset-0 bg-ink/85 backdrop-blur-md"
        onClick={() => onCloseRef.current()}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`relative w-full transition-[opacity,transform] duration-300 ease-out ${panelClassName} ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-[0.98] opacity-0'
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px glow-line" aria-hidden="true" />
        <button
          ref={closeRef}
          type="button"
          onClick={() => onCloseRef.current()}
          className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center border border-line text-ash transition-colors hover:border-flame/50 hover:text-chalk"
        >
          <X aria-hidden="true" className="size-4" />
          <span className="sr-only">{label}</span>
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
