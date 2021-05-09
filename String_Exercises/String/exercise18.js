/**
 * 
 * Write a JavaScript function to count the occurrence of a substring in a string.
 * Test Data :
 * console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * 2
 * console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
 * Output :
 * 1
 */

// function count(str, subString){
//     var regex = new RegExp(subString, "g");
//     console.log(typeof regex);
//     return str.match(regex).length;
// }

// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));


//or

function count(str, substring){
    let count = 0;
    let index = str.indexOf(substring);

    while(index != -1){
        count ++;
        index = str.indexOf(substring,index+1);
    }

    return count;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));