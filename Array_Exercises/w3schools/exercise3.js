/**
 * Copy the first two array elements to the last two array elements:
 */

 var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.copyWithin(2,0);
 console.log(fruits.copyWithin(2,0));

 /**
  * Copy the first two array elements to the third and fourth position:
  */

  var fruits_new = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

  console.log(fruits_new.copyWithin(2,0,2));