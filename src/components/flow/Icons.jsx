export function InfoIcon({ className = '' }) {
  return (
    <span
      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-navy font-serif text-[11px] font-bold italic text-white ${className}`}
    >
      i
    </span>
  )
}

export function CheckIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 ${className}`}>
      <circle cx="10" cy="10" r="8.5" fill="white" stroke="#8c9a2e" strokeWidth="2" />
      <path d="M5.5 10.5l3 3 6-7" fill="none" stroke="#8c9a2e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CrossIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-5 w-5 ${className}`}>
      <circle cx="10" cy="10" r="8.5" fill="white" stroke="#c0282d" strokeWidth="2" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#c0282d" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function PlusIcon({ filled }) {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4">
      <circle cx="10" cy="10" r="9" fill={filled ? '#f47b2a' : 'white'} stroke="#6b6b6b" strokeWidth="1.5" />
      <path d="M10 5v10M5 10h10" stroke={filled ? 'white' : '#6b6b6b'} strokeWidth="2.6" />
    </svg>
  )
}

export function Certainty({ level, total = 4 }) {
  return (
    <span className="flex gap-1">
      {Array.from({ length: total }, (_, i) => (
        <PlusIcon key={i} filled={i < level} />
      ))}
    </span>
  )
}
