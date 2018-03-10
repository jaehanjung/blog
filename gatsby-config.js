module.exports = {
  siteMetadata: {
    title: 'han.log',
    author: 'jaehan',
    description: '',
    siteUrl: 'https://han-log.netlify.com',
    menu: [{
      title: 'study',
      path: '',
      subMenu: [{
        title: "javascript",
        path: "/javascript/1",
        color: "red"
      }, {
        title: "html/css",
        path: "/html-css/1",
        color: "yellow"
      }, {
        title: "react",
        path: "/react/1",
        color: "green"
      }]
    }]
  },
  pathPrefix: '/myblog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-115498738-1`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/SearchPage/*`] },
    },
  ],
}
