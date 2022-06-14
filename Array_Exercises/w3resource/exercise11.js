/**
 * Write a JavaScript program to find the sum of squares of a numeric vector.
 */

// my solution

function sum_sq(arr) {

    let sum = 0;

    for(let i=0; i<arr.length; i++) {

        sum += Math.pow(arr[i], 2);
    }

    return sum;
}

console.log(sum_sq([0,1,2,3,4]));