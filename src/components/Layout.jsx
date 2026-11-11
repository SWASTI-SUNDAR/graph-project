import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { images } from '../data/images'

// Each decoration (orange shape + blue line) gets a fixed box (in vw, measured from the design)
// and the image is stretched into it, so the layout doesn't depend on the exported image size
export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <img
        src={images.topDecoration}
        alt=""
        className="pointer-events-none absolute right-0 top-0 h-[max(9.6vw,52px)] w-[max(58vw,300px)] object-fill"
      />
      <img
        src={images.bottomDecoration}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 h-[6.9vw] w-full object-fill"
      />

      <Navbar />
      <main className="relative z-10 flex-1 pb-[7.5vw]">
        <Outlet />
      </main>
    </div>
  )
}
