import { registerBranch } from '../../types'
import { projectsCard } from './ProjectsCard'
import { project1Card } from './ProjectList/Project1Card'
import { project2Card } from './ProjectList/Project2Card'
import { project3Card } from './ProjectList/Project3Card'

/**
 * Explicit Projects branch registry.
 * To add a project card: create ProjectList/ProjectNCard.tsx, then add it below.
 */
export const projectsBranch = registerBranch(projectsCard, [
  project1Card,
  project2Card,
  project3Card,
])
