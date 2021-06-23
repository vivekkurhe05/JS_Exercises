/**
 * Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.
 */

// your solution

function sum_Of_Cubes(num) {
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += (i*i*i);
    }
    return sum;
}
console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));

// or your solution

function sum_Of_Cubes(num) {
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum += Math.pow(i, 3);
    }
    return sum;
}
console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));