import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/seo"
import { Container, Box, Typography } from '@mui/material'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    '& h1': {

    },
    '& h2': {
      paddingTop: '1.1rem',
      color: 'grey',
    },
  }, 
  titleColumn: {
    flexGrow: '2',
    padding: '20px',
  },
  textColumn: {
    flexGrow: '3',
    padding: '20px',

    // border: '5px dashed blue'
  },
  infoBox: {
    width: '100%',
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
    },
    '& h3': {
      fontWeight: '500',
      fontSize: '26px',
      paddingTop: '10px',
      paddingBottom: '20px',
    }
  },
}))

const AboutPage = () => {
  const classes = useStyles()
  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'About NeuroBridge', path: '/about' },
]

  return (
    <>
      <Seo title="About NeuroBridge" />
      <BreadcrumbNav crumbs={breadcrumbs} />
      <Container maxWidth='lg'>
        <Box className={classes.container}>
          <Box className={classes.titleColumn}>
            <Typography variant='h1'>
              What is NeuroBridge?
            </Typography>
            <Typography variant='h2'>
              A platform for data discovery to enhance the reuse 
                of clinical neuroscience and neuroimaging data.
            </Typography>
          </Box>
          <Box className={classes.textColumn}>
            <Typography paragraph>
              Replication, mega analysis, and meta-analysis are critical to the advancement of 
                neuroimaging research. However, these are costly and time-consuming processes, 
                and the subjects and data are usually not similar across studies, making actual 
                replication or meta- analysis challenging. The question is how to harness already-
                collected data for replication purposes efficiently and rigorously. Progress in this 
                goal depends not only on advanced experimental and computational techniques, but on 
                the timely availability and discoverability of the most useful datasets. Much of the 
                present efforts on reproducibility science assumes that appropriate datasets are 
                available. While many different neuroimaging databases exist, they have different 
                languages, formats, and usually do not communicate with each other. Moreover, 
                neuroimaging data are collected in hundreds of laboratories each year, forming the 
                “long tail of science” data. Much of this data is described in journal publications 
                but remains underutilized. A critical gap therefore exists in getting enough data of the 
                right kind to the scientist.
            </Typography>
            <Typography paragraph>
              NeuroBridge is a platform for data discovery to enhance the reuse of clinical 
                neuroscience/neuroimaging data. We develop the NeuroBridge ontology, and 
                combine machine learning with ontology-based search of both neuroimaging 
                repositories (e.g. XNAT databases) and open-access full text journals (such as 
                PubMed Central). The ontology leverages existing and novel ontological terms to 
                include study types, neuroimaging description, and terms for specific clinical 
                domains such as psychosis and addiction. We leverage technologies such as data 
                mediation, natural language processing, text mining, machine learning, ontology 
                look-up service (OLS), and similarity searches.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.infoBox}>
          <Link to='/team'>
            <Typography variant='h3'>Click to learn more about our team</Typography>
          </Link>
          <Link to='/institutions'>
            <Typography variant='h3'>Click to view participating institutions</Typography>
          </Link>
        </Box>
      </Container>
    </>
  )
}

export default AboutPage
