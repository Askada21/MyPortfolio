import { portfolioNavigation } from '../data/navigation'
import CanvaArtwork from './CanvaArtwork'
import Introduction, { IntroActions } from './Introduction'

export default function Hero() {
  return (
    <section id="home" className="hero section" aria-label="Introduction">
      <CanvaArtwork file="PHOTO-2.png" className="hero-edge-glow hero-edge-left" />
      <CanvaArtwork file="PHOTO-3.png" className="hero-edge-glow hero-edge-right" />
      <div className="mobile-introduction">
        <Introduction />
        <nav className="intro-navigation" aria-label="Explore the portfolio">
          {portfolioNavigation.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.title}
            </a>
          ))}
        </nav>
        <IntroActions />
      </div>
      <div
        className="data-composition"
        role="img"
        aria-label="Coral, pink and violet data sculpture, annotated with SQL, Python and Pandas"
      >
        <CanvaArtwork file="PHOTO.png" className="data-sculpture" eager />
        <svg
          className="data-leaders"
          viewBox="0 0 1000 900"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="leader-sql" d="M430 175 600 385" />
          <path className="leader-python" d="M315 555 548 455" />
          <path className="leader-pandas" d="M535 660 618 560" />
        </svg>
        <span className="data-label label-sql">[SQL]</span>
        <span className="data-label label-python">[Python]</span>
        <span className="data-label label-pandas">[Pandas]</span>
      </div>
    </section>
  )
}
