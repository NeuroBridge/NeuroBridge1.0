import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/seo"
import featureImg from '../images/features-5.png'
import { useWebinars } from '../hooks'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { useTheme } from '@mui/material/styles'
import { Container, Typography, Box } from '@mui/material'

const PublicationPage = () => {
  const webinars = useWebinars()

  const theme = useTheme()
  const styles = {
    sectionTitle: {
        },
    container: {
      display: 'flex',
    },
    publicationType: {
      padding: '10px',
      width: '25%',
    },
    publicationList: {
      padding: '10px',
      width: '50%',
  
    },
    publicationItem: {
  
    },
    featureImage: {
      width: '45%',
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
        {/* <Typography paragraph sx={styles.sectionTitle}>Publications</Typography> */}
        <Typography variant='h1'>Neurobridge Publications</Typography>
        <Box sx={styles.container}>
          <Box sx={styles.publicationType}>
            <Typography variant='h2'>Webinars/Seminars</Typography>
          </Box>
          <ul sx={styles.publicationList}>
            <Typography variant='h2'>Recent Webinars/Seminars</Typography>
            <Typography variant='h3'>List of Webinars/Seminars</Typography>
            {webinars.map((item)=> (
              <li key={item.title} sx={styles.publicationItem}>
                <Typography paragraph>{item.description}</Typography>
                <Link to={item.slides}>Click here to access the slides</Link>
              </li>
            ))}
          </ul>
          <Box
            component='img'
            src={featureImg}
            alt=''
            sx={styles.featureImage}
          >
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default PublicationPage
