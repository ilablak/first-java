function changeColor(from_color, to_color) {
    const square = document.getElementById('square')
    square.classList.remove(from_color)
    square.classList.add(to_color)
}

function changeColorToBlue() {
    changeColor('red', 'blue')
}

function changeColorToRed() {
    changeColor('blue', 'red')
}

const blue_button = document.getElementById('blue_button')
blue_button.onclick = changeColorToBlue

const red_button = document.getElementById('red_button')
red_button.onclick = changeColorToRed
