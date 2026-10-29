import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function WorkExperience3Content() {
  return (
    <Stack spacing={0.5}>
      <Typography variant="subtitle1" component="h3">
        Senior Software Engineer
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Singapore Institute of Technology (SIT)
      </Typography>
      <Typography variant="caption" color="text.secondary">
        July 2023 – August 2025 · Contract
      </Typography>
    </Stack>
  )
}

// EDIT ME: Work Experience 3 — SIT
export const workExperience3Card: BoardCardModule = {
  id: 'work-experience-3',
  parentId: 'work-experience',
  x: -890,
  y: 520,
  width: 240,
  height: 140,
  content: <WorkExperience3Content />,
}
