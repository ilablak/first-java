function changeColor(color) {
    const square = document.getElementById('square')
    square.className = `square ${color}`
}

function colorChangeButtonOnClickHandler(event) {
    const color = event.target.dataset.color
    changeColor(color)
}

const buttons = document.querySelectorAll('[data-type=color_changing_button]')
for (const button of buttons) {
    button.onclick = colorChangeButtonOnClickHandler
}
