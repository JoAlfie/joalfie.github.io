import React from "react"
import useDarkMode from "use-dark-mode"
import "../styles/themeswitch.less"

const ThemeSwitch = () => {
	const darkMode = useDarkMode(true)
	const handleTheme = theme =>
		theme === "dark" ? darkMode.enable() : darkMode.disable()
	const handleLightPress = () => handleTheme("light")
	const handleDarkPress = () => handleTheme("dark")

	return (
		<div className="themeswitch">
			<button
				className="themeswitch__button themeswitch__button--light"
				onClick={handleLightPress}
				aria-label="Switch to light mode"
			>
				☀
			</button>
			<button
				className="themeswitch__button themeswitch__button--dark"
				onClick={handleDarkPress}
				aria-label="Switch to dark mode"
			>
				☾
			</button>
		</div>
	)
}

export default ThemeSwitch
