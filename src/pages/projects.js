import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Link from "../components/link"

const Project = ({ project }) => (
	<article>
		<Link to={project.fields.slug}>
			<h2>{project.frontmatter.title}</h2>
			<p>{project.excerpt}</p>
		</Link>
	</article>
)

export default ({ data }) => {
	console.log(data)
	return (
		<Layout metaTitle="Projects | Jo Alfie Wimborne" title="Projects">
			<p>A selection of projects I've worked on:</p>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Project key={node.id} project={node} />
			))}
		</Layout>
	)
}

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
