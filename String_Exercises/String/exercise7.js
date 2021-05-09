/**
 * 
 * Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

function string_parameterize(str) {
    return str.trim().toLocaleLowerCase().replace(/ /g, '-');
}

console.log(string_parameterize(' Robin Singh from USA '));

//or

function string_parameterize(str){
    return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}

console.log(string_parameterize(' Robin Singh from USA. '));