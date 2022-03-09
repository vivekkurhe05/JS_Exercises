/**
 * Write a JavaScript function to alphabetize a given string. Go to the editor
Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"
 */

function alphabetize_string(str) {

    return str.trim().split("").sort().join("").trim();
}

console.log(alphabetize_string('United States'));