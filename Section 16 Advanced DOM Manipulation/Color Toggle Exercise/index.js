const butn = document.querySelector(".btn")
isPurple = false

butn.addEventListener("click", changeColor)

function changeColor(){
    // console.log(e)
    // this.style.background ="black"
    // if(isPurple){
    //     document.body.style.background="white"
    // }else{
    //     document.body.style.background="pink"
    // }
    // isPurple = !isPurple
    

    document.body.classList.toggle("purple")
}