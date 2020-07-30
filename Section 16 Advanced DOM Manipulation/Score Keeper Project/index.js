const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const reset = document.querySelector("#reset")

let p1Score=0
let p2Score=0

let gameOver= false //should use let because this boolean will be changed
let winningScore =5


p1.addEventListener("click",function addScore(){

    if(!gameOver){
        p1Score++;
            if(p1Score === winningScore){
                gameOver = true  // !!!!!!  this lie of code makes !gameOver is false so this code is stopped to add number. Also gameOver is same for p2, p2 is stopped to add number 
            }
    scr1.textContent = p1Score
    }


    
})

p2.addEventListener("click",function addScore(){
    
    if(!gameOver){
        p2Score++;
            if(p2Score === winningScore){
                gameOver = true
            }
    }
    scr2.textContent = p2Score
})

