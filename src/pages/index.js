import React from "react"
import { Link } from "gatsby"
import Seo from "../components/layout/seo"
import HomeHero from '../components/home-hero'
import HomeFooter from '../components/home-footer'

const IndexPage = () => {

  return (
    <>
      <Seo title="Home" />
      <HomeHero/>
      <HomeFooter/>
    </>
  )
}

export default IndexPage
