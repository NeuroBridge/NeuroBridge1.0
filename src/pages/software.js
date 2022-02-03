import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/layout/seo'
import { makeStyles } from '@mui/styles'
import { Container, Typography } from '@mui/material'
import featureImg from '../images/features-1.png'
import BreadcrumbNav from '../components/layout/breadcrumbs'

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

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    sectionTitle: {
        '&::after': {
            content: "--",
            width: '120px',
            height: '1px',
            display: 'inline-block',
            background: '#e6636a',
            margin: '4px 10px',
          },
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
}))

const SoftwarePage = () => {
    const classes = useStyles()
    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'Resources', path: '/software' },
    ]

    return (
        <>
            <Seo title="NeuroBridge Software" />
            <BreadcrumbNav crumbs={breadcrumbs} />
            <Container>
                <Typography paragraph className={classes.sectionTitle}>Software</Typography>
                <Typography variant='h1'>Our Latest Updated Software</Typography>
                <div className={classes.container}>
                    {software.map((item) => (
                        <div key={item.name} className={classes.resourceContainer}>
                            <div className={classes.resourceList}>
                                <Link to={item.resourceLink} className={classes.resourceLinkLeft}>Github</Link>
                            </div>
                            <div className={classes.resourceContent}>
                                <div>
                                    <Typography variant='h2'>{item.title}</Typography>
                                    <Typography variant='h3'>{item.subheading}</Typography>
                                    <Typography paragraph>{item.text}</Typography>
                                    <Link to={item.resourceLink}>Github</Link>
                                </div>
                                <img
                                    key={item.name}
                                    src={item.photo}
                                    alt={item.name}
                                    className={classes.image}
                                />
                            </div>

                        </div>

                    ))}
                </div>
            </Container>
        </>
    )
}

export default SoftwarePage
