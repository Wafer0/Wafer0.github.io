# Wafer0.github.io — ePortfolio

A clean, responsive, **Mercedes-inspired** static ePortfolio for a Computer
Engineering student, built with plain HTML5 and CSS3. Designed to be pushed
directly to a `username.github.io` repository and served by GitHub Pages.

## Structure

```
/
├── index.html          Landing page (Home)
├── about.html          Bio and professional ethos
├── artifacts.html      Artifacts hub + welcome video
├── artifact1.html      Artifact 1 sub-page (with Google Doc/Slides iframe)
├── artifact2.html      Artifact 2 sub-page
├── artifact3.html      Artifact 3 sub-page
├── contact.html        Professional contact info
├── css/
│   └── styles.css      Shared stylesheet
├── js/
│   └── main.js         Mobile navigation toggle
└── README.md
```

All navigation links use relative paths, so the site works both locally and
once deployed.

## Deploying to GitHub Pages

1. Create a repository named exactly `<your-username>.github.io`
   (e.g. `Wafer0.github.io`).
2. Push this project to the `main` branch:

   ```bash
   git add .
   git commit -m "Initial ePortfolio starter"
   git push origin main
   ```

3. In the repo on GitHub go to **Settings → Pages**, select the `main`
   branch, root (`/`) folder, and save.
4. Wait ~1 minute, then visit `https://<your-username>.github.io`.

## Customizing

### Personal details
Search the project for the placeholders in square brackets (e.g.
`[Your City, State]`, `[Month, Year]`) and replace them with your own
information. Update social links in `contact.html` and the email address
in both `contact.html` and the `mailto:` button.

### Embedding Google Docs / Slides
Each artifact page contains an `<iframe>` placeholder. To embed:

1. Open your Google Doc or Slides file.
2. **File → Share → Publish to web → Embed** and copy the URL.
3. In the relevant `artifactN.html`, replace `src="about:blank"` with the
   published URL, for example:

   ```html
   <iframe
       src="https://docs.google.com/document/d/FILE_ID/pub?embedded=true"
       title="Artifact 1 document"
       loading="lazy"
       allowfullscreen></iframe>
   ```

4. Optionally remove the `<div class="embed-placeholder">…</div>` block that
   sits beneath the iframe (it is only visible while `src="about:blank"`).

### Embedding the welcome video
In `artifacts.html`, replace the welcome video `iframe src` with a YouTube,
Vimeo, or Google Drive embed URL:

| Platform     | Embed URL format                                      |
|--------------|-------------------------------------------------------|
| YouTube      | `https://www.youtube.com/embed/VIDEO_ID`              |
| Google Drive | `https://drive.google.com/file/d/FILE_ID/preview`     |
| Vimeo        | `https://player.vimeo.com/video/VIDEO_ID`             |

### Color and typography
All design tokens live at the top of `css/styles.css` as CSS variables
(`--color-accent`, `--font-display`, etc.) — tweak them there to change
the palette without touching any HTML.

## Local preview

No build step is required. Either open `index.html` directly in a browser,
or run a tiny static server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Browser support

Targets all modern evergreen browsers (Chrome, Firefox, Safari, Edge) and
is fully responsive from ~320px upward.
