import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook, selectCategories } from '../features/books/booksSlice'

const initialForm = {
  title: '',
  author: '',
  category: '',
  description: '',
  rating: '',
}

function AddBook() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categories = useSelector(selectCategories)

  const categoryOptions = useMemo(() => {
    const set = new Set(['Fiction', 'Non-Fiction', 'Sci-Fi', ...categories])
    return Array.from(set)
  }, [categories])

  const validate = () => {
    const newErrors = {}
    if (!form.title.trim()) newErrors.title = 'Title is required.'
    if (!form.author.trim()) newErrors.author = 'Author is required.'
    if (!form.category.trim()) newErrors.category = 'Category is required.'
    if (!form.description.trim()) newErrors.description = 'Description is required.'
    const ratingValue = Number(form.rating)
    if (!form.rating && form.rating !== 0) {
      newErrors.rating = 'Rating is required.'
    } else if (Number.isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
      newErrors.rating = 'Rating must be between 0 and 5.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const newBook = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      rating: Number(form.rating),
    }

    dispatch(addBook(newBook))
    setForm(initialForm)
    navigate('/books')
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">New book</p>
        <h1 className="text-2xl font-bold text-slate-900">Add to the library</h1>
        <p className="mt-2 text-sm text-slate-600">
          Please provide complete details so readers can discover your recommendation.
        </p>
      </div>
      <form className="grid gap-4 sm:grid-cols-2 sm:gap-6" onSubmit={handleSubmit} noValidate>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-semibold text-slate-800">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={handleChange('title')}
            className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:outline-none focus:ring-2 ${
              errors.title
                ? 'border-rose-300 ring-rose-100'
                : 'border-slate-200 bg-slate-50 focus:border-indigo-400 focus:ring-indigo-100'
            }`}
            placeholder="e.g., The Silent Stars"
          />
          {errors.title && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.title}</p>}
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-semibold text-slate-800">Author</label>
          <input
            type="text"
            value={form.author}
            onChange={handleChange('author')}
            className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:outline-none focus:ring-2 ${
              errors.author
                ? 'border-rose-300 ring-rose-100'
                : 'border-slate-200 bg-slate-50 focus:border-indigo-400 focus:ring-indigo-100'
            }`}
            placeholder="e.g., Amelia Hart"
          />
          {errors.author && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.author}</p>}
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-semibold text-slate-800">Category</label>
          <select
            value={form.category}
            onChange={handleChange('category')}
            className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:outline-none focus:ring-2 ${
              errors.category
                ? 'border-rose-300 ring-rose-100'
                : 'border-slate-200 bg-slate-50 focus:border-indigo-400 focus:ring-indigo-100'
            }`}
          >
            <option value="">Select a category</option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-xs font-semibold text-rose-600">{errors.category}</p>
          )}
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-semibold text-slate-800">Rating (0-5)</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={form.rating}
            onChange={handleChange('rating')}
            className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:outline-none focus:ring-2 ${
              errors.rating
                ? 'border-rose-300 ring-rose-100'
                : 'border-slate-200 bg-slate-50 focus:border-indigo-400 focus:ring-indigo-100'
            }`}
            placeholder="e.g., 4.5"
          />
          {errors.rating && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.rating}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-semibold text-slate-800">Description</label>
          <textarea
            rows="4"
            value={form.description}
            onChange={handleChange('description')}
            className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-800 shadow-inner focus:outline-none focus:ring-2 ${
              errors.description
                ? 'border-rose-300 ring-rose-100'
                : 'border-slate-200 bg-slate-50 focus:border-indigo-400 focus:ring-indigo-100'
            }`}
            placeholder="Share a brief synopsis or why this book matters."
          />
          {errors.description && (
            <p className="mt-1 text-xs font-semibold text-rose-600">{errors.description}</p>
          )}
        </div>

        <div className="sm:col-span-2 flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Save Book
          </button>
          <button
            type="button"
            onClick={() => navigate('/books')}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBook

