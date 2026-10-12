# Villa Espino Private Resort

Marketing home page built with React + Vite.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
- `src/data/` – all editable content (contact info, amenities, rooms, gallery)
- `src/components/` – one component per page section
- `src/hooks/` – reusable hooks (scroll reveal)
- `src/styles/` – design tokens, base styles, layout and section styles
- `src/assets/images/` – photos and logo (referenced by file name, e.g. `images["pool-day"]`)

Update contact details in `src/data/resort.js`.
