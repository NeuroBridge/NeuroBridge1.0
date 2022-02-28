import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556270',
    },
    secondary: {
      main: '#DC143C',
    },
    text: {
      primary: '#556270', //grey
      secondary: '#DC143C', //red
    },
    
  },
  typography: {
    fontFamily: `'Libre Franklin', 'Roboto', 'Helvetica', san-serif`,

    h1: {
      fontSize: '2.4rem',
    },
    h2: {
      fontSize: '1.2rem',
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '.1px',
    },
    h3: {
      fontSize: '1rem',
    },
    h4: {
      fontSize: '0.9rem'
    }
  },
})