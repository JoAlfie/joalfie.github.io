import React from "react"
import PropTypes from "prop-types"
import "../styles/techList.less"

const TechList = ({ wrapperClassName, techList }) => {
	const ulClassName = wrapperClassName
		? `projecttech ${wrapperClassName}`
		: "projecttech"
	if (techList)
		return (
			<ul className={ulClassName}>
				{techList.map(item => (
					<li key={item} className="projecttech__item">
						{item}
					</li>
				))}
			</ul>
		)
	else return null
}

TechList.propTypes = {
	wrapperClassName: PropTypes.string,
	techList: PropTypes.arrayOf(PropTypes.string),
}

export default TechList
