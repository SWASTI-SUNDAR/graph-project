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
    <section className="animate-page-in px-6 pt-6 lg:pl-0 lg:pr-[calc(var(--u)*38)] lg:pt-[calc(var(--u)*127)] text-center">
      <p
        className={`text-base lg:text-[calc(var(--u)*26)] lg:leading-[calc(var(--u)*34)] transition-[opacity,transform] duration-500 ease-soft ${selected ? '-translate-y-2 opacity-0' : ''}`}
      >
        Select each character to navigate to that section.
      </p>

      <div className="mt-8 lg:mt-[calc(var(--u)*69)] flex flex-wrap items-start justify-center gap-x-6 lg:gap-x-[calc(var(--u)*67)] gap-y-10">
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
