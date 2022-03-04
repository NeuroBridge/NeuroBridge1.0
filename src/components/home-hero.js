import * as React from "react"
import { Link } from 'gatsby'
import { Slide, Typography, Button, ButtonUnstyled } from '@mui/material'
import welcomeNB from '../images/slide/PdG.jpeg'
import { useTheme } from '@mui/material/styles'
import { Box } from "@mui/material"


const HomeHero = () => {
const theme = useTheme()
const styles = {
    hero: {
        height: '600px', //make the hero image full screen, must adapt
        backgroundImage: `url(${welcomeNB})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 33%',
        
    },
    caption: {
        '& h1': {        
            width: '100%',
            fontWeight: '700',
            textAlign: 'center',
            overflow: 'hidden',
            letterSpacing: '1px',
            marginBottom: '10px'
        },
        '& p': {
            fontSize: '18px',
            letterSpacing: '1px',
            lineHeight: '1.4',
        },
        backgroundColor: 'rgba(63, 73, 83, 0.7)',
        height: '100%',
        color: '#fff', //white
        textAlign: 'center',
        overflow: 'hidden',
        padding: '140px 160px',
    },
    button: {
        borderWidth: '1px',
        borderColor: '#DC143C', //red
        backgroundColor: '#DC143C', //red
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
    return (
    <Box sx={styles.hero}>
            <Box sx={styles.caption}>

                <Slide direction='down' in='true' mountOnEnter unmountOnExit timeout={800}>                
                    <Typography variant='h1'>Welcome to NeuroBridge</Typography>
                </Slide>
                <Slide direction='up' in='true' mountOnEnter unmountOnExit timeout={2000}>
                    <Typography paragraph>A platform for data discovery to enhance the reuse of clinical neuroscience/neuroimaging data. We develop the NeuroBridge ontology, and combine machine learning with ontology-based search of both neuroimaging repositories (e.g. XNAT databases) and open-access full text journals (such as PubMed Central).</Typography>
                </Slide>
                <Slide direction='up' in='true' mountOnEnter unmountOnExit timeout={3000}>
                    <Button to='/about' sx={styles.button}>Read More</Button>
                </Slide>
            </Box>
        </Box>
    )
}

export default HomeHero