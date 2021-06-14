/**
 * Write a JavaScript program to find whether the members of a given array of 
 * integers is a permutation of numbers from 1 to a given integer.
 */

// your solution

function is_permutation(arr, n) {
    let res1 = 1;
    let res2 = 1;
    for (let i = 0; i < arr.length; i++) {
        res1 *= arr[i];
    }
    for (let i = n; i > 1; i--) {
        res2 *= i;
    }
    return res1 == res2;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));


/**
 * w3resource solution
 */

function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) {
            return false;
        }

    }
    return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));