import React from "react"
import Seo from "../components/layout/seo"
import HomeHero from '../components/home-hero'
import HomeLogos from '../components/home-logos'

const IndexPage = () => {

  return (
    <>
      <Seo title="Home" />
      <HomeHero/>
      <HomeLogos/>
    </>
  )
}

export default IndexPage
