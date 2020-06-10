const age = Number(prompt('How old are you?'))

if (age < 0) {
    const newLocal = 'Age shouldnt be negative'
    alert(newLocal)
}

else if(age===21){
    const newLocal = 'Happy 21st birthday'
    alert(newLocal)
}

else if(age % 2 !== 0){
    const newLocal = 'Your age is odd'
    alert(newLocal)
}

else {
    const newLocal = `You are ${age} years old`
    alert(newLocal)
}