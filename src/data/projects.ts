export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
}

// EDIT ME: Replace with your real projects
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A short placeholder description of the first project.',
    tech: ['React', 'MUI'],
    link: 'https://github.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A short placeholder description of the second project.',
    tech: ['JavaScript', 'Vite'],
    link: 'https://github.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A short placeholder description of the third project.',
    tech: ['React', 'Router'],
    link: 'https://github.com',
  },
]
