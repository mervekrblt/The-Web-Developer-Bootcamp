const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const p1 = document.querySelector('#p1')
const p2= document.querySelector('#p2')
const resetButton = document.querySelector('#resetButton')
const input = document.querySelector('input[type=number]')

let count1 = 0
let count2 = 0
let winnerScore = 0
let isGameOver = false

//for player1

btn1.addEventListener('click',  () => {
    if (!isGameOver) {
        count1+=1
        if (count1 === winnerScore) {
            isGameOver = true
        }
        p1.innerHTML = count1
    }
})

//for player2
btn2.addEventListener('click', ()=>{
    if(!isGameOver){
        count2+=1
        if(count2===winnerScore){
            isGameOver= true
        }
        p2.innerHTML =count2
    }
})

const reset = () =>{
    isGameOver = false
    count=0
    p1.innerHTML = 0
    p2.innerHTML =0
    count1=0
    count2 = 0
}

resetButton.addEventListener('click', reset)

input.addEventListener('change', (e) =>{
console.log(e.target.valueAsNumber) // I found this propery from console

winnerScore = e.target.valueAsNumber
reset()// reset the all things
})