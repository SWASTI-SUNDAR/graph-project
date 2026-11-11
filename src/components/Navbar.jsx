import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { images } from '../data/images'

const links = [
  { to: '/algorithm', label: 'Algorithm' },
  { to: '/cases', label: 'Cases' },
  { to: '/abbreviations', label: 'Abbreviations' },
  { to: '/resources', label: 'Useful resources' },
]

// Desktop sizes use --u (1 design px, see index.css) so the header matches the design exactly
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 flex items-center justify-between gap-3 px-3 py-[1.2vh] lg:block lg:h-[calc(var(--u)*158)] lg:p-0">
      <Link to="/" className="flex shrink-0 items-center lg:block" onClick={() => setOpen(false)}>
        <img
          src={images.logo}
          alt="American Society of Hematology"
          className="aspect-square h-[clamp(48px,7.5vh,84px)] w-auto object-contain lg:absolute lg:h-auto lg:left-[calc(var(--u)*14)] lg:top-[calc(var(--u)*8)] lg:w-[calc(var(--u)*152)]"
        />
        <img
          src={images.idAlgorithmLogo}
          alt="ID Algorithm"
          className="aspect-[792/136] h-[clamp(20px,3vh,34px)] w-auto object-contain lg:absolute lg:h-auto lg:left-[calc(var(--u)*170)] lg:top-[calc(var(--u)*44)] lg:w-[calc(var(--u)*335)]"
        />
      </Link>

      <nav className="hidden font-semibold text-white lg:absolute lg:right-[calc(var(--u)*62)] lg:top-[calc(var(--u)*40)] lg:flex lg:text-[calc(var(--u)*21)]">
        {links.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-[calc(var(--u)*47)] leading-[calc(var(--u)*37)] last:pr-0 ${i > 0 ? 'border-l-2 border-white' : ''} ${isActive ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="self-start rounded-md bg-navy p-2 text-white lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav className="absolute right-3 top-[75%] flex w-56 flex-col overflow-hidden rounded-lg bg-navy font-semibold text-white shadow-lg lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-5 py-3 ${isActive ? 'bg-white/15' : 'hover:bg-white/10'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
