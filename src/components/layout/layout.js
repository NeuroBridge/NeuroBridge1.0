import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { useTheme } from "@mui/material/styles"
import { Box } from '@mui/material'

const Layout = ({ children }) => {
  const theme = useTheme()

  const styles = {
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <Box sx={styles.root}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Box
          style={{
            margin: `0`,
            width: `100%`,
            padding: `86px 0 0`,
            flexGrow: '1'
          }}
        >
          <main>{children}</main>
        </Box>
      <Footer/>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
