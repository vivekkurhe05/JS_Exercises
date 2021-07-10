/**
 * Write a JavaScript program which iterates the integers from 1 to 100. 
 * But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */

// your solution

let res = "";
for(let i=1; i<=100; i++) {
    if(i % 3 == 0) console.log(i+" Fizz");
    if(i % 5 == 0) console.log(i+" Buzz");
    if (i % 3 == 0 && i % 5 == 0) console.log(i+" FizzBuzz");
}