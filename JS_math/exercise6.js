/**
 * Write a JavaScript function to find the highest value in an array.
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0
 */

// your solution

function max(arr) {
    let max = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i+1] > max){
            max = arr[i+1];
        }
    }
    return max;
}
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));

// or your solution

function max_num(arr) {
    let max = arr[0];
    arr.map(function(elem){
        max = Math.max(max, elem);
        return max;
    })  
    let nm2 = arr.filter(function(el){
        return max === el;
    })
    return nm2[0];
}
console.log(max_num([12,34,56,1]));
console.log(max_num([-12,-34,0,-56,-1]));

// or your solution

function max_num(arr) {
    let max = arr[0];
    for(let i=0; i<arr.length; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
}
console.log(max_num([12,34,56,1]));
console.log(max_num([-12,-34,0,-56,-1]));