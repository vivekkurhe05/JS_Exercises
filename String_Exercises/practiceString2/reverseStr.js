/**
 * Reverse a string
 */


// #1

function reverseString (str) {
    let reverseStr = '';

    for(let i=0; i<str.length; i++) {
        let char = str[i];
        reverseStr = char + reverseStr;
    }

    return reverseStr;
}

console.log(reverseString('welcome'));

//or #2

function reverseString ( str ) {
    let stack = [];
    for(let i=0; i< str.length; i++) {
        stack.push(str[i]);
    }

    let reverseStr = '';

    while (stack.length > 0) {
        reverseStr = reverseStr + stack.pop();
    }

    return reverseStr;
}

console.log(reverseString('hello'));

//or #3

function reverseString (str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));