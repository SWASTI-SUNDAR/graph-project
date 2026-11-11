import { Link } from 'react-router-dom'
import { images } from '../data/images'

const sections = ['Design and Planning', 'Conduct and Operations', 'Analysis and Dissemination']

// Soft staggered entrance: each block fades up a beat after the previous one
const FADE = 'motion-safe:animate-fade-up'
const delay = (ms) => ({ animationDelay: `${ms}ms` })

// Desktop sizes use --u (1 design px on the 1868x1052 design, see index.css)
export default function Home() {
  return (
    <section className="grid gap-10 px-6 pt-6 lg:block lg:p-0 lg:pl-[calc(var(--u)*140)] lg:pt-[calc(var(--u)*56)]">
      <div>
        <h1
          style={delay(100)}
          className={`${FADE} font-[Arial,Helvetica,sans-serif] text-3xl font-bold leading-tight md:text-4xl lg:text-[calc(var(--u)*64)] lg:leading-none`}
        >
          ASH Iron deficiency algorithm
        </h1>

        <div className="mt-5 text-base leading-snug lg:mt-[calc(var(--u)*51)] lg:text-[calc(var(--u)*23)] lg:leading-[calc(var(--u)*32)]">
          <p className={FADE} style={delay(250)}>This scrollable map is split into 3 sections:</p>
          <ul className="mt-4 list-disc pl-6 marker:text-[0.7em] lg:mt-[calc(var(--u)*38)] lg:pl-[calc(var(--u)*39)]">
            {sections.map((s, i) => (
              <li key={s} className={FADE} style={delay(350 + i * 90)}>
                {s}
              </li>
            ))}
          </ul>
          <p style={delay(650)} className={`${FADE} mt-4 lg:mt-[calc(var(--u)*24)] lg:max-w-[calc(var(--u)*990)]`}>
            Here you'll find an explanation of the key stages to consider when setting up your own clinical trial.
          </p>
        </div>

        {/* Wrapper owns the entrance so the button's hover lift stays independent */}
        <div className={FADE} style={delay(780)}>
          <Link
            to="/algorithm"
            className="mt-6 inline-flex h-12 w-40 items-center justify-center rounded-full bg-navy text-lg font-semibold text-white shadow-md shadow-navy/20 transition duration-300 ease-soft hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/30 active:translate-y-0 lg:mt-[calc(var(--u)*28)] lg:h-[calc(var(--u)*64)] lg:w-[calc(var(--u)*214)] lg:text-[calc(var(--u)*26)]"
          >
            Enter
          </Link>
        </div>

        <div
          style={delay(920)}
          className={`${FADE} mt-8 space-y-4 text-sm lg:mt-[calc(var(--u)*50)] lg:max-w-[calc(var(--u)*1040)] lg:space-y-[calc(var(--u)*23)] lg:text-[calc(var(--u)*18)] lg:leading-[calc(var(--u)*25)]`}
        >
          <p>
            This map was created by ASH with funding support from The ASH Health Impact Collective, Genentech, Kite,
            J&amp;J Innovative Medicine and AbbVie. Together we are committed to ensuring access to life-saving clinical
            trials and research.
          </p>
          <p>View the ASH® TOOLKIT to support inclusion and expand access in clinical trials.</p>
        </div>
      </div>

      {/* Ring + 3 people, placed exactly where the design has them. Wrapper floats gently; img zooms in once */}
      <div
        className="motion-safe:animate-float mx-auto aspect-[615/635] w-full max-w-md lg:absolute lg:right-[calc(var(--u)*58)] lg:top-[calc(var(--u)*82)] lg:h-[calc(var(--u)*635)] lg:w-[calc(var(--u)*615)] lg:max-w-none"
        style={{ animationDelay: '1.4s' }}
      >
        <img
          src={images.doctors}
          alt="Three clinicians"
          className="motion-safe:animate-zoom-in h-full w-full object-contain"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </section>
  )
}
