import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { images } from '../data/images'

// Decorations (orange shape + blue line) keep their natural proportions; desktop sizes use --u
export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <img
        src={images.topDecoration}
        alt=""
        className="pointer-events-none absolute right-0 top-0 w-[max(58vw,300px)] lg:w-[calc(var(--u)*1085)]"
      />
      <img src={images.bottomDecoration} alt="" className="pointer-events-none absolute bottom-0 left-0 w-full" />

      <Navbar />
      <main className="relative z-10 flex-1 pb-[9vw] lg:pb-[calc(var(--u)*140)]">
        <Outlet />
      </main>
    </div>
  )
}
