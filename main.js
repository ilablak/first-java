function changeColor() {
    const square = document.getElementById('square')
    square.classList.remove('red')
    square.classList.add('blue')
}

const button = document.getElementById('button')
button.onclick = changeColor