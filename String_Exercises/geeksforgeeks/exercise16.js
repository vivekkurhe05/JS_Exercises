/**
 * How to remove all Non-ASCII characters from the string using JavaScript ?
 */

function remove_nonascii_chars(str) {

    let re = /[^\x00-\x7F]+/g;
    return str.replace(re, "")
}

console.log(remove_nonascii_chars('Hidd©©©en??Ascii ©©®®®Charac££ter'));