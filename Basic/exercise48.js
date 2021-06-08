/**
Write a JavaScript program to reverse a given string.
 */

function reverse(str) {
    let revstr = "";
    for (let i = 0; i < str.length; i++) {
        revstr = str[i] + revstr;
    }
    return revstr;
}
console.log(reverse('welcome'));

// or

function reverse(str) {

    return str.trim().split("").reverse().join("");
}
console.log(reverse('welcome'));

//or

function reverse(str) {

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let rev = "";
    while (stack.length > 0) {
        rev += stack.pop();
    }
    return rev;
}
console.log(reverse('welcome'));
