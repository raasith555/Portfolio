import type { ReactNode } from 'react'
import type { PinUpCardData, PinUpConnectorData } from '../../components/pinup'

/** One board card module — layout and content live in the card file. */
export type BoardCardModule = {
  id: string
  /** When set, a connector is created from this parent to this card. */
  parentId?: string
  x: number
  y: number
  width?: number
  height?: number
  content: ReactNode
  /** Optional label on the connector from parentId → this card */
  connectorLabel?: string
}

export type BoardBranch = {
  cards: BoardCardModule[]
  connectors: PinUpConnectorData[]
}

export type AssembledBoard = {
  cards: PinUpCardData[]
  connectors: PinUpConnectorData[]
}

/** Convert a card module to PinUpBoard card props (drops parent/connector fields). */
export function toPinUpCard(card: BoardCardModule): PinUpCardData {
  return {
    id: card.id,
    x: card.x,
    y: card.y,
    width: card.width,
    height: card.height,
    content: card.content,
  }
}

/** Build a connector from a child module that declares parentId. */
export function connectorFromParent(card: BoardCardModule): PinUpConnectorData | null {
  if (!card.parentId) return null
  return {
    id: `${card.parentId}-to-${card.id}`,
    sourceId: card.parentId,
    targetId: card.id,
    label: card.connectorLabel,
    arrow: true,
  }
}

/** Explicitly register child modules under a hub: flatten cards + connectors. */
export function registerBranch(
  hub: BoardCardModule,
  children: BoardCardModule[],
): BoardBranch {
  const cards = [hub, ...children]
  const connectors: PinUpConnectorData[] = []

  for (const child of children) {
    const connector = connectorFromParent(child)
    if (connector) connectors.push(connector)
  }

  // Hub → start (or other parent) if declared
  const hubConnector = connectorFromParent(hub)
  if (hubConnector) connectors.push(hubConnector)

  return { cards, connectors }
}
