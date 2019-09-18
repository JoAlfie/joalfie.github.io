import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/home/hero"

const heroText = (
	<>
		<p>developer. creative. swordswoman. sailor.</p>
	</>
)

export default ({ data }) => (
	<>
		<Hero data={data} heroTitle="Hi, I'm Jo Alfie" heroText={heroText} />
	</>
)

export const query = graphql`
	query {
		file(relativePath: { eq: "me-01.png" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`
