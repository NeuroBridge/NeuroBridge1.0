import { graphql, useStaticQuery } from 'gatsby'

const publicationsQuery = graphql`{
  webinars: allWebinarsYaml(sort: {fields: date, order: DESC})  {
    nodes {
      title
      date
      displayDate
      description
      slides
    }
  }
  papers: allPapersYaml {
    nodes {
      title
      citation
      link
    }
  }
}`

export const usePublications = () => {
  const { webinars, papers } = useStaticQuery(publicationsQuery)
  return [ webinars.nodes, papers.nodes ]
}
