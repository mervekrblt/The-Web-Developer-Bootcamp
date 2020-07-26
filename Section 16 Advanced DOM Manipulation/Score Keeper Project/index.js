const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const reset = document.querySelector("#reset")

let p1Score=0
let p2Score=0


p1.addEventListener("click",function addScore(){
    p1Score++;
    scr1.textContent = p1Score
})

p2.addEventListener("click",function addScore(){
    p2Score++;
    scr2.textContent = p2Score
})

