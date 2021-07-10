/**
 * Write a JavaScript function to get the highest number from three different numbers.
Test Data :
console.log(highest_of_three(-5, 4, 2));
4
 */

// your solution

function highest_of_three () {
    let max = arguments[0];

    for(let i=0; i<arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(highest_of_three(-5, 4, 2));