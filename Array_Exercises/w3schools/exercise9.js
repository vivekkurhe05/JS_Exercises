/**
 * List each item in the array:
 */

var fruits = ["apple", "orange", "cherry"];

fruits.forEach(function (elem, index) {
    console.log(index + ":" + elem);
})

/**
 * Get the sum of all the values in the array:
 */

let sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(function (elem) {
    sum += elem;
})

console.log(sum);

/**
 * update the value with 10 times the original value:
 */

numbers.forEach(function(elem){
    elem = elem * 10;
    console.log(elem);
})