import React from "react"
import { Link } from '../link'
import { Box, Link as MuiLink, Typography, Breadcrumbs }  from '@mui/material'
import { useTheme } from '@mui/material/styles'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadcrumbNav = ({ crumbs, title }) => {
  const theme = useTheme()

  const styles = {
    root: {
      margin: '16px 0px 26px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.grey.A100,
      padding: '10px 40px 5px',
    },
    pathLink: {
      color: theme.palette.text.secondary, //red
      textDecoration: 'none',
    },
    finalCrumb: {
      color: theme.palette.text.primary, //grey
    },
}

  return (
      <>
        <Box role="presentation" onClick={handleClick} sx={styles.root}>
          <Typography variant='h2'>{title}</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={styles.container}>
          {
            crumbs.map(({ text, path }, i) => {
              if (i + 1 === crumbs.length) {
                return <Typography key={ path } sx={styles.finalCrumb}>{ text }</Typography>
              }
              return (
                <Typography key={ path }>
                  <MuiLink 
                    component={Link}
                    to={ path } 
                    sx={styles.pathLink}
                  >
                    { text }
                  </MuiLink>
                </Typography>
              )
            })
          }
          </Breadcrumbs>

        </Box>
      </>
    )
}


export default BreadcrumbNav
