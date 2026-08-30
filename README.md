# OM Baba Industries (OBI) — website

React + Vite. Built on the Industry design system (steel-blue wireframe: Barlow Condensed over Barlow, square hairline frames with registration marks, duotoned photography).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things are

```
src/
  main.jsx                 app entry
  App.jsx                  page composition — reorder sections here
  data.js                  ALL copy, product codes, menus, stats. Edit this first.
  styles/industry.css      design-system tokens + components (do not hand-edit colors)
  styles/site.css          page layout for this site
  components/              one file per section
```

## Swapping in real content

1. Open `src/data.js` — company details, mega-menu, hero slides, product codes, catalogues, markets, testimonials, notes and footer links all live there.
2. Drop photographs into `public/img/` and set the `img` field on any slide / product / category (e.g. `img: "/img/hinge-4in.jpg"`). Anything without an `img` renders a labelled placeholder frame.
3. Colors, type and spacing come from CSS variables in `styles/industry.css`. Change the theme there, not in components.

## Notes

- The enquiry form is markup only — wire `onSubmit` in `components/Enquiry.jsx` to your endpoint or a service like Formspree.
- Mega-menus open on hover and on keyboard focus (CSS only, no JS).
- Product codes, MOQs, certifications and export markets in `data.js` are placeholders pending real figures.
