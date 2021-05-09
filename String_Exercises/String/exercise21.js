/**
 * 
 * Write a JavaScript function to repeat a string a specified times. 
 * Test Data :
 * console.log(repeat_string('a', 4));
 * console.log(repeat_string('a'));
 * Output :
 * "aaaa"
 * "Error in string or count."
 */

function repeat_string(str, count){

    if(count == undefined) return 'Error in string or count';
    else return str.repeat(count);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));


//or

function repeat_string(str, count){

    if(count == undefined) return 'Error in string or count';
    else return new Array(count+1).join(str);
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));