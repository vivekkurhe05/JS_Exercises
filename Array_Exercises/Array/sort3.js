/**
 * sort the array of stings in descending order
 */

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

animals.sort( function (a, b) {
    if (a > b) return -1;
    if(a < b) return 1;
    return 0;
});

console.log(animals);