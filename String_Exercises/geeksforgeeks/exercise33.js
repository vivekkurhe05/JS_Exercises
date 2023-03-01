/**
 * Replace all dots with space
 */

// my solution
let str = 'A.Computer.science.Portal';
let re = /\./g;
str = str.replace(re, " ");

console.log(str);

// or my solution
str = str.replaceAll('.', ' ')
console.log(str);

// or my solution
let index = str.indexOf('.', 0)

while(index != -1) {
    str = str.replace('.', ' ');
    index = str.indexOf('.', index+1);
}

console.log(str);