import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function WorkExperience4Content() {
  return (
    <Stack spacing={0.5}>
      <Typography variant="subtitle1" component="h3">
        Software Engineer
      </Typography>
      <Typography variant="body2" color="text.secondary">
        PARATLAS
      </Typography>
      <Typography variant="caption" color="text.secondary">
        April 2022 – June 2023
      </Typography>
    </Stack>
  )
}

// EDIT ME: Work Experience 4 — PARATLAS
export const workExperience4Card: BoardCardModule = {
  id: 'work-experience-4',
  parentId: 'work-experience',
  x: -555,
  y: 595,
  width: 280,
  height: 140,
  content: <WorkExperience4Content />,
}
