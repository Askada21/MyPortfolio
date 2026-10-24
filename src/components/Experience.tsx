import { experience } from '../data/experience'
import { Landscape, SectionLabel } from './Ornaments'

export default function Experience() {
  return <section id="experience" className="section experience"><div className="section-content"><SectionLabel number="05">Experience</SectionLabel><div className="experience-layout"><ol className="timeline">{experience.map(item => <li key={item.title}><span className="timeline-period">{item.period}</span><div><span className="timeline-category">{item.category}</span><h3>{item.title}</h3><p className="timeline-organization">{item.organization}</p><p className="timeline-description">{item.description}</p></div></li>)}</ol><div className="experience-landscape"><span className="landscape-label">SMALL STEPS.<br />WIDER HORIZONS.</span><Landscape /><span className="landscape-bottom">THE PATH IS MADE BY WALKING.</span></div></div></div></section>
}
