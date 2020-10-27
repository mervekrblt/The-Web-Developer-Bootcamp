//Create random numbers between 0-255

const btn = document.querySelector('button')
const p = document.querySelector('p')

const changeColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor

    p.innerText= `Rgb code of the color ${newColor}`
}

btn.addEventListener('click', changeColor)