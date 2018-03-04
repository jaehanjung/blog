const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')



exports.createPages = ({ graphql, boundActionCreators, page }) => {
  const { createPage } = boundActionCreators
  const createBlogPage = () => {
    return new Promise((resolve, reject) => {
      const blogPost = path.resolve('./src/templates/blog-post.js')
      resolve(
        graphql(
          `
            {
              allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                edges {
                  node {
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          // Create blog posts pages.
          const posts = result.data.allMarkdownRemark.edges;

          _.each(posts, (post, index) => {
            const previous = index === posts.length - 1 ? false : posts[index + 1].node;
            const next = index === 0 ? false : posts[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: blogPost,
              context: {
                slug: post.node.fields.slug,
                previous,
                next,
              },
            })
          })
        })
      )
    })
  }

  // create pagination page
  const createPaginationPage = (s) => {
    const blogPostList = path.resolve("./src/templates/BlogList.js");
    s.forEach((category) => {
      return new Promise((resolve, reject) => {
        resolve(
          graphql(
            `
      {
        allMarkdownRemark(filter: { frontmatter: { category : { eq : "${category}" }}} ){
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
              }
            }
          }
        }
      }
    `).then((result) => {
              if (result.errors) {
                console.log(result.errors)
                reject(result.errors)
              }
              const postLimit = 5;
              const current = 1;
              const edge = result.data.allMarkdownRemark.edges;
              const totalPost = edge.length;
              const totalPage = Math.ceil(totalPost / postLimit)
              const top3 = createTop3Post(category);
              for (let i = 0; i < totalPage; i++) {
                createPage({
                  path: `${category}/${i + 1}`,
                  component: blogPostList,
                  context: {
                    top3 : top3,
                    category: `${category}`,
                    skip: `${i * postLimit}`,
                    current: `${i + 1}`,
                    totalPage: `${totalPage}`,
                    postLimit: `${postLimit}`
                  }
                })
              }
            }))
      })
    })
  }

  // create category
  const createCategory = () => {
    return new Promise((resolve, reject) => {
      resolve(
        graphql(
          `
        {
          allMarkdownRemark{
            edges {
              node {
                frontmatter {
                  category
                }
              }
            }
          }
        }
      `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          // Create blog posts pages.
          const s = new Set();
          console.log(s);
          _.each(result.data.allMarkdownRemark.edges, edge => {
            s.add(edge.node.frontmatter.category)
          })
          createPaginationPage(s)
        })
      )
    })
  }
  const createTop3Post = (category) => {
    return new Promise((resolve, reject) => {
      resolve(
        graphql(
          `
        {
          allMarkdownRemark(filter: { frontmatter: { category : { eq : "${category}" }}}, sort: {fields:[frontmatter___date], order: DESC}, limit : 3  ){
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  category
                }
              }
            }
          }
        }
      `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          return result.data.allMarkdownRemark.edges
        })
      )
    })
  }
  // create search page
  const createSearchPage = () => {
    const blogSearch = path.resolve("./src/templates/SearchPage.js")

    createPage({
      path: '/SearchPage/',
      matchPath: '/SearchPage/:value',
      component: blogSearch
    });
  }

  createBlogPage();
  createCategory();
  createSearchPage();
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
