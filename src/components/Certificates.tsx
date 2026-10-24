import { achievements } from '../data/achievements'
import { Arrow, Branch, SectionLabel, Star } from './Ornaments'

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="section-content">
        <SectionLabel number="06">Certificates &amp; achievements</SectionLabel>
        <div className="achievement-layout">
          <div className="achievement-list">
            {achievements
              .filter((item) => item.confirmed)
              .map((item) => (
                <article className="achievement" key={`${item.organization}-${item.title}`}>
                  <div className="achievement-emblem" aria-hidden="true">
                    <Star />
                  </div>
                  <div className="achievement-copy">
                    <span className="achievement-organization">{item.organization}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.image && (
                      <img
                        className="credential-image"
                        src={`${import.meta.env.BASE_URL}${item.image}`}
                        alt={`${item.title} credential`}
                        width="320"
                        height="200"
                        loading="lazy"
                      />
                    )}
                    {item.credentialUrl && (
                      <a
                        className="text-link"
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View credential <Arrow />
                      </a>
                    )}
                  </div>
                  <span className="achievement-year">{item.date}</span>
                </article>
              ))}
          </div>
          <div className="achievement-note">
            <Branch />
            <p>
              Learning is a practice.
              <br />
              <span>There’s always more to explore.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
