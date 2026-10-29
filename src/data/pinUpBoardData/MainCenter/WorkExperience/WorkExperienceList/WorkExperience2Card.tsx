import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../../types'

function WorkExperience2Content() {
  return (
    <Stack spacing={0.5}>
      <Typography variant="subtitle1" component="h3">
        Senior Software Developer
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ECICS
      </Typography>
      <Typography variant="caption" color="text.secondary">
        August 2025 – December 2025 · Contract
      </Typography>
    </Stack>
  )
}

// EDIT ME: Work Experience 2 — ECICS
export const workExperience2Card: BoardCardModule = {
  id: 'work-experience-2',
  parentId: 'work-experience',
  x: -950,
  y: 300,
  width: 240,
  height: 140,
  content: <WorkExperience2Content />,
}
