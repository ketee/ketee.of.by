# ketee.of.by

Static website built with Eleventy 3.1.7.

## Build and preview

Eleventy requires Node.js 18 or newer. With a supported Node.js release installed, run:

```sh
npm ci
npm run build
npm run dev
```

The build writes the website to ./_site/. The preview command serves it locally.

## Source files

- ./src/pages/ contains the home and tutoring pages.
- ./src/pages/city/ contains city history and the photo gallery.
- ./src/pages/festival/ contains festival history and reports.
- ./src/pages/travel/ contains travel content.
- ./src/pages/archive/ contains alternate pages retained at their original addresses.
- ./src/_includes/base.njk defines the shared document layout.
- ./src/_includes/head.njk, ./src/_includes/header.njk, ./src/_includes/navigation.njk, and ./src/_includes/footer.njk hold shared markup and the existing page variations.
- ./public/ contains images, CSS, browser scripts, the service agreement, domain settings, sitemap, robots file, and verification files. Everything in ./public/ is copied unchanged to the output root.

## Editing pages

Each page declares its original output address in the `permalink` field. Source folders do not change public addresses. Edit the HTML inside the `content` block to update page content. Other blocks preserve page-specific metadata, scripts, and layout differences.

New pages can extend ./src/_includes/base.njk and supply a `content` block. Set the page metadata in its `head` block. Shared navigation is maintained in ./src/_includes/navigation.njk; its existing menu variations are retained.

The ./src/pages/archive/d.njk source was converted from Windows-1251 to UTF-8 with its charset declaration updated. Supporting files retain their original bytes.

## Publishing

The ./.github/workflows/publish.yml workflow runs on pushes to master. It installs the locked dependencies with npm ci, builds with npm run build, and publishes ./_site/ to GitHub Pages. It uses Node.js 24.22.1 and GitHub-maintained actions pinned to exact commits.

Before the first workflow deployment, set the repository's Settings > Pages > Build and deployment > Source to GitHub Actions. Keep the custom domain set to ketee.of.by. The ./public/CNAME file is copied into ./_site/CNAME during the build.

The workflow reads repository contents and Pages configuration during the build. Only the deployment job receives permission to publish Pages and request a deployment identity token. Deployments run one at a time.
