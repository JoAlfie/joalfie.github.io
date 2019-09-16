import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Container from "./container"

const ListLink = props => (
	<li className="nav__item">
		<Link to={props.to}>{props.children}</Link>
	</li>
)

const Layout = ({ metaTitle, metaDescription, children }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
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
			<header>
				<Link to="/">{site.siteMetadata.title}</Link>
			</header>
			<main>{children}</main>
		</Container>
	)
}

Layout.propTypes = {
	metaTitle: PropTypes.string.isRequired,
	metaDescription: PropTypes.string,
	children: PropTypes.node,
}

export default Layout
