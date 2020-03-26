const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)

  const result = await graphql(`
  {
    pageshr: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown-pages/"}, frontmatter: {jezik: {eq: "hr"}}}, 
    sort: {order: DESC, fields: [frontmatter___date]}, 
    limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            jezik
          }
        }
      }
    }
    pagesde: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/markdown-pages/"}, frontmatter: {jezik: {eq: "de"}}}, 
      sort: {order: DESC, fields: [frontmatter___date]}, 
      limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            jezik
          }
        }
      }
    }
    pagesita: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown-pages/"}, frontmatter: {jezik: {eq: "ita"}}}, 
    sort: {order: DESC, fields: [frontmatter___date]}, 
    limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            jezik
          }
        }
      }
    }
  } 
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.pageshr.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/pageTemplateHr.js`),
      context: {}, // additional data can be passed via context
    })
  })
  result.data.pagesita.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/pageTemplateIta.js`),
      context: {}, // additional data can be passed via context
    })
  })

  result.data.pagesde.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/pageTemplateDe.js`),
      context: {}, // additional data can be passed via context
    })
  })
}