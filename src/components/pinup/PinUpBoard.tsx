import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import { alpha, useTheme } from '@mui/material/styles'
import PinUpCard from './PinUpCard'
import PinUpConnector from './PinUpConnector'
import {
  clamp,
  panByScreenDelta,
  zoomAtScreenPoint,
} from './coords'
import type {
  CardGeometry,
  PinUpBoardProps,
  PinUpCardData,
  ViewportState,
} from './types'

const DEFAULT_CARD_WIDTH = 240
const DEFAULT_CARD_HEIGHT = 160
const GRID_SPACING = 24

function toGeometry(card: PinUpCardData): CardGeometry {
  return {
    id: card.id,
    x: card.x,
    y: card.y,
    width: card.width ?? DEFAULT_CARD_WIDTH,
    height: card.height ?? DEFAULT_CARD_HEIGHT,
  }
}

function PinUpBoard({
  width = '100%',
  height = '100%',
  cards = [],
  connectors = [],
  startCardId = 'start',
  minZoom = 0.4,
  maxZoom = 2.5,
  initialZoom = 1,
  showGrid = true,
  showOrigin = true,
  className,
  style,
}: PinUpBoardProps) {
  const theme = useTheme()
  const boardRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [viewport, setViewport] = useState<ViewportState>({
    centerX: 0,
    centerY: 0,
    zoom: initialZoom,
  })
  const dragRef = useRef<{
    pointerId: number
    lastX: number
    lastY: number
  } | null>(null)

  const geometries = cards.map(toGeometry)
  const geometryById = new Map(geometries.map((card) => [card.id, card]))

  useEffect(() => {
    const el = boardRef.current
    if (!el) return undefined

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width: w, height: h } = entry.contentRect
      setSize({ width: w, height: h })
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Non-passive wheel listener so preventDefault can block page scroll over the board
  useEffect(() => {
    const el = boardRef.current
    if (!el) return undefined

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const rect = el.getBoundingClientRect()
      const screenX = event.clientX - rect.left
      const screenY = event.clientY - rect.top
      const factor = event.deltaY > 0 ? 0.9 : 1.1
      setViewport((prev) => {
        const zoom = clamp(prev.zoom * factor, minZoom, maxZoom)
        if (rect.width <= 0 || rect.height <= 0) {
          return { ...prev, zoom }
        }
        return zoomAtScreenPoint(
          screenX,
          screenY,
          rect.width,
          rect.height,
          prev,
          zoom,
        )
      })
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [maxZoom, minZoom])

  const resetView = useCallback(() => {
    const start = cards.find((card) => card.id === startCardId)
    setViewport({
      centerX: start?.x ?? 0,
      centerY: start?.y ?? 0,
      zoom: 1,
    })
  }, [cards, startCardId])

  const centerOnCard = useCallback(
    (cardId: string) => {
      const card = cards.find((item) => item.id === cardId)
      if (!card) return
      setViewport((prev) => ({
        ...prev,
        centerX: card.x,
        centerY: card.y,
      }))
    },
    [cards],
  )

  const applyZoom = useCallback(
    (nextZoom: number, screenX?: number, screenY?: number) => {
      const zoom = clamp(nextZoom, minZoom, maxZoom)
      setViewport((prev) => {
        if (
          size.width <= 0 ||
          size.height <= 0 ||
          screenX === undefined ||
          screenY === undefined
        ) {
          return { ...prev, zoom }
        }
        return zoomAtScreenPoint(
          screenX,
          screenY,
          size.width,
          size.height,
          prev,
          zoom,
        )
      })
    },
    [maxZoom, minZoom, size.height, size.width],
  )

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return
    dragRef.current = {
      pointerId: event.pointerId,
      lastX: event.clientX,
      lastY: event.clientY,
    }
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const dx = event.clientX - drag.lastX
    const dy = event.clientY - drag.lastY
    drag.lastX = event.clientX
    drag.lastY = event.clientY

    setViewport((prev) => panByScreenDelta(prev, dx, dy))
  }

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null
      setIsDragging(false)
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    }
  }

  const worldTransform = `translate(${size.width / 2}px, ${size.height / 2}px) scale(${viewport.zoom}) translate(${-viewport.centerX}px, ${-viewport.centerY}px)`

  const spacing = GRID_SPACING * viewport.zoom
  const originScreenX = size.width / 2 - viewport.centerX * viewport.zoom
  const originScreenY = size.height / 2 - viewport.centerY * viewport.zoom
  const gridOffsetX = ((originScreenX % spacing) + spacing) % spacing
  const gridOffsetY = ((originScreenY % spacing) + spacing) % spacing

  return (
    <Box
      ref={boardRef}
      className={className}
      role="application"
      aria-label="Interactive pin-up board. Drag to pan, scroll to zoom."
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      sx={{
        position: 'relative',
        width,
        height,
        // Fill flex parents even when height is a percentage of an indefinite box
        flex: height === '100%' ? '1 1 auto' : undefined,
        minHeight: 0,
        alignSelf: 'stretch',
        overflow: 'hidden',
        bgcolor: 'grey.100',
        borderTop: 1,
        borderBottom: 1,
        borderColor: 'divider',
        touchAction: 'none',
        userSelect: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        ...style,
      }}
    >
      {showGrid && (
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(${alpha(theme.palette.text.primary, 0.18)} 1.25px, transparent 1.25px)`,
            backgroundSize: `${spacing}px ${spacing}px`,
            backgroundPosition: `${gridOffsetX}px ${gridOffsetY}px`,
            pointerEvents: 'none',
          }}
        />
      )}

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          transformOrigin: '0 0',
          transform: worldTransform,
          pointerEvents: 'none',
        }}
      >
        <Box
          component="svg"
          sx={{
            position: 'absolute',
            overflow: 'visible',
            width: 1,
            height: 1,
            left: 0,
            top: 0,
            pointerEvents: 'none',
          }}
        >
          {showOrigin && (
            <g
              stroke={theme.palette.grey[500]}
              strokeWidth={1}
              opacity={0.7}
            >
              <line x1={-16} y1={0} x2={16} y2={0} />
              <line x1={0} y1={-16} x2={0} y2={16} />
            </g>
          )}
          {connectors.map((connector) => {
            const source = geometryById.get(connector.sourceId)
            const target = geometryById.get(connector.targetId)
            if (!source || !target) return null
            return (
              <PinUpConnector
                key={connector.id}
                connector={connector}
                source={source}
                target={target}
              />
            )
          })}
        </Box>

        {cards.map((card) => {
          const geometry = toGeometry(card)
          return (
            <Box key={card.id} sx={{ pointerEvents: 'auto' }}>
              <PinUpCard
                id={card.id}
                width={geometry.width}
                height={geometry.height}
                left={geometry.x - geometry.width / 2}
                top={geometry.y - geometry.height / 2}
                className={card.className}
                style={card.style}
                onDoubleClickCenter={centerOnCard}
              >
                {card.content}
              </PinUpCard>
            </Box>
          )
        })}
      </Box>

      <Stack
        direction="row"
        spacing={0.5}
        alignItems="center"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: 1,
          borderColor: 'divider',
          px: 0.5,
          py: 0.25,
          boxShadow: 1,
        }}
      >
        <Tooltip title="Zoom out">
          <IconButton
            size="small"
            aria-label="Zoom out"
            onClick={() =>
              applyZoom(viewport.zoom * 0.9, size.width / 2, size.height / 2)
            }
          >
            <ZoomOutIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Typography variant="caption" sx={{ minWidth: 40, textAlign: 'center' }}>
          {Math.round(viewport.zoom * 100)}%
        </Typography>
        <Tooltip title="Zoom in">
          <IconButton
            size="small"
            aria-label="Zoom in"
            onClick={() =>
              applyZoom(viewport.zoom * 1.1, size.width / 2, size.height / 2)
            }
          >
            <ZoomInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Reset view">
          <IconButton size="small" aria-label="Reset view" onClick={resetView}>
            <CenterFocusStrongIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  )
}

export default PinUpBoard
