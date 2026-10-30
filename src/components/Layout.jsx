import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative blobs – replace with SVG assets later */}
      <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-[28rem] rounded-[50%] bg-brand-orange" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-96 rounded-[50%] bg-brand-orange" />

      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  )
}
