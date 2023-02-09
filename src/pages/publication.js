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
  
  const oldStyles = {
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
        color: 'grey',
      },

    },
    publicationItem: {
      padding: '0 0 1rem',
      '& h3': {
        fontWeight: '600'
      }
    },
    featureImage: {
      height: '200px',
    }
  }
  
  const compact = useMediaQuery('(max-width: 1000px)');
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

        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2 }}
        >
          <Box>
            <Typography variant='h2'>Published Papers</Typography>
          </Box>
          <Box>
            {
              papers.map((item)=> {
                const splitDate = Date(item.date).split(' ')
                const displayDate = `${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`

                return (
                  <Box key={item.title} >
                    <Typography variant='h3'>{item.title}</Typography>
                    <Typography paragraph>{item.description}</Typography>
                    <Link to={item.link}>Read more</Link>
                  </Box>
                )
              })
            }
          </Box>
          {/* {
            !compact && (
              <Box
                component='img'
                src={featureImg}
                alt=''
              />  
            )
          } */}
        </Stack>
        
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, md: 2 }}
        >
          <Box>
            <Typography variant='h2'>Webinars/Seminars</Typography>
          </Box>
          <Box >
            {
              webinars.map((item)=> {
                const splitDate = Date(item.date).split(' ')
                const displayDate = `${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`

                return (
                  <Box key={item.title} >
                    <Typography variant='h3'>{item.title}</Typography>
                    <Typography>{displayDate}</Typography>
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
