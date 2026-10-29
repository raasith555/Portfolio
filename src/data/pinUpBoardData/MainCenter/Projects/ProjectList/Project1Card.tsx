import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function Project1Content() {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" component="h3">
        Project 1
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* EDIT ME: Replace placeholder project details */}
        Placeholder description for project 1.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Project 1 board card
export const project1Card: BoardCardModule = {
  id: 'project-1',
  parentId: 'projects',
  x: 885,
  y: 130,
  width: 220,
  height: 140,
  content: <Project1Content />,
}
