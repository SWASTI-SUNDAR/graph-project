import { CheckIcon, InfoIcon } from './Icons'

const variants = {
  default: 'border-navy bg-white text-navy',
  muted: 'border-neutral-600 bg-white text-neutral-400',
  orange: 'border-brand-orange bg-white text-brand-orange',
  yellow: 'border-navy bg-[#fdf0c2] text-navy',
}

export default function FlowNode({ node }) {
  const { x, y, w, h, variant = 'default', shape = 'box', icon, lines } = node
  const radius = shape === 'tab' ? 'rounded-b-[22px] rounded-t-sm' : 'rounded-lg'

  return (
    <div
      className={`absolute flex flex-col items-center justify-center border-2 px-1 text-center text-[10.5px] leading-[1.2] ${icon ? 'pl-3' : ''} ${radius} ${variants[variant]}`}
      style={{ left: x, top: y, width: w, height: h }}
    >
      {icon && (
        <button type="button" className="absolute -left-2.5 top-1/2 -translate-y-1/2" aria-label="More info">
          {icon === 'info' ? <InfoIcon /> : <CheckIcon />}
        </button>
      )}
      {lines.map((line, i) => (
        <span key={i} className={line.bold ? 'font-bold' : ''}>
          {line.text}
        </span>
      ))}
    </div>
  )
}
