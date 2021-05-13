/**
 * w3schools
 * Check if all the values in the ages array are 18 or over:
 */

 var ages = [32, 33, 16, 40];

 let checkAdult = ages.every( function (e) {
    return e >= 18;
 });

 console.log(checkAdult);