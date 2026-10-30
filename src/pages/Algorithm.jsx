import CharacterCard from '../components/CharacterCard'
import { characters } from '../data/characters'

export default function Algorithm() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-12">
      <div className="flex w-full flex-wrap justify-center gap-x-10 gap-y-12 md:justify-between">
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
    </section>
  )
}
