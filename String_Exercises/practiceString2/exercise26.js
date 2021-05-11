/**
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
 * Test Data :
 * console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
 * Output :
 * "The quick brown fox jumps over lazy dog"
 */

function remove_first_occurrence ( str, occurance ) {

    let str1 = str.substr(0, str.indexOf(occurance, 0));
    
    return str1 + str.substr(str.indexOf(occurance, 0)+occurance.length);
    
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));