import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-2 rounded-t-2xl bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-wide text-indigo-600">
              {book.category}
            </p>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700">
              {book.title}
            </h3>
            <p className="text-sm text-slate-600">by {book.author}</p>
          </div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
            ★ {book.rating}
          </span>
        </div>
        <p className="text-sm text-slate-700">{book.description}</p>
        <div className="mt-auto">
          <Link
            to={`/book/${book.id}`}
            className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard

