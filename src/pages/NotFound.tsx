import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

function NotFound() {
  return (
    <Box component="section" sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Page not found
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        The page you requested does not exist.
      </Typography>
      <Button variant="contained" component={RouterLink} to="/">
        Back to home
      </Button>
    </Box>
  )
}

export default NotFound
