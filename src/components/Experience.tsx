import { experience } from '../data/experience'
import { SectionLabel } from './Ornaments'
import DottedArtwork from './DottedArtwork'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-content">
        <SectionLabel number="05">Experience</SectionLabel>
        <div className="experience-layout">
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.title}>
                <span className="timeline-period">{item.period}</span>
                <div>
                  <span className="timeline-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-organization">{item.organization}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="experience-landscape experience-botanical">
            <DottedArtwork file="dotted-botanical-flowers.jpg" width={736} height={981} />
          </div>
        </div>
      </div>
    </section>
  )
}
