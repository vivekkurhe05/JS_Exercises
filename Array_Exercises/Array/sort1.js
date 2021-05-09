/**
 * Sort the array of numbers in ascending order
 */

let numbers = [10,30,0,2,20,1,3];

numbers.sort(function (a,b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(numbers);

//or

numbers.sort( function (a, b) {
    return a - b;
});

console.log(numbers);