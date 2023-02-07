import * as React from "react"
import { Link } from '../components/link'
import Seo from "../components/layout/seo"
import { Container, Box, Typography, Stack } from '@mui/material'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { useTheme } from '@mui/material/styles'

const AboutPage = () => {
  const theme = useTheme()

  const styles = {
    container: {
      display: 'flex',
      padding: '1.5rem'
    }, 
    section: {
      flex: '1'
    },
    infoBox: {
      width: '100%',
      textAlign: 'center',
      '& a': {
        textDecoration: 'none',
        color: theme.palette.text.secondary,
      },
      '& h3': {
        paddingTop: '10px',
        paddingBottom: '20px',
      }
    },
  }
  
  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'About NeuroBridge', path: '/about' },
]

  return (
    <>
      <Seo title="About NeuroBridge" />
      <BreadcrumbNav crumbs={breadcrumbs} />
      <Container maxWidth='lg'>
        <Typography variant='h1'>What is NeuroBridge?</Typography>
        <Stack 
          direction={{ sm: 'column', md: 'row' }}
          spacing={{ sm: 1, md: 6 }}
          sx={styles.container}
        >
          <Box sx={styles.section}>
            <Typography variant='h2'>
              About the overall project - Where we want to go?
            </Typography>
            <Typography paragraph>
              Replication, mega analysis, and meta-analysis are critical to the advancement of neuroimaging 
                research. However, these are costly and time-consuming processes, and the subjects and data are 
                usually not similar across studies, making actual replication or meta- analysis challenging. The 
                question is how to harness already-collected data for replication purposes efficiently and 
                rigorously. Progress in this goal depends not only on advanced experimental and computational 
                techniques, but on the timely availability and discoverability of the most useful datasets. Much 
                of the present efforts on reproducibility science assumes that appropriate datasets are available. 
                While many different neuroimaging databases exist, they have different languages, formats, and 
                usually do not communicate with each other. Moreover, neuroimaging data are collected in hundreds 
                of laboratories each year, forming the “long tail of science” data. Much of this data is described 
                in journal publications but remains underutilized. A critical gap therefore exists in getting 
                enough data of the right kind to the scientist.
            </Typography>
            <Typography paragraph>
              NeuroBridge is a platform for data discovery to enhance the reuse of clinical neuroscience/neuroimaging 
                data. We develop the NeuroBridge ontology, and combine machine learning with ontology-based search 
                of both neuroimaging repositories (e.g. XNAT databases) and open-access full text journals (such as 
                PubMed Central). The ontology leverages existing and novel ontological terms to include study types, 
                neuroimaging description, and terms for specific clinical domains such as psychosis and addiction. We 
                leverage technologies such as data mediation, natural language processing, text mining, machine learning, 
                ontology look-up service (OLS), and similarity searches.
            </Typography>
          </Box>
          <Box sx={styles.section}>
            <Typography variant='h2'>
              About the prototype - Where we are
            </Typography>
            <Typography paragraph>
              The prototype connects researchers with potential neuroimaging data by searching for papers 
                describing neuroimaging studies that contain information on the neuroimaging data. Currently, 
                356 PubMed Central publications are indexed and available to search with NeuroBridge. The 
                available publications are those documenting studies of schizophrenia and substance abuse 
                that contain information on neuroimaging data. The publications have been published between 
                2017 - 2022. The NeuroBridge prototype is powered by the <Link to='https://github.com/NeuroBridge/neuro-ontologies/tree/main/neurobridge'>
                  NeuroBridge ontology</Link> and Natural Language Processing machine learning technologies.
            </Typography>
            <Typography variant='h3'>
              Portal:
            </Typography>
            <Typography paragraph>
              Users can use our <Link to='https://neurobridges-portal-staging.netlify.app/'>prototype portal</Link> to 
                perform searches for papers describing neuroimaging studies on schizophrenia and addiction, by building 
                a query composed of concepts included in the NeuroBridge ontology. 
            </Typography>
            <Typography paragraph>
              In this prototype beta release, our current scope is for users to perform searches for 
                papers describing neuroimaging studies on schizophrenia and addiction. 
            </Typography>
            <br/>
            <Typography variant='h2'>
              What we are working on - What’s next?
            </Typography>
            <Typography paragraph>
            We are working on ways to facilitate follow-ups so that the researcher can potentially 
            obtain the data through additional data sharing mechanisms.
            </Typography>
            <Typography paragraph>
            We are also working on ways to present more information about the studies contained 
            in the returned papers.
            </Typography>
          </Box>
        </Stack>
        <Box sx={styles.infoBox}>
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
