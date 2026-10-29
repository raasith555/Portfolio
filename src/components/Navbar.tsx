import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import { navLinks } from '../data/navLinks'

const linkSx = {
  color: 'inherit',
  textDecoration: 'none',
  '&.active': {
    fontWeight: 700,
    textDecoration: 'underline',
    textUnderlineOffset: 4,
  },
}

function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <AppBar position="sticky" component="nav" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={closeDrawer}
              ModalProps={{ keepMounted: true }}
            >
              <Box
                sx={{ width: 240 }}
                role="presentation"
                onClick={closeDrawer}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItemButton
                      key={link.path}
                      component={NavLink}
                      to={link.path}
                      end={link.path === '/'}
                      sx={{
                        '&.active': {
                          bgcolor: 'action.selected',
                          fontWeight: 700,
                        },
                      }}
                    >
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={NavLink}
                to={link.path}
                end={link.path === '/'}
                color="inherit"
                sx={linkSx}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
