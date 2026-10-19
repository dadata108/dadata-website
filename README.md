# Dadata website

Company-only responsive landing page: Home, Services, Solutions, About, and Contact. Built with Next.js, TypeScript, and Tailwind CSS. Company LinkedIn is the only contact channel. No personal profiles, personal contact information, analytics, or contact forms are included.

## Local development
Requires Node.js 22 and npm.

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

Open http://localhost:3000/dadata-website/ for development. Static output is written to out/. Edit app/content.ts for services, solutions, and approach; app/page.tsx for page copy; app/globals.css for styling.

## Approval and publication
The Actions workflow is manual-only. Committing files does not trigger publication. After separate publication approval:
1. Open Settings > Pages > Build and deployment and select GitHub Actions.
2. Open Actions > Deploy Dadata to GitHub Pages > Run workflow on main.
3. Review build/deployment logs and the Pages environment URL.

Expected initial address: https://dadata108.github.io/dadata-website/ . This does not mean the site is live. No CNAME or custom-domain changes are included. For a confirmed custom domain, configure Pages and DNS separately and set NEXT_PUBLIC_BASE_PATH to an empty string before rebuilding.

## Validation and dependency limitations
No Node/npm build or browser validation was run during preparation. The first executable build must run locally or in Actions. Package and action versions need release review. Run npm install, review and commit the generated package-lock.json, then change the workflow installation to npm ci for reproducible builds. The initial workflow uses npm install because no lockfile has been generated. Canonical URLs and a sitemap are deferred until the production address is confirmed.
