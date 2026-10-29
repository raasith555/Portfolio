import type { CardGeometry, Point, ViewportState } from './types'

/** Convert a world point to screen coordinates for the current viewport. */
export function worldToScreen(
  worldX: number,
  worldY: number,
  viewportWidth: number,
  viewportHeight: number,
  viewport: ViewportState,
): Point {
  return {
    x: viewportWidth / 2 + (worldX - viewport.centerX) * viewport.zoom,
    y: viewportHeight / 2 + (worldY - viewport.centerY) * viewport.zoom,
  }
}

/** Convert a screen point to world coordinates for the current viewport. */
export function screenToWorld(
  screenX: number,
  screenY: number,
  viewportWidth: number,
  viewportHeight: number,
  viewport: ViewportState,
): Point {
  return {
    x: viewport.centerX + (screenX - viewportWidth / 2) / viewport.zoom,
    y: viewport.centerY + (screenY - viewportHeight / 2) / viewport.zoom,
  }
}

/**
 * Zoom while keeping the world point under the cursor stationary on screen.
 * Returns the updated viewport center and zoom.
 */
export function zoomAtScreenPoint(
  screenX: number,
  screenY: number,
  viewportWidth: number,
  viewportHeight: number,
  viewport: ViewportState,
  nextZoom: number,
): ViewportState {
  const world = screenToWorld(
    screenX,
    screenY,
    viewportWidth,
    viewportHeight,
    viewport,
  )

  return {
    centerX: world.x - (screenX - viewportWidth / 2) / nextZoom,
    centerY: world.y - (screenY - viewportHeight / 2) / nextZoom,
    zoom: nextZoom,
  }
}

/** Pan the viewport by a screen-space delta (pointer drag). */
export function panByScreenDelta(
  viewport: ViewportState,
  deltaScreenX: number,
  deltaScreenY: number,
): ViewportState {
  return {
    ...viewport,
    centerX: viewport.centerX - deltaScreenX / viewport.zoom,
    centerY: viewport.centerY - deltaScreenY / viewport.zoom,
  }
}

/**
 * Intersection of the ray from card center toward `toward` with the card's AABB.
 * Used so connectors attach to card edges rather than centers.
 */
export function edgeAttachmentPoint(
  card: CardGeometry,
  toward: Point,
): Point {
  const dx = toward.x - card.x
  const dy = toward.y - card.y

  if (dx === 0 && dy === 0) {
    return { x: card.x, y: card.y }
  }

  const halfW = card.width / 2
  const halfH = card.height / 2

  const scaleX = dx === 0 ? Number.POSITIVE_INFINITY : halfW / Math.abs(dx)
  const scaleY = dy === 0 ? Number.POSITIVE_INFINITY : halfH / Math.abs(dy)
  const scale = Math.min(scaleX, scaleY)

  return {
    x: card.x + dx * scale,
    y: card.y + dy * scale,
  }
}

/** Cubic Bézier control points for a smooth mind-map style curve. */
export function curvedConnectorPath(
  start: Point,
  end: Point,
): string {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const distance = Math.hypot(dx, dy)
  const offset = Math.min(80, distance * 0.35)

  // Bias control points along the dominant axis for a natural curve
  const c1 =
    Math.abs(dx) >= Math.abs(dy)
      ? { x: start.x + Math.sign(dx || 1) * offset, y: start.y }
      : { x: start.x, y: start.y + Math.sign(dy || 1) * offset }

  const c2 =
    Math.abs(dx) >= Math.abs(dy)
      ? { x: end.x - Math.sign(dx || 1) * offset, y: end.y }
      : { x: end.x, y: end.y - Math.sign(dy || 1) * offset }

  return `M ${start.x} ${start.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${end.x} ${end.y}`
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}
