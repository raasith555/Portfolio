import { registerBranch } from '../../types'
import { skillsCard } from './SkillsCard'
import { skill1Card } from './SkillsList/Skill1Card'
import { skill2Card } from './SkillsList/Skill2Card'
import { skill3Card } from './SkillsList/Skill3Card'

/**
 * Explicit Skills branch registry.
 * To add a skill card: create SkillsList/SkillNCard.tsx, then add it below.
 */
export const skillsBranch = registerBranch(skillsCard, [
  skill1Card,
  skill2Card,
  skill3Card,
])
