/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Jo Alfie Wimborne",
	},
	plugins: [
		`gatsby-plugin-less`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-html-attributes`,
			options: {
				lang: `en`,
			},
		},
	],
}
