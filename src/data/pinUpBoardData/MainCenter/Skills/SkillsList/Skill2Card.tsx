import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function Skill2Content() {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" component="h3">
        Skill 2
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* EDIT ME: Replace placeholder skill details */}
        Placeholder description for skill 2.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Skill 2 board card
export const skill2Card: BoardCardModule = {
  id: 'skill-2',
  parentId: 'skills',
  x: 890,
  y: -300,
  width: 220,
  height: 140,
  content: <Skill2Content />,
}
