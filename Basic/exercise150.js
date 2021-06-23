/**
 * Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.
 */

// your solution

function swap_adjacent_digits(num) {
    let temp = 0;
    let arr = num.toString().split("");

    if(num.toString().length % 2 != 0) return false;

    for(let i=0; i<arr.length; i++) {
        if(i % 2 == 0){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return Number(arr.join(""));
}
console.log(swap_adjacent_digits(15));
console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));