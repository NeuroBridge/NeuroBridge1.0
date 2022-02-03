import { graphql, useStaticQuery } from 'gatsby'

const webinarsQuery = graphql`{
  webinars: allWebinarsYaml {
    nodes {
      title
      description
      slides
    }
  }
}`

export const useWebinars = () => {
  const { webinars } = useStaticQuery(webinarsQuery)

  return webinars.nodes
}
