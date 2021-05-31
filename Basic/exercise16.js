/**
 * Write a JavaScript program to compute the sum of the two given integers. 
 * If the two values are same, then returns triple their sum.
 */

function sumTriple(a, b) {
    if (a === b) {
        return (a + b) * 3;
    }
    return (a + b);
}

console.log(sum(10, 15));