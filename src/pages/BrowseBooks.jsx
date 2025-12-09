import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'
import { selectBooks, selectCategories } from '../features/books/booksSlice'

function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(selectBooks)
  const categories = useSelector(selectCategories)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = useMemo(() => {
    const normalizedCategory = category ? decodeURIComponent(category) : ''
    return books.filter((book) => {
      const matchesCategory = normalizedCategory
        ? book.category.toLowerCase() === normalizedCategory.toLowerCase()
        : true
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [books, category, searchTerm])

  const heading = category ? `${decodeURIComponent(category)} Books` : 'All Books'

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            Browse
          </p>
          <h1 className="text-2xl font-bold text-slate-900">{heading}</h1>
        </div>
        <Link
          to="/add"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          + Add Book
        </Link>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/books"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                !category
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-800 hover:bg-indigo-50 hover:text-indigo-700'
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/books/${encodeURIComponent(cat)}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  decodeURIComponent(category || '')?.toLowerCase() === cat.toLowerCase()
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-800 hover:bg-indigo-50 hover:text-indigo-700'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
          <div className="relative w-full max-w-md">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 pr-10 text-sm font-medium text-slate-800 shadow-inner focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
              🔍
            </span>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.length === 0 ? (
            <div className="col-span-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
              <p className="text-sm font-semibold text-slate-700">No books found.</p>
              <p className="mt-2 text-sm text-slate-500">
                Try a different category or search term.
              </p>
            </div>
          ) : (
            filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default BrowseBooks

