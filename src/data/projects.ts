export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  imageAlt?: string
  artwork: 'database' | 'tracker' | 'workspace' | 'web'
}

export const projects: Project[] = [
  { id: '01', title: 'SQL Book Database', description: 'Relational database project using PostgreSQL, featuring SQL queries, joins, filtering, grouping and data retrieval.', technologies: ['SQL', 'PostgreSQL', 'DBeaver'], artwork: 'database' },
  { id: '02', title: 'Study Tracker', description: 'Python-based study tracking and data analysis project using CSV datasets and Pandas to explore study habits and productivity.', technologies: ['Python', 'Pandas', 'CSV'], github: 'https://github.com/Askada21/dcp-assignment', artwork: 'tracker' },
  { id: '03', title: 'TWorkspace', description: 'A temporary collaborative workspace developed during a MongoDB hackathon, supporting shared workspaces and collaboration features.', technologies: ['Next.js', 'React', 'MongoDB'], github: 'https://github.com/Askada21/mongo', artwork: 'workspace' },
  { id: '04', title: 'Web Development Project', description: 'A responsive web development project featuring interactive filtering, navigation and form validation.', technologies: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/Askada21/WebDev_Project_RDE', demo: 'https://askada21.github.io/WebDev_Project_RDE/', image: 'assets/images/web-development.png', imageAlt: 'Wheels on Fire live website with a winding road hero and car collection filters.', artwork: 'web' },
]
