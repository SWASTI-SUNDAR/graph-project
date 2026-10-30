import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CharacterCard({ character }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Link to={`/algorithm/${character.id}`} className="group flex w-40 flex-col items-center text-center md:w-48">
      <div className="relative aspect-square w-full">
        {/* Hand-drawn style highlight ring shown on hover */}
        <svg
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -inset-[14%] h-[128%] w-[128%] scale-90 text-brand-orange opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
        >
          <path
            strokeWidth="3"
            d="M100 18c22-2 30 10 46 14s28 22 30 40-2 26 4 42-12 34-26 44-30 22-52 22-36-8-52-20-28-26-30-48 4-32 2-48 18-30 34-38 22-6 44-8z"
          />
          <path strokeWidth="1.5" opacity="0.6" d="M100 26c40 0 72 32 72 74s-32 74-72 74-74-32-74-74 34-74 74-74z" />
          <path strokeWidth="3" d="M16 22l8 6M10 34l10 2M184 150l10 2" />
        </svg>

        <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-brand-orange">
          {imgFailed ? (
            <div className="flex h-full w-full items-center justify-center bg-white/40 text-xs text-navy/60">Image</div>
          ) : (
            <img
              src={character.image}
              alt={character.label}
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover object-bottom"
            />
          )}
        </div>
      </div>

      <p className="mt-3 text-lg font-bold leading-tight">{character.label}</p>
      {character.subLabel && <p className="text-sm font-bold">{character.subLabel}</p>}
    </Link>
  )
}
