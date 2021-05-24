/**
 * Subtract the numbers in the array, starting from the beginning:
 */

 var numbers = [175, 50, 25];

 console.log(numbers.reduce((total, num) => {
     return total - num;
 }));


 /**
  * Round all the numbers in an array, and display the sum:
  */

 numbers = [15.5, 2.3, 1.1, 4.7];

 console.log(numbers.reduce(function(acc, curr){
    return acc += Math.round(curr);
 }, 0));