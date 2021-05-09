/**
 * Write a JavaScript function that can pad (left, right) a string to get to a determined length.
 * Test Data :
 * console.log(formatted_string('0000',123,'l'));
 * console.log(formatted_string('00000000',123,''));
 * Output :
 * "0123"
 * "12300000"
 */

function formatted_string (pad, usr_str, pad_pos) {

    if(pad_pos == 'l') return (pad+usr_str).slice(-pad.length);
    else return (usr_str+pad).substring(0, pad.length);
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));