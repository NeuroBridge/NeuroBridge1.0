import * as React from "react"
import { Link } from '../components/link'
import Seo from '../components/layout/seo'
import featureImg from '../images/features-1.png'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Box, Link as MuiLink, Container, Typography, Stack, Button } from "@mui/material"
import { useTheme } from '@mui/material/styles'

const resources = [
  {
    source: 'Github',
    title: 'Github Repo' ,
    subheading: '',
    text: 'Visit our Github repository to access the latest version of the software release. The repository contains annotation project, ontology, and neuro-bridge projets. Click below to access.',
    resourceLink: 'https://github.com/NeuroBridge',
  },
  {
    source: 'Github',
    title: 'Ontology' ,
    subheading: '',
    text: 'Click below to directly access the current ontology.',
    resourceLink: 'https://github.com/NeuroBridge/neuro-ontologies/blob/main/neurobridge/NeuroBridge_032423.owl',
  },
]

const ResourcesPage = () => {
  const theme = useTheme()

  const styles = {
    section: {
      display: 'flex',
      paddingBottom: '2rem'
    },
    sectionTitle: {
      flex: 1,
      minWidth: '200px',
    },
    sectionContent: {
      flex: 4
    },
  }

  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'Resources', path: '/resources' },
  ]

  return (
    <>
      <Seo title="NeuroBridge Resources" />
      <BreadcrumbNav crumbs={breadcrumbs} title='Resources'/>
      <Container>
        <Typography variant='h1'>Our Latest Updated Software</Typography>
          {
          resources.map((item)=> (
            <Stack
              key={item.title}
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 1, md: 2 }}
              sx={styles.section}
            >
              <Box sx={styles.sectionTitle}>
                <Typography variant='h2'>{item.title}</Typography>
              </Box>

              <Box sx={styles.sectionContent}>
                <Typography variant='h3'>{item.subheading}</Typography>
                <Typography>{item.text}</Typography>
                {/* <Link to={item.resourceLink}>{item.source}</Link> */}
                <Button 
                  // component={Link} 
                  href={item.resourceLink}
                  variant="contained"
                  color='secondary'
                  sx={{marginTop: '1rem'}}
                >
                  {item.source}
                </Button>
              </Box>
            </Stack>
          ))
        }
      </Container>
    </>
  )
}

export default ResourcesPage
