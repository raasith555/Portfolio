import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function Project2Content() {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" component="h3">
        Project 2
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* EDIT ME: Replace placeholder project details */}
        Placeholder description for project 2.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Project 2 board card
export const project2Card: BoardCardModule = {
  id: 'project-2',
  parentId: 'projects',
  x: 885,
  y: 310,
  width: 220,
  height: 140,
  content: <Project2Content />,
}
