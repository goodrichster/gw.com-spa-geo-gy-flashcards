# Geometry Flashcards (SPA)

A small, client-only single-page app for high school geometry: special right triangles, the Pythagorean Theorem, Laws of Sines and Cosines, SOH-CAH-TOA, and reciprocal trig ratios. Open the files locally in a browser—no build step and no backend.

## Run locally

1. Clone or copy this folder to your machine.
2. Open `index.html` in a modern browser (double-click, or **File → Open File…**).

Alternatively, from this directory:

```bash
open index.html
```

On Windows, double-click `index.html` or open it from your browser’s file menu.

No `npm install`, no server required. Scripts load as plain files, so this works with the `file://` protocol.

## Project layout

| File        | Role |
|------------|------|
| `index.html` | Page structure and UI |
| `styles.css` | Layout, card flip, responsive styles |
| `app.js`     | Topic filter, shuffle, one-card vs browse, navigation |
| `cards.js`   | Flashcard data (`window.GEOMETRY_CARDS`) |
| `diagrams.js` | SVG figures for rule cards (`window.GEOMETRY_DIAGRAMS`, keyed by card `id`) |
| `README.md`  | This file |

## Flashcard data

Cards live in `cards.js` as `window.GEOMETRY_CARDS`, an array of objects:

- `id` — unique string (for your own reference).
- `topic` — one of: `30-60-90`, `45-45-90`, `pythagorean`, `law-of-cosines`, `law-of-sines`, `soh-cah-toa`, `reciprocal-trig`.
- `type` — `rule` (concept / definition) or `problem` (worked example).
- `front` — question or prompt (plain text; use `\n` for line breaks).
- `back` — answer, definition, or explanation.

Human-readable topic titles are defined in `app.js` in `TOPIC_LABELS`. Add a new topic there if you introduce a new `topic` value.

## Diagrams

Rule cards that need a labeled figure use inline SVG in `diagrams.js`. Keys are card `id` strings; the app shows the SVG on the back of the card in study mode and in browse mode. To add or change a diagram, edit the matching entry in `window.GEOMETRY_DIAGRAMS`.

## Features

- Filter by topic or study all topics.
- **Shuffle order** reorders the current filter (one-card mode).
- **One card** — flip by clicking the card; **Previous** / **Next**; progress “Card *i* of *n*”.
- **Browse all** — expandable list of every card in the current filter.
- Keyboard (one-card mode): **←** / **→** for previous/next, **Space** or **Enter** to flip.

## Git

Initialize a repo in this folder when you are ready:

```bash
cd /path/to/gw.com-spa-geo-gy-flashcards
git init
git add .
git commit -m "Initial geometry flashcards SPA"
```

Add a remote and push as you normally would.
