/**
 * Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.
Test Data :
console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));
"1111000"
"78"
"170"
 */

// your solution

function dec_to_bho (num, conversion) {

    if(conversion === 'B') {
        return parseInt(num, 10).toString(2);
    }else if(conversion === 'H') {
        return parseInt(num, 10).toString(16);
    }else{
        return parseInt(num, 10).toString(8);
    }
}

console.log(dec_to_bho(120,'B'));
console.log(dec_to_bho(120,'H'));
console.log(dec_to_bho(120,'O'));