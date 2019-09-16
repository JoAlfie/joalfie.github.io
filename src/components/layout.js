import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import Container from "./container"

const ListLink = props => (
	<li className="nav__item">
		<Link to={props.to}>{props.children}</Link>
	</li>
)

const Layout = ({ children }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<Container>
			<header>
				<Link to="/">{site.siteMetadata.title}</Link>
			</header>
			<main>{children}</main>
		</Container>
	)
}

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout
