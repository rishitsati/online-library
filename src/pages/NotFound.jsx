import { Link, useLocation } from 'react-router-dom'

function NotFound() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 text-center text-slate-800">
      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          404 Error
        </p>
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600">
          The URL <span className="font-semibold text-indigo-700">{location.pathname}</span> does
          not exist in this library.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound

