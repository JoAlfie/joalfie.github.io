import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Container from "./container"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.less"

const Layout = ({
	metaTitle,
	metaDescription,
	mainClassName,
	title,
	children,
}) => {
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
		<>
			<Helmet>
				<title>{metaTitle}</title>
				<meta name="description" content={description} />
			</Helmet>
			<Header
				homeLink={site.siteMetadata.title}
				menuLinks={site.siteMetadata.menuLinks}
			/>
			<Container>
				<main className={mainClassName}>
					<h1>{title}</h1>
					{children}
				</main>
			</Container>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	metaTitle: PropTypes.string.isRequired,
	metaDescription: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
}

export default Layout
