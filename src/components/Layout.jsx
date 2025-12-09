import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

