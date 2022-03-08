import * as React from "react"
import Seo from '../components/layout/seo'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import InstitutionList from "../components/institution-list"
import { Container, Typography, Box } from '@mui/material'

const InstitutionsPage = () => {
    const styles = {
        container: {
            '& h1': {
                marginBottom: '10px',
            },
        },
        logoContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            '& img': {
                padding: '30px',
            },
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
                    <InstitutionList />
                </Box>
            </Container>
        </>
    )
}

export default InstitutionsPage
