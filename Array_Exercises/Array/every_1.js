/**
 * Check if every element of the numbers array is greater than zero
 */

/**
 * Traditional way
 */

 let numbers = [1,3,5];
 let result1 = true;

 for (var i=0; i<numbers.length; i++) {

    if(numbers[i] <= 0) {
        result1 = false;
        break;
    }
 }

 console.log(result1);

/**
 * New way
 */

let result2 = numbers.every( function(e) {
    return e > 0;
})

console.log(result2);