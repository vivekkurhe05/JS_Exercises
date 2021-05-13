/**
 * Check whether every element is even number
 */


/**
 * 
 * Traditional approach
 */
let numbers = [1,3,5];

let result1 = false;

for(let i=0; i<numbers.length; i++) {

    if(numbers[i]%2 == 0) {
        result1 = true;
        break;
    }
}
console.log(result1);

/**
 * 
 * New approach
 */

let result2 = numbers.every( function (e) {
    return e % 2 == 0;
});

console.log(result2);