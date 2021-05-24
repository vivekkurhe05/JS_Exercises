/**
 * Get the value of the first element in the array that has a value of 18 or more:
 */

 var ages = [3, 10, 18, 20];

 let etorgt18 = ages.find(function(elem){
     return elem >= 18;
 })

 console.log(etorgt18);