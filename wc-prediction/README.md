# 12BET World Cup 2026 Prediction Challenge — Landing Page

High-conversion activity landing page for the FIFA World Cup 2026 Prediction Challenge.

---

## Project Structure

```
wc-prediction/
├── index.html          # Main HTML (semantic, SEO-optimised)
├── css/
│   └── style.css       # All styles (CSS Variables, mobile-first)
├── js/
│   ├── countdown.js    # Real-time countdown to 2026-06-10
│   ├── main.js         # Smooth scroll, FAQ accordion, scroll-reveal, canvas particles
│   └── analytics.js    # Click & scroll-depth tracking (console.log, GA4-ready)
└── README.md
```

---

## Quick Start

Open `index.html` directly in any modern browser — no build step, no dependencies.

```bash
# Optional: serve with any static server
npx serve .
# or
python -m http.server 8080
```

---

## Features

| Feature | Implementation |
|---|---|
| Countdown timer | `countdown.js` — updates every second, shows "預測已截止" on expiry |
| Smooth scrolling | `main.js` — native `scrollIntoView({ behavior: 'smooth' })` |
| FAQ accordion | `main.js` — single-open, animated `max-height` transition |
| Scroll-reveal | `main.js` — `IntersectionObserver` on `.reveal` elements |
| Particle canvas | `main.js` — gold floating particles on hero background |
| Number counter | `main.js` — animated count-up on first view |
| Analytics | `analytics.js` — CTA clicks, section views, scroll depth |
| Sticky nav | `main.js` — adds `.nav--scrolled` class with blur backdrop |

---

## Connecting to GA4

In `analytics.js`, find the `track()` function and uncomment:

```js
if (typeof gtag === 'function') {
  gtag('event', eventName, params);
}
```

Then add your GA4 snippet to `<head>` in `index.html`.

---

## Customisation

All brand colours are CSS Variables in `:root` inside `style.css`:

```css
--primary-dark:  #1a1f3a;
--primary-blue:  #326295;
--accent-gold:   #FFD700;
--accent-green:  #00ff88;
```

The prediction deadline is set in `countdown.js`:

```js
const DEADLINE = new Date('2026-06-10T00:00:00').getTime();
```

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.  
All features use standard Web APIs with no polyfills required.

---

## Deployment

Upload the entire `wc-prediction/` folder to any static host (Nginx, Apache, Vercel, Netlify, AWS S3 + CloudFront).

For Vercel one-liner:
```bash
npx vercel --prod
```

---

## Accessibility

- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`)
- All interactive elements have `aria-label` or visible labels
- Countdown region uses `aria-live="polite"`
- Focus rings preserved via `:focus-visible`
- Colour contrast ≥ 4.5:1 on all body text (WCAG 2.1 AA)
