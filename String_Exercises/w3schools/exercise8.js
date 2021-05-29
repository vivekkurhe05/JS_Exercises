/**
 * Search a string for the last occurrence of "planet":
 */

 var str = "Hello planet earth, you are a great planet";
 var lastIndex = str.lastIndexOf("planet");
 console.log(lastIndex);

 /**
  * Search a string for the last occurrence of "planet", starting the search at position 20:
  */

 var res2 = str.lastIndexOf("planet", 20);
 console.log(res2);