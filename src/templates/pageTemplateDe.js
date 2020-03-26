import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout-de"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  let headerPic = markdownRemark.frontmatter.previewSlika.childImageSharp.fluid.src
  return (
    <Layout title={frontmatter.title} headerImage={headerPic}>
<article className="article-text" dangerouslySetInnerHTML={{ __html: html }}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
   markdownRemark(frontmatter: {path: {eq: $path }}) {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            podnaslov
            previewSlika {
              childImageSharp {
                fluid(sizes: "960px") {
                  src
                }
              }
            }
          }
        }
      }    
`