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
      // paddingBottom: '1rem'
    },
    h2: {
      fontSize: '1.5rem',
      lineHeight: '1.4',
      fontWeight: '400',
      letterSpacing: '.1px',
      paddingBottom: '1rem',
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: '500',
      paddingBottom: '0.5rem',
    },
    h4: {
      fontSize: '0.9rem'
    },
    h6: {
      fontSize: '1rem',
    }
  },
})
