import { Link } from 'react-router-dom'
import { images } from '../data/images'

const sections = ['Design and Planning', 'Conduct and Operations', 'Analysis and Dissemination']

// Desktop sizes are in vw so the page scales exactly like the design
export default function Home() {
  return (
    <section className="grid items-start gap-10 px-6 pt-6 lg:grid-cols-[1fr_33vw] lg:gap-[2vw] lg:pl-[7.4vw] lg:pr-[3vw] lg:pt-[2.2vw]">
      <div>
        <h1 className="font-[Arial,Helvetica,sans-serif] text-[clamp(2rem,3.4vw,5rem)] font-bold leading-tight">
          ASH Iron deficiency algorithm
        </h1>

        <div className="mt-[2.4vw] text-[clamp(1rem,1.4vw,2rem)] leading-snug">
          <p className="max-w-[21em]">This scrollable map is split into 3 sections:</p>
          <ul className="ml-[1.3em] list-disc">
            {sections.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-[0.9em] max-w-[36em]">
            Here you'll find an explanation of the key stages to consider when setting up your own clinical trial.
          </p>
        </div>

        <Link
          to="/algorithm"
          className="mt-[1.8vw] inline-flex h-[clamp(2.75rem,3.5vw,5rem)] w-[clamp(9rem,11.5vw,16rem)] items-center justify-center rounded-full bg-navy text-[clamp(1.1rem,1.4vw,2rem)] font-semibold text-white hover:opacity-90"
        >
          Enter
        </Link>

        <div className="mt-[3.2vw] max-w-[56em] space-y-[1.4em] text-[clamp(0.85rem,1vw,1.4rem)]">
          <p>
            This map was created by ASH with funding support from The ASH Health Impact Collective, Genentech, Kite,
            J&amp;J Innovative Medicine and AbbVie. Together we are committed to ensuring access to life-saving clinical
            trials and research.
          </p>
          <p>View the ASH® TOOLKIT to support inclusion and expand access in clinical trials.</p>
        </div>
      </div>

      {/* Ring + 3 people in one image, in a fixed box measured from the design */}
      <div className="mx-auto aspect-[660/680] w-full max-w-md lg:mt-[2vw] lg:max-w-none">
        <img src={images.doctors} alt="Three clinicians" className="h-full w-full object-contain" />
      </div>
    </section>
  )
}
