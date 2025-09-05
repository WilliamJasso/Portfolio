<div align="center">

# William Jasso – Portfolio

A modern, animated portfolio built with Next.js (App Router), React, Tailwind CSS, and Framer Motion. Static‑exported and deployed to GitHub Pages.

</div>

---

## Features

- Smooth, section-based navigation with active section highlighting
- Animated hero, cards, and interactions using Framer Motion
- Responsive layout with Tailwind CSS 4
- Projects grid with tags and external links
- Tech stack catalog with icons and notes
- Certifications and LinkedIn call-to-action
- Static export compatible with GitHub Pages (basePath-aware assets)

## Tech Stack

- Framework: Next.js 15 (App Router), React 19, TypeScript
- Styling: Tailwind CSS 4
- UI/Animations: Framer Motion, React Icons
- Forms/Validation: Formik, Yup (available for future forms)
- Misc: Chakra UI (available), ESLint 9

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout (App Router)
    page.tsx          # Home page composed of sections
    globals.css       # Global styles (Tailwind)
  components/
    Header.tsx
    LandingSection.tsx
    TechStackSection.tsx
    ProjectsSection.tsx
    ProjectCard.tsx
    ExperienceSection.tsx
    CertsContactSection.tsx
    Footer.tsx
  lib/
    fakeApi.ts
public/
  ...images and icons
```

## Local Development

Requirements: Node.js 18+ (recommended 20), npm.

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

This project is configured for static export.

```bash
npm run build
# Output is generated in ./out (via Next.js output: 'export')
```

Optional environment variable to support subpath deployments (e.g., GitHub Pages project sites):

```bash
NEXT_PUBLIC_BASE_PATH=/YourRepoName
```

When `NEXT_PUBLIC_BASE_PATH` is set, internal images and links are prefixed so assets resolve under `/YourRepoName`.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that:

- Installs dependencies and runs `npm run build`
- Uploads the static site from `./out`
- Deploys to GitHub Pages

Steps:

1) Enable Pages: Settings → Pages → Source = GitHub Actions
2) Ensure workflow permissions: Settings → Actions → General → Workflow permissions = “Read and write”
3) Push to `main` or run the workflow manually

URLs:

- User/Org site (`<user>.github.io` repo): `https://<user>.github.io/`
- Project site: `https://<user>.github.io/<repo>/` (the workflow sets `NEXT_PUBLIC_BASE_PATH=/repo` automatically)

## Scripts

- `npm run dev`: Start dev server (Next.js)
- `npm run build`: Production build with static export
- `npm run start`: Start Next.js server (not used for static hosting)
- `npm run lint`: Run ESLint

## Notes

- Images are plain `<img>` elements to keep export simple; `next/image` optimization is disabled for static export compatibility
- Navigation uses hash-only anchors to work under GitHub Pages subpaths

## License

This project has no explicit license. All rights reserved by the author unless stated otherwise.

