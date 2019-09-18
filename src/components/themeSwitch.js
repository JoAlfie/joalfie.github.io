import React from "react"
import useDarkMode from "use-dark-mode"

const ThemeSwitch = props => {
	const darkMode = useDarkMode(false)
	const handleTheme = theme =>
		theme === "dark" ? darkMode.enable() : darkMode.disable()
	const handleLightPress = () => handleTheme("light")
	const handleDarkPress = () => handleTheme("dark")

	return (
		<div className="themeswitch">
			<button onClick={handleLightPress}>☀</button>
			<button onClick={handleDarkPress}>☾</button>
		</div>
	)
}

export default ThemeSwitch
