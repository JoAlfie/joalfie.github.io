import React from "react"
import renderer from "react-test-renderer"
import Layout from "../src/components/layout"

import * as Gatsby from "gatsby"
const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")

useStaticQuery.mockImplementation(() => ({
	site: {
		siteMetadata: {
			tite: `Site title`,
		},
	},
}))

describe("Layout", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<Layout>hello world</Layout>).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
