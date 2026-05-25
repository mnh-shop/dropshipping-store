# MNH Shop — Dropshipping Store

Print-on-demand dropshipping store targeting the Colombia market.

- **Framework:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS
- **POD Supplier:** Gelato (primary) / Printify (secondary)
- **Payments:** PSE, Nequi, Credit/Debit cards (via Shopify Payments or custom checkout)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/app/
  layout.tsx      # Root layout with header/footer
  page.tsx        # Homepage with hero, features, CTA
  products/
    page.tsx      # Product listing page
    [slug]/       # Individual product page (TODO)
  cart/           # Cart page (TODO)
  checkout/       # Checkout flow (TODO)
  about/          # About page (TODO)
  api/
    products/     # Products API
    orders/       # Orders API
```

## Roadmap

- [ ] Modern storefront (Next.js 15 + Tailwind)
- [ ] Product catalog with Gelato API
- [ ] Shopping cart & checkout
- [ ] PSE payment integration
- [ ] TikTok Shop integration
- [ ] Analytics & tracking pixels
- [ ] SEO optimization
