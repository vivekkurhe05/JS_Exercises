/**
 * Write a JavaScript function to convert a string in abbreviated form.
 * Test Data :
 * console.log(abbrev_name("Robin Singh"));
 * "Robin S."
 */

function abbrev_name (str) {

    let split_names = str.trim().split(' ');
    if(split_names.length > 1) return split_names[0] + ' ' + split_names[1].charAt(0) + '.';
    else return split_names[0];
}

console.log(abbrev_name("Nisha Lad"));

//or


function abbrev_name (str) {
    let index = str.indexOf(' ', 0);

    return str.substring(0, str.indexOf(' ', 0)) + ' ' + str.charAt(index+1) + '.';
}

console.log(abbrev_name("Nisha Lad"));