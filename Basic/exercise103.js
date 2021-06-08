/**
 * Write a JavaScript program to find the maximum number from a given positive integer 
 * by deleting exactly one digit of the given number.
 */

// your solution

function maximum_number(num) {
    var str = num.toString();
    var val1 = str.substring(0, str.length - 1);
    var val2 = str.substring(1, str.length);
    return Math.max(val1, val2);
}
console.log(maximum_number(100));
console.log(maximum_number(1245));
console.log(maximum_number(5789));
console.log(maximum_number(10));

/**
 * w3resource solution
 */

function digit_delete(num) {
    var result = 0,
        num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    console.log(num_digits);
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                console.log("i=",index_num,"j=",i);
                n = n * 10 + num_digits[i];
                console.log(n)
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

// console.log(digit_delete(100));
// console.log(digit_delete(10));
console.log(digit_delete(1245));