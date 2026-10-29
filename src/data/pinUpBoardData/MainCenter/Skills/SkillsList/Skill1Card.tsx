import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function Skill1Content() {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" component="h3">
        Skill 1
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* EDIT ME: Replace placeholder skill details */}
        Placeholder description for skill 1.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Skill 1 board card
export const skill1Card: BoardCardModule = {
  id: 'skill-1',
  parentId: 'skills',
  x: 890,
  y: -530,
  width: 220,
  height: 140,
  content: <Skill1Content />,
}
