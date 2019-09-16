import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/link"

export default ({ data }) => {
	const project = data.markdownRemark

	return (
		<Layout
			metaTitle={`${project.frontmatter.title} | Projects | Jo Alfie Wimborne`}
			title={project.frontmatter.title}
		>
			<article dangerouslySetInnerHTML={{ __html: project.html }} />
			<footer>
				{/* TODO: Style footer */}
				<Link to="/projects/">Back to projects</Link>
			</footer>
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
