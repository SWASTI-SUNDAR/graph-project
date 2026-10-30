import CharacterBadge from './CharacterBadge'
import FlowNode from './FlowNode'
import Legend from './Legend'
import { InfoIcon } from './Icons'

export default function Flowchart({ flow, character }) {
  const { badge, nodes, edges, learnMore } = flow

  return (
    <div className="relative mx-auto h-[620px] w-[900px] shrink-0 font-[Arial,Helvetica,sans-serif]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 620" fill="none">
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M0 0L6 3L0 6z" fill="#13325b" />
          </marker>
        </defs>
        {edges.map((e, i) => (
          <path key={i} d={e.d} stroke="#13325b" strokeWidth="2" markerEnd={e.arrow ? 'url(#arrow)' : undefined} />
        ))}
      </svg>

      <CharacterBadge character={character} {...badge} />

      {nodes.map((n) => (
        <FlowNode key={n.id} node={n} />
      ))}

      {learnMore && (
        <button
          type="button"
          className="absolute flex h-[25px] items-center rounded-r-full rounded-l-md bg-navy pl-6 text-[10.5px] font-bold text-white"
          style={{ left: learnMore.x, top: learnMore.y, width: learnMore.w }}
        >
          <InfoIcon className="absolute -left-1.5 top-1/2 -translate-y-1/2" />
          Learn more
        </button>
      )}

      <Legend className="absolute left-[59px] top-[451px]" />
    </div>
  )
}
