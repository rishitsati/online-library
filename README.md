# Aurora Library (Online Library System)

Aurora Library is a small online library experience built with React, Vite, Redux Toolkit, React Router, and Tailwind CSS. It ships with curated dummy data, dynamic category browsing, search, book details, add-a-book flow, and a custom 404 page.

## Tech Stack
- React 19 + Vite
- Redux Toolkit + React Redux
- React Router
- Tailwind CSS

## Getting Started
```bash
# install dependencies
npm install

# start dev server
npm run dev
# then open the shown localhost URL
```

## Available Scripts
- `npm run dev` – start local dev server
- `npm run build` – production build
- `npm run preview` – preview the production build locally
- `npm run lint` – lint the project

## App Overview
- Home: welcome hero, category chips, and popular books.
- Browse Books: filter by category via `/books/:category`, search by title/author, and open details.
- Book Details: view full info with back/browse actions.
- Add Book: validated form that dispatches to Redux and redirects to Browse with the new book at the top.
- 404: friendly not-found page showing the invalid URL and link back home.

## Project Structure
- `src/pages` – route pages (Home, BrowseBooks, BookDetails, AddBook, NotFound)
- `src/components` – shared UI (Navbar, Layout, BookCard)
- `src/features/books` – Redux slice with dummy data and addBook reducer
- `src/store` – Redux store setup

## Styling
Tailwind CSS is configured in `tailwind.config.js` and `postcss.config.js`. Global styles and Tailwind directives live in `src/index.css`.
