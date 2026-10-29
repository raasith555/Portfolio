import type { CSSProperties, ReactNode } from 'react'

export type Point = {
  x: number
  y: number
}

export type ViewportState = {
  /** World X at the center of the viewport */
  centerX: number
  /** World Y at the center of the viewport */
  centerY: number
  zoom: number
}

export type PinUpCardData = {
  id: string
  x: number
  y: number
  width?: number
  height?: number
  content?: ReactNode
  className?: string
  style?: CSSProperties
}

export type PinUpConnectorData = {
  id: string
  sourceId: string
  targetId: string
  label?: string
  color?: string
  strokeWidth?: number
  dashed?: boolean
  arrow?: boolean
}

export type CardGeometry = {
  id: string
  x: number
  y: number
  width: number
  height: number
}

export type PinUpBoardProps = {
  width?: number | string
  height?: number | string
  cards?: PinUpCardData[]
  connectors?: PinUpConnectorData[]
  startCardId?: string
  minZoom?: number
  maxZoom?: number
  initialZoom?: number
  showGrid?: boolean
  showOrigin?: boolean
  className?: string
  style?: CSSProperties
}
