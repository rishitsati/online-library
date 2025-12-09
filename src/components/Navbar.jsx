import { NavLink } from 'react-router-dom'

const navLinkBase =
  'px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-150'

const getLinkClasses = ({ isActive }) =>
  `${navLinkBase} ${
    isActive
      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
      : 'bg-white/70 text-slate-800 hover:bg-indigo-50'
  }`

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="text-xl font-bold text-indigo-700 tracking-tight">
          Aurora Library
        </NavLink>
        <nav className="flex items-center gap-3">
          <NavLink to="/" className={getLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/books" className={getLinkClasses}>
            Browse Books
          </NavLink>
          <NavLink to="/add" className={getLinkClasses}>
            Add Book
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

