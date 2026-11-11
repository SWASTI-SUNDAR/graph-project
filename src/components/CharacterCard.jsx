import { Link } from 'react-router-dom'

// status: idle | selected | hidden. Only transform + opacity are animated so it stays on the GPU.
// Image box is fixed (measured from the design) so the exported image size doesn't matter
export default function CharacterCard({ character, status = 'idle', offset = 0, delay = 0, onSelect }) {
  const selected = status === 'selected'
  const hidden = status === 'hidden'

  const style = {
    transitionDelay: `${delay}ms`,
    ...(selected && { transform: `translate3d(${offset}px, 0, 0) scale(1.08)` }),
    ...(hidden && { transform: 'translate3d(0, 14px, 0) scale(0.94)' }),
  }

  return (
    <Link
      to={`/algorithm/${character.id}`}
      onClick={(e) => onSelect?.(e, character.id)}
      style={style}
      className={`group relative flex w-40 flex-col items-center text-center transition-[transform,opacity] ease-soft will-change-transform sm:w-44 lg:w-[13.7vw] ${
        selected ? 'z-10 duration-[850ms]' : ''
      } ${hidden ? 'pointer-events-none opacity-0 duration-[550ms]' : ''}`}
    >
      <div
        className={`aspect-[255/272] w-full transition-transform duration-500 ease-soft ${status === 'idle' ? 'group-hover:scale-105' : ''}`}
      >
        <img
          src={character.cardImage}
          alt={character.label}
          // Shared with the flowchart badge so the browser morphs one into the other
          style={selected ? { viewTransitionName: 'character-hero' } : undefined}
          className="h-full w-full object-contain"
        />
      </div>

      <p
        className={`mt-[clamp(0.75rem,1.6vw,2rem)] text-[clamp(1rem,1.3vw,1.8rem)] font-bold leading-snug transition-opacity duration-500 ease-soft ${
          selected ? 'opacity-0 delay-[600ms]' : ''
        }`}
      >
        {character.label}
        {character.subLabel && (
          <>
            <br />
            {character.subLabel}
          </>
        )}
      </p>
    </Link>
  )
}
