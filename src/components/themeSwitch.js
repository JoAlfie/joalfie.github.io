import React from "react"
import useDarkMode from "use-dark-mode"
import "../styles/themeswitch.less"

const ThemeSwitch = props => {
	const darkMode = useDarkMode(false)
	const handleTheme = theme =>
		theme === "dark" ? darkMode.enable() : darkMode.disable()
	const handleLightPress = () => handleTheme("light")
	const handleDarkPress = () => handleTheme("dark")

	return (
		<div className="themeswitch">
			<button
				className="themeswitch__button themeswitch__button--light"
				onClick={handleLightPress}
			>
				☀
			</button>
			<button
				className="themeswitch__button themeswitch__button--dark"
				onClick={handleDarkPress}
			>
				☾
			</button>
		</div>
	)
}

export default ThemeSwitch
