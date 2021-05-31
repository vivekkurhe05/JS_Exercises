/**
 * Write a JavaScript program to create a new string from a given string changing 
 * the position of first and last characters. The string length must be greater than or equal to 1.
 */

function swap_char(str) {
    let arr = [];
    if (str.length >= 1) {
        arr = str.split("");
        let firstchar = arr.shift();
        let lastchar = arr.pop();
        arr.push(firstchar);
        arr.unshift(lastchar);
        return arr.join("");
    }
    return "The string length must be greater than or equal to 1"
}
console.log(swap_char('swift'));
console.log(swap_char('h'));
console.log(swap_char('ph'));
console.log(swap_char(''));

/**
 * or
 */

function first_last(str1) {
    if (str1.length <= 1) {
        return str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));