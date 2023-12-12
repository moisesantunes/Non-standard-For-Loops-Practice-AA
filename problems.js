function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    return arr.filter((item)=>item%2==0)
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let lisRev= arr.filter((item)=>item%2==0)
    return lisRev.sort((a,b)=>b-a)
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let array = [];
  
    for(let i=0;i<arr.length;i++) {
    
        if(arr[2**i]) {
            array.push(arr[2**i]);
        }
    
    }
    return array;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let array = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[n**i]) {
            array.push(arr[n**i]);
        }
    
    }
    return array;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let priMet= Math.ceil(arr.length/2)
    let lista_p=[]
    for(let i=0;i<priMet;i++){
        lista_p.push(arr[i]) 
    }
    return lista_p
    
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let segMet= Math.ceil(arr.length/2)
    let lista_s=[]
  
    for(let i=arr.length-1;i>=segMet;i--){
        lista_s.push(arr[i])
    }
   
    return lista_s.sort((a,b)=>a-b)
    
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}