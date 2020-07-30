const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const reset = document.querySelector("#reset")
const number = document.querySelector("#addNum")
const playingNum = document.querySelector("#plyngnum")

let p1Score = 0
let p2Score = 0

let gameOver = false //should use let because this boolean will be changed
let winningScore = 5


p1.addEventListener("click", function addScore() {

    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) { // this statement means that p1 is winner, the code about changing color have to take part in here 
            scr1.classList.add('winner')
            gameOver = true // !!!!!!  this lie of code makes !gameOver is false so this code is stopped to add number. Also gameOver is same for p2, p2 is stopped to add number 
        }
        scr1.textContent = p1Score
    }



})

p2.addEventListener("click", function addScore() {

    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            scr2.classList.add('winner')
            gameOver = true
        }
    }
    scr2.textContent = p2Score
})


reset.addEventListener("click", function () {
    resett()
})

function resett(){
    scr1.textContent = 0
    scr2.textContent = 0
    p1Score = 0
    p2Score = 0
    scr1.classList.remove("winner")
    scr2.classList.remove("winner")
    gameOver = false
}

number.addEventListener("change", function(){ //new event change
    playingNum.textContent = Number (this.value)
    winningScore = Number(this.value)
    resett()
})