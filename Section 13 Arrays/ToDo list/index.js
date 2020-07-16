
var todos = ["Buy a dog"];

var input = prompt("What would you like to do?");

while (input !== "quit"){

    if (input === "list") {

    console.log(todos);

}

    else if (input === "new") {

  var newtodo = prompt("Enter New Todo");

  todos.push(newtodo);

       }
       input = prompt("What would you like to do?");
}



console.log("Ok, You Quit The App!");   
