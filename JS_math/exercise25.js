/**
 * Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).
Test Data :
n1 = '$40.24', n2 = '$21.57';
 */

let n1 = '$40.24';
let n2 = '$21.57';
var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) + parseFloat(n2.replace(regp, '')));
console.log(parseFloat(n1.replace(regp, '')) - parseFloat(n2.replace(regp, '')));
console.log(parseFloat(n1.replace(regp, '')) * parseFloat(n2.replace(regp, '')));
console.log(parseFloat(n1.replace(regp, '')) / parseFloat(n2.replace(regp, '')));