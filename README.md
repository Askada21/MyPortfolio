# Daria Osypova - Portfolio

<!-- A personal portfolio for Daria Osypova, an aspiring software engineer and Data Science & Artificial Intelligence student in Dublin, Ireland. The design follows the supplied botanical editorial mockup: dark earthy surfaces, warm serif typography, fine rules, technical labels, and original SVG illustrations.

## Features

- Seven numbered sections: introduction, About, tech stack, projects, experience, achievements, and contact.
- Sticky navigation with active-section indication, smooth anchors, a skip link, and a keyboard-accessible mobile menu.
- Original SVG Venus flytrap with slow idle movement, pointer response, and click/tap/Enter/Space closing and automatic reopening.
- Desktop project previews selected by pointer, focus, or click; mobile previews and links are always displayed.
- A real screen capture of the supplied Wheels on Fire live demo; clearly labeled illustrative previews for the other projects.
- Education, internship, and hackathon timeline with no inferred education dates.
- Data-driven skills, projects, achievements, and contact configuration.
- Subtle scroll reveals, bundled local fonts, reduced-motion rules, and lazy-loaded noncritical images.
- Responsive layout from 320px, production build, ESLint, Prettier, and a GitHub Pages workflow.

## Technology

React 19, TypeScript, Vite, native CSS custom properties and animations, and inline SVG. Cormorant Garamond and DM Mono are bundled through Fontsource, so visitors do not need a third-party font request. There is no animation framework, WebGL dependency, backend, or analytics.

## Local setup

Use Node.js 22.12 or newer (Node 22 is selected in `.nvmrc` and CI) and npm.

```bash
cd ~/Desktop/MyPortfolio
nvm use  # optional, if nvm is installed
npm ci
npm run dev
```

Open the Local URL printed by Vite, normally **http://127.0.0.1:5173/MyPortfolio/**. Press Ctrl+C to stop the server.

| Command                | Purpose                                           |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the local development server                |
| `npm run build`        | Type-check and build into `dist/`                 |
| `npm run preview`      | Serve the production build, normally on port 4173 |
| `npm run lint`         | Run ESLint and React Hooks checks                 |
| `npm run format`       | Format source and documentation                   |
| `npm run format:check` | Check formatting without changes                  |

`dist/`, `node_modules/`, local environment files, and temporary build metadata are ignored by Git.

## Structure

```text
MyPortfolio/
├── .github/workflows/deploy.yml
├── public/assets/
│   ├── images/web-development.jpg
│   └── illustrations/favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── VenusFlytrap.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Ornaments.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── achievements.ts
│   ├── hooks/useScrollReveal.ts
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── animations.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Customization

### Portrait

1. Add your real photograph to `public/assets/images/daria.webp` (an optimized WebP is recommended).
2. Set `portrait: 'assets/images/daria.webp'` in `src/data/profile.ts`.
3. Update `portraitAlt` to describe the image accurately.

The empty value renders a botanical monogram explicitly labeled as a portrait placeholder. No realistic owner photograph has been generated or inferred from the mockup. The portrait frame crops with `object-fit: cover`; adjust its CSS `object-position` if needed.

### Projects and screenshots

Edit `src/data/projects.ts`. Each entry contains its title, description, technologies, optional GitHub/demo URL, and optional image path and alt text. Add screenshot files under `public/assets/images/`, then use a path such as `assets/images/study-tracker.webp`, without a leading slash. The app prefixes it with Vite’s deployment base path.

Leave absent repository/demo URLs undefined. The SQL project intentionally has no invented repository link. Without an image, the app renders an illustration labeled as a concept preview, not a screenshot. The illustrative schema, chart bars, and workspace labels are decorative concepts and do not claim actual implementation details or measured results.

The included `web-development.jpg` is a real capture of the user-supplied live demo. Replace it with a newer capture when the project changes.

### Contact

Set `linkedin` and `email` in `src/data/profile.ts`. Empty values display “Link to come” and “Address to come” as noninteractive text. A supplied email automatically becomes a `mailto:` link. Add public contact details only; all frontend configuration is visible to visitors.

### Certificates and achievements

Edit `src/data/achievements.ts`. Only entries with `confirmed: true` render. The MongoDB hackathon top-8 result is the sole confirmed item. An editable `confirmed: false` example is included but hidden. Add verified title, issuer, date, description, and optional credential URL/image before enabling a new entry.

### Skills, experience, and styling

- Skills: `src/data/skills.ts`.
- Education and experience: `src/data/experience.ts`.
- Colors, fonts, spacing tokens: `src/styles/variables.css`.
- Layout and breakpoints: `src/styles/global.css`.
- Animation and reduced-motion rules: `src/styles/animations.css`.
- Botanical drawings: `Ornaments.tsx` and `VenusFlytrap.tsx`.

## GitHub Pages deployment

The intended URL is **https://askada21.github.io/MyPortfolio/**. Vite is configured with `base: '/MyPortfolio/'`. Keep that setting aligned with the repository name. Hash navigation uses the current deployment path; images use `import.meta.env.BASE_URL`.

The workflow is prepared locally. **No push or deployment was performed as part of development.**

When you decide to publish:

1. In the GitHub repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
2. Review the local changes and commits.
3. After explicitly authorizing publication, push the local `main` branch to `origin`.
4. Open the Actions tab and check “Deploy portfolio to GitHub Pages.” It installs locked dependencies, checks formatting, lints, builds, uploads `dist/`, and deploys through the `github-pages` environment.
5. Once the workflow succeeds, visit the intended URL above. The workflow can also be started manually from Actions while on `main`.

Build and deploy are separate jobs. Only deployment receives `pages: write` and `id-token: write`. No personal access token or repository secret is required. Generated output is uploaded as an Actions artifact rather than committed.

References: [Vite deployment documentation](https://vite.dev/guide/static-deploy.html#github-pages), [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Known placeholders and limitations

- Real portrait, LinkedIn URL, and email address still need to be supplied.
- SQL Book Database needs its actual repository URL. SQL Book Database, Study Tracker, and TWorkspace need real screenshots.
- Additional certificates require verified details. No unconfirmed credential appears on the page.
- The provided `Askada21/mongo` and `Askada21/WebDev_Project_RDE` repository URLs returned HTTP 404 during anonymous verification. They are preserved exactly as supplied; check their visibility or correct the URLs before publishing. The Web Development live demo loaded successfully.
- The Study Tracker repository is publicly accessible, but no project screenshot was available from the content inspected.
- The website has no contact form/backend. Contact is through the configured public links.
- Optional individual project case-study pages were not added because no verified case-study content was supplied.
- Browser QA covered one Chromium-based in-app browser. Other browser engines and physical devices were not tested. Reduced-motion rules were inspected, but OS-level reduced-motion emulation was not available in the browser tool.
- GitHub Actions execution and the published URL can only be verified after an authorized push/deployment.

## Validation

Before publishing, run:

```bash
npm run format:check
npm run lint
npm run build
npm run preview
```

Development QA included browser checks at 320, 375, 768, 1024, 1440, and 1920 pixels; anchor targets and image loading; mobile menu selection and Escape; keyboard project selection; and flytrap closing and reopening. No horizontal overflow was found at those widths. This is a manual browser verification, not a claim of an exhaustive automated test suite. -->
