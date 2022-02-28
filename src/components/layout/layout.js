import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { useTheme } from "@mui/material/styles"

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
    <div sx={styles.root}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0`,
            width: `100%`,
            padding: `86px 0 0`,
            flexGrow: '1'
          }}
        >
          <main>{children}</main>
        </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
