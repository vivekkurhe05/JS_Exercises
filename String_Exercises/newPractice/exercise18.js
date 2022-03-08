/**
 * Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
 */

function count(str, occurrence, caseInsensitive) {

    let count = 0;

    if(typeof caseInsensitive == 'undefined') str = str.toLocaleLowerCase();
    
    let index = str.indexOf(occurrence, 0);

    while(index != -1) {
        count++;
        index = str.indexOf(occurrence, index+1);
    }

    return count;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));