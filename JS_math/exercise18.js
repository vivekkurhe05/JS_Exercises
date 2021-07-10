/**
 * Write a JavaScript function to calculate the product of values in an array.
Test Data :
console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));
Output :
6
-60000
6
 */

// your solution

function product (arr) {
    let product = 1;
    for(let i=0; i<arr.length; i++) {
        
        if(typeof arr[i] === 'number') {
            product *= arr[i];
        }
    }
    return product;
}

console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));