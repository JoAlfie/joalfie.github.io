import React from "react"
import renderer from "react-test-renderer"
import Layout from "../src/components/layout"

import * as Gatsby from "gatsby"
const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

useStaticQuery.mockImplementation(() => ({
	site: {
		siteMetadata: {
			tite: `Site title`,
			description: `Site meta description`,
			menuLinks: [],
		},
	},
}))

describe("Layout", () => {
	it("renders correctly without set description", () => {
		const site = {
			siteMetadata: {
				title: `Site title`,
				description: `Site meta description`,
				menuLinks: [],
			},
		}
		const tree = renderer
			.create(
				<Layout site={site} metaTitle="Hello world">
					hello world
				</Layout>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})

describe("Layout", () => {
	it("renders correctly with set description", () => {
		const site = {
			siteMetadata: {
				title: `Site title`,
				description: `Site meta description`,
				menuLinks: [],
			},
		}
		const tree = renderer
			.create(
				<Layout
					site={site}
					metaTitle="Hello world"
					metaDescription="Set meta description"
				>
					hello world
				</Layout>
			)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})
})
