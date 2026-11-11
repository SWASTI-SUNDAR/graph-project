import { Link } from 'react-router-dom'
import { images } from '../data/images'

const sections = ['Design and Planning', 'Conduct and Operations', 'Analysis and Dissemination']

// Desktop sizes are in vw so the page scales exactly like the design
export default function Home() {
  return (
    <section className="grid items-start gap-10 px-6 pt-6 lg:grid-cols-[1fr_auto] lg:gap-[2vw] lg:pl-[7.4vw] lg:pr-[4vw] lg:pt-[min(1.8vw,3vh)]">
      <div>
        <h1 className="font-[Arial,Helvetica,sans-serif] text-[clamp(1.75rem,min(3vw,5.4vh),4.5rem)] font-bold leading-tight">
          ASH Iron deficiency algorithm
        </h1>

        <div className="mt-[min(2vw,3.5vh)] text-[clamp(0.95rem,min(1.2vw,2.2vh),1.75rem)] leading-snug">
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
          className="mt-[min(1.6vw,2.8vh)] inline-flex h-[clamp(2.5rem,min(3vw,5.4vh),4.5rem)] w-[clamp(8rem,min(10vw,18vh),14rem)] items-center justify-center rounded-full bg-navy text-[clamp(1rem,min(1.2vw,2.2vh),1.75rem)] font-semibold text-white hover:opacity-90"
        >
          Enter
        </Link>

        <div className="mt-[min(2.6vw,4.5vh)] max-w-[56em] space-y-[1.2em] text-[clamp(0.8rem,min(0.9vw,1.6vh),1.25rem)]">
          <p>
            This map was created by ASH with funding support from The ASH Health Impact Collective, Genentech, Kite,
            J&amp;J Innovative Medicine and AbbVie. Together we are committed to ensuring access to life-saving clinical
            trials and research.
          </p>
          <p>View the ASH® TOOLKIT to support inclusion and expand access in clinical trials.</p>
        </div>
      </div>

      {/* Ring + 3 people in one image, in a fixed box measured from the design */}
      <div className="mx-auto aspect-[660/680] w-full max-w-md lg:mt-[min(2vw,3.5vh)] lg:h-[min(31vw,60vh)] lg:w-auto lg:max-w-none">
        <img src={images.doctors} alt="Three clinicians" className="h-full w-full object-contain" />
      </div>
    </section>
  )
}
