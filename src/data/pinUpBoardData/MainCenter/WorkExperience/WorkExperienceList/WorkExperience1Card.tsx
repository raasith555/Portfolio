import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function WorkExperience1Content() {
  return (
    <Stack spacing={0.5}>
      <Typography variant="subtitle1" component="h3">
        Full Stack AI Engineer
      </Typography>
      <Typography variant="body2" color="text.secondary">
        UIC Asian Computer Services
      </Typography>
      <Typography variant="caption" color="text.secondary">
        January 2026 – Present · Contract
      </Typography>
    </Stack>
  )
}

// EDIT ME: Work Experience 1 — UIC Asian Computer Services
export const workExperience1Card: BoardCardModule = {
  id: 'work-experience-1',
  parentId: 'work-experience',
  x: -890,
  y: 80,
  width: 240,
  height: 140,
  content: <WorkExperience1Content />,
}
