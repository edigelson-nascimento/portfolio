# AGENTS.md — Portfolio / Aulas de Front-End

## Repo type

Static educational front-end studies site (HTML/CSS/JS). No build tools, no package manager, no tests, no CI. Served locally via Laragon.

## How to run

Open any `.html` file directly in a browser. No server or install needed.

## Structure

```
portfolio/
  index.html              — personal portfolio page (minimal)
  README.md               — module overview and how to use
  aulas/                  — 6 study modules
    01-fundamentos/       — alerts, prompts, events, counter
    02-dom/               — DOM manipulation, forms, datasets
    03-api/               — fetch/async-await (ViaCEP, JSONPlaceholder)
    04-storage/           — sessionStorage
    05-grid/              — CSS Grid (layout responsivo)
    06-temas/             — dark mode toggle with classList
  assets/css/style.css    — root CSS (empty, not yet used)
  assets/js/              — root JS (empty, not yet used)
  .env                    — DB credentials for Laragon context (not consumed by front-end code)
  .htaccess               — blocks .env / .json from web access
```

## File conventions

- Each module has `js/` subfolder with external scripts
- Module 05-grid also has `css/` subfolder
- Scripts are loaded via `<script src="js/...">` at end of `<body>`
- Code is heavily commented in Brazilian Portuguese for learning
- Comments use VERB-IN-CAPS prefix style (e.g., `// CAPTURA os elementos do DOM`)
- Vanilla JS only: `document.getElementById`, `addEventListener`, `fetch`, `classList.toggle`, `alert`, `prompt`, `console`

## Key constraints

- **Do not add npm/node dependencies** — this is a pure static project
- **Do not remove Portuguese comments** — they are the primary learning material
- **Do not break the comment convention** (CAPS verb prefix)
- **Do not convert to a framework** — no React, Vue, Svelte, etc.
- JS files are per-HTML, not shared modules
