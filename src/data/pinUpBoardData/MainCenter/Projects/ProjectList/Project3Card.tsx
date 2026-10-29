import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function Project3Content() {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" component="h3">
        Project 3
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* EDIT ME: Replace placeholder project details */}
        Placeholder description for project 3.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Project 3 board card
export const project3Card: BoardCardModule = {
  id: 'project-3',
  parentId: 'projects',
  x: 885,
  y: 510,
  width: 220,
  height: 140,
  content: <Project3Content />,
}
