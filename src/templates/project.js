import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Link from "../components/link"
import "../styles/projectdetail.less"

export default ({ data }) => {
	const project = data.markdownRemark

	return (
		<Layout
			metaTitle={`${project.frontmatter.title} | Projects | Jo Alfie Wimborne`}
			title={project.frontmatter.title}
			mainClassName="projectdetail"
		>
			{project.frontmatter.featuredImage && (
				<Img
					fluid={project.frontmatter.featuredImage.childImageSharp.fluid}
					alt={project.frontmatter.featuredImageAlt}
					className="projectdetail__heroimage"
				/>
			)}

			<div
				className="projectdetail__copy"
				dangerouslySetInnerHTML={{ __html: project.html }}
			/>

			<footer>
				{/* TODO: Style footer */}
				<Link to="/projects/">← Back to projects</Link>
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
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
				featuredImageAlt
				tech
			}
		}
	}
`
