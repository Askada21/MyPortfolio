import { Arrow, Sparkle } from './Ornaments'
import VenusFlytrap from './VenusFlytrap'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <div className="eyebrow">
          <span>[ 01 ]</span>
          <span>
            <span className="location-dot" /> DUBLIN, IRELAND
          </span>
        </div>
        <h1>
          Hi, I’m <em>Daria</em>
          <span className="heading-period">.</span>
          <Sparkle />
        </h1>
        <p className="hero-subtitle">
          SOFTWARE ENGINEER &amp;
          <br className="mobile-break" /> DATA SCIENCE STUDENT
        </p>
        <p className="hero-description">
          I build software, work with data, and turn ideas into practical solutions.
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            View Projects <Arrow />
          </a>
          <a
            className="text-link"
            href="https://github.com/Askada21"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Arrow />
          </a>
        </div>
      </div>
      <div className="hero-art">
        <VenusFlytrap />
      </div>
    </section>
  )
}
