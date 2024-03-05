function changeColor(event) {
    const button = event.target
    const from_color = button.attributes.from_color.value
    const to_color = button.attributes.to_color.value

    const square = document.getElementById('square')
    square.classList.remove(from_color)
    square.classList.add(to_color)
}

const blue_button = document.getElementById('blue_button')
blue_button.onclick = changeColor

const red_button = document.getElementById('red_button')
red_button.onclick = changeColor
