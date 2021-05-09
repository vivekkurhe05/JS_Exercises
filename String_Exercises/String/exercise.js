/**
 * 
 * write a javascript function to reverse a string
 */

function reverse_string(str){

    let stack = [];
    for(var i=0; i<str.length; i++){
        stack.push(str[i]);
    }

    let reverseStr='';

    while(stack.length > 0){
        reverseStr += stack.pop();
    }
    return reverseStr;
}

console.log(reverse_string('JavaScript'));