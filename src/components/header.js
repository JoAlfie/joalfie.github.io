import React from "react"
import PropTypes from "prop-types"
import Link from "../components/link"
import Nav from "./nav"

const Header = ({ homeLink, menuLinks }) => (
	<header className="mainheader">
		<header className="mainheader">
			<div className="mainheader__inner">
				<Link className="mainheader__mainlink" to="/">
					{homeLink}
				</Link>

				{menuLinks.length && <Nav menuLinks={menuLinks} />}
			</div>
		</header>
	</header>
)

Header.propTypes = {
	homeLink: PropTypes.string.isRequired,
	menuLinks: PropTypes.array,
}

export default Header
