import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import Seo from '../components/layout/seo'
import ohioState from '../images/clients/osu-wmc.png'
import USC from '../images/clients/usc-ISI.png'
import UNCCH from '../images/clients/UNC.png'
import WashingtonUSL from '../images/clients/WUSTL_Medicine.png'
import georgiaState from '../images/clients/GSU.png'
import caseWestern from '../images/clients/CWRU.jpeg'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Container, Typography, Box } from '@mui/material'

const participatingInstitutions = [
    {
      name: 'The Ohio State University Wexner Medical Center',
      link: 'https://medicine.osu.edu/find-faculty/clinical/psychiatry-and-behavioral-health/lei-wang-phd',
      image: ohioState
    },
    {
      name: 'University of Southern California Information Sciences Institute',
      link: 'https://www.isi.edu/',
      image: USC
    },
    {
      name: 'University of North Carolina at Chapel Hill',
      link: 'https://www.unc.edu',
      image: UNCCH
    },
    {
      name: 'Washington University in St. Louis School of Medicine',
      link: 'https://medicine.wustl.edu/',
      image: WashingtonUSL
    },
    {
      name: 'Georgia State University',
      link: 'https://research.gsu.edu/georgia-state-university-research-centers-and-institutes/',
      image: georgiaState
    },
    {
      name: 'Case Western Reserve University',
      link: 'https://case.edu/cwruresearch/',
      image: caseWestern
    },
]

const InstitutionsPage = () => {
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
                <Box sx={styles.logoContainer}>
                    { participatingInstitutions.map(( item ) => (
                        <GatsbyLink href={item.link} key={item.name} target='_blank'>
                            <Box
                                component='img'
                                src={item.image}
                                alt={item.name}
                                sx={styles.logo}
                            />
                        </GatsbyLink>
                    ))}
                </Box>
            </Container>
        </>
    )
}

export default InstitutionsPage
