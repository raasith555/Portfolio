import { Stack, Typography } from '@mui/material'
import SocialLinks from '../../../../components/SocialLinks'
import type { BoardCardModule } from '../../types'

function LinksHubContent() {
  return (
    <Stack spacing={1.5} sx={{ height: '100%' }}>
      <Typography variant="h6" component="h2">
        Links
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Get in touch
      </Typography>
      <SocialLinks />
    </Stack>
  )
}

// EDIT ME: Links hub card layout
export const linksCard: BoardCardModule = {
  id: 'links',
  parentId: 'start',
  x: -550,
  y: -300,
  width: 260,
  height: 180,
  content: <LinksHubContent />,
}
