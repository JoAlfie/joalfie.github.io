const pressed = []
const ducks = "ilikeducks"
console.log("Hey, do you like ducks?")
window.addEventListener("keyup", e => {
	pressed.push(e.key)
	pressed.splice(-ducks.length - 1, pressed.length - ducks.length)
	if (pressed.join("").includes(ducks)) {
		console.log(`
( quack ) 
v
>o)
(_>`)
	}
})
