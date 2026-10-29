import { Link as RouterLink } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import type { BoardCardModule } from '../../types'

function SkillsHubContent() {
  return (
    <Stack spacing={1.5} sx={{ height: '100%' }}>
      <Typography variant="h6" component="h2">
        Skills
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        Explore individual skill cards on the board, or open the full skills page.
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        component={RouterLink}
        to="/skills"
        sx={{ alignSelf: 'flex-start' }}
      >
        View all
      </Button>
    </Stack>
  )
}

// EDIT ME: Skills hub card layout
export const skillsCard: BoardCardModule = {
  id: 'skills',
  parentId: 'start',
  x: 550,
  y: -300,
  width: 260,
  height: 180,
  content: <SkillsHubContent />,
}
