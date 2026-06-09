# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite + React single-page application for Hamasah Gallery. The entry point is `src/main.tsx`; routing and the shared page layout live in `src/app/App.tsx` and `src/app/routes.tsx`.

- `src/app/pages/`: one component per route, such as `Home.tsx` and `Produk.tsx`.
- `src/app/components/`: shared application components; `ui/` contains generated shadcn-style primitives.
- `src/app/data/`: structured content and helper functions.
- `src/assets/`: production images and the `images.ts` import barrel.
- `src/styles/`: Tailwind v4 entrypoint, fonts, and theme variables.

Do not edit generated `src/imports/`, stale `src/assets bckup/`, or template `guidelines/`. Treat `dist/` as generated build output.

## Build, Test, and Development Commands

- `npm i`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Vite development server.
- `npm run build`: create a production build in `dist/`.
- `npm run deploy`: build and publish using `deploy.js`.

There are currently no lint, typecheck, or automated test scripts. Before submitting changes, run `npm run build` and manually verify affected routes and responsive layouts.

## Coding Style & Naming Conventions

Use two-space indentation, single quotes, and semicolons in TypeScript/TSX. Name React components and component files in PascalCase; use named exports for pages and shared components. Import React Router APIs from `react-router`, not `react-router-dom`.

Style with inline Tailwind CSS v4 utilities. Use `cn()` from `src/app/components/ui/utils.ts` for conditional classes. Import images through `src/assets/images.ts` and render them with `ImageWithFallback`. Preserve the `@` path alias and the custom `figma:asset/` Vite resolver.

## Testing Guidelines

No testing framework or coverage threshold is configured. Manually check navigation, image fallbacks, WhatsApp/order links, and browser console errors. Add automated tests only with accompanying scripts and documentation.

## Commit & Pull Request Guidelines

Git history currently contains only `Initial commit`; use short, imperative commit subjects such as `Fix mobile navigation`. Keep commits focused. Pull requests should summarize behavior changes, list manual verification performed, link relevant issues, and include before/after screenshots for visible UI changes.
