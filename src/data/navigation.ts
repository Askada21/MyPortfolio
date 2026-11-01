// Hash routes survive direct visits and refreshes on GitHub Pages.
// Each reserved route can be mapped to a page component in App as it is built.
export const pageRoutes = [
  { title: 'About', path: '/about' },
  { title: 'Tech Stack', path: '/tech-stack' },
  { title: 'Projects', path: '/projects' },
  { title: 'Experience', path: '/experience' },
  { title: 'Contact', path: '/contact' },
] as const

export function pageHref(path: string) {
  return `${import.meta.env.BASE_URL}#${path}`
}
