# Find A Book

## A Web App to help find books in the Sainsbury Library

## Stack summary

Originally devoped using Google AI Studio, it uses the following:

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite\*
- **Styling:** Tailwind CSS (via CDN)

\*Vite is a modern frontend build tool created by Evan You (the creator of Vue.js).

## Quick Start 🏃💨

### Spin up a local test server

`npm run dev`

The dev server will then be running at [http://localhost:3000/](http://localhost:3000/).

### Build a static version of the site

`npm run build`

This will build the static site to the docs folder.

## GitHub Pages (docs/) instructions

This project is configured to build into the `docs/` folder (Vite build output). To publish on GitHub Pages:

1. Commit and push the repository to GitHub (main branch).
2. Run `npm install` then `npm run build` locally to generate the `docs/` folder, or use CI to run the build.
3. In your repository on GitHub, go to Settings → Pages, and set the source to `main` (or `master`) branch and `/docs` folder.
4. Save — GitHub Pages will serve the site from `https://<your-username>.github.io/<repo>/`.

If you prefer to serve from the `gh-pages` branch using the `gh-pages` package, you can add that workflow instead.

---

## Run and deploy your AI Studio app.

The following is now included for reference only as the version in AI Studio is no longer being developed, the latest verion is the one in this repository.

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1uLHlOqWJsBa03pGLjYZd_6I77uPC8xpg

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
