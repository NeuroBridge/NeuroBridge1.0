import * as React from "react"
import { Link as GatsbyLink } from 'gatsby'
import Seo from '../components/layout/seo'
import featureImg from '../images/features-1.png'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { useTheme } from '@mui/material/styles'
import { Box, Link as MuiLink, Container, Typography } from "@mui/material"

const software = [
    {
        name: 'Github',
        title: 'Github Repo' ,
        subheading: 'Visit our Github repository to access the latest version of the software release.',
        text: 'Click below to access the Github page. It has annotation project, ontology and neuro-bridge projects.',
        resourceLink: 'https://github.com/NeuroBridge',
        photo: featureImg,
    },
]



const SoftwarePage = () => {
    const theme = useTheme()
    const styles = {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
    
        },
        sectionTitle: {
            
        },
        resourceContainer: {
            display: 'flex',
            paddingBottom: '30px',
        },
        resourceList: {
            width: '30%',
            borderRight: 'solid',
            borderWidth: '1px',
            borderColor: 'red',
        },
        resourceLinkLeft: {
        },
        resourceContent: {
            padding: '20px',
            display: 'flex',
        },
        image: {
            padding: '20px',
            maxWidth: '250px',
        },
    }

    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'Resources', path: '/software' },
    ]

    return (
        <>
            <Seo title="NeuroBridge Resources" />
            <BreadcrumbNav crumbs={breadcrumbs} title='Resources'/>
            <Container>
                {/* <Typography paragraph sx={styles.sectionTitle}>Software</Typography> */}
                <Typography variant='h1'>Our Latest Updated Software</Typography>
                <Box sx={styles.container}>
                    {software.map((item) => (
                        <Box key={item.name} sx={styles.resourceContainer}>
                            <Box sx={styles.resourceList}>
                                <MuiLink component={GatsbyLink} to={item.resourceLink} sx={styles.resourceLinkLeft}>Github</MuiLink>
                            </Box>
                            <Box sx={styles.resourceContent}>
                                <Box>
                                    <Typography variant='h2'>{item.title}</Typography>
                                    <Typography variant='h3'>{item.subheading}</Typography>
                                    <Typography paragraph>{item.text}</Typography>
                                    <MuiLink component={GatsbyLink} to={item.resourceLink}>Github</MuiLink>
                                </Box>
                                <Box
                                    component='img'
                                    key={item.name}
                                    src={item.photo}
                                    alt={item.name}
                                    sx={styles.image}
                                />
                            </Box>

                        </Box>

                    ))}
                </Box>
            </Container>
        </>
    )
}

export default SoftwarePage
