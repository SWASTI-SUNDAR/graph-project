import { Certainty, CheckIcon, CrossIcon, InfoIcon } from './Icons'

export default function Legend({ className = '' }) {
  return (
    <div className={`w-[283px] border-2 border-navy bg-white text-navy ${className}`}>
      <div className="border-b-2 border-navy px-2.5 py-2">
        <p className="text-[11px] font-bold">Recommendation strength</p>
        <p className="mt-2 flex items-center gap-3 text-[9px]">
          <CheckIcon /> “Suggests…”
        </p>
        <p className="mt-1.5 flex items-center gap-3 text-[9px]">
          <CrossIcon /> “Suggests against…”
        </p>
      </div>
      <div className="border-b-2 border-navy px-2.5 py-2">
        <p className="text-[11px] font-bold">Evidence certainty</p>
        <p className="mt-2 flex items-center gap-3 text-[9px]">
          <Certainty level={2} /> Low certainty
        </p>
      </div>
      <p className="flex items-center gap-3 px-2.5 py-1.5 text-[9px]">
        <InfoIcon className="border-0" /> Click to learn more
      </p>
    </div>
  )
}
