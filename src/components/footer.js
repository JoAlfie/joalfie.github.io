import React from "react"
import ThemeSwitch from "./themeSwitch"
import "../styles/footer.less"

const Footer = () => (
	<footer className="mainfooter">
		<ThemeSwitch />
		<span className="mainfooter__copyright">
			© {thisYear} Jo Alfie Wimborne
		</span>
	</footer>
)

const thisYear = new Date().getFullYear()

export default Footer
