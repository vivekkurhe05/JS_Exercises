/**
 * Write a JavaScript program to find the number of even digits in a given integer.
 */

// your solution

function even_digits(num) {
    let arr = [];
    let count = 0;
    while(num > 0) {
        let quo = Math.floor(num / 10);
        let rem = Math.floor(num % 10);
        arr.unshift(rem);
        num = quo;
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0){
            count++;
        }
    }
    return count;
}
console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));