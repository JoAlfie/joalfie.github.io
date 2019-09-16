import React from "react"
import renderer from "react-test-renderer"
import Link from "../src/components/link"

describe("Link", () => {
	it("renders Gatsby internal link correctly", () => {
		const tree = renderer.create(
			<Link
				to="/test"
				activeClassName="activeclass"
				partiallyActive="partiallyactive"
			>
				Gatsby link
			</Link>
		)
		expect(tree).toMatchSnapshot()
	})
})

describe("Link", () => {
	it("renders external link correctly", () => {
		const tree = renderer.create(
			<Link to="https://google.com">Google link</Link>
		)
		expect(tree).toMatchSnapshot()
	})
})
