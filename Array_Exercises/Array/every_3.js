/**
 * Check if all the elements are odd numbers
 */

let numbers = [1,3,5];

/**
 * Traditional approach
 */
let result1 = false;
for(let  i=0; i<numbers.length; i++) {
    if(numbers[i]%2 == 1) {
        result1 = true;
        break;
    }
}
console.log(result1);

/**
 * New approach
 */

let result2 = numbers.every(function(e){
    return e % 2 == 1;
});

console.log(result2);