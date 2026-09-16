# NovaFit Performance

A production-quality premium fitness coaching website built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

NovaFit Performance is a professional fitness coaching brand website featuring:
- Multi-page SPA with client-side routing
- Responsive design (mobile-first)
- Accessible UI components
- Contact form with validation
- Program detail pages
- Success stories with filtering
- Pricing comparison
- FAQ accordion

## Technology

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS v4** — Utility-first styling
- **React Router v6** — Client-side routing
- **Lucide React** — Icon library

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   ├── ui/            # Button, Container, SectionHeading
│   └── shared/        # ProgramCard, TestimonialCard, PricingCard, etc.
├── data/              # Static data (programs, testimonials, pricing, etc.)
├── hooks/             # Custom hooks (useScrollReveal, useMediaQuery)
├── pages/             # Page components (Home, About, Programs, etc.)
├── App.tsx            # Router setup and layout
├── main.tsx           # Entry point
└── index.css          # Global styles and design tokens
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Runs the development server at `http://localhost:3000`.

## Production Build

```bash
npm run build
```

Outputs optimized files to `dist/`.

## Deployment

### Vercel

1. Connect your repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```

### Cloudflare Pages

1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

## Environment Variables

This project does not require environment variables for the frontend. When connecting to a backend API, add variables prefixed with `VITE_` to `.env`:

```
VITE_API_URL=https://api.example.com
```

## Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- Visible focus indicators
- ARIA attributes where appropriate
- Respects `prefers-reduced-motion`
- Form labels and error messages
- Proper heading hierarchy

## Performance

- Optimized bundle with code splitting via routes
- Lazy-loaded images
- Minimal dependencies
- CSS via Tailwind (purged in production)
- No unnecessary JavaScript
- Efficient rendering with React best practices

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Proprietary — © 2024 NovaFit Performance
