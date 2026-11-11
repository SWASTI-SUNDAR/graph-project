// Dummy content: replace with the client's list
const abbreviations = [
  ['ASH', 'American Society of Hematology'],
  ['ID', 'Iron deficiency'],
  ['IDA', 'Iron deficiency anemia'],
  ['Hb', 'Hemoglobin'],
  ['MCV', 'Mean corpuscular volume'],
  ['TSAT', 'Transferrin saturation'],
  ['CRP', 'C-reactive protein'],
  ['CBC', 'Complete blood count'],
  ['IV', 'Intravenous'],
  ['AI', 'Anemia of inflammation'],
]

export default function AbbreviationsContent() {
  return (
    <dl className="divide-y divide-navy/10 overflow-hidden rounded-xl border border-navy/15 text-navy">
      {abbreviations.map(([short, full]) => (
        <div key={short} className="grid grid-cols-[6rem_1fr] gap-4 px-5 py-4 odd:bg-page/40 sm:grid-cols-[9rem_1fr] sm:px-7">
          <dt className="font-bold text-brand-orange">{short}</dt>
          <dd className="text-navy/85">{full}</dd>
        </div>
      ))}
    </dl>
  )
}
