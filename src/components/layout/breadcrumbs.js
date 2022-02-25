import React from "react"
import { jsx, css } from "@emotion/react"

import { Link } from 'gatsby'
import { makeStyles }  from '@mui/styles'
import { Typography }  from '@mui/material'
import { Breadcrumbs } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// const styles = {
//     root: {
//       margin: '16px 0px 26px',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: '#F8F9FA',
//       padding: '10px 40px 5px',
//     },
//     heading: {
//       margin: '15px 0px 0px 10px',
//       fontSize: '1.5rem',
//       fontWeight: '400',
//     },
//     pathLink: {
//       color: ['#D9232D', '!important'],
//       textDecoration: ['none', '!important'],

//     },
//     finalCrumb: {
//       color: '#556270',
//     },
//     crumbTitle: {
//       fontSize: ['28px', '!important']
//     }
// }

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
      backgroundColor: '#F8F9FA',
      padding: '10px 40px 5px',
      border: '3px solid crimson',
    },
    heading: {
      margin: '15px 0px 0px 10px',
      fontSize: '1.5rem',
      fontWeight: '400',
    },
    pathLink: {
      color: ['#D9232D', '!important'],
      textDecoration: ['none', '!important'],

    },
    finalCrumb: {
      color: '#556270',
    },
    crumbTitle: {
      fontSize: ['28px', '!important']
    }
}

  return (
      <>
        <div role="presentation" onClick={handleClick} sx={styles.root}>
          <Typography variant='h3' sx={styles.crumbTitle}>{title}</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={styles.container}>
          {
            crumbs.map(({ text, path }, i) => {
              if (i + 1 === crumbs.length) {
                return <Typography key={ path } sx={styles.finalCrumb}>{ text }</Typography>
              }
              return <Typography key={ path }><Link to={ path } sx={styles.pathLink}>{ text }</Link></Typography>
            })
          }
          </Breadcrumbs>

        </div>
      </>
    )
}


export default BreadcrumbNav
