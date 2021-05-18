/**
 * Write a JavaScript function to alphabetize a given string.
 * Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
 * Test Data :
 * console.log(alphabetize_string('United States'));
 * Output :
 * "SUadeeinsttt"
 */

function alphabetize_string(str) {
    return str.trim().split('').sort().join('').trim();

}

console.log(alphabetize_string('United States'));

//or

function alphabetize_string(str) {
    let chrCodeArr = [];

    for (let i = 0; i < str.length; i++) {
        chrCodeArr.push(str.charCodeAt(i));
        chrCodeArr.sort(function (a, b) {
            return a - b;
        })
    }

    return String.fromCharCode(...chrCodeArr).trim();


}

console.log(alphabetize_string('United States'));