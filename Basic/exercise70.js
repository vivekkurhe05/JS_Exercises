/**
 * Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
 */

function rotateLeft(arr) {
    while (arr.length > 0) {
        let firstElem = arr.shift();
        arr.push(firstElem);
        console.log(arr);
    }
}
rotateLeft([1, 2, 3,]);

// or

var arr = [1, 2, 3];

while (arr.length > 0) {
    let firstElem = arr.shift();
    arr.push(firstElem);
    console.log(arr);
}