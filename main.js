function changeColor(event) {
    const button = event.target
    const color = button.attributes.color.value

    const square = document.getElementById('square')
    square.className = `square ${color}`
}

const blue_button = document.getElementById('blue_button')
blue_button.onclick = changeColor

const red_button = document.getElementById('red_button')
red_button.onclick = changeColor
