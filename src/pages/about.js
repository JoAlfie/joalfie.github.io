import React from "react"
import Layout from "../components/layout"
import Link from "../components/link"

export default () => (
	<Layout metaTitle="About | Jo Alfie Wimborne" title="About Me">
		<section className="about-section">
			<h2>Hi, I'm Jo Alfie Wimborne</h2>
			<p>
				I am a front-end turned full-stack developer based in Cardiff. I love
				learning new things, building cool stuff, and playing with swords.
			</p>
			<p>
				I studied Graphic Communication at the University of South Wales before
				moving into web development. In the past two years I have massively
				expanded my skillset from HTML/CSS/JQuery to now include CSS
				Preprocessing (Less/Sass), workflow tools (Gulp), version control (Git),
				vanilla javascript (inlcuding ES6), modern tools and frameworks such as
				React and Node.js, and mobile app development using React Native.
			</p>
			<p>
				Though I have studied and worked in various fields over the past five
				years, my consistent goal throughout has been to put in as much as I can
				to every experience and take every opportunity to learn. I am
				enthusiastic and creative with a keen attention to detail, and I enjoy
				sharing this with other people. I enjoy a challenge and a working
				experience which has something different every day, particularly with a
				strong team of colleagues which I can contribute to.
			</p>
			<p>
				Email me:{" "}
				<Link to={"mailto:jowimborne@gmail.com"}>jowimborne@gmail.com</Link>
			</p>
		</section>
	</Layout>
)
