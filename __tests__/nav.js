import React from "react"
import renderer from "react-test-renderer"
import Nav from "../src/components/nav"

describe("Nav", () => {
	it("renders correctly", () => {
		const menuLinks = [{ name: "test", link: "/test" }]
		const tree = renderer.create(<Nav menuLinks={menuLinks} />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
