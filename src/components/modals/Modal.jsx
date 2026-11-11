import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const CLOSE_MS = 220

// Centered popup over a blurred page: navy title bar, red close button, scrollable white body
export default function Modal({ title, onClose, children }) {
  const [closing, setClosing] = useState(false)
  const closeBtn = useRef(null)
  const timer = useRef(null)

  const close = () => {
    if (closing) return
    setClosing(true)
    timer.current = setTimeout(onClose, CLOSE_MS)
  }

  const closeRef = useRef(close)
  closeRef.current = close

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeRef.current()
    document.addEventListener('keydown', onKey)
    // Lock page scroll while open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      clearTimeout(timer.current)
    }
  }, [])

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-200 ${closing ? 'opacity-0' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="motion-safe:animate-fade-in absolute inset-0 bg-navy/45 backdrop-blur-md"
        onClick={close}
        aria-hidden="true"
      />

      <div
        className={`motion-safe:animate-modal-in relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border-[6px] border-navy bg-white shadow-2xl transition-transform duration-200 ${closing ? 'translate-y-3 scale-[0.98]' : ''}`}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 bg-navy px-5 py-4 sm:px-7 sm:py-5">
          <h2 id="modal-title" className="text-lg font-bold text-white sm:text-xl">
            {title}
          </h2>
          <button
            ref={closeBtn}
            type="button"
            onClick={close}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-orange text-white transition hover:scale-105 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-14 sm:py-10">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
