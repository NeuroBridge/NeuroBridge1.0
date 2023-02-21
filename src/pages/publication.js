import * as React from "react"
import { Link } from '../components/link'
import Seo from "../components/layout/seo"
import featureImg from '../images/features-5.png'
import { usePublications } from '../hooks'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Container, Typography, Box, Stack, useMediaQuery } from '@mui/material'

const PublicationPage = () => {
  const webinars = usePublications()[0]
  const papers= usePublications()[1]
  
  const compact = useMediaQuery('(max-width: 1000px)');

  const styles = {
    section: {
      display: 'flex'
    },
    sectionTitle: {
      flex: 1,
      minWidth: '200px',
    },
    sectionContent: {
      flex: 4
    },
    publicationItem: {
      paddingBottom: '2rem'
    }
  }
    
  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'Publications', path: '/publication' },
]

  return (
    <>
      <Seo title="Publications" />
      <BreadcrumbNav crumbs={breadcrumbs} title='Publications'/>
      <Container>
        <Typography variant='h1'>NeuroBridge Publications</Typography>

        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2 }}
          sx={styles.section}
        >
          <Box sx={styles.sectionTitle}>
            <Typography variant='h2'>Published Papers</Typography>
          </Box>
          <Box sx={styles.sectionContent}>
            {
              papers.map((item)=> {
                return (
                  <Box key={item.title} sx={styles.publicationItem}>
                    <Typography variant='h3'>{item.title}</Typography>
                    <Typography paragraph>{item.citation}</Typography>
                    <Link to={item.link}>Read more</Link>
                  </Box>
                )
              })
            }
          </Box>
        </Stack>

        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2 }}
          sx={styles.section}
        >
          <Box sx={styles.sectionTitle}>
            <Typography variant='h2'>Webinars & Seminars</Typography>
          </Box>
          <Box sx={styles.sectionContent}>
            {
              webinars.map((item)=> {
                const d = new Date(item.date)
                const newDate = d.toDateString().slice(4,15)
                return (
                  <Box key={item.title} sx={styles.publicationItem}>
                    <Typography variant='h3'>{item.title}</Typography>
                    <Typography>{newDate}</Typography>
                    <Typography paragraph>{item.description}</Typography>
                    <Link to={item.slides}>Read more</Link>
                  </Box>
                )
              })
            }
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default PublicationPage
