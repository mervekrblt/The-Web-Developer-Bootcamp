var numSquares =6
let colors = []
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")

init();

function init(){

    for(let i=0; i< modeButtons.length;i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected")

            this.textContent==="Easy" ? numSquares = 3: numSquares = 6;
            reset()
        })

        reset()
    }

    squares.forEach(function (i, j, ) {
        i.style.backgroundColor = colors[j] //i refers to individual squares and j refers to index of colors(numbers) you cannot write squares[i].style.backgroundColor = colors[i]
    
    
        //add click listeners to squares
        i.addEventListener('click', function () {
            //this refers to a square which I click and clickedColor says its rgb
            let clikcedColor = this.style.backgroundColor
            
            //compare clickcolor to pickedcolor
            if (clikcedColor === pickedColor) {
                message.textContent = "Correct"
                changeColors(pickedColor) //implemented
                h1.style.backgroundColor=pickedColor
                resetButton.textContent = "Play Again"
            } else {
                this.style.backgroundColor = "#232323" // fade out color code and this refers to squares
                message.textContent = "Try Again"
            }
        })
    })
}



function reset(){

    //generate all new colors
    colors = generateRandomColors(numSquares)
    // pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay
    colorDisplay.textContent = pickedColor

    message.textContent ="";
    resetButton.textContent ="New Colors"

    //change colors of squares
    for(let i=0; i<squares.length; i++) {
        
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display ="none"
        }
    }
    h1.style.backgroundColor = "steelblue"  // when click the button h1 color returns to normal
    
}

/*easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares =3;
    colors = generateRandomColors(numSquares)
    pickedColor =pickColor()
    colorDisplay.textContent = pickedColor
    colorDisplay.textContent = pickedColor

    for(let i=0; i< squares.length; i++){ // use squares.length instead of colors.length 
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display= "none"
        }
    }


    
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected")
    numSquares=6;
    colors = generateRandomColors(numSquares)
    pickedColor =pickColor()
    colorDisplay.textContent = pickedColor
    colorDisplay.textContent = pickedColor

    for(let i=0; i< squares.length; i++){ // use squares.length instead of colors.length 

        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display= "block"
    }

})
*/

resetButton.addEventListener("click", function(){
    reset();
    /*//generate all new colors
    colors = generateRandomColors(numSquares)
    // pick a new random color from array
    pickedColor = pickColor()
    //change colorDisplay
    colorDisplay.textContent = pickedColor

    message.textContent ="";
    this.textContent ="New Colors"

    //change colors of squares
    squares.forEach(function (i, j, ) {
        i.style.backgroundColor = colors[j]
    })
    h1.style.backgroundColor = "steelblue"  // when click the button h1 color returns to normal
    */
})


//colorDisplay.textContent = pickedColor




function changeColors(color){  // write this code first and implement this into if else statement
    squares.forEach( function(i){
        i.style.backgroundColor = color
    })
}

//pick one rgb array i.e. [15,456,85], it is called pickedColor
function pickColor(){
    let random = Math.floor(Math.random() * colors.length) // this code helps to generate number 1 to 6
    return colors[random] // and with this code you can use randomly array 1 to 6
}

//create square with colors
function generateRandomColors(num){ 
    //make an array
    let arr = [];
    
    //repeat num times
    for(var i=0; i< num; i++ ){ // DONT FORGET YOUR STUPIDNESS, I WROTE NUM.LENGTH AND I SPEND 1 HOUR TO FIX IT
    // get random color and push in arr
    arr.push(randomColor());
    
    }
    //return that array
    
    return arr ;
    }

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    
    
    return `rgb(${r}, ${g}, ${b})`;
}