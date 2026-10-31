# Preserved portfolio content

Text data from the previous implementation, retained for future page stages. None of this archive is imported by the website.

## Profile

```ts
/** Public contact details only. Empty fields are displayed as unavailable, never as dead links. */
export const profile = {
  github: 'https://github.com/Askada21',
  linkedin: 'https://www.linkedin.com/in/daria-osypova-31906a2aa/?isSelfProfile=true',
  email: '2424428@gmail.com',
  portrait: '', // Example: 'assets/images/daria.webp' (relative to public/).
  portraitAlt: 'Portrait of Daria Osypova',
}
```

## Skills

```ts
export const skills = [
  { title: 'Programming languages', items: ['Python', 'SQL', 'Java', 'C', 'JavaScript'] },
  { title: 'Web development', items: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
  { title: 'Data & databases', items: ['PostgreSQL', 'Pandas', 'Excel', 'Orange Data Mining'] },
  { title: 'Development tools', items: ['Git', 'GitHub', 'VS Code', 'DBeaver'] },
]
```

## Projects

```ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  imageAlt?: string
  artwork: 'workspace' | 'web'
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'TWorkspace',
    description:
      'A temporary collaborative workspace developed during a MongoDB hackathon, supporting shared workspaces and collaboration features.',
    technologies: ['Next.js', 'React', 'MongoDB'],
    github: 'https://github.com/Askada21/mongo',
    artwork: 'workspace',
  },
  {
    id: '02',
    title: 'Web Development Project',
    description:
      'A responsive web development project featuring interactive filtering, navigation and form validation.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Askada21/WebDev_Project_RDE',
    demo: 'https://askada21.github.io/WebDev_Project_RDE/',
    artwork: 'web',
  },
]
```

## Experience

```ts
export const experience = [
  {
    period: 'CURRENT',
    category: 'EDUCATION',
    title: 'BSc (Hons) Data Science & Artificial Intelligence',
    organization: 'Technological University Dublin',
    description:
      'Currently studying. Focused on programming, software development, data analytics, databases and artificial intelligence.',
  },
  {
    period: '2026',
    category: 'HACKATHON',
    title: 'MongoDB Hackathon',
    organization: 'Top-8 finalist · TWorkspace',
    description:
      'Developed TWorkspace, a temporary collaborative workspace, during a MongoDB hackathon.',
  },
  {
    period: '2024',
    category: 'INTERNSHIP',
    title: 'QA Internship',
    organization: 'Visma Tech · Porto, Portugal',
    description:
      'Worked on software testing and quality assurance, gaining practical experience with application testing and development workflows.',
  },
]
```
