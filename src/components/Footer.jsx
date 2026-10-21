import { Box, Container, Typography } from '@mui/material'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary" align="center">
          {/* EDIT ME: Update copyright name */}
          © {year} Your Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
