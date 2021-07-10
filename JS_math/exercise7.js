/**
 * Write a JavaScript function to find the lowest value in an array.
Test Data :
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
1
-56
 */

// your solution

function min(arr) {
    let min = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(arr[i+1] < min) {
            min = arr[i+1];
        }
    }
    return min;
}
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));

// or your solution

function min(arr) {
    let min = arr[0];

    arr.map(function(el){
        min = Math.min(min, el);
        return min;
    });

    let num = arr.filter(function(el){
        return min === el;
    })

    return num[0];
}
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));

// or your solution

function min(arr) {
    let min = arr[0];

    for(let i=0; i<arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
    return min;
}
console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));