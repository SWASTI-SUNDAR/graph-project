import { Link } from 'react-router-dom'

const sections = ['Design and Planning', 'Conduct and Operations', 'Analysis and Dissemination']

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-20">
      <h1 className="text-4xl font-bold md:text-5xl">ASH ID algorithm</h1>

      <div className="mt-8 max-w-2xl text-base md:text-lg">
        <p>This scrollable map is split into 3 sections:</p>
        <ul className="ml-6 list-disc">
          {sections.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-4">
          Here you'll find an explanation of the key stages to consider when setting up your own clinical trial.
        </p>
      </div>

      <Link
        to="/algorithm"
        className="mt-8 inline-block rounded-full bg-navy px-12 py-2.5 text-lg font-bold text-white hover:opacity-90"
      >
        Enter
      </Link>

      <div className="mt-8 max-w-2xl space-y-4 text-xs">
        <p>
          This map was created by ASH with funding support from The ASH Health Impact Collective, Genentech, Kite,
          J&amp;J Innovative Medicine and AbbVie. Together we are committed to ensuring access to life-saving clinical
          trials and research.
        </p>
        <p>View the ASH® TOOLKIT to support inclusion and expand access in clinical trials.</p>
      </div>
    </section>
  )
}
