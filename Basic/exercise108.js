/**
 * Write a JavaScript program to create the dot products of two given 3D vectors.
Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
 */

// your solution

function dot_product(arr1, arr2) {
    let sum = 0;
    for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
        sum += arr1[i] * arr2[j];
    }
    return sum;
}
console.log(dot_product([1, 2, 3], [1, 2, 3]));
console.log(dot_product([2, 4, 6], [2, 4, 6]));
console.log(dot_product([1, 1, 1], [0, 1, -1]));

/**
 * w3resource solution
 */

function dot_product(vector1, vector2) {
    var result = 0;
    for (var i = 0; i < 3; i++) {
        result += vector1[i] * vector2[i];
    }
    return result;
}
console.log(dot_product([1, 2, 3], [1, 2, 3]))