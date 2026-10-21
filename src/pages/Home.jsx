import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { intro } from '../data/intro'

function Home() {
  return (
    <Box component="section">
      <Typography variant="h3" component="h1" gutterBottom>
        {intro.name}
      </Typography>
      <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 3 }}>
        {intro.tagline}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/projects"
      >
        View projects
      </Button>
    </Box>
  )
}

export default Home
