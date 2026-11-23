# Overlink frontend

React 19 + Vite single-page app for [Overlink](../README.md).

## Scripts

- `npm run dev`: start the dev server on http://localhost:5173
- `npm run build`: production build into `dist/`
- `npm run preview`: serve the production build locally
- `npm run lint`: run ESLint

## Configuration

`VITE_API_BASE` sets the backend API URL. It defaults to
`http://localhost:5000/api` for local development.

## Layout

- `src/scenes/`: full-screen views (login, map, missions, terminal, files)
- `src/components/`: nav bar, bottom menu and its panels (shop, hard drive, profile)
- `src/software/`: the in-game tools (Password Cracker, Copier, Deleter, Trace Monitor)
- `src/store/`: Jotai atoms, including the state persisted to `localStorage`
- `src/api/`: calls to the backend
