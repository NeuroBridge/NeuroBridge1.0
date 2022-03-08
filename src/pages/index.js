import React from "react"
import Seo from "../components/layout/seo"
import HomeHero from '../components/home-hero'
import InstitutionLogos from "../components/institution-list"
import { Box } from "@mui/material"

const IndexPage = () => {
  const styles = {
    logoContainer: {
      '& div:first-child': {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      '& img': {
        width: '180px',
        padding: '20px',
      },

    }
  }
  return (
    <>
      <Seo title="Home" />
      <HomeHero/>
      <Box sx={styles.logoContainer}>
        <InstitutionLogos/>
      </Box>
    </>
  )
}

export default IndexPage
