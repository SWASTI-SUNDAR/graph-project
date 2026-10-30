import { Navigate, useParams } from 'react-router-dom'
import Flowchart from '../components/flow/Flowchart'
import { characters } from '../data/characters'
import { flows } from '../data/flows'

export default function CharacterDetail() {
  const { id } = useParams()
  const character = characters.find((c) => c.id === id)

  if (!character) return <Navigate to="/algorithm" replace />

  return (
    // Chart keeps its fixed design size and scrolls horizontally on small screens
    <section className="w-full overflow-x-auto overscroll-x-contain pb-8">
      <div className="mx-auto w-max px-4">
        <Flowchart flow={flows[id]} character={character} />
      </div>
    </section>
  )
}
