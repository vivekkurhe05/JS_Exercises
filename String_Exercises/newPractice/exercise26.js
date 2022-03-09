/**
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. Go to the editor
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
 */

function remove_first_occurrence(str, occ) {

    let str1 = str.substr(0, str.indexOf(occ));
    let str2 = str.substr(str.indexOf(occ)+occ.length);
    return str1+str2;
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));