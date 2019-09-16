import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Nav = ({ menuLinks }) => (
	<nav className="sitenav">
		<ul className="sitenav__list">
			{menuLinks.map(link => (
				<li className="sitenav__item" key={link.name}>
					<Link
						className="sitenav__link"
						activeClassName="sitenav__link--active"
						to={link.link}
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	</nav>
)

Nav.propTypes = {
	menuLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Nav
