import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Container from "./container"
import Nav from "./nav"
import styles from "../styles/layout.less"

const Layout = ({ metaTitle, metaDescription, title, children }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					menuLinks {
						name
						link
					}
				}
			}
		}
	`)

	const description = metaDescription
		? metaDescription
		: site.siteMetadata.description

	return (
		<Container>
			<Helmet>
				<title>{metaTitle}</title>
				<meta name="description" content={description} />
			</Helmet>
			<header className="mainheader">
				<Link className="mainheader__mainlink" to="/">
					{site.siteMetadata.title}
				</Link>

				{site.siteMetadata.menuLinks.length && (
					<Nav menuLinks={site.siteMetadata.menuLinks} />
				)}
			</header>
			<main>
				<h1>{title}</h1>
				{children}
			</main>
		</Container>
	)
}

Layout.propTypes = {
	metaTitle: PropTypes.string.isRequired,
	metaDescription: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
}

export default Layout
