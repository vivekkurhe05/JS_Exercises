/**
 * Check if all elements is in the range
 */

let range = {
    min: 0,
    max: 10
}

let numbers = [0,1,3,5,10];

let isRange = numbers.every(function(e){
    return e >= this.min && e <= this.max;
}, range);

console.log(isRange);