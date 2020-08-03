let colors = ["rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

let squares = document.querySelectorAll('.square')
const pickedColor = colors[3]
const colorDisplay = document.querySelector('#colorDisplay')
const message = document.querySelector('#message')

squares.forEach(function (i, j, ) {
    i.style.backgroundColor = colors[j] //i refers to individual squares and j refers to index of colors(numbers) you cannot write squares[i].style.backgroundColor = colors[i]


    //add click listeners to squares
    i.addEventListener('click', function () {
        //this refers to a square which I click and clickedColor says its rgb
        let clikcedColor = this.style.backgroundColor
        console.log(clikcedColor)

        //compare clickcolor to pickedcolor
        if (clikcedColor === pickedColor) {
            message.textContent = "Correct"
            changeColor(pickedColor) //implemented
        } else {
            this.style.backgroundColor = "#232323" // fade out color code and this refers to squares
            message.textContent = "Try Again"
        }
    })
})


function changeColor(color){  // write this code first and implement this into if else statement
    squares.forEach( function(i){
        i.style.backgroundColor = color
    })
}