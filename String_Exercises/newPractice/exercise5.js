/**
 * Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
 */

function abbrev_name(str) {

    let arr = str.trim().split(" "); 
    return arr[0] + " " + arr[1].substr(0,1) + ".";
}

console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("Vivek Kurhe"));