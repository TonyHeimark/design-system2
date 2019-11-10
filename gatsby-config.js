module.exports = {
  siteMetadata: {
    title: `HomeFair`,
    description: `Vi anvender kunstig intelligens til å finne meglerne som sikrer deg høyeste markedspris for din bolig.`,
    author: `Tony Heimark`,
    robots: "no index",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
  ],
}
