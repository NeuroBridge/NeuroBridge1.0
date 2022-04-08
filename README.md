# NeuroBridge1.0
Deployed site: neurobridges.org

Rebuilt with React / GatsbyJS / Material UI
## Description

This website is intended to give information and access to the Neurobridge Portal Application. The site was built using GatsbyJS and Material UI and is deployed on Netlify. The site can be found at neurobridges.org


## Installation

- To run this website locally, clone the repo and install the dependencies (`npm i`)
- The content for this website is hosted inside this repository under the content folder in yaml format.
- To spin up the application, run  `npm start` which runs gatsby develop and will allow you to access the site on localhost:8000
- You will also be able to access the data coming through from contentful by checking out localhost:8000/_graphql
- To check the build, run `npm build` which will run gatsby build and build the site. To see the site, run `gatsby serve`, and you should be able to see the site on localhost:9000
## Development

There are three notable branches for this project.
- `old-staging` branch - hosts the code for the html site
- `staging` branch - deployed at staging.neurobridges.org
- `main` production branch - deployed at neurobridges.org

## Content Management

This site uses yaml files to store larger pieces of content for:
- team members
- participating institutions
- webinars

The yaml files are then queried using graphql using the `gatsby-transformer-yaml` gatsby plug-in. The hooks folder contains custom hooks that convert each of the graphql queries to an array of objects.
## Branding

- Fonts: Libre Franklin
- Colors: 
  - primary: #556270
  - secondary: #DC143C
- MUI components with theme and sx prop customization