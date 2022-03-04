import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556270', //grey
    },
    secondary: {
      main: '#DC143C',
    },
    text: {
      primary: '#556270', //grey
      secondary: '#DC143C', //red
    },
    grey: {
      A700: '#4a5562', //logo and footer
    },
  },
  typography: {
    fontFamily: `'Libre Franklin', 'Roboto', 'Helvetica', san-serif`,
    h1: {
      fontSize: '2.25rem',
      fontWeight: '500',
      letterSpacing: '0.01rem',
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: '1.4',
      fontWeight: '300',
      letterSpacing: '.1px',
      
    },
    h3: {
      fontSize: '1rem',
      fontWeight: '500',
    },
    h4: {
      fontSize: '0.9rem'
    },
    h6: {
      fontSize: '1rem',
    }
  },
})
