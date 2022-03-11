import { graphql, useStaticQuery } from 'gatsby'

const institutionsQuery = graphql`{
  institutions: allInstitutionsYaml {
    nodes {
      name
      link
      image {
        id
        childImageSharp {
          gatsbyImageData(height: 150)
        }
      }
    }
  }
}`

export const useInstitutions = () => {
  const { institutions } = useStaticQuery(institutionsQuery)

  return institutions.nodes
}
