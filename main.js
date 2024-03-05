function changeColorToBlue() {
    const square = document.getElementById('square')
    square.classList.remove('red')
    square.classList.add('blue')
}

const blue_button = document.getElementById('blue_button')
blue_button.onclick = changeColorToBlue

function changeColorToRed() {
    const square = document.getElementById('square')
    square.classList.remove('blue')
    square.classList.add('red')
}

const red_button = document.getElementById('red_button')
red_button.onclick = changeColorToRed
