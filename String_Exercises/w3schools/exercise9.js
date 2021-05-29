/**
 * Return the number of characters in a string:
 */

 var str = "Hello World!";
 console.log(str.length);

 /**
  * 
  * user defined method to calculate length of a string 
  */
 
 function length(str){
    let length = 0;

    while(str[length] !== undefined){
        length++;
    }

    return length;
 }
 console.log(length("Hello World!"));

 /**
  * 
  */

 var a;
 console.log(typeof a === "undefined")