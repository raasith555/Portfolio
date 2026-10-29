import { Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../types'

function WorkExperienceHubContent() {
  return (
    <Stack spacing={1.5} sx={{ height: '100%' }}>
      <Typography variant="h6" component="h2">
        Work Experience
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        {/* EDIT ME: Hub blurb for work experience */}
        Explore individual roles on the board.
      </Typography>
    </Stack>
  )
}

// EDIT ME: Work Experience hub card layout
export const workExperienceCard: BoardCardModule = {
  id: 'work-experience',
  parentId: 'start',
  x: -550,
  y: 300,
  width: 280,
  height: 180,
  content: <WorkExperienceHubContent />,
}
