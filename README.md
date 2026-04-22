# Wafer0.github.io

Minimal static ePortfolio for a Computer Engineering student. Plain HTML + one
small CSS file. No build step, no dependencies.

## Files

```
index.html      Home
about.html      Bio + ethos
artifacts.html  Welcome video + list of artifacts
artifact1.html  Artifact 1 (Google Doc/Slides iframe)
artifact2.html  Artifact 2
artifact3.html  Artifact 3
contact.html    Email, LinkedIn, GitHub
style.css       Shared stylesheet
```

## Deploy

```bash
git add .
git commit -m "Initial ePortfolio"
git push origin main
```

Then **Settings → Pages → Deploy from `main` / root** on GitHub.

## Embeds

Each iframe has `src="about:blank"`. Replace it with:

- **YouTube** — `https://www.youtube.com/embed/VIDEO_ID`
- **Google Doc** — `File → Share → Publish to web → Embed`
- **Google Slides** — same menu

The grey placeholder disappears once a real URL is in place.

## Placeholders to replace

Every unfilled field is marked `[PLACEHOLDER: ...]`. To find them all:

```bash
grep -rn "PLACEHOLDER" .
```

The only non-placeholder external link is `github.com/Wafer0`, derived from
the repo name — update it if your GitHub username differs.
