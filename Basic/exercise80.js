/**
 * Write a JavaScript program to swap the first and last 
 * elements of a given array of integers. The array length should be at least 1.
 */

function swap_first_last(arr) {

    if (arr.length >= 1) {
        let first_elem = arr.shift();
        let last_elem = arr.pop();
        arr.push(first_elem);
        arr.unshift(last_elem);
        return arr;
    }

}
console.log(swap_first_last([1, 2, 3, 4]));
console.log(swap_first_last([1,2]));
console.log(swap_first_last([1]));
console.log(swap_first_last([]));

// or

function swap_first_last(arr) {

    if (arr.length >= 1) {
        let temp = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = temp;
    }
    return arr;
}
console.log(swap_first_last([1, 2, 3, 4]));
console.log(swap_first_last([1,2]));
console.log(swap_first_last([1]));
console.log(swap_first_last([4,7,2,1,3]));