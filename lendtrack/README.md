# LendTrack website

Static marketing site for the LendTrack partner program. No dependencies, just Node.js.

## Commands

- `npm run build`: builds the site into `dist/`
- `npm run preview`: builds, then serves `dist/` at http://localhost:4321

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, S3, cPanel).

## Where things live

- `src/config.mjs`: iClosed booking link, pre-call video, legal company details, legal draft banner
- `src/data/partners.mjs`: the partner-type pages (CPAs, insurance agents, realtors, ...)
- `src/data/products.mjs`: the funding product pages
- `src/pages/`: page templates (`home.html` is the homepage body)
- `src/layout.mjs`: shared header, footer, demo form and sections
- `public/`: CSS, JS and images, copied into `dist/` as is

## Before launch

1. In iClosed, set the redirect after booking to `https://lendtrack.io/demo/confirmed/`.
2. Fill in the `legal` details, have an attorney review the four legal pages, then set `legalDraftNotice: false`.
3. Optional: add a `preCallVideoId` for the confirmation page.
