import { useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBooks } from '../features/books/booksSlice'

function BookDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const books = useSelector(selectBooks)

  const book = useMemo(() => books.find((item) => item.id === id), [books, id])

  if (!book) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">Book not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          The requested book does not exist or was removed.
        </p>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Go Back
          </button>
          <Link
            to="/books"
            className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Browse Library
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex-1 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {book.category}
          </p>
          <h1 className="text-3xl font-bold text-slate-900">{book.title}</h1>
          <p className="text-lg font-medium text-slate-700">by {book.author}</p>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            ★ Rating {book.rating}
          </div>
          <p className="mt-2 text-base text-slate-700 leading-relaxed">{book.description}</p>
        </div>
        <div className="w-full max-w-sm space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-inner">
          <p className="text-sm text-slate-600">
            Enjoyed this book? Share it with friends or add your own picks to the library.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/add"
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Add a Book
            </Link>
            <Link
              to="/books"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails

