import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/layout/seo'
import { makeStyles } from '@mui/styles'
import { Container, Typography } from '@mui/material'
import ohioState from '../images/clients/osu-wmc.png'
import USC from '../images/clients/usc-ISI.png'
import UNCCH from '../images/clients/UNC.png'
import WashingtonUSL from '../images/clients/WUSTL_Medicine.png'
import georgiaState from '../images/clients/GSU.png'
import caseWestern from '../images/clients/CWRU.jpeg'
import BreadcrumbNav from '../components/layout/breadcrumbs'

const participatingInstitutions = [
    { name: 'Ohio State University',      logo: ohioState },
    { name: 'University of Southern California',      logo: USC },
    { name: 'University of North Carolina at Chapel Hill',      logo: UNCCH },
    { name: 'Washington University at Saint Louis',      logo: WashingtonUSL },
    { name: 'Georgia State University',      logo: georgiaState },
    { name: 'Case Western University',      logo: caseWestern },

]

const useStyles = makeStyles(theme =>({
    container: {
        // fontSize: '20px',
        // backgroundColor: 'red',
        '& h1': {
            fontSize: '2.25rem',
            fontWeight: '600',
            marginBottom: '10px',
            letterSpacing: '0.01rem',
            fontFamily: 'Libre Franklin'
        },
        '& h6': {
            fontSize: '1.3rem',
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
}))

const InstitutionsPage = () => {
    const classes = useStyles()
    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'About NeuroBridge', path: '/about' },
        { text: 'Participating Institutions', path: '/institutions' },
    ]


    return (
        <>
            <Seo title="Participating Institutions" />
            <BreadcrumbNav crumbs={breadcrumbs} />
            <Container className={classes.container}>
                <Typography variant='h1' className={classes.title}>NeuroBridge</Typography>
                <Typography variant='subtitle1'>NIH NIDA Award number: R01DA053028</Typography>
                <div className={classes.logoContainer}>
                    { participatingInstitutions.map(( item ) => (
                        <img
                            key={item.name}
                            src={item.logo}
                            alt={item.name}
                            className={classes.logo}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}

export default InstitutionsPage
