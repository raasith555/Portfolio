import { useTheme } from '@mui/material/styles'
import type { CardGeometry, PinUpConnectorData } from './types'
import { curvedConnectorPath, edgeAttachmentPoint } from './coords'

type PinUpConnectorProps = {
  connector: PinUpConnectorData
  source: CardGeometry
  target: CardGeometry
}

function PinUpConnector({ connector, source, target }: PinUpConnectorProps) {
  const theme = useTheme()
  const start = edgeAttachmentPoint(source, { x: target.x, y: target.y })
  const end = edgeAttachmentPoint(target, { x: source.x, y: source.y })
  const path = curvedConnectorPath(start, end)
  const mid = {
    x: (start.x + end.x) / 2,
    y: (start.y + end.y) / 2,
  }

  const stroke = connector.color ?? theme.palette.grey[500]
  const strokeWidth = connector.strokeWidth ?? 2
  const markerId = `pinup-arrow-${connector.id}`

  return (
    <g pointerEvents="none">
      {connector.arrow !== false && (
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={stroke} />
          </marker>
        </defs>
      )}
      <path
        d={path}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={connector.dashed ? '6 4' : undefined}
        markerEnd={connector.arrow !== false ? `url(#${markerId})` : undefined}
      />
      {connector.label && (
        <text
          x={mid.x}
          y={mid.y - 8}
          textAnchor="middle"
          fill={theme.palette.text.secondary}
          fontSize={12}
          fontFamily={theme.typography.fontFamily}
        >
          {connector.label}
        </text>
      )}
    </g>
  )
}

export default PinUpConnector
