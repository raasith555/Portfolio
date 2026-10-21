import { createTheme } from '@mui/material/styles'

// Neutral MUI theme — colors and typography live here, not in components.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#37474f',
    },
    secondary: {
      main: '#546e7a',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
})

export default theme
