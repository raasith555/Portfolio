import type { PinUpConnectorData } from '../../components/pinup'
import { mainCenterCard } from './MainCenter/MainCenterCard'
import { projectsBranch } from './MainCenter/Projects'
import { skillsBranch } from './MainCenter/Skills'
import { linksBranch } from './MainCenter/Links'
import { workExperienceBranch } from './MainCenter/WorkExperience'
import {
  toPinUpCard,
  type AssembledBoard,
  type BoardCardModule,
} from './types'

/**
 * Assembles the full Home PinUpBoard from the MainCenter folder tree.
 * Add new branches here after creating their folder + index registry.
 */
function assembleBoard(): AssembledBoard {
  const modules: BoardCardModule[] = [
    mainCenterCard,
    ...skillsBranch.cards,
    ...projectsBranch.cards,
    ...linksBranch.cards,
    ...workExperienceBranch.cards,
  ]

  const connectors: PinUpConnectorData[] = [
    ...skillsBranch.connectors,
    ...projectsBranch.connectors,
    ...linksBranch.connectors,
    ...workExperienceBranch.connectors,
  ]

  return {
    cards: modules.map(toPinUpCard),
    connectors,
  }
}

export const pinUpBoard: AssembledBoard = assembleBoard()

export type { AssembledBoard, BoardCardModule, BoardBranch } from './types'
