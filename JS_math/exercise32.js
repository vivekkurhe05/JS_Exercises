/**
 * Write a JavaScript function to calculate the percentage (%) of a number.
Test Data :
console.log(percentage(1000, 47.12));
471.2
 */

// your solution

function percentage (n1, n2) {
    return (n2/100 * n1).toFixed(1);
}

console.log(percentage(1000, 47.12));