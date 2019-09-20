import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Link from "../components/link"
import "../styles/projectlist.less"

const Project = ({ project }) => {
	return (
		<article className="project">
			<Link to={project.fields.slug} className="project__link">
				{project.frontmatter.listImage && (
					<Img
						fluid={project.frontmatter.listImage.childImageSharp.fluid}
						alt={project.frontmatter.listImageAlt}
						className="project__image"
					/>
				)}
				<h2 className="project__linktitle">{project.frontmatter.title}</h2>
				<p className="project__linktext">{project.excerpt}</p>
			</Link>
		</article>
	)
}

export default ({ data }) => {
	console.log(data)
	return (
		<Layout metaTitle="Projects | Jo Alfie Wimborne" title="Projects">
			<p>A selection of projects I've worked on:</p>
			<div className="projectlist">
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<Project key={node.id} project={node} />
				))}
			</div>
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
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
						featuredImageAlt
						listImage {
							childImageSharp {
								fluid(maxWidth: 350) {
									...GatsbyImageSharpFluid
								}
							}
						}
						listImageAlt
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
