import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/layout/seo'
import ohioState from '../images/clients/osu-wmc.png'
import USC from '../images/clients/usc-ISI.png'
import UNCCH from '../images/clients/UNC.png'
import WashingtonUSL from '../images/clients/WUSTL_Medicine.png'
import georgiaState from '../images/clients/GSU.png'
import caseWestern from '../images/clients/CWRU.jpeg'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Container, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const participatingInstitutions = [
    { name: 'Ohio State University',      logo: ohioState },
    { name: 'University of Southern California',      logo: USC },
    { name: 'University of North Carolina at Chapel Hill',      logo: UNCCH },
    { name: 'Washington University at Saint Louis',      logo: WashingtonUSL },
    { name: 'Georgia State University',      logo: georgiaState },
    { name: 'Case Western University',      logo: caseWestern },

]

const InstitutionsPage = () => {
    const theme = useTheme()
    const styles = {
        container: {
            '& h1': {
                marginBottom: '10px',
            },
            '& h6': {
            }
        },
        logoContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
    
        },
        logo: {
            padding: '20px',
            height: '150px',
            filter: 'opacity(.5) saturate(.5)',
            transition: 'all 0.4s ease-in-out',
            '&:hover': {
              filter: 'opacity(1) saturate(1)',
              transform: 'scale(1.15)'
    
            }
    
        },
    }
    
    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'About NeuroBridge', path: '/about' },
        { text: 'Participating Institutions', path: '/institutions' },
    ]


    return (
        <>
            <Seo title="Participating Institutions" />
            <BreadcrumbNav crumbs={breadcrumbs} />
            <Container sx={styles.container}>
                <Typography variant='h1' sx={styles.title}>NeuroBridge</Typography>
                <Typography variant='subtitle1'>NIH NIDA Award number: R01DA053028</Typography>
                <div sx={styles.logoContainer}>
                    { participatingInstitutions.map(( item ) => (
                        <Box
                            component='img'
                            key={item.name}
                            src={item.logo}
                            alt={item.name}
                            sx={styles.logo}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default InstitutionsPage
