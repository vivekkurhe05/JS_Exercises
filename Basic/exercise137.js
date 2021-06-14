/**
 * Write a JavaScript program to test whether a given integer is greater 
 * than 15 return the given number, otherwise return 15.
 */

// your solution

 function test_fifteen(num) {
    if(parseInt(num) < 15) return 15;
    else return num;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));

/**
 * 
 * w3resource solution
 */
function test_fifteen(num) {
    while(num<15){
        num++
    }
    return num;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));