# Canva design implementation

The primary references are `public/assets/images/main.png` (1740 × 982) and `public/assets/images/second.png` (2114 × 1190). They are references only, never rendered as a complete page image.

## Layout and typography

- Above 1100px: the white introduction rail occupies 40.2% of the viewport, beside an aubergine content canvas. Its repeated name treatment follows `main.png`; the second name is decorative and hidden from assistive technology.
- At 1100px and below: the introduction is centred on the dark canvas, following `second.png`. The navigation becomes a keyboard accessible mobile menu. At narrow phone widths the name wraps onto two lines.
- Anton provides the condensed display typography; Montserrat supplies body and navigation text. DM Mono remains for technical annotations. All fonts are hosted locally.
- The remaining sections extend the references' colours and hierarchy while retaining the existing biography, skill lists, project descriptions, timeline and contact details. Their exact layouts were not specified by the two landing-page references.

## Supplied artwork

| Asset                        | Placement                                                          |
| ---------------------------- | ------------------------------------------------------------------ |
| `PHOTO.png`                  | Hero data sculpture with real SVG leaders and HTML labels          |
| `PHOTO-2.png`                | Pink glow beneath the sidebar action, hero edge, About and Contact |
| `PHOTO-3.png`                | Coral/pink/violet action and dark edge accents                     |
| `PHOTO-4.png`                | Peach glow behind the name                                         |
| `PHOTO-5.png`                | Violet glow behind the name                                        |
| `dotted-botanical-frame.jpg` | Foreground portrait corner decoration                              |
| `dotted-floral.jpg`          | Subtle About background flower                                     |
| `dotted-star.jpg`            | Existing small dotted ornaments                                    |

The original PNG exports are opaque with white paper. `CanvaArtwork.tsx` uses a shared SVG filter on dark surfaces and multiply blending on white surfaces, without changing their source pixels. Decorative images have empty alt text; the hero composition has one descriptive accessible label.

The older `dotted-botanical-flowers.jpg` and `web-development.jpg` remain available but are not forced into placements absent from the references. Project concept illustrations remain clearly labelled as illustrative placeholders, and the portrait is still explicitly a placeholder.

## Preserved interactions

- All section anchors, plus an explicit Tech Stack navigation link.
- Desktop pointer, focus and click project selection; direct project details on mobile.
- GitHub and demo links, LinkedIn new-tab link and email `mailto:` link.
- Venus flytrap idle, pointer and closing interactions, relocated to Tech Stack to give the new hero sculpture its own space.
- Scroll reveals, button transitions, visible keyboard focus and reduced-motion support.
- Static spider lily in Experience.

## Development and deployment

```sh
npm install
npm run dev
npm run build
npm run lint
npm run format:check
```

Vite's base remains `/MyPortfolio/`. The existing GitHub Pages workflow builds and deploys `main`; no additional hosting service is used. Asset paths use `import.meta.env.BASE_URL`.

Edit shared introduction copy in `src/components/Introduction.tsx`, navigation in `src/data/navigation.ts`, and content in `src/data/`. Theme variables are in `src/styles/variables.css`, general section styling in `global.css`, landing/navigation layout in `canva.css`, and dotted art styling in `artwork.css`.
