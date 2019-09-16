import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
	const project = data.markdownRemark

	return (
		<Layout
			metaTitle={`${project.frontmatter.title} | Projects | Jo Alfie Wimborne`}
			title={project.frontmatter.title}
		>
			<article dangerouslySetInnerHTML={{ __html: project.html }} />
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
			}
		}
	}
`
