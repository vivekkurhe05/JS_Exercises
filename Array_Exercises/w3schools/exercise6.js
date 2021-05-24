/**
 * Return an array of all the values in the ages array that are 18 or over:
 */

 var ages = [32, 33, 16, 40];

 let over18 = ages.filter(function(age){
     return age >= 18;
 });

 console.log(over18);