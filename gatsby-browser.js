import "@fontsource/raleway"
import "@fontsource/libre-franklin"
import React from "react";
import Layout from "./src/components/layout/layout";
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './src/theme'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider theme={ theme }>
      <Layout>
        {element}
      </Layout>
    </ThemeProvider>
  );
};
