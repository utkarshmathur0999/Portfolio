# Utkarsh Mathur — Portfolio

Static, dependency-free site (HTML + CSS + ES modules). No build step.

## Update content
Everything lives in `src/data/portfolio.js`: bio, experience, skills, project, certificates, links, resume path, photo path.
- **Photo:** replace `src/assets/images/profile.webp` (or change `profile.photo`).
- **Resume:** replace the PDF in `src/assets/resume/` (or change `links.resume`).
- **Certificates:** replace images in `src/assets/certificates/`.
- **Links:** set `linkedin`, `github`, project URLs and the Microsoft `verifyUrl`. Any value still containing `_HERE` hides its button, so nothing broken is ever shown.

## Before deploying
Replace `https://YOUR-SITE.netlify.app` with your real URL in `index.html` (canonical, og:*, twitter:*), `sitemap.xml`, `robots.txt`.

## Deploy on Netlify
1. Push this folder to a GitHub repo.
2. Netlify → **Add new site → Import an existing project → GitHub** → choose the repo.
3. Build command: *(leave empty)*. Publish directory: `.` (already set in `netlify.toml`).
4. Click **Deploy**. Optional: Site settings → Domain management to rename the site.
5. Add the URL to LinkedIn → Contact info → Website. Re-scrape previews at linkedin.com/post-inspector.

No environment variables or secrets are needed.

## Local preview
`npx serve .` (ES modules need http, not file://).
