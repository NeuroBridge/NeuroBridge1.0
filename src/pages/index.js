import React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/seo"
import HomeHero from '../components/home-hero'
import HomeContent from '../components/home-content'
import HomeFooter from '../components/home-footer'

const IndexPage = () => {

  return (
    <>
      <Seo title="Home" />
      <HomeHero/>
      {/* <HomeContent/> */}
      <HomeFooter/>
    </>
  )
}

export default IndexPage
