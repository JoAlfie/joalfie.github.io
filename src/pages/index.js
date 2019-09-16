import React from "react"
import Layout from "../components/layout"
import Link from "../components/link"

export default () => (
	<Layout metaTitle="Jo Alfie Wimborne" title="Hi, I'm Jo Alfie Wimborne">
		<section>
			<h2>I am...</h2>
			<p>
				A front-end developer based in Cardiff. I dabble in full-stack dev work
				too: I love learning new things, building cool stuff, and can never turn
				down a challenge.
			</p>
			<p>
				I have a keen eye for detail and am passionate about creating products
				which work well for everyone, including fully responsive design and web
				accessibility as standard.
			</p>
			<p>
				Away from the computer I'm a swordswoman, sailor and adventuress
				extraordinaire.
			</p>
		</section>
		<section>
			<h2>I'm currently working on...</h2>
			<ul>
				<li>React Native apps</li>
				<li>Node.js + Prismic.io website</li>
				<li>Gatsby static sites</li>
			</ul>
		</section>
		<section>
			<h2>My skills include...</h2>
			<h3>Strong</h3>
			<ul>
				<li>Semantic HTML</li>
				<li>
					CSS (including <Link to="http://lesscss.org/">Less</Link> &{" "}
					<Link to="https://sass-lang.com/">Sass</Link>)
				</li>
				<li>
					<Link to="https://jquery.com/">JQuery</Link> (
					<Link to="http://youmightnotneedjquery.com/">
						but I'm trying to use it less!
					</Link>
					)
				</li>
				<li>Web accessibility</li>
				<li>Googling how to do stuff I don't know</li>
			</ul>
			<h3>Medium</h3>
			<ul>
				<li>
					<Link to="https://git-scm.com/">Git</Link> version control
				</li>
				<li>Vanilla javascript (including ES6)</li>
				<li>
					<Link to="https://gulpjs.com/">Gulp</Link>
				</li>
				<li>
					<Link to="https://facebook.github.io/react-native/">
						React Native
					</Link>
				</li>
				<li>
					<Link to="https://reactjs.org/">React</Link>
				</li>
				<li>
					<Link to="https://www.getsymphony.com/">Symphony CMS</Link>
				</li>
				<li>
					<Link to="https://www.gatsbyjs.org/">Gatsby</Link>
				</li>
				<li>
					<Link to="https://pugjs.org/api/getting-started.html">Pug</Link>
				</li>
				<li>Markdown</li>
			</ul>
			<h3>Getting there</h3>
			<ul>
				<li>
					<Link to="https://nodejs.org/en/">Node.js</Link> &{" "}
					<Link to="https://expressjs.com/">Express</Link>
				</li>
				<li>
					<Link to="https://en-gb.wordpress.org/">Wordpress</Link>
				</li>
			</ul>
		</section>
		<section>
			<h2>Next to learn...</h2>
			<ul>
				<li>Proper testing for javascript</li>
			</ul>
		</section>
	</Layout>
)
