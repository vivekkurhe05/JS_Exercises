/**
 * Write a JavaScript program to reverse the elements of a given array of integers length 3.
 */

function reverse_arr(arr) {
    let rev = [];
    while (arr.length > 0) {
        let e = arr.pop();
        rev.push(e);
    }
    return rev;
}
console.log(reverse_arr([1, 2, 3]));

//or

function reverse_arr(arr) {
    return arr.reverse();
}
console.log(reverse_arr([1, 2, 3]));