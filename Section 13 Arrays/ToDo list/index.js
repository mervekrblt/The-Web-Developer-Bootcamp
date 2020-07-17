let todos = []

let input = prompt('What would you like to do?')

while(input !== 'quit'){
    
    if(input==='list'){
    console.log(todos)
}else if(input==='new'){

let  newtodo = prompt('Add new to do')
todos.push(newtodo)
}
  input = prompt('What would you like to do?')
}

console.log('you quit')