/**
 * Write a JavaScript function to get the week start date.
 */

// w3resource solution

 function startOfWeek(date)
 {
   var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
 
   return new Date(date.setDate(diff));

 }

dt = new Date(2021,5,22); 

console.log(startOfWeek(dt).toString());