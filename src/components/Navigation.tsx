import { pageHref, pageRoutes } from '../data/navigation'

export default function Navigation() {
  return (
    <nav className="home-navigation" aria-label="Main navigation">
      {pageRoutes.map(({ title, path }) => (
        <a key={path} href={pageHref(path)} aria-label={`${title} (coming soon)`}>
          {title}
        </a>
      ))}
    </nav>
  )
}
