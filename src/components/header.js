import React from "react"
import PropTypes from "prop-types"
import Link from "../components/link"
import Nav from "./nav"

/* styling comes from parent compnent as it differs between homepage & other pages */

const Header = ({ homeLink, menuLinks }) => (
	<header className="mainheader">
		<div className="mainheader__inner">
			<Link className="mainheader__mainlink" to="/">
				{homeLink}
			</Link>

			{menuLinks.length && <Nav menuLinks={menuLinks} />}
		</div>
	</header>
)

Header.propTypes = {
	homeLink: PropTypes.string.isRequired,
	menuLinks: PropTypes.array,
}

export default Header
