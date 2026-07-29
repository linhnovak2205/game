# Airbnb-style web

Front-end built against the style reference in [`DESIGN.md`](./DESIGN.md) — a
white-canvas, photograph-first system with a single coral-red (Rausch) accent.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`), with the design tokens declared in
  `src/index.css` under `@theme`
- **oxlint** for linting

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run lint
```

## Design tokens

All tokens from `DESIGN.md` live in a single `@theme` block in `src/index.css`,
so they are available both as CSS custom properties (`var(--color-rausch)`) and
as Tailwind utilities (`bg-rausch`, `text-foggy`, `rounded-cards`,
`shadow-subtle`, `text-heading-sm`, …).

Key rules encoded in the tokens:

| Rule | Where |
|------|-------|
| Body text 14px/400, 1.43 line-height, Hof `#222222` | `body` in `src/index.css` |
| Rausch `#ff385c` only for logo, search submit, active wishlist heart | `AirbnbLogo`, `SearchBar`, `HeartIcon` |
| Cards 12px radius, pills/circles 9999px, inputs 8px | `--radius-cards` / `--radius-buttons` / `--radius-inputs` |
| No borders, no shadows on listing cards | `ListingCard` |
| Canvas `#f7f7f7` behind white `#ffffff` cards | `App`, `ListingCard` |

## Structure

```
src/
  components/
    TopNav.tsx       80px bar: logo, category tabs, utility cluster
    SearchBar.tsx    the floating capsule hero (Where / When / Who + submit)
    ListingRow.tsx   horizontal-scroll section with carousel arrows
    ListingCard.tsx  listing card: image, badge, wishlist, title/meta/price
    Footer.tsx       3-column link grid + locale and social row
    icons.tsx        outlined monochrome icon set + the Rausch logo
  data/listings.ts   placeholder listing content
```

## Known placeholders

- **Imagery** — listing cards render soft gradient tints instead of
  photographs. Swap `Listing.tint` for an image URL when real photography is
  available; the card already crops 1:1 and clips to the 12px radius.
- **Font** — Airbnb Cereal VF is proprietary. The stack falls back to
  Circular / Inter / DM Sans / system UI, as the design reference specifies.
- **Search** — `SearchBar` holds its own state and logs on submit; it is not
  wired to a results page yet.
