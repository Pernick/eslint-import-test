module.exports = {
  siteMetadata: {
    title: `Page Title`,
    description: `Page Description`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        extensions: ['ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
