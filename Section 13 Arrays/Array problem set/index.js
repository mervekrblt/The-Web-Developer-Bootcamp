// printReverse

function printReverse(arr){
    
    for(let i=arr.length-1; i>=0; i--)
    console.log(arr[i])
}

printReverse([1, 2 , 5])

function isUniform(arr){
    arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[0]===arr[i]){
            console.log('true') 
        }else{
            console.log('false')
        }
    }
}

isUniform([1,1,1])

function sumArray(arr){
    let total = 0
    arr.forEach(function(element) {
        total+= element
        
    });
    return total
}

sumArray([1,5,7,10])