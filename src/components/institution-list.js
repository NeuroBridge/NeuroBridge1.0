import * as React from "react"
import { Link } from './link'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box } from '@mui/material'
import { useInstitutions } from '../hooks'

const InstitutionList = () => {
  const institutions = useInstitutions()
  const styles = {
      logo: {
          filter: 'opacity(.5) saturate(.5)',
          transition: 'all 0.4s ease-in-out',
          '&:hover': {
            filter: 'opacity(1) saturate(1)',
            transform: 'scale(1.1)'
          }
      },
  }

  return (
    <React.Fragment>
      {institutions.map(( item ) => {
        const logo = getImage(item.image)
        return (
          <Link to={item.link} key={item.name}>
            <Box sx={styles.logo}>
              <GatsbyImage
                image={logo}
                alt={item.name}
              />
            </Box>
          </Link>
        )
      })}
    </React.Fragment>
  )
}
export default InstitutionList