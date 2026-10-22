# Dimas Mulya — Portfolio

Personal portfolio site with a bento-grid layout, built with React and Vite.

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:5173
```

`npm run build` writes the production site to `dist/`, and `npm run preview` serves that build.

## Editing content

All text lives in [`src/data/profile.js`](src/data/profile.js): profile, stats, tech stack, jobs and projects. The components read from it, so most updates never touch JSX.

## Project structure

```
├── public/                  served as-is at the site root
│   ├── favicon.svg
│   ├── files/               downloadable CV
│   └── images/              profile photo and company logos
├── src/
│   ├── data/profile.js      all site content
│   ├── components/          page sections (Nav, Overview, Experience, Work, Contact, Footer)
│   │   └── visuals/         animated project illustrations
│   ├── hooks/               theme, local time, scroll reveal, in-view, reduced motion
│   ├── index.css            design tokens, layout and component styles
│   └── main.jsx
├── assets/originals/        full-size source images (not deployed)
└── .github/workflows/       GitHub Pages deploy
```

## Replacing images

- **Photo:** overwrite `public/images/profile.jpg` (square, about 400×400).
- **Company logo:** add a square PNG to `public/images/logos/` and set the job's `logo` in `profile.js`, or set it to `null` to show initials.
- **CV:** overwrite the PDF in `public/files/`, or update `cv` and `cvFileName` in `profile.js`.

## Deploy

Push to `main` on GitHub, then set **Settings → Pages → Source** to **GitHub Actions**. The workflow builds and publishes on every push.
