import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode } from 'react'
import { Box } from '@mui/material'

type PinUpCardProps = {
  id: string
  width: number
  height: number
  /** World-space left (centerX - width/2) */
  left: number
  /** World-space top (centerY - height/2) */
  top: number
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onDoubleClickCenter?: (id: string) => void
}

function PinUpCard({
  id,
  width,
  height,
  left,
  top,
  children,
  className,
  style,
  onDoubleClickCenter,
}: PinUpCardProps) {
  const handleDoubleClick = (event: MouseEvent) => {
    event.stopPropagation()
    onDoubleClickCenter?.(id)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onDoubleClickCenter?.(id)
    }
  }

  return (
    <Box
      role="group"
      tabIndex={0}
      aria-label={`Board card ${id}. Double-click or press Enter to center.`}
      className={className}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      onPointerDown={(event) => {
        // Keep board panning from starting when interacting with a card
        event.stopPropagation()
      }}
      style={style}
      sx={{
        position: 'absolute',
        left,
        top,
        width,
        height,
        boxSizing: 'border-box',
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        boxShadow: 2,
        p: 2,
        overflow: 'auto',
        cursor: 'default',
        outlineOffset: 2,
        '&:focus-visible': {
          outline: 2,
          outlineStyle: 'solid',
          outlineColor: 'primary.main',
        },
      }}
    >
      {children}
    </Box>
  )
}

export default PinUpCard
