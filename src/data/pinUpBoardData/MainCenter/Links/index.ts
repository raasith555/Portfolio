import { registerBranch } from '../../types'
import { linksCard } from './LinksCard'

/**
 * Explicit Skills branch registry.
 * To add a skill card: create SkillsList/SkillNCard.tsx, then add it below.
 */
export const linksBranch = registerBranch(linksCard, [])
