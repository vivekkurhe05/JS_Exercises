/**
 * Write a JavaScript program to compute the sum and product of an array of integers.
 */

var array = [1, 2, 3, 4, 5, 6];
let sum = 0, p=1;

for(let i=0; i<array.length; i++) {

    sum += array[i];
    p *= array[i];
}

console.log("Sum is ",sum);
console.log("Product is ",p);