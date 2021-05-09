/**
 * 
 * Write a JavaScript function to parameterize a string.
 * Test Data :
 * console.log(string_parameterize("Robin Singh from USA."));
 * "robin-singh-from-usa"
 */

function string_parameterize_1(str){
    let arr = str.trim().split(' ');
    return arr.map(function(val){
        return val.toLocaleLowerCase();
    }).join('-');
}

console.log(string_parameterize_1('Robin Singh from USA.'))

//or

function string_parameterize_2(str){
    return str.toLocaleLowerCase().replace(/[^a-zA-Z0-9 -]/,"").replace(/\s/g,'-');
}

console.log(string_parameterize_2('Robin Singh from USA.'));