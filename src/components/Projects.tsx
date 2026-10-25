import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { Arrow, Branch, SectionLabel, Star } from './Ornaments'
import DottedArtwork from './DottedArtwork'

function ProjectArtwork({ project }: { project: Project }) {
  if (project.image)
    return (
      <figure className="project-image">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.imageAlt || project.title}
          loading="lazy"
          width="1116"
          height="720"
        />
        <figcaption>LIVE PROJECT / SCREEN CAPTURE</figcaption>
      </figure>
    )
  return (
    <figure
      className={`project-artwork artwork-${project.artwork}`}
      aria-label={`Illustrative placeholder for ${project.title}; not a project screenshot`}
    >
      <span className="artwork-caption">CONCEPT STUDY / {project.id}</span>
      <Branch />
      {project.artwork === 'database' ? (
        <div className="database-diagram">
          <div>
            <span>BOOKS</span>
            <p>
              id <i>int · primary key</i>
            </p>
            <p>
              title <i>varchar</i>
            </p>
            <p>
              author_id <i>int · foreign key</i>
            </p>
          </div>
          <span className="diagram-connector">
            │<br />
            └─────┐
          </span>
          <div>
            <span>AUTHORS</span>
            <p>
              id <i>int · primary key</i>
            </p>
            <p>
              name <i>varchar</i>
            </p>
          </div>
        </div>
      ) : project.artwork === 'tracker' ? (
        <div className="tracker-diagram">
          <span>STUDY / REFLECT / REPEAT</span>
          <div className="chart-bars">
            {[35, 60, 45, 80, 55, 92, 68].map((n, i) => (
              <span key={i} style={{ height: `${n}%` }} />
            ))}
          </div>
          <span>M &nbsp; T &nbsp; W &nbsp; T &nbsp; F &nbsp; S &nbsp; S</span>
        </div>
      ) : (
        <div className="workspace-diagram">
          <div>
            WORKSPACE <span>○ ○ ○</span>
          </div>
          <p>
            <span>Ideas</span>
            <span>In progress</span>
          </p>
          <p>
            <span>
              01 / Explore
              <br />
              02 / Build
            </span>
            <span>
              03 / Connect
              <br />
              04 / Share
            </span>
          </p>
          <Star />
        </div>
      )}
      <figcaption>ILLUSTRATIVE PREVIEW · SCREENSHOT TO COME</figcaption>
    </figure>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <ProjectArtwork project={project} />
      <div className="project-details">
        <span className="project-type">SELECTED PROJECT / {project.id}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.github ? (
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              View on GitHub <Arrow />
            </a>
          ) : (
            <span className="pending-link">Repository link to come</span>
          )}
          {project.demo && (
            <a
              className="text-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
            >
              Live demo <Arrow />
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(0)
  return (
    <section id="projects" className="section projects">
      <div className="section-content">
        <div className="section-heading">
          <SectionLabel number="04">Featured projects</SectionLabel>
          <DottedArtwork
            file="dotted-floral.jpg"
            width={766}
            height={734}
            className="projects-floral"
          />
          <span className="section-aside">
            / SELECTED WORK ({projects.length.toString().padStart(2, '0')})
          </span>
        </div>
        <div className="project-layout">
          <div className="project-list" aria-label="Choose a project preview">
            {projects.map((project, index) => (
              <div
                className={`project-entry ${selected === index ? 'is-selected' : ''}`}
                key={project.id}
              >
                <div className="mobile-project-heading">
                  <span className="project-number">{project.id}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-tech">{project.technologies.join(' · ')}</p>
                  </div>
                </div>
                <button
                  className="project-selector"
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') setSelected(index)
                  }}
                  onFocus={() => setSelected(index)}
                  onClick={() => setSelected(index)}
                  aria-pressed={selected === index}
                  aria-controls="project-preview"
                >
                  <span className="project-number">{project.id}</span>
                  <span>
                    <span className="project-title">{project.title}</span>
                    <span className="project-tech">{project.technologies.join(' · ')}</span>
                  </span>
                  <Arrow />
                </button>
                <article className="mobile-project">
                  <ProjectDetails project={project} />
                </article>
              </div>
            ))}
          </div>
          <article
            id="project-preview"
            className="project-preview"
            aria-label={`${projects[selected].title} preview`}
          >
            <div className="preview-inner" key={projects[selected].id}>
              <ProjectDetails project={projects[selected]} />
            </div>
            <Star className="preview-star" />
          </article>
        </div>
      </div>
    </section>
  )
}
