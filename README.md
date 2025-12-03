<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1uLHlOqWJsBa03pGLjYZd_6I77uPC8xpg

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## GitHub Pages (docs/) instructions

This project is configured to build into the `docs/` folder (Vite build output). To publish on GitHub Pages:

1. Commit and push the repository to GitHub (main branch).
2. Run `npm install` then `npm run build` locally to generate the `docs/` folder, or use CI to run the build.
3. In your repository on GitHub, go to Settings → Pages, and set the source to `main` (or `master`) branch and `/docs` folder.
4. Save — GitHub Pages will serve the site from `https://<your-username>.github.io/<repo>/`.

If you prefer to serve from the `gh-pages` branch using the `gh-pages` package, you can add that workflow instead.