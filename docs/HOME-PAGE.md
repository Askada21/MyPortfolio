# Home page rebuild

Only the Home page is implemented. React, TypeScript, Vite, locally hosted fonts and the existing GitHub Pages deployment are retained. No dependencies were added.

## Implementation

- `src/pages/HomePage.tsx`: the white introduction panel and dark purple artwork panel. The desktop split follows `main.png` at approximately 40% / 60%. The brief's single, two-line name heading is used instead of the reference's duplicate name.
- `src/styles/global.css`: reset, keyboard focus, skip link and reduced-motion support.
- `src/styles/home.css`: layout, CSS gradient glows, buttons, navigation, responsive rules and the shared future-page notice.
- `src/components/DataSculpture.tsx`: the original `PHOTO.png` asset, SQL/Python/Pandas labels and connecting lines in one SVG coordinate system. A runtime SVG filter removes the PNG's white paper; the source asset is unchanged. The full reference screenshot is never rendered.
- `src/components/Navigation.tsx` and `ActionLink.tsx`: reusable navigation and action links.
- `src/data/navigation.ts`, `src/hooks/usePageRoute.ts` and `src/App.tsx`: lightweight hash routing, compatible with GitHub Pages refreshes without a server fallback.
- `src/components/PageNotice.tsx`: one accessible native dialog for the reserved routes. Escape and Back to home dismiss it; focus returns to the invoking control or main content.

## Future pages

Reserved routes are `#/about`, `#/tech-stack`, `#/projects`, `#/experience` and `#/contact`. These links currently open the shared coming-soon notice over Home. They do not render page content or link to old sections. Both Projects links use the same route.

To add a page, create its component under `src/pages/`, map its route in `src/App.tsx`, and render it in place of Home for that route. Remove the corresponding reserved-route notice. Keep the existing hash URLs so bookmarks remain valid.

The previous section components, decorative illustrations, animation hook and styles were removed from active source. All supplied assets and reference images remain. The original biography, skills, projects and experience data are retained in [archive/portfolio-content.md](archive/portfolio-content.md). Git checkpoint `5134242` preserves the previous UI; the user's existing README edit was left untouched.

## Responsive behavior

- Above 1200px: approximately 40% / 60% panels.
- 761–1200px: 46% / 54% panels to give the introduction more space.
- Up to 760px: white introduction above the purple artwork; two-column navigation and touch-friendly actions.
- Short desktop windows: tighter spacing; very short landscape windows scroll vertically so all controls remain reachable.

## Validation and deployment

```sh
npm run dev
npm run build
npm run lint
npm run format:check
npm run preview
```

The production base stays `/MyPortfolio/`, including font, image and favicon URLs. `.github/workflows/deploy.yml` continues to build and deploy `main`. No additional hosting service or client-side routing dependency is required.

Browser verification covers desktop, tablet, narrow phone and landscape layouts, horizontal overflow, reserved links, dialog dismissal and keyboard focus, GitHub navigation, direct route refreshes and loading the production build under `/MyPortfolio/`.
