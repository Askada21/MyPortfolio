import { profile } from '../data/profile'
import { Branch, SectionLabel, Star } from './Ornaments'
import DottedArtwork from './DottedArtwork'

function InfoIcon({ type }: { type: 'location' | 'study' | 'laptop' | 'flower' }) {
  const paths = {
    location: (
      <>
        <path d="M12 21S4 13 4 8a8 8 0 0 1 16 0c0 5-8 13-8 13Z" />
        <circle cx="12" cy="8" r="3" />
      </>
    ),
    study: (
      <>
        <path d="m1 8 11-5 11 5-11 5L1 8Zm4 2v7c5 4 9 4 14 0v-7M22 9v8" />
      </>
    ),
    laptop: (
      <>
        <path d="M4 4h16v12H4zM1 20h22l-3-4H4l-3 4Z" />
        <path d="M9 18h6" />
      </>
    ),
    flower: (
      <>
        <path d="M12 22V9m0 8C1 18 2 8 12 15m0 1c10-9 13 2 0 3M12 9C3 8 7 0 12 5c5-5 9 3 0 4Z" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-content">
        <SectionLabel number="02">About me</SectionLabel>
        <div className="about-layout">
          <div className="portrait-composition">
            <div className="portrait-backdrop" />
            <DottedArtwork
              file="dotted-botanical-frame.jpg"
              width={736}
              height={686}
              className="portrait-corner"
            />
            <div className="portrait-frame">
              {profile.portrait ? (
                <img
                  src={`${import.meta.env.BASE_URL}${profile.portrait}`}
                  alt={profile.portraitAlt}
                  width="360"
                  height="420"
                  loading="lazy"
                />
              ) : (
                <div
                  className="portrait-placeholder"
                  role="img"
                  aria-label="Portrait placeholder. A photograph of Daria will be added here."
                >
                  <Branch />
                  <span className="portrait-monogram">d.o.</span>
                  <span className="portrait-caption">
                    A PORTRAIT, IN TIME.
                    <br />
                    <span>Photograph to come</span>
                  </span>
                </div>
              )}
            </div>
            <Star className="portrait-star" />
            <span className="portrait-note">A WORK IN PROGRESS, ALWAYS.</span>
          </div>
          <div className="about-copy">
            <h3>Data Science &amp; AI student with an interest in building and exploring.</h3>
            <p>
              I’m currently studying Data Science &amp; Artificial Intelligence at Technological
              University Dublin. I’m interested in software engineering, data analytics and AI, and
              I enjoy turning ideas into practical projects.
            </p>
            <ul className="personal-info">
              <li>
                <InfoIcon type="location" />
                Dublin, Ireland
              </li>
              <li>
                <InfoIcon type="study" />
                TU Dublin
              </li>
              <li>
                <InfoIcon type="laptop" />
                Software &amp; Data
              </li>
              <li>
                <InfoIcon type="flower" />
                <span>Open to internships</span>
              </li>
            </ul>
          </div>
        </div>
        <DottedArtwork
          file="dotted-floral.jpg"
          width={766}
          height={734}
          className="about-floral"
          ink="var(--ivory)"
        />
      </div>
    </section>
  )
}
