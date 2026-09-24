# Peekaboo HQ — marketing site (static)

Cream sticker-track marketing site for [Peekaboo HQ](https://peekaboohq.com/) (app: [app.peekaboohq.com](https://app.peekaboohq.com)).

## Open locally

From this folder:

```bash
cd /workspace/peekaboo-website
python3 -m http.server 8080
```

Then open http://localhost:8080/

Or open `index.html` directly in a browser (Google Fonts need network).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — locked hero wire-copy |
| `features.html` | Job-framed feature deep dive |
| `pricing.html` | UK tiers + comparison |
| `about.html` | Company / quieter ops story |
| `contact.html` | Demo form (client-side + mailto) |
| `theme.html` | Internal design-system breakdown |

Shared: `css/styles.css`, `js/main.js`, `assets/` (locked logos + badges).

## Publish

**Netlify Drop:** drag the `peekaboo-website` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

**GitHub Pages:** push this folder as a repo (or `/docs`), enable Pages on the branch/root. Site is fully static — no build step.

## Brand notes

- Palette + structure: cream Gymfinity *structure* (see `theme.html`)
- Logos: locked PNGs only — do not invent marks
- Hero: “Your rota, built in seconds.” — no Free Forever badge on marketing heroes
- Audience: nursery owners/managers; PWA app link only (no store badges)

Peekaboohq Ltd · United Kingdom
