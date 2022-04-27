# NeuroBridge1.0
Deployed site: neurobridges.org

Rebuilt with React / GatsbyJS / Material UI
## Description

This website is intended to give information and access to the Neurobridge Portal Application. The site was built using GatsbyJS and Material UI and is deployed on Netlify. The site can be found at neurobridges.org


## Installation

- To run this website locally, clone the repo and install the dependencies (`npm i`)
- Spin up the development server on `localhost:8000` by running `npm start`.
- You will also be able to access the data coming through from contentful by navigating to `localhost:8000/__graphql` in your browser.
- When proposing changes, always verify the build process runs without error locally with `npm run build`. Serve the built application on port `localhost:9000` with `gatsby serve`.

## Development

There are three notable branches for this project.
- `old-staging` branch - hosts the code for the html site
- `staging` branch - deployed at staging.neurobridges.org
- `main` production branch - deployed at neurobridges.org

## Content Management

The content for this website is hosted inside the `content` folder in yaml format. This site uses yaml files to store larger pieces of content for:
- team members (`src/content/team/team.yaml`)
- participating institutions (`src/content/institutions/institutions.yaml`)
- webinars (`src/content/team/team.yaml`)

The yaml files are then queried with graphql and transformed via the functions defined in the `src/hooks` directory.
## Branding

- Fonts: Libre Franklin
- Colors: 
  - primary: #556270
  - secondary: #DC143C
- MUI components with theme and sx prop customization