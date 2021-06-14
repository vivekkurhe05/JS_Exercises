/**
 * Write a JavaScript program to check whether all the digits in a given number are the same or not.
 */

// you can use the following approach if you want to return the number intact using different way.

function test_digits(num) {
    let rem = 0,
    x = 1;
    while (num > 0) {
        rem += x* (num % 10);
        num = Math.floor(num / 10);
        x *= 10;
    }

    return rem;
}
console.log(test_digits(1111));
console.log(test_digits(1234));


// your solution

function test_digits(num) {
    let rem = 0,
    a = num % 10;
    let bool = true;
    while(num > 0){
        rem = num % 10;
        num = Math.floor(num/10);
        if(a != rem) bool = false;
    }
    return bool;
}
console.log(test_digits(1111));
console.log(test_digits(1234));
console.log(test_digits(2221));
console.log(test_digits(2222222));