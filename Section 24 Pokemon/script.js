const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i = 1; i < 209; i++) {
    const container = document.querySelector('.container')
    const div = document.createElement('div')
    const span = document.createElement('span')

    span.innerText = `#${i}`

    const newImg = document.createElement('img')

    newImg.src = `${URL}${i}.png`

    div.appendChild(newImg)
    div.appendChild(span)
    container.appendChild(div)
}