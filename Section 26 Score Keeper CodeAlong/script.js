const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const input = document.querySelector('#input')
const p1 = document.querySelector('#p1')
const reset = document.querySelector('#reset')

let count = 0
let winnerScore = 5
let isGameOver = false

btn1.addEventListener('click', function () {
    if (!isGameOver) {
        count++
        if (count === winnerScore) {
            isGameOver = true
        }
        p1.innerHTML = count
    }
})

reset.addEventListener('click', function(){
    isGameOver = false
    count=0
    p1.innerHTML = 0
})