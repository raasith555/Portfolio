import { registerBranch } from '../../types'
import { workExperienceCard } from './WorkExperienceCard'
import { workExperience1Card } from './WorkExperienceList/WorkExperience1Card'
import { workExperience2Card } from './WorkExperienceList/WorkExperience2Card'
import { workExperience3Card } from './WorkExperienceList/WorkExperience3Card'
import { workExperience4Card } from './WorkExperienceList/WorkExperience4Card'

/**
 * Explicit Work Experience branch registry.
 * To add a role card: create WorkExperienceList/WorkExperienceNCard.tsx, then add it below.
 */
export const workExperienceBranch = registerBranch(workExperienceCard, [
  workExperience1Card,
  workExperience2Card,
  workExperience3Card,
  workExperience4Card,
])
