import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { images } from '../data/images'

// Every decoration gets a fixed box (in vw, measured from the design) and the image
// is stretched into it, so the layout doesn't depend on the exported image size
export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <img
        src={images.topRightShape}
        alt=""
        className="pointer-events-none absolute right-0 top-0 h-[max(9.6vw,52px)] w-[max(58vw,300px)] object-fill"
      />
      <img
        src={images.topRightLine}
        alt=""
        onError={(e) => (e.currentTarget.style.display = 'none')}
        className="pointer-events-none absolute right-0 top-0 h-[max(8.8vw,48px)] w-[max(58vw,300px)] object-fill"
      />
      <img
        src={images.bottomLeftShape}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 h-[6.6vw] w-[29.5vw] object-fill"
      />
      <img
        src={images.bottomLine}
        alt=""
        className="pointer-events-none absolute bottom-[0.3vw] left-0 h-[6.5vw] w-[99.5vw] object-fill"
      />

      <Navbar />
      <main className="relative z-10 flex-1 pb-[9vw]">
        <Outlet />
      </main>
    </div>
  )
}
