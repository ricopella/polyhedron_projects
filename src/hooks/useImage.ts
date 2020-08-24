import { graphql, useStaticQuery } from "gatsby"

const useImage = (fileName = '') => {
    const data = useStaticQuery(graphql `
    query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 780) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
  `)
    const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(fileName)
    })

    if (!image) return null;



    return image.node.childImageSharp.sizes || null;
}

export default useImage