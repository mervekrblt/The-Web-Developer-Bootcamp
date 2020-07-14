function isEven(x){

    if(typeof(x) === 'number'){  

        if(x%2==0){
            console.log('even')
        }else{
            console.log('odd')
        }
    }else{
        console.log('enter only number')
    }
}