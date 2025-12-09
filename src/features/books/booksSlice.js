import { createSlice } from '@reduxjs/toolkit'

const initialBooks = [
  {
    id: '1',
    title: 'The Silent Stars',
    author: 'Amelia Hart',
    category: 'Fiction',
    description:
      'A sweeping family saga set across continents, exploring love, loss, and the pull of home.',
    rating: 4.7,
  },
  {
    id: '2',
    title: 'Futureproof',
    author: 'Devon Clarke',
    category: 'Non-Fiction',
    description:
      'A practical guide to thriving in the age of automation with real-world case studies.',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'Starlight Protocol',
    author: 'Lena Ortiz',
    category: 'Sci-Fi',
    description:
      'A fast-paced space opera where a young pilot unravels a conspiracy that spans galaxies.',
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Beneath the Canopy',
    author: 'Marcus Reed',
    category: 'Fiction',
    description:
      'An intimate portrait of a small town rebuilding after a storm, told through multiple voices.',
    rating: 4.3,
  },
  {
    id: '5',
    title: 'Cosmic Dust',
    author: 'Priya Raman',
    category: 'Sci-Fi',
    description:
      'Scientists on a remote station discover a mineral that bends reality—and ethics.',
    rating: 4.6,
  },
  {
    id: '6',
    title: 'Mindful Minutes',
    author: 'Sarah Lin',
    category: 'Non-Fiction',
    description:
      'Short, science-backed practices to build focus and calm in busy modern life.',
    rating: 4.2,
  },
]

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.items.unshift(action.payload)
    },
  },
})

export const { addBook } = booksSlice.actions

export const selectBooks = (state) => state.books.items

export const selectCategories = (state) => {
  const unique = new Set(state.books.items.map((book) => book.category))
  return Array.from(unique).sort()
}

export default booksSlice.reducer

