import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function Skill3Content() {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" component="h3">
        Skill 3
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* EDIT ME: Replace placeholder skill details */}
        Placeholder description for skill 3.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Skill 3 board card
export const skill3Card: BoardCardModule = {
  id: 'skill-3',
  parentId: 'skills',
  x: 890,
  y: -80,
  width: 220,
  height: 140,
  content: <Skill3Content />,
}
