import * as React from "react"
/* eslint-disable no-unused-vars */
import { Link } from './link'
import { Slide, Typography, Button, Box } from '@mui/material'
import welcomeNB from '../images/slide/PdG.jpeg'
import { useTheme } from '@mui/material/styles'

const content = {
  title: 'Welcome to NeuroBridge',
  subtitle: 'A platform for data discovery to enhance the reuse of clinical neuroscience/ neuroimaging data. We develop the NeuroBridge ontology, and combine machine learning with ontology-based search of both neuroimaging repositories (e.g. XNAT databases) and open-access full text journals (such as PubMed Central).'
}

const HomeHero = () => {
  const theme = useTheme()

  const styles = {
    hero: {
      height: '600px', //make the hero image full screen, must adapt
      backgroundImage: `url(${welcomeNB})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 33%',
      overflow: 'hidden',
    },
    caption: {
      '& h1': {        
        letterSpacing: '1px',
      },
      backgroundColor: 'rgba(63, 73, 83, 0.7)',
      height: '100%',
      color: '#fff', //white
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '0 1.5rem'
    },
    button: {
      borderWidth: '1px',
      borderColor: theme.palette.secondary.main, //red
      backgroundColor: theme.palette.secondary.main, //red
      color: '#fff', //white
      borderRadius: '5px',
      padding: '10px 30px',
      boxShadow: '0px 2px 15px rgba(85, 98, 112, 0.08)',
      margin: '10px',
      textTransform: 'capitalize',
      '&:hover': {
        cursor: 'pointer',
        borderWidth: '1px',
        borderColor: '#f54568', //red
        backgroundColor: '#f54568', //red
        color: '#fff', //white
        textTransform: 'capitalize',
      }
    }
  }

  const containerRef = React.useRef(null);

  return (
    <Box sx={styles.hero} ref={containerRef}>
      <Box sx={styles.caption}>
        <Slide direction='down' in='true' mountOnEnter unmountOnExit timeout={800} container={containerRef.current}>                
          <Typography variant='h1'>{content.title}</Typography>
        </Slide>
        <Slide direction='up' in='true' mountOnEnter unmountOnExit timeout={2000} container={containerRef.current}>
          <Typography paragraph>{content.subtitle}</Typography>
        </Slide>
        <Slide direction='up' in='true' mountOnEnter unmountOnExit timeout={3000} container={containerRef.current}>
          <Button href='/about' sx={styles.button}>Read More</Button>
        </Slide>
      </Box>
    </Box>
  )
}

export default HomeHero