import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import { characters } from '../data/characters'

// Fade others -> glide selected to center -> morph into the flowchart page
const OPEN_DELAY = 950
const STAGGER = 70

export default function Algorithm() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleSelect = (e, id) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    e.preventDefault()
    if (selected) return

    // Distance from the card's center to the screen's center
    const rect = e.currentTarget.getBoundingClientRect()
    const offset = window.innerWidth / 2 - (rect.left + rect.width / 2)

    setSelected({ id, offset, index: characters.findIndex((c) => c.id === id) })
    timer.current = setTimeout(() => navigate(`/algorithm/${id}`, { viewTransition: true }), OPEN_DELAY)
  }

  const statusOf = (id) => (!selected ? 'idle' : selected.id === id ? 'selected' : 'hidden')

  return (
    <section className="animate-page-in px-6 pt-[clamp(1.5rem,min(4vw,7vh),5rem)] text-center">
      <p
        className={`text-[clamp(0.95rem,min(1.25vw,2.3vh),1.75rem)] transition-[opacity,transform] duration-500 ease-soft ${selected ? '-translate-y-2 opacity-0' : ''}`}
      >
        Select each character to navigate to that section.
      </p>

      <div className="mt-[clamp(1.5rem,min(3vw,5.5vh),4rem)] flex flex-wrap items-start justify-center gap-x-[3.5vw] gap-y-10">
        {characters.map((c, i) => (
          <CharacterCard
            key={c.id}
            character={c}
            status={statusOf(c.id)}
            offset={selected?.id === c.id ? selected.offset : 0}
            // Cards closest to the selected one fade first, rippling outwards
            delay={selected ? (selected.id === c.id ? 120 : (Math.abs(i - selected.index) - 1) * STAGGER) : 0}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  )
}
