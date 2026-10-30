import { Certainty } from './Icons'

export default function CharacterBadge({ character, x, y, certainty }) {
  return (
    <div className="absolute" style={{ left: x - 54, top: y - 47, width: 108 }}>
      <svg viewBox="0 0 108 107" className="absolute left-0 top-[57px] h-[107px] w-[108px]">
        <polygon points="0,0 108,0 108,84 54,107 0,84" fill="#13325b" />
      </svg>

      <div className="relative mx-auto h-[94px] w-[94px] overflow-hidden rounded-full border-2 border-navy bg-white p-1">
        <img src={character.image} alt={character.label} className="h-full w-full rounded-full object-cover" />
      </div>

      <div className="relative mt-2 flex flex-col items-center px-2 text-center text-[10.5px] font-bold leading-tight text-white">
        <span>{character.label}</span>
        <span className="mt-1.5">
          <Certainty level={certainty} />
        </span>
      </div>
    </div>
  )
}
