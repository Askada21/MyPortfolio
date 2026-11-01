import ActionLink from '../components/ActionLink'
import Navigation from '../components/Navigation'
import { pageHref } from '../data/navigation'
import '../styles/home.css'

export default function HomePage() {
  return (
    <main className="home-page" id="main-content" tabIndex={-1}>
      <section className="home-intro" aria-labelledby="home-name">
        <header className="home-heading">
          <h1 id="home-name">
            <span>DARIA</span>
            <span>OSYPOVA</span>
          </h1>
        </header>

        <div className="home-copy">
          <p className="home-role">DATA SCIENCE &amp; AI STUDENT</p>
          <p>at Technological University Dublin</p>
          <p className="home-description">
            Work with data, and turn ideas into practical solutions.
          </p>
        </div>

        <Navigation />

        <div className="home-actions">
          <ActionLink href={pageHref('/projects')} aria-label="View Projects (coming soon)">
            View Projects
          </ActionLink>
          <ActionLink href="https://github.com/Askada21" target="_blank" rel="noopener noreferrer">
            GitHub
          </ActionLink>
        </div>
      </section>

      <div className="home-art" aria-hidden="true" />
    </main>
  )
}
