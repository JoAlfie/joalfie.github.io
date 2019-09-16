/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Jo Alfie",
		description:
			"I am a front-end turned full-stack developer based in Cardiff. I love learning new things, building cool stuff, and playing with swords.",
		menuLinks: [
			{ name: "Projects", link: "/projects/" },
			{ name: "Contact", link: "/contact/" },
		],
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
