module.exports = {
  siteMetadata: {
    title: `Ellipsis`,
    description: `Ellipsis ?
    A literary venture for students to live their passion
    Why Ellipsis ?
    Because thoughts may pause but never end ...`,
    author: `@yashguptaz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ellipsis`,
        short_name: `Ellipsis`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            ignoreFileExtensions: [],
            options: {
              maxWidth: 768,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
