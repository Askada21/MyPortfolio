import VenusFlytrap from './VenusFlytrap'
import { skills } from '../data/skills'
import { SectionLabel } from './Ornaments'

export default function TechStack() {
  return (
    <section id="skills" className="section tech-stack">
      <div className="section-content">
        <SectionLabel number="03">Tech stack</SectionLabel>
        <div className="skills-layout">
          <div className="skill-groups">
            {skills.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tags">
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <figure className="flytrap-study">
            <VenusFlytrap />
            <figcaption>INTERACTIVE BOTANICAL STUDY</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
