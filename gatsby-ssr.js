import "@fontsource/raleway"
import "@fontsource/libre-franklin"
import React from "react";
import Layout from "./src/components/layout/layout";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './src/theme'

export const wrapRootElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={ theme }>
      { element }
    </ThemeProvider>
  )
}


export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}