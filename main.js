function changeColor(event) {
    const button = event.target
    const color = button.dataset.color

    const square = document.getElementById('square')
    square.className = `square ${color}`
}

const buttons = document.getElementsByClassName('color_changing_button')
for (const button of buttons) {
    button.onclick = changeColor
}
