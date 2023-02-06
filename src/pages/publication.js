import * as React from "react"
import { Link } from '../components/link'
import Seo from "../components/layout/seo"
import featureImg from '../images/features-5.png'
import { usePublications } from '../hooks'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { Container, Typography, Box } from '@mui/material'

const PublicationPage = () => {
  const webinars = usePublications()[0]
  const publications= usePublications()[1]
  const styles = {
    sectionTitle: {
        },
    container: {
      display: 'flex',
      paddingTop: '30px',
    },
    publicationType: {
      paddingRight: '20px',
      width: '25%',
      display: 'flex',
      justifyContent: 'space-between',
      '&:after': {
        content: '""',
        background: 'red',
        height: '35px',
        width: '3px',
    }

    },
    publicationList: {
      width: '50%',
      '& h2': {
        paddingBottom: '15px',
      },
      '& h3': {
        paddingBottom: '10px',
        fontStyle: 'italic',
        color: 'grey',
      },

    },
    publicationItem: {
      padding: '10px',
    },
    featureImage: {
      height: '200px',
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
        <Typography variant='h1'>Neurobridge Publications</Typography>
        <Box sx={styles.container}>
          <Box sx={styles.publicationType}>
            <Typography variant='h2'>Published Papers</Typography>
          </Box>
          <Box sx={styles.publicationList}>
            <ul>
              {publications.map((item)=> (
                <li key={item.title} sx={styles.publicationItem}>
                  <Typography paragraph>{item.citation}</Typography>
                  <Link to={item.link}>Click here to read more</Link>
                </li>
              ))}
            </ul>
          </Box>
          <Box
            component='img'
            src={featureImg}
            alt=''
            sx={styles.featureImage}
          />
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.publicationType}>
            <Typography variant='h2'>Webinars/Seminars</Typography>
          </Box>
          <Box sx={styles.publicationList}>
            <ul>
              {webinars.map((item)=> (
                <li key={item.title} sx={styles.publicationItem}>
                  <Typography paragraph>{item.description}</Typography>
                  <Link to={item.slides}>Click here to access the slides</Link>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default PublicationPage
