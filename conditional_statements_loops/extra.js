/**
 * According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a 
cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, 
while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.

output:
1, 7, 10, 13, 19
 */

// it was my understanding earlier

function print_happy_numbers() {

    let count = 0, i=0;
    let isHappyNumber =  function (num) {
        let sum = 0;
        let square = num * num;
        while (square > 0) {
            sum += Math.floor(square % 10);
            square = Math.floor(square / 10);
        }
    
        return sum === 1 ? true : false;
    }
    
    while(i < Infinity) {
        if(isHappyNumber(i)) {
            count++;
            console.log(i)
        };
        if(count === 5) {
            break;
        };
        i++;
    }

}
print_happy_numbers();