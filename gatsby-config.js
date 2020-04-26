module.exports = {
  siteMetadata: {
    title: `The funny title of my blog`,
    author: 'Kafil Nasdami',
    description: `The personal website of Kafil Nasdami`,
    author: `@kafiil`,
    socials: [
      { name: 'github', url: 'https://github.com/kafiil' },
      { name: 'twitter', url: 'https://twitter.com/Kaaafiiil' },
      { name: 'linkedin', url: 'https://linkedin.com/in/nkafil/' },
      // { name: 'blog', url: 'https://kafil.xyz' },
      { name: 'mail', url: 'mailto:kafil.nasdami@gmail.com' },
    ],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kafil's home`,
        short_name: `Stories and blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
