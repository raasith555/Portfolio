import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // Fixed viewport height so the Home board can fill the middle via flex
        height: '100dvh',
        minHeight: '100vh',
        overflow: isHome ? 'hidden' : 'auto',
      }}
    >
      <ScrollToTop />
      <Navbar />
      {isHome ? (
        <Box
          component="main"
          sx={{
            flex: '1 1 auto',
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Outlet />
        </Box>
      ) : (
        <Container
          component="main"
          maxWidth="md"
          sx={{ flex: '1 1 auto', py: { xs: 3, md: 5 } }}
        >
          <Outlet />
        </Container>
      )}
      <Footer />
    </Box>
  )
}

export default Layout
