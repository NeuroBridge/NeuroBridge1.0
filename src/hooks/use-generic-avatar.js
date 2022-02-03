import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const avatarQuery = graphql`{
  file(absolutePath: {regex: "/generic-avatar.png/"}) {
    id
    childImageSharp {
      gatsbyImageData(width: 400)
    }
  }
}`

export const useGenericAvatar = () => {
  const { file } = useStaticQuery(avatarQuery)
  const genericAvatar = getImage(file)
  return genericAvatar
}
