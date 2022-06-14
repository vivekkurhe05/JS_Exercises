/**
 * Write a JavaScript function to get the first element of an array. Passing a parameter 'n' 
 * will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
 */

function first(arr, n) {

    if(arr == null) return void 0;
    
    if(typeof n == 'undefined') return arr[0];

    else if(n > 0){
        return arr.slice(0, n)
    }else{
        return []
    }
    

    
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));