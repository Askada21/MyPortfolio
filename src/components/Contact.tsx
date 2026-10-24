import { profile } from '../data/profile'
import { Arrow, Landscape, SectionLabel, Star } from './Ornaments'

export default function Contact() {
  return <section id="contact" className="section contact"><div className="section-content"><SectionLabel number="07">Contact</SectionLabel><div className="contact-copy"><h3>Let’s build<br className="contact-break"/> something together.</h3><p>I’m open to internship opportunities, collaborations and interesting projects.</p><div className="contact-links">
    {profile.linkedin ? <a className="button" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a> : <span className="contact-pending">LinkedIn <span>Link to come</span></span>}
    <a className="button" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
    {profile.email ? <a className="button" href={`mailto:${profile.email}`}>Email <Arrow /></a> : <span className="contact-pending">Email <span>Address to come</span></span>}
  </div></div><div className="contact-art"><Landscape moon /><span className="contact-art-label">IDEAS<br />PEOPLE<br />PROJECTS<br />FUTURE</span><Star /></div></div></section>
}
