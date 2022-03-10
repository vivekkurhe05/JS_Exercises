/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign. Go to the editor
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

function zeroFill(input, strlen, sign) {

    let str = input.toString();

    while(str.length < strlen) {
        str = "0" + str;
    }

    if(sign === '-'){
        str = "+" + str;
    }
    return str;
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));