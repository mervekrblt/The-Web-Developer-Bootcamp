let todos = []

let input = prompt('What would you like to do?')

while(input !== 'quit'){
    
    if(input==='list'){
      todos.forEach(function(todo, b){
        console.log(`${b} : ${todo}`)
      })
}else if(input==='new'){

let  newtodo = prompt('Add new to do')
todos.push(newtodo)
} else if(input === 'delete'){
  let input = prompt('Enter index of todo to delete?')
  todos.splice(index,1)
}



  input = prompt('What would you like to do?')
}

console.log('you quit')