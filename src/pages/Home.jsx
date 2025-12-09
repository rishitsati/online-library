import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBooks, selectCategories } from '../features/books/booksSlice'
import BookCard from '../components/BookCard'

function Home() {
  const books = useSelector(selectBooks)
  const categories = useSelector(selectCategories)
  const popularBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4)

  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 px-6 py-12 shadow-lg sm:px-10">
        <div className="max-w-3xl text-white">
          <p className="mb-3 inline-flex rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
            Your digital reading room
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Welcome to Aurora Library
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Discover curated collections, explore new genres, and add your own favorites to our
            ever-growing shelf.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/books"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-slate-100"
            >
              Browse Books
            </Link>
            <Link
              to="/add"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Add a Book
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              Categories
            </p>
            <h2 className="text-xl font-bold text-slate-900">Browse by interest</h2>
          </div>
          <Link
            to="/books"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${encodeURIComponent(category)}`}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              Popular picks
            </p>
            <h2 className="text-xl font-bold text-slate-900">Readers love these</h2>
          </div>
          <Link
            to="/books"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Explore library
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

