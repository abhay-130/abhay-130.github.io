<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Mzwbm-qdWyNyAWicrEzhczQtH0TM2Y3B

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy

Recommended: deploy with Vercel or Netlify. Build the site with `npm run build` and publish the `dist` folder.

Quick GitHub Pages deploy (uses `gh-pages`):

1. Ensure `gh-pages` is installed (it's listed in devDependencies in this repo).
2. Run:

```bash
npm run deploy
```

This will publish the `dist` folder to the `gh-pages` branch.

## Adding local/offline images

You can add images from your machine into the project `public/offline_images` folder so they are served by Vite and included in the production build.

1. Copy a file into the folder manually, or run the helper script:

```bash
# copy an image into public/offline_images
npm run add-image /absolute/path/to/your/photo.jpg

# optionally rename while copying
npm run add-image /absolute/path/to/your/photo.jpg newname.jpg
```

2. Reference the image in your components using the `/offline_images/` path, for example:

```jsx
<img src="/offline_images/newname.jpg" alt="My photo" />
```

Vite serves `public/` at the project root, so `/offline_images/...` will work in both dev and production builds.
