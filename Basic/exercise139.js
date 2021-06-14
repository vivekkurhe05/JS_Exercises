/**
 * Write a JavaScript program to find the position of a rightmost round number in an array of integers. 
 * Returns 0 if there are no round number.
Note: A round number is informally considered to be an integer that ends with one or more zeros.
 */

// your solution

function find_rightmost_round_number(arr) {
    let rightmost_round_num = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 10 == 0) {
            rightmost_round_num = arr.lastIndexOf(arr[i]);
        }

    }
    return rightmost_round_num;
}
console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 30, 70, 80, 100]));
console.log(find_rightmost_round_number([1, 2, 3, 4, 5]));

/**
 * w3resource solution
 */

function find_rightmost_round_number(input_arr) {

    var result = 0;
    for (var i = 0; i < input_arr.length; i++) {
        if (input_arr[i] % 10 === 0) {
            result = i;
        }
    }

    return result;
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 30, 70, 80, 100]));
console.log(find_rightmost_round_number([1, 2, 3, 4, 5]));