module.exports = {
  siteMetadata: {
    title: 'Loafie Formes: The Lophiiformes Forms Friends',
    author: 'Fancy Guppies',
    description:
      'A game developed under 48 hours at the Global Game Jam 2019 - STL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
