/**
 * Write a JavaScript function to extract a specified number of characters from a string.
 * Test Data :
 * console.log(truncate_string("Robin Singh",4));
 * "Robi"
 */


// #1

function truncate_string (str, numOfChars) {

    if(numOfChars == undefined) return str;
    else return str.substr(str, numOfChars);
}

console.log(truncate_string("Robin Singh",4));

// or #2

function truncate_string (str, numOfChars) {

    if (str.constructor === String) return str.slice(0, numOfChars);
}

console.log(truncate_string("Robin Singh",4));

//or #3

function truncate_string (str, numOfChars) {
    let substr = '';

    if (typeof numOfChars == 'undefined') return str;

    for (let i=0; i<numOfChars; i++) {
        substr += str.charAt(i);
    }
    return substr;
}

console.log(truncate_string("Robin Singh", 4));

/**
 * 
 * check if a value is a string (3 logics)
 * 
 * 1. typeof str == 'string'
 * 2. Object.prototype.toString.call(str) == '[object String]'
 * 3. str.constructor == String
 */
