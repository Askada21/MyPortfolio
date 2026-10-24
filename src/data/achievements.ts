export interface Achievement {
  title: string
  organization: string
  date: string
  description: string
  credentialUrl?: string
  image?: string
  confirmed: boolean
}

export const achievements: Achievement[] = [
  {
    title: 'Top-8 finalist',
    organization: 'MongoDB Hackathon',
    date: '2026',
    description:
      'Recognized as a top-8 finalist with TWorkspace, a collaborative workspace project.',
    confirmed: true,
  },
  // Add verified certificates here. Unconfirmed entries never appear on the website.
  {
    title: 'Certificate title',
    organization: 'Issuing organization',
    date: '',
    description: '',
    credentialUrl: '',
    image: '',
    confirmed: false,
  },
]
