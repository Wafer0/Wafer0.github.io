# Wafer0.github.io

Static ePortfolio (HTML + CSS) for GitHub Pages at repo root.

## Site map

| URL | File |
|-----|------|
| `/` | `index.html` — welcome, video, background, how I work |
| `/artifacts/` | `artifacts/index.html` — list of five projects |
| `/artifacts/placer.html` | Standard-cell placer |
| `/artifacts/tomasulo-cpu.html` | Tomasulo RISC-V CPU |
| `/artifacts/polynomial-accelerator.html` | Polynomial accelerator |
| `/artifacts/dadda-multiplier.html` | 6-bit Dadda multiplier |
| `/artifacts/stm32-mot.html` | STM32 MoT |
| `/reflection.html` | Reflective essay |
| `/contact.html` | Contact |

**Redirects (old links):** `artifacts.html` → `artifacts/`; `artifact1.html` … `artifact5.html` → matching page under `artifacts/`; `about.html` → `index.html`.

## Repo layout

```
index.html, contact.html, reflection.html, style.css, robots.txt
artifacts.html, about.html, artifact[1-5].html   # thin redirects only
artifacts/          # index + one HTML per project
media/diagrams/   # figures
media/docs/       # PDFs
```

## Deploy

Push to `main`; enable **Pages** from root.

## Maintenance

Search the tree for unfinished notes if you add any:

```bash
grep -rn "FIXME\\|TODO\\|TBD" .
```
