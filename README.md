# geocam-site

GeoCam promotional site. Built using [Next.js](https://nextjs.org/) with TypeScript, it is intended to be hosted as a fully static site on GitHub Pages.

## Principles

- Static HTML (JavaScript used to enhance website, but not a requirement)
- SEO friendly (includes sitemap)
- Auto build/deploy (to facilitate updates)
- Open source
- Automatic image optimisation
- Integration with GitHub API (for showing repositories and releases)

## Getting Started

The site uses [PNPM](https://pnpm.io/), an optimised version of NPM. To get started `pnpm install` then run `pnpm dev` for running the site in dev mode at [http://localhost:3000](http://localhost:3000).

## Contributing

Please use Prettier to format code in the `src/` directory, this is automatically checked by GitHub Actions before the site is built and deployed, and will fail if the code does not conform.

```bash
pnpm dlx prettier@latest --write src
```

## Building

The site uses Next.js's "export" functionality. To build locally, run `pnpm build` and you can see the result in `out/`.

## Architecture

- `public/` Static assets (images, icons)
- `src/` Main code
  - `_posts/` **Blog posts** in Markdown format
  - `components/dynamic/` Components for dynamic aspects of the page (API calls etc)
  - `components/presentation/` Visual components (cards, features, etc)
  - `components/posts/` Visual components for blog posts
  - `interfaces/` TypeScript definitions
  - `layout/` Header, footer etc
  - `lib/` Helper libraries for transforming blog posts
  - `pages/` **Pages** of the website (as per Next.js norms)
  - `styles/` Bootstrap import plus variable overrides and custom SCSS

## TODO

- [ ] Fix alt text for images
- [ ] Add font loading (Open Sans)