const num = Math.floor(Math.random()*10+1)

const guessNum = Number(prompt('What is your guess?'))

if(guessNum===num){
    alert('Correct')
}else if(guessNum<num){
alert('low')
}else{
    alert('high')
}