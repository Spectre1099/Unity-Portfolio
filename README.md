# Muhammad Waleed Tahir Portfolio

This is a front-end portfolio site for Muhammad Waleed Tahir, a Software Engineer and Unity Developer. It is built with Vite + React + TypeScript and a modern UI stack.

## Tech Stack

- Vite
- React 18 + TypeScript
- Tailwind CSS
- shadcn/ui (Radix UI primitives)
- React Router
- TanStack Query
- Framer Motion
- Vitest + Testing Library
- Playwright (e2e)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test
npm run test:watch
```

## Project Structure

- `src/` app code
- `public/` static assets

## Publish To GitHub (Quick Guide)

1. Create a new empty GitHub repository.
2. In this folder, add the remote and push:

```bash
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

## Deploy (Optional)

For GitHub Pages, we can add a small workflow to build and deploy the `dist/` folder.
