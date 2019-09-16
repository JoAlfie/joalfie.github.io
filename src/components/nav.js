import React from "react"
import PropTypes from "prop-types"
import Link from "./link"

const Nav = ({ menuLinks }) => (
	<nav className="sitenav">
		<ul className="sitenav__list">
			{menuLinks.map(link => (
				<li className="sitenav__item" key={link.name}>
					<Link
						className="sitenav__link"
						activeClassName="sitenav__link--active"
						partiallyActive={true}
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
