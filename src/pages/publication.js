import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/seo"
import { makeStyles } from '@mui/styles'
import { Container, Typography } from '@mui/material'
import featureImg from '../images/features-5.png'
import { useWebinars } from '../hooks'
import BreadcrumbNav from '../components/layout/breadcrumbs'


const useStyles = makeStyles(theme => ({
  sectionTitle: {
    '&::after': {
        content: "--",
        width: '120px',
        height: '5px',
        display: 'inline-block',
        backgroundColor: '#e6636a',
        margin: '4px 10px',
        }, 
      },
  container: {
    display: 'flex',
  },
  publicationType: {
    padding: '10px',
    width: '25%',
    '& h2': {
      // fontSize: '14pt',
    }
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
}))

const PublicationPage = () => {
  const classes = useStyles()
  const webinars = useWebinars()
  const breadcrumbs = [
    { text: 'Home', path: '/' },
    { text: 'Publications', path: '/publication' },
]

  return (
    <>
      <Seo title="Publications" />
      <BreadcrumbNav crumbs={breadcrumbs} />
      <Container>
        <Typography paragraph className={classes.sectionTitle}>Publications</Typography>
        <Typography variant='h1'>Neurobridge Publications</Typography>
        <div className={classes.container}>
          <div className={classes.publicationType}>
            <Typography variant='h2'>Webinars/Seminars</Typography>
          </div>
          <ul className={classes.publicationList}>
            <Typography variant='h2'>Recent Webinars/Seminars</Typography>
            <Typography variant='h3'>List of Webinars/Seminars</Typography>
            {webinars.map((item)=> (
              <li key={item.title} className={classes.publicationItem}>
                <Typography paragraph>{item.description}</Typography>
                <Link to={item.slides}>Click here to access the slides</Link>
              </li>
            ))}
          </ul>
          <div>
              <img src={featureImg} alt='' className={classes.featureImage}/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PublicationPage
