// Dummy content: swap the hrefs and titles for the real links
const videos = [{ title: '', href: '#' }]
const presentations = [
  { title: 'Skills Needed for Emerging Scientific Leaders', href: '#' },
  { title: 'The Importance of Good Mentorship', href: '#' },
]

function FileIcon({ type }) {
  const isPdf = type === 'pdf'
  const stroke = isPdf ? 'var(--color-brand-orange)' : 'var(--color-navy)'
  return (
    <svg viewBox="0 0 104 112" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
      <path d="M80 2 L100 22 L80 22 Z" fill={isPdf ? '#fbd3b8' : '#c9d2de'} />
      <rect x="4" y="2" width="76" height="104" rx="3" fill="#fff" stroke={stroke} strokeWidth="3" />
      {isPdf ? (
        <>
          <rect x="10" y="36" width="64" height="38" rx="3" fill="var(--color-brand-orange)" />
          <text x="42" y="62" textAnchor="middle" fill="#fff" fontSize="19" fontWeight="700" fontFamily="Arial, sans-serif">
            PDF
          </text>
        </>
      ) : (
        <>
          <rect x="12" y="36" width="60" height="36" rx="3" fill="var(--color-navy)" />
          <path d="M36 45 L52 54 L36 63 Z" fill="#fff" />
        </>
      )}
      <rect x="12" y="84" width="44" height="3" rx="1.5" fill="var(--color-page)" />
      <rect x="12" y="92" width="30" height="3" rx="1.5" fill="var(--color-page)" />
    </svg>
  )
}

function ResourceCard({ type, title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex min-h-48 flex-col items-center justify-center gap-5 rounded-xl border border-navy/15 bg-page/40 px-6 py-8 text-center transition hover:-translate-y-1 hover:border-brand-orange hover:shadow-md sm:min-h-56"
    >
      <span className="transition group-hover:scale-105">
        <FileIcon type={type} />
      </span>
      {title && <span className="text-base leading-snug font-semibold text-navy sm:text-lg">{title}</span>}
    </a>
  )
}

const grid = 'mt-6 grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 md:grid-cols-3'

export default function ResourcesContent() {
  return (
    <div className="text-navy">
      <h3 className="text-xl font-bold sm:text-2xl">Videos:</h3>
      <p className="mt-5 text-base leading-relaxed text-navy/80 sm:text-lg">
        To access the videos, please click the link below. You will be redirected to the LMS platform. Please note that
        you will be leaving the ASH ID Algorithm site.
      </p>
      <div className={grid}>
        {videos.map((v, i) => (
          <ResourceCard key={i} type="video" {...v} />
        ))}
      </div>

      <h3 className="mt-10 text-xl font-bold sm:text-2xl">Presentations:</h3>
      <div className={grid}>
        {presentations.map((p) => (
          <ResourceCard key={p.title} type="pdf" {...p} />
        ))}
      </div>
    </div>
  )
}
