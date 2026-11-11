import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { images } from '../data/images'

const links = [
  { to: '/algorithm', label: 'Algorithm' },
  { to: '/cases', label: 'Cases' },
  { to: '/abbreviations', label: 'Abbreviations' },
  { to: '/resources', label: 'Useful resources' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 flex items-start justify-between gap-4 px-2 pt-2 lg:px-[0.6vw] lg:pt-[0.5vw]">
      <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
        <img src={images.logo} alt="American Society of Hematology" className="aspect-square w-14 object-contain sm:w-[4.5rem] lg:w-[7vw]" />
        <img src={images.idAlgorithmLogo} alt="ID Algorithm" className="aspect-[5.8] w-32 object-contain sm:w-40 lg:w-[15.5vw]" />
      </Link>

      <nav className="mt-[1.6vw] hidden items-center pr-[2vw] text-[1.2vw] font-semibold text-white lg:flex">
        {links.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-[2.4vw] py-[0.5vw] ${i > 0 ? 'border-l-2 border-white' : ''} ${isActive ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-3 rounded-md bg-navy p-2 text-white lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav className="absolute right-2 top-16 flex w-56 flex-col overflow-hidden rounded-lg bg-navy font-semibold text-white shadow-lg lg:hidden">
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
