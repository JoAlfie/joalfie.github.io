import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
	const mainElementClassName = mainClassName
		? `site__main ${mainClassName}`
		: `site__main`

	return (
		<div className="site">
			<Helmet>
				<title>{metaTitle}</title>
				<meta name="description" content={description} />
			</Helmet>
			<Header
				homeLink={site.siteMetadata.title}
				menuLinks={site.siteMetadata.menuLinks}
			/>
			<main className={mainElementClassName}>
				<Container>
					<h1>{title}</h1>
					{children}
				</Container>
			</main>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
	metaTitle: PropTypes.string.isRequired,
	metaDescription: PropTypes.string,
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
}

export default Layout
