let colors = generateRandomColors(6)

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');


colorDisplay.textContent = pickedColor

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
        } else {
            this.style.backgroundColor = "#232323" // fade out color code and this refers to squares
            message.textContent = "Try Again"
        }
    })
})


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