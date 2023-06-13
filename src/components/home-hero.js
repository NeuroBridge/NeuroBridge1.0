import * as React from "react"
/* eslint-disable no-unused-vars */
import { Link } from './link'
import { Slide, Typography, Button, Box, useMediaQuery, Container } from '@mui/material'
import welcomeNB from '../images/slide/PdG.jpeg'
import { useTheme } from '@mui/material/styles'

const content = {
  title: 'Welcome to NeuroBridge',
  subtitle: 'A platform for data discovery to enhance the reuse of clinical neuroscience/ neuroimaging data. We develop the NeuroBridge ontology, and combine machine learning with ontology-based search of both neuroimaging repositories (e.g. XNAT databases) and open-access full text journals (such as PubMed Central).'
}

const HomeHero = () => {
  const theme = useTheme()
  const compact = useMediaQuery('(max-width: 800px)');

  const styles = {
    heroImage: {
      height: compact ? '600px' : '600px', //make the hero image full screen, must adapt
      backgroundImage: `url(${welcomeNB})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 33%',
      overflow: 'hidden',
    },
    overlay: {
      backgroundImage: compact ? 
        'linear-gradient(to top, rgba(176,224,230, 0.3), rgba(150,150,150,0.5))' :
        'linear-gradient(to left, rgba(176,224,230, 0.42), rgba(23, 32, 44, 0.95))',
      backgroundColor: compact ? 'rgba(50,50,50,0.7)': null,
      height: '100%',
    },
    textContainer: {
      height: '100%',
      width: compact? '100%':'600px',
      padding: compact ? '0 1.5rem' : '0 3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'start',
      color: '#fff', //white
      textAlign: compact? 'center':'left'
    },
    button: {
      backgroundColor: '#a30b0b', //red
      color: '#fff', //white
      borderRadius: '5px',
      padding: '10px 20px',
      boxShadow: '4px 4px 5px rgba(23, 32, 44, 0.95)',
      margin: '10px',
      width: '500px',

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#a82618', //red
        color: '#fff', //white

      }
    }
  }

  const containerRef = React.useRef(null);

  return (
    // Outer box contains the image of the bridge sx={styles.hero}
    <Box ref={containerRef} sx={styles.heroImage}>
      {/* Inner box contains the colored overlay sx={styles.overlay}*/}
      <Box sx={styles.overlay}>
        {/* Container contains the text elements */}
          <Box 
            sx={styles.textContainer}>
            <Typography variant='h1'>{content.title}</Typography>
            <Typography variant='subtitle1'>{content.subtitle}</Typography>
            <Button href='/about' sx={styles.button}>
              <Typography variant='button'>Read More</Typography>
            </Button>
          </Box>
      </Box>
    </Box>
  )
}

export default HomeHero