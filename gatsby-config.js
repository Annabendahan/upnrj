/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `UPNRJ`,
    description: `Pascal Neyrat, praticien magnétiseur`,

    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ['Dancing Script', 'Open Sans']
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pascal Neyrat`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-upnrj.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};