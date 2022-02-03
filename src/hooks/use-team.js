import { graphql, useStaticQuery } from 'gatsby'

const teamQuery = graphql`{
  team: allTeamYaml {
    nodes {
      name
      bio
      photo {
        id
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
  }
}`

export const useTeam = () => {
  const { team } = useStaticQuery(teamQuery)

  return team.nodes
}
