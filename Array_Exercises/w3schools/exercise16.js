/**
 * Search an array for the item "Apple":
 */

 var fruits = ["Banana", "Orange", "Apple", "Mango"];

 console.log(fruits.lastIndexOf("Apple"));

 var fruits_new = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
 console.log(fruits_new.lastIndexOf("Apple"));

 /**
  * Search an array for the item "Apple", starting the search at position 4:
  */

 console.log(fruits_new.lastIndexOf("Apple", 4))