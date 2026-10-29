import { Avatar, Box, Stack, Typography } from '@mui/material'
import { intro } from '../../intro'
import type { BoardCardModule } from '../types'

function MainCenterContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'center', sm: 'flex-start' },
        gap: 2,
        textAlign: { xs: 'center', sm: 'left' },
        height: '100%',
      }}
    >
      <Avatar
        src={`${import.meta.env.BASE_URL}MyPic.jpg`}
        alt={`Portrait of ${intro.name}`}
        sx={{
          width: { xs: 96, sm: 120 },
          height: { xs: 96, sm: 120 },
          flexShrink: 0,
          border: 2,
          borderColor: 'text.primary',
          '& img': {
            objectPosition: 'center 1%',
          },
        }}
      />

      <Stack
        spacing={1.5}
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        sx={{ minWidth: 0, flex: 1 }}
      >
        <Box>
          <Typography variant="h5" component="h1" gutterBottom>
            {intro.name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="text.secondary"
            gutterBottom
          >
            {intro.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {intro.tagline}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

// EDIT ME: Start card at world origin
export const mainCenterCard: BoardCardModule = {
  id: 'start',
  x: 0,
  y: 0,
  width: 440,
  height: 340,
  content: <MainCenterContent />,
}
