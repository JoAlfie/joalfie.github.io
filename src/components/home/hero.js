import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../container"
import Header from "../header"
import "../../styles/hero.less"

const Hero = ({ data, heroTitle, heroText }) => {
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

	return (
		<div className="hero">
			<Container>
				<div className="hero__image">
					<Img fluid={data.file.childImageSharp.fluid} />
				</div>
				<div className="hero__text">
					<h1>{heroTitle}</h1>
					{heroText}
				</div>
			</Container>
			<Header
				homeLink={"JoAlfie"}
				menuLinks={site.siteMetadata.menuLinks}
			></Header>
		</div>
	)
}

export default Hero
