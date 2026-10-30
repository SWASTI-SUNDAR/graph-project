import { Link, NavLink, useLocation } from 'react-router-dom'

const centerLinks = [
  { to: '/algorithm', label: 'Algorithm' },
  { to: '/cases', label: 'Cases' },
]

const rightLinks = [
  { to: '/abbreviations', label: 'Abbreviations' },
  { to: '/resources', label: 'Useful resources' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="relative z-20 flex items-start justify-between gap-3 px-4 pt-3 md:px-8">
      <Link to="/" className="flex shrink-0 items-center gap-8">
        {/* Logo placeholder – swap for ASH logo asset */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xs font-bold text-red-700 shadow sm:h-20 sm:w-20 md:h-24 md:w-24">
          LOGO
        </div>
        {pathname !== '/' && <span className="hidden text-xl font-bold uppercase lg:inline">ASH ID algorithm</span>}
      </Link>

      <nav className="mt-3 flex shrink-0 overflow-hidden rounded-full bg-navy text-xs sm:mt-6 sm:text-sm font-bold text-white">
        {centerLinks.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 sm:px-6 md:px-10 ${i > 0 ? 'border-l border-white/70' : ''} ${isActive ? 'bg-white/15' : 'hover:bg-white/10'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <nav className="mt-6 hidden gap-10 font-bold text-white md:flex">
        {rightLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className="hover:underline">
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
